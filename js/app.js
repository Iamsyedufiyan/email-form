// varaibles
const SendButton = document.getElementById('sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    resetButton = document.getElementById('resetBtn'),
    sendEmailForm1 = document.getElementById('email-form');

// event listeners
eventListeners();

function eventListeners(){
    // app init
    document.addEventListener('DOMContentLoaded', appInitialization);

    // validate form
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);

    // send email and reset button
    sendEmailForm1.addEventListener('submit', sendEmail1)
    resetButton.addEventListener('click', resetForm1);
}

// functions
function appInitialization(){

    // send button on load
    SendButton.disabled = true;
}
function sendEmail1(e){
    e.preventDefault();

    //  show spinner
    const spinner1 = document.querySelector('#spinner');
    spinner1.style.display = 'block';

    // show img

    const sendEmailImg1 = document.createElement('img');
    sendEmailImg1.src = 'img/mail.gif';
    sendEmailImg1.style.display = 'block';

    // spinner time
    setTimeout(function(){

        // hide spinner
        spinner1.style.display = 'none';

        // show img
            document.querySelector('#loaders').appendChild(sendEmailImg1);

            // after 5 sec hide img and reset
        setTimeout(function(){

            sendEmailForm1.reset();
            sendEmailImg1.remove();
        }, 5000);

    }, 3000);

}

// validate field
function validateField(){
        let errors;

        // validate length
        validateLength1(this);

        // validate email

        if(this.type === 'email'){
            validateEmail1(this);
        }

        // check if there any errors 
        errors = document.querySelectorAll('.error');

        
        // chech input data is not empty
        if(email.value !== '' && subject.value !== '' && message.value !== ''){
            if(errors.length === 0){
                // button enabled 
                SendButton.disabled = false;
            }
        }
        
}

// validate error
function validateLength1(field){
    if(field.value.length > 0){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}
// validate email 
function validateEmail1(field){
    let emailText1 = field.value;
    // check email containes @ sign 
    if(emailText1.indexOf('@') !== -1){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}


// reset form
function resetForm1(e){
    e.preventDefault();

    sendEmailForm1.reset();

    // disable the send button on load
    // SendButton.disabled = true;
}


