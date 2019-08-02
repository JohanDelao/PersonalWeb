// document.getElementById('button').onclick = function(){
//     document.getElementById('cardimgtop').style.visibility="hidden"
// }



function myFunction() {
    var x = document.getElementById('cardimgtop');
    if (x.src="Johan.jpg") {
        x.src="Saunders.jfif";
    } else if(x.src="Saunders.jfif") {
        x.src="Johan.jpg"
    }
}