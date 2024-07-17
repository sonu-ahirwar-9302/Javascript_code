var x=document.getElementById("mybody");
x.style.backgroundColor="red";
var name1 = new String("welcome to bhopal");
var name2 = new String("sonu");
document.write(name1,"<br>");
for (var i in name1) {
    document.write(i,"<br>");
}
var x=name1.toUpperCase();
document.write(x,"<br>");


var x=name1.length;
document.write(x,"<br>");


var x=name1.concat(" ",name2);
document.write(x,"<br>");


var x=name1.charAt(0);
document.write(x,"<br>");


var x=name1.charCodeAt(0);
document.write(x,"<br>");