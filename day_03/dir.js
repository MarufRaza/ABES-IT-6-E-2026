import fs from "fs/promises";
const makeDir = async(path)=>{
    try{
        await fs.mkdir(path);
        console.log("Directory haas been  created successfully");

    }catch(error){
        console.log("unable to amkke dir");
    }
}
// makeDir("../day_04");

//sync
const fs = require('fs');

try {
    fs.mkdirSync('my_folder'); 
    const files = fs.readdirSync('./');
    console.log(files);

    fs.writeFileSync('my_folder/note.txt', 'Hello World!');
    fs.appendFileSync('my_folder/note.txt', '\nAppended text.');
    
    const content = fs.readFileSync('my_folder/note.txt', 'utf-8');
    console.log(content);
} catch (err) {
    console.error(err.message);
}

//async

