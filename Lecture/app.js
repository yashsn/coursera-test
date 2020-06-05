var stud = {
name: "",
type: "stud"
};

document.addEventListener('DOMContentLoaded',contentLoaded);
//i had made a mistake in spelling of DOMContentLoadad 
//hence nothing was running
function contentLoaded(event){
    document.getElementById('name').addEventListener("keyup",keyUp);

}
//event listener fires when a buton is clicked 
//its parameters are(event, function name , use capture)
//the event can be click or mousedown or othet html dom event
//3rd param is optional 
function keyUp(event){
    calcNumVal();
}
function calcNumVal(){
    stud.name=document.getElementById('name').value;

    var nameVal=0;
    for(var i=0; i<stud.name.length; i++){
        nameVal+=stud.name.charCodeAt(i);
    }
    var op="Total num value is"+ nameVal;
    document.getElementById('op').innerText=op;
}