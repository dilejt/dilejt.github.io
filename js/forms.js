function checkForm(){
    var contactName = document.getElementById("contactName");
    var contactTextarea = document.getElementById("contactTextarea");
    var contactSName = document.getElementById("contactSName");
    var contactEmail = document.getElementById("contactEmail");
    var error=false; //to znaczy, że danych nie brakuje
    checkName();
    if (contactName.value == ""){
        error=true;
    }
    checkSName();
    if (contactSName.value == ""){
        error=true;
    }
    checkTextarea();
    if (contactTextarea.value == ""){
        error=true;
    }
    checkEmail();
    if (contactEmail.value == ""){
        error=true;
    } else {
        var email = contactEmail.value;
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if(regex.test(email)==false)
        {
            error=true;
        }
    }
    return !error
}

function checkName(){
    if (contactName.value == ""){
        document.getElementById("errorName").className="small alert alert-danger"; 
        document.getElementById("contactName").className="is-invalid form-control mb-2 mr-sm-2";
    }
    else{
        document.getElementById("errorName").className="small form-text text-hide";
        document.getElementById("contactName").className="is-valid form-control mb-2 mr-sm-2"; 
    }
}
function checkTextarea(){
    if (contactTextarea.value == ""){
        document.getElementById("errorTextarea").className="small alert alert-danger"; 
        document.getElementById("contactTextarea").className="is-invalid form-control mb-2 mr-sm-2";
    }
    else{
        document.getElementById("errorTextarea").className="small form-text text-hide"; 
        document.getElementById("contactTextarea").className="is-valid form-control mb-2 mr-sm-2";
    } 
}
function checkSName(){
    if (contactSName.value == ""){
        document.getElementById("errorSName").className="small alert alert-danger"; 
        document.getElementById("contactSName").className="is-invalid form-control mb-2 mr-sm-2";
    }
    else{
        document.getElementById("errorSName").className="small form-text text-hide"; 
        document.getElementById("contactSName").className="is-valid form-control mb-2 mr-sm-2";
    } 
}
function checkEmail(){
    if (contactEmail.value == ""){
        document.getElementById("errorEmail").className="small alert alert-danger"; 
        document.getElementById("errorEmail").innerHTML="Uzupełnij e-mail";
        document.getElementById("contactEmail").className="is-invalid form-control mb-2 mr-sm-2";
    } else {
        var email = contactEmail.value;
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if(regex.test(email)==false)
        {
            document.getElementById("errorEmail").className="small alert alert-danger"; 
            document.getElementById("errorEmail").innerHTML="Niewłaściwy e-mail";
            document.getElementById("contactEmail").className="is-invalid form-control mb-2 mr-sm-2";
        }
        else{
            document.getElementById("errorEmail").className="small form-text text-hide"; 
            document.getElementById("contactEmail").className="is-valid form-control mb-2 mr-sm-2";
        } 
    }
}