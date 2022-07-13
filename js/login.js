
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "huyen" && password == "27112021"){
    alert ("Login successfully");
    window.location.href = "main.html";
    }
    else {
        alert ("Login failed");
    }
    return false;
}
