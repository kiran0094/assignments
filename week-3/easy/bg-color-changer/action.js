const body=document.getElementsByTagName("body");
function colorchang(clr){
    console.log(body)
    console.log(clr);
   body[0].style.backgroundColor=`${clr}`;
}