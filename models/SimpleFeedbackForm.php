<?php

namespace app\models;

use Yii;
use yii\base\Model;

/**
 * ContactForm is the model behind the contact form.
 */
class SimpleFeedbackForm extends Model
{
    public $name;
    public $mail;
    public $country;
    public $detailInfo;
    public $phone;

    /**
     * @return array
     */
    public function rules()
    {
        return [
            [['name', 'mail', 'country', 'detailInfo', 'phone'], 'required'],
            ['mail', 'email']
        ];
    }

    /**
     * Отправляет почту по указанному адресу 
     * @param string $email адрес
     * @return bool статус валидации
     */ 
    public function sendNewAppMail($email = "denis23031987@yandex.ru",$appNumber = null)
    {
        $subject = "Добавлена новая заявка";
        $body = "Добавлена новая заявка №$appNumber";
        if ($this->validate()) {
            Yii::$app->mailer->compose()
            ->setTo($email)
            ->setFrom(['denis23031987@yandex.ru' => "admin"])
            ->setSubject($subject)
            ->setTextBody($body)
            ->send();
            return true;
        }
        return false;
    }

    public function addApplication($appNumber = null)
    {
        $posts = Yii::$app->db
            ->createCommand("   INSERT INTO applications (appNumber,name,mail,phone,detailInfo) 
                                VALUES ('$appNumber','$this->name','$this->mail','$this->phone','$this->detailInfo');")
            ->queryAll();
    }

    function GUID()
    {
        if (function_exists('com_create_guid') === true)
        {
            return trim(com_create_guid(), '{}');
        }

        return sprintf('%04X%04X-%04X-%04X-%04X-%04X%04X%04X', mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(16384, 20479), mt_rand(32768, 49151), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535));
    }
}
