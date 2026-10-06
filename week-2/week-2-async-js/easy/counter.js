let count=0;
function counter(){
    setInterval(()=>{
        count=count+1;
        console.log(count)
    },1000);

}
counter()
