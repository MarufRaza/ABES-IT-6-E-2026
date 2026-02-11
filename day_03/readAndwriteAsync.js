import fs from 'fs/promises';
const writeFile = async (path,data) =>{
    try{
        await fs.writeFile(path,data);
        console.log("File written successfully");

    }catch(error){
        console.log("unable to perform write operation")
    }
}
const readFile =  async(path) =>{
    try{
        const data=await fs.readFile(path,"utf-8");
        console.log(data);

    }catch(error){
        console.log("unable to perform read operation")
    }
}
readFile("./example.txt");



// writeFile("./example.txt","this data has been through aysnc function")