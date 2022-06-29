var box = document.getElementsByClassName('box');
var display= document.getElementById('display');
var operand1 = 0;
var operand2 = null;
var operator = null;
for(var i=0; i<box.length; i++){
    box[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        if(value=='+' || value=='-' || value=='/'|| value=='*'){
            operator = value;
            operand1 = parseFloat(display.textContent);
            display.innerText="";
        }
        else if(value=='='){
            operand2 = parseFloat(display.textContent);
            display.innerText="";
            display.innerText=eval(operand1+operator+operand2);
            operand1=eval(operand1+operator+operand2);
        }
        else if(value=='AC'){
            display.innerText="";
            operand1=0;
            operand2=null;
        }
        else if(value=='+/-'){
            var a = parseFloat(display.textContent);
            display.innerText=eval('(-1)*'+a);
        }else if(value=='%'){
            operand1= parseFloat(display.textContent)
            operand1 = eval(operand1 + "* 0.01");
            display.innerText=operand1;
        }
        else{
            display.innerText += value;
        }
    });
}