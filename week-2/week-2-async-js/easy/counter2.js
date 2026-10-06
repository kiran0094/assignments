let counter=0;
function updateCounter(){
    console.log(counter)
    counter++;
    setTimeout(updateCounter,2000)
}
updateCounter();