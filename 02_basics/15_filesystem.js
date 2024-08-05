// const { create } = require("domain");
const fs = require("fs");

const existing_file = "./myfiles/existing.txt";

// fs.readFile(existing_file, (err, data) => {
//   // utf-8 is the encoding type of the file
//   console.log("first line of code");
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(data);
//     // console.log(data.toString()); // toString() is used to convert the buffer data to string
//   }
// });
// console.log("last line of code");

// to write a file
// fs.writeFile(existing_file, "hello world", (err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log("file written successfully");
//   }
// });

// what is buffer data?
// buffer data is a raw binary data that is stored in the memory. It is a temporary storage
// area that stores the data while it is being moved from one place to another.
// buffer data is mainly used to store binary data while reading from a file or receiving packets
// over the network.

// buffer is a temporary storage area that stores the data while it is being moved from one place to another.

// buffer and stream are used to read and write large files.
// buffer is used to read and write small files.
// stream is used to read and write large files.

// createReadStream() is used to read the file in chunks. It reads the file in chunks of data.
// on() is used to listen to the data event. It is triggered when the data is read from the file.
// chunk is a buffer data that is read from the file.

// difference between fs.createReadStream()  and fs.ReadStream()
// fs.createReadStream() is a factory function that creates a ReadStream object.
// fs.ReadStream() is a class that creates a ReadStream object.

let counter = 0;
fs.createReadStream(existing_file).on("data", (chunk) => {
  console.log(chunk);
  console.log(`chunk received ${chunk.length} - ${chunk}`);
  counter++;
  console.log(`counter: ${counter}`);
});

//write stream

const writestream = fs.createWriteStream("./myfiles/existing.txt");
for (let i = 0; i <= 5; i++) {
  writestream.write(`hello world ${i}\n`);
}
