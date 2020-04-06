function updateSyntax() {
    var input_text = $('#user-field').val();

    $('#steno-font').text(input_text);
    $('#steno-dict').text(input_text);
}

function pageLoad(page) {
    $('div#content').on('input', 'input[id*="-field"]', updateSyntax);
}