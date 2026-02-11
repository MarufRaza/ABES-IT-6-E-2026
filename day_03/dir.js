import fs from "fs/promises";
const makeDir = async(path)=>{
    try{
        await fs.mkdir(path);
        console.log("Directory haas been  created successfully");

    }catch(error){
        console.log("unable to amkke dir");
    }
}
makeDir("../day_04");