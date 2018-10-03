jQuery(document).ready(function($){
    $('#SubsTapeMsg').click(function () {
        line($(this));
        _hashState('#SubsTapeMsg');
        $('#SubsTapeMsgPanel').show();
        $('#MySubsHotelsPanel').hide();
        $('#MyAddHotelsPanel').hide();
        $('#MySubsStatPanel').hide();
    });
    $('#MySubsHotels').click(function () {
        line($(this));
        _hashState('#MySubsHotels');
        $('#SubsTapeMsgPanel').hide();
        $('#MySubsHotelsPanel').show();
        $('#MyAddHotelsPanel').hide();
        $('#MySubsStatPanel').hide();
    });
    $('#MyAddHotels').click(function () {
        line($(this));
        _hashState('#MyAddHotels');
        $('#SubsTapeMsgPanel').hide();
        $('#MySubsHotelsPanel').hide();
        $('#MyAddHotelsPanel').show();
        $('#MySubsStatPanel').hide();
    });
    $('#MySubsStat').click(function () {
        line($(this));
        _hashState('#MySubsStat');
        $('#SubsTapeMsgPanel').hide();
        $('#MySubsHotelsPanel').hide();
        $('#MyAddHotelsPanel').hide();
        $('#MySubsStatPanel').show();
    });


    $('#jsAddHotel').on('click', function () {
       $(this).closest('.section').find('.find-hotel__block').show();
       $(this).closest('.section').find('.hotel-msg__rbt').show();
       $(this).closest('.section').find('.find-hotel__btn-block').show();
    });

});
