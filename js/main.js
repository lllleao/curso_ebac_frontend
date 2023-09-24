$(document).ready(function(){
    $('#cpf').mask('000.000.000-00', {
        placeholder: '   .   .   -  '
    })
    $('#cep').mask('00000-000', {
        placeholder: '     -  '
    })

    $('form').validate({
        rules: {
            cpf: {
                required: true
            },
            cep: {
                required: true
            }
        }
    })
})