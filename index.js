function passowrd(){
    var passw = document.getElementById('pass').value;

    if(passw.length<5){
        alert('Password must contain atleast 5 characters');
    }
    else if(passw[0].toUpperCase() !== passw[0]){
        alert('First letter in password must be an upper case');
    }

}
