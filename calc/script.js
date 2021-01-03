var disp = document.getElementById('disp')

function dis(str){
    console.log(str);
    disp.value = disp.value+str;
}

function clr(){
    disp.value = '';
}

function getResult(){
    var result = eval(disp.value);
    clr();
    dis(result);
}