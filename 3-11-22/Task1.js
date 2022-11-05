function passorfail() {
    var mark= document.getElementById("Text").value;
if (mark<50) {
    document.write(failed);
}
else  if (mark>=50 && mark<60)  { 
    document.write("Your mark is D")
 }
 else  if (mark>=60 && mark<70)  { 
    document.write("Your mark is C")
}
else  if (mark>=80 && mark<90)  { 
    document.write("Your mark is B")
}
else  if (mark>=90 && mark<=100)  { 
    document.write("Your mark is A")
}
else{
    document.write("INVALID")
}

}
    