function one(){
    document.getElementById('input').value +=1;
}
function two(){
    document.getElementById('input').value +=2;
}
function three(){
    document.getElementById('input').value +=3;
}
function four(){
    document.getElementById('input').value +=4;
}
function five(){
    document.getElementById('input').value +=5;
}
function six(){
    document.getElementById('input').value +=6;
}
function seven(){
    document.getElementById('input').value +=7;
}

function eight(){
    document.getElementById('input').value +=8;
}
function nine(){
    document.getElementById('input').value +=9;
}
function zero(){
    document.getElementById('input').value +=0;
}
function add(){
    document.getElementById('input').value += "+";
}
function sub(){
    document.getElementById('input').value += "-";
}
function multiply(){
    document.getElementById('input').value += "*";

}
function divide(){
    document.getElementById('input').value += "/";
}

function refresh(){
    document.getElementById('input').value =(""); 
}

function enter(){
 
        var result = eval(document.getElementById('input').value)
        document.getElementById('input').value=(result)
     
}