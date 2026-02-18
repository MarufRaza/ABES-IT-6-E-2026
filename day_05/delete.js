import { readfile, writeFile } from "../day_04/readAndwriteFile.js";

const file = "../day_04/student.json";

const deleteFileData = async (id) => {
  try {
    const students = await readfile(file);
    console.log("type:", students);

    if (!students) {
      console.log("user is not existing");
      return;
    }

    const user = students.filter((student) => student.id === id);
    if (user.length === 0) {
      console.log("user is not existing");
    } else {
      const filterData = students.filter((student) => student.id !== id);
      await writeFile(file, JSON.stringify(filterData, null, 2));
      console.log(filterData);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

deleteFileData(1);