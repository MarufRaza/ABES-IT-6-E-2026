import { readfile,writeFile } from "./readAndwriteFile.js";

const data = {
  
  "first_name": "Born",
  "last_name": "Rich",
  "email": "bornrich7@godaddy.com",
  "gender": "Non-binary"
};

const writeFileData = async (path, data) => {
  try {
    const fileData = await readfile(path);
    if(!filedata) updateData=({id:1, ...data})
    else updateData = [...fileData, {  id: fileData.length + 1, ...data }];
  
    await fs.writeFile(path, JSON.stringify(updateData,null,2));
  } catch (error) {
    console.log("unable to run write service ");
  }
};

writeFileData("./student.json", data);

  

const readFileData = async (path) => {
  try {
    const fileData = await readfile(path);
    console.log(fileData);
  } catch (error) {
    console.log("Error");
  }
};

readFileData("./student.json");

