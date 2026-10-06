const fs= require("fs")

function readfile(filename){
    fs.readFile(filename,"utf-8",(err,data)=>{
        if(err){
            console.log(err)
        }
        console.log(data);
        
    })
}
readfile("./example.txt");

