const name= "abhisek";
const marks = 90;

console.log(name + " got " +marks ); //outdated format

console.log(`${name} got ${marks}`);

const gameName = new String("abhishek");
console.log(gameName.indexOf("i"));
console.log(gameName.bold());
console.log(gameName.charAt("2"));
console.log(gameName.substring(0,4));
console.log(gameName.substring(-1,4));

//trim removes extra spaces
const string1 = "    okay    ";
console.log(string1.trim())

// url
const url = "https://m.youtube.com/"; 
let url1 = url.replace("youtube","abhishek");
// splits using a keyword

console.log(url1.split("."));