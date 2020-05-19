var wor=document.querySelector('.btn');
wor.onclick=function(){
    alert('2222');
}

var email=document.querySelector('.tx1');
var pwd=document.querySelector('.tx2');
var butn=document.querySelector('.btns');
butn.onclick=function(){
    if(email.value=='1369097131' && pwd.value=='123456')
    // alert("wllcen")
    document.location.href="https://im.qq.com/";
    else{
        alert("fuck")
    }
}