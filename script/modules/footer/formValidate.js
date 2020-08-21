export default function formValidateInit(){

    const mail = document.querySelector(".footer_connect_form_mail");
    const textarea = document.querySelector(".footer_connect_form_textarea");
    const button = document.querySelector(".footer_connect_form_button");

    const errorInput = (input, errorMessage) => {
        if (input.classList.contains("success")){
            input.classList.remove("success");
        }
        input.classList.add("error");
        input.parentElement.querySelector(".footer_connect_form_input_error").innerHTML = errorMessage;
    }

    const successInput = (input) => {
        if (input.classList.contains("error")){
            input.classList.remove("error");
        }
        input.classList.add("success");
        input.parentElement.querySelector(".footer_connect_form_input_error").innerHTML = "";
    }

    function checkInput()  {
        
        if (mail.value.trim() === "")
        {
            errorInput(mail, "Введён пустой email-адрес!");
        }
       else if (mail.validity.patternMismatch){
            errorInput(mail, "Введён неверный email-адрес!");
        }
        else{
            successInput(mail);
        }
        
        if (textarea.value.trim() === "")
        {
            errorInput (textarea, "Введёно пустое сообщение!");
        }
        else{
            successInput(textarea);
        }

    }

    button.onclick = e => {
        e.preventDefault();
        checkInput();
    }

}