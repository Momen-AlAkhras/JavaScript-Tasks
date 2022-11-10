const Arry1= ["Volvo","Fiat","Ford","Hyundai"];
function lastofarray(Arry1){
     return Arry1[Arry1.length-1] 
}
let text = document.getElementById("text");
text.innerHTML=lastofarray(Arry1);
