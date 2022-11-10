function Larger() {
    var mar= document.getElementById("number").value;

    var mark= document.getElementById("Number").value;

    if (mark>mar){
        document.getElementById("text").innerHTML=(mark);
    }
   else if (mark<mar){
    document.getElementById("text").innerHTML=(mar);
   }
}
