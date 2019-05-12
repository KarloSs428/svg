$(function () {
    $('.objekt').attr({ 'style': 'fill:rgba(255,0,0,0);' });

    $('#upgrade1').hide();
    $('#upgrade2').hide();
    $('#upgrade3').hide();
    $('#upgdr').hide();

    $('.objekt').on('mouseenter', function () {
        $(this).attr({ 'style': 'fill:rgba(0,255,0,0.15);stroke:rgba(0,255,0,0.15)' });
        $('#text h2').text($(this).data('nazev'));
        $('#text h4').text($(this).data('info'));
        if ($(this).data('upgrade1') == "") {
            $('#upgrade1').hide();
            $('#upgrade2').hide();
            $('#upgrade3').hide();
            $('#upgdr').hide();
        }
        else {
            $('#upgrade1').show();
            $('#upgrade2').show();
            $('#upgrade3').show();
            $('#upgdr').show();
        }
        $('#upgrade1').attr('src', $(this).data('upgrade1'));
        $('#upgrade2').attr('src', $(this).data('upgrade2'));
        $('#upgrade3').attr('src', $(this).data('upgrade3'));
    })
    $('.objekt').on('mouseleave', function () {
        $(this).attr({ 'style': 'fill:rgba(0,255,0,0);stroke:rgba(0,255,0,0)' });
        //$('#text h2').text("");
    })
})