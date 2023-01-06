const express= require("express");
const app= express();
const fs=require("fs");
// using middleware 
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Get sucessfull");
})
app.get("/data",(req,res)=>{
    res.send("reqsent sucessfully");
})
app.post("/addData",(req,res)=>{
    console.log(req.body);
    res.send(req.body)
    res.send("dara recorded sucessfull");
})
app.post("/addstudent",(req,res)=>{
    // readfile
    const data= fs.readFileSync("./db.json","utf-8");
    // parsed data 
    const parsed_data=JSON.parse(data);
    // add data
    parsed_data.student.push(req.body);
    // write it on the file
    fs.writeFileSync("./db.json",JSON.stringify(parsed_data));
    res.send("data updated");
})
app.delete("/deletestudent/:id",(req,res)=>{
    // readfile
    const data= fs.readFileSync("./db.json","utf-8");
    // parsed data 
    const parsed_data=JSON.parse(data);
    // delete data with filter
    
        const { id } = req.params;
       
        const projectIndex = projects.findIndex(p => p.id == id);
       
    parsed_data.student.splice(projectIndex, 1);
    // write it on the file
    fs.writeFileSync("./db.json",JSON.stringify(parsed_data));
    res.send("data updated");
})
app.listen(3500,()=>{
    console.log("runing at port 3500")
})