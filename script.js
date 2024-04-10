 $(document).ready(function () {
    $('.form-group input').focusout(function () {
        if ($(this).val() === '') {
            $(this).siblings('label').css('top', '10px');
            $(this).siblings('label').css('font-size', '16px');
        }
    });

    $('.form-group input').focusin(function () {
        $(this).siblings('label').css('top', '-15px');
        $(this).siblings('label').css('font-size', '12px');
    });
});



$(document).ready(function () {
    $('#show-password-checkbox').click(function () {
        var passwordInput = $('#password');
        if (passwordInput.attr('type') === 'password') {
            passwordInput.attr('type', 'text');
            $(this).removeClass('fas fa-eye').addClass('fas fa-eye-slash');
        } else {
            passwordInput.attr('type', 'password');
            $(this).removeClass('fas fa-eye-slash').addClass('fas fa-eye');
        }
    });
});