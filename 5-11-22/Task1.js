
function passorfail() {
    var mark= document.getElementById("Text").value;
if (mark<50) {
    document.getElementById("text").innerHTML=("You have failed!");
}
else  if (mark>=50 && mark<60)  { 
    document.getElementById("text").innerHTML=("Your mark is D");
 }
 else  if (mark>=60 && mark<70)  { 
    document.getElementById("text").innerHTML=("Your mark is C");
}
else  if (mark>=70 && mark<80)  { 
    document.getElementById("text").innerHTML=("Your mark is B");
}
else  if (mark>=80 && mark<=90)  { 
    document.getElementById("text").innerHTML=("Your mark is A");
}
else  if (mark>=90 && mark<=100)  { 
    document.getElementById("text").innerHTML=("Your mark is A+");
}
else{
    document.getElementById("text").innerHTML=("INVALID");
}

}
    