import fs from "fs/promises";
import fsSync from "fs";

//sync
try {
    fsSync.mkdirSync("my_folder");
    const files = fsSync.readdirSync("./");
    console.log(files);

    fsSync.writeFileSync("my_folder/note.txt", "Hello World!");
    fsSync.appendFileSync("my_folder/note.txt", "\nAppended text.");

    const content = fsSync.readFileSync("my_folder/note.txt", "utf-8");
    console.log(content);
} catch (err) {
    console.log(err.message);
}

//async
async function manageFiles() {
    try {
        await fs.mkdir("async_folder", { recursive: true });

        const files = await fs.readdir("./");
        console.log(files);

        await fs.writeFile(
            "async_folder/test.txt",
            "Learning Node.js fs\nUsing fs/promises"
        );

        const data = await fs.readFile("async_folder/test.txt", "utf8");
        console.log(data);

        const stats = await fs.stat("async_folder/test.txt");
        console.log(stats.isFile());
    } catch (err) {
        console.log(err.message);
    }
}

manageFiles();
