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
const fs = require("fs").promises;

async function manageFiles() {
  try {
    await fs.mkdir("async_folder", { recursive: true });

    const files = await fs.readdir("./");
    console.log(files);

    await fs.writeFile("async_folder/test.txt", "Learning Node.js fs\nUsing fs/promises");

    const data = await fs.readFile("async_folder/test.txt", "utf8");
    console.log(data);

    const stats = await fs.stat("async_folder/test.txt");
    console.log(stats.isFile());

  } catch (err) {
    console.log(err.message);
  }
}

manageFiles();

