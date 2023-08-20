const signInForm = document.querySelector('#signInForm');
const signUpForm = document.querySelector('#signUpForm');
const toggleButton = document.querySelectorAll('.toggle-button');
const formTitle = document.querySelector('#formTitle');
const signInMessage = document.querySelector('#signInMessage');




toggleButton.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        signInForm.style.display = signInForm.style.display === 'none' ? 'block' :'none'; 
        signUpForm.style.display = signUpForm.style.display === 'none' ? 'block' : 'none'; 
            if (signInForm.style.display === 'block') {
                 formTitle.innerText = 'Sign In'; 
                } else { 
                    formTitle.innerText = 'Sign Up'; } 
                }); 
});