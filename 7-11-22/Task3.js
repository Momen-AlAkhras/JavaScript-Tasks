var array= ["Qais","Loba","Reyna","Jett","Pop"]
function shorterinArray(array){
var shrt =array[0].length;
let index = 0;
for (let i=1;i<array.length;i++){
    if (shrt>array[i].length){
        shrt = array[i].length;
        index = i;
    }
   
}
return array[index];
}
document.writeln(shorterinArray(array))