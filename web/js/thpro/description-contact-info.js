$(document).on('click', '.add-block-link', function (e) {
    e.preventDefault();
    var tmpl = '<div class="edit-block__inp-block mt10"><input type="text" class="edit-block__inp" value=""><div class="add-block"><a href="#" class="add-block-link"> <i class="fa fa-plus " aria-hidden="true"></i> </a></div> </div>';

    $(this).closest('.edit-block__inp-block').after(tmpl);
    $(this).closest('.add-block').remove();
});