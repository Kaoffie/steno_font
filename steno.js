function updateSyntax() {
    var input_text = $('#user-field').val();

    $('#steno-classic').text(input_text);
    $('#steno-classicmedium').text(input_text);
    $('#steno-classiclarge').text(input_text);
    $('#steno-classicblank').text(input_text);

    $('#steno-wide').text(input_text);
    $('#steno-widemedium').text(input_text);
    $('#steno-widelarge').text(input_text);
    $('#steno-wideblank').text(input_text);

    $('#steno-square').text(input_text);
    $('#steno-squaremedium').text(input_text);
    $('#steno-squarelarge').text(input_text);
    $('#steno-squareblank').text(input_text);

    var input_palan = $('#palan-field').val();

    $('#palan').text(input_palan);
}

function pageLoad(page) {
    $('div#content').on('input', 'input[id*="-field"]', updateSyntax);
}