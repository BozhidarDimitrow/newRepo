function solve(text) {

    let last = text.lastIndexOf("\\");
    let file = text.substring(last + 1);

    let dot = file.lastIndexOf(".")
    let extension = file.substring(dot+1)
    let fileName = file.substring(0,dot)
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
solve('C:\\Projects\\Data-Structures\\LinkedList.cs')