"use strict"
/*eslint-env es6*/

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e){
        e.preventDefault();
        let error = formValidate(form);
        
    }
    
    
    function formValidate(form){
        let erroe = 0;
        let formReq = document.querySelectorAll('._req');
        
        
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);
            
            if(input.classList.contains('_email')){
               if(emailTest(inpyt)){
                   formAddError(input);
                   error++;
               }
        } else if (input.getAttribute("type") === "checkbox" && input.checked === false){
            formAddError(input);
            error++;
    } 
    Function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
     Function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
         
    //Функция теста email
    Function emailTest(input){
        return !/\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});
        