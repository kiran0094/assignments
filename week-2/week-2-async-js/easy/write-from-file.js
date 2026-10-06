const fs=require("fs");
function writefile(file,data){
    try{

        fs.writeFile(file,data,"utf-8",(err)=>{
            if(err){
                console.log("error writing");
            }
            console.log("file written");
        });
    }
    catch(err){

        console.log("error");

    }
}
writefile("data.txt","kiran what are you doing");