function add_func1(){
    var x=document.getElementById("data1").ariaValueMax;
    var y=x.split(' ');
    var add1=parseInt(y[1])+parseInt(y[3]);
    //console.log(x);
    document.getElementById("ans").innerHTML=add1;
}