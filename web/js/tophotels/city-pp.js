$(function () {
    var $selectCity = $('#city-suggest').selectize({
        render: {
            option: function (data, escape) {
                return '<div class="user-form">' + data.text + '</div>'
            }
        },
        searchField: ["value"],
        onType: function (str) {
            //here load logic
            selectizeCity.clearOptions();

            if (str !== "" && "1234".startsWith(str.toLowerCase())) {
                selectizeCity.addOption({
                    value: "1234",
                    text: "Москва, Россия"
                });
            }


            selectizeCity.refreshOptions();
        },

        onDelete: function () {
            selectizeCity.clearOptions();
        }

    });
    var selectizeCity = $selectCity[0].selectize;
});