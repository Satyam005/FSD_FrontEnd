$(document).ready(()=>{
    // login button
    $('#login').click((event)=>{
        // event.preventDefault();
        // console.log(event);
        // console.log('login clicked');
        let user = $('#username').val();
        let pwd = $('#password').val();
        let email = $('#email').val();
        
        if(user == ""){
            // cease the default behavior submit button
            event.preventDefault();
            $('#username').focus();
            $('#username').addClass('input-error');
            $('#error-message').text('Username cannot be left blank');
        }else if(pwd == ""){
            // cease the default behavior submit button
            event.preventDefault();
            $('#password').addClass('input-error');
            $('#password').focus();
            $('#error-message').text('Password cannot be left blank');
        }else if(email == ""){
            event.preventDefault();
            $('#email').addClass('input-error');
            $('#email').focus();
            $('#error-message').text('Email cannot be left blank');
        }
        });
    });