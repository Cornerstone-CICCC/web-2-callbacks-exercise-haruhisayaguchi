const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  let sentence = data1.trim();
  fs.readFile("./lastname.txt", "utf-8", (err, data2) => {
    sentence += " " + data2.trim();
    fs.readFile("./age.txt", "utf-8", (err, data3) => {
      sentence += " is " + data3.trim() + " years old ";
      fs.readFile("./hobbies.txt", "utf-8", (err, data4) => {
        const hobbiesArray = JSON.parse(data4);
        sentence += `and his hobbies are ${hobbiesArray[0]} and ${hobbiesArray[1]}`;
        console.log(sentence);
      });
    });
  });
})