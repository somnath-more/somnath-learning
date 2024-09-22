const fs=require('fs')

// Read the file
// write the file
// append the file 
// delete the file

// Read the file

// it works on asynchronously
    
//     fs.readFile('abc.txt', (err,data)=>{
//     if(err){
//         console.log("Failed to write   ")
//         console.log("Error writing file", err);
//     }else{
//         console.log("Successfully wrote to abc.txt");
//         console.log(data)

//     }
// });
// console.log("Successfully wrote to abc.txt");
// Read file Synchronously using readFileSync

// try{
//     let data=fs.readFileSync('abc.txt', 'utf8');
//     console.log(data);
// }catch(err){
//     console.log("Failed to read file")
//     console.log(err)
// }
// console.log("Successfully wrote to abc.txt");

//  append the file


// fs.appendFile('./mynewfile1.txt', 'Hello content!', (err,data)=>{
//        if(err){
//         console.log("Failed to append file", err);
//         }else{
//         console.log("Successfully appended to mynewfile1.txt");
//            fs.readFile('./mynewfile1.txt',(err,data)=>{
//              if(err){
//                  console.log("Failed to read file", err);
//              }else{
//                  console.log("File content:", data.toString());
//              }
//            });
//        }
// })

// write new file - asynchronous way
let content= "Hello content"
// fs.writeFile('newfile.txt',content, (err,data)=>{
//         if(err){
//         console.log("Failed to write file", err);
//         } else{
//         console.log("Successfully wrote to newfile.txt");
//         console.log(data);
//         }
// })
// console.log("Event when will happen start or end");
// // // syncronous way
// fs.writeFileSync('snc.txt',content,(data,err)=>{
//    if (err) {
//     console.log("Some thing went wrong");
//    }else{
//     console.log("The file has been saved!");
//    }
// })
// console.log("Event when will happen start or end. it should be on end");

// delete file
fs.unlinkSync('snc.txt',(err)=>{
        if(err) throw err;
        console.log("File deleted successfully!");
});