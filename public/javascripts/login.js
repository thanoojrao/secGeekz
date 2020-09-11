var state=false;
function toogle(){
    if(state){
        document.getElementById("psw").setAttribute('type',"password");
        document.getElementById("eye").classList.toggle('active');
        state=false;
    }
    else{
        document.getElementById("psw").setAttribute('type',"text");
        state=true;
        document.getElementById("eye").classList.toggle('active');
    }
}
