var express=require('express')
var app=express()

app.get('/',(req,res)=>{res.send("hello COmpany!!")})

app.listen(7000,()=>console.log("server is running at 7000"));


// const fs =  require('fs');
// const fileName="target.txt";

// const errHandler=err=>console.log(err);
// const dataHandler=data=>console.log(data.toString());

// fs.readFile(fileName, (err, data)=>
// {if (err)
//     errHandler(err);
//     else
//     dataHandler(data);
// });

