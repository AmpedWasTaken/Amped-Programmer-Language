// // 👇️ if using ES6 imports uncomment next line
// // import {readFile, writeFile, writeFileSync, promises as fsPromises} from 'fs';
// const {readFile, writeFile, promises: fsPromises} = require('fs');
// var args = process.argv.slice(2);

// readFile(`${args}`, 'utf-8', function (err, contents) {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   // 👇️ match string case-insensitively 👇️
//   var code = contents.replace("amped.print(", "console.log(");
//   // var code = contents.replace("amped.log(", "console.log(["+Date.now()+"] ");
//   // eval(code);

//   writeFile(`${args}`, code, 'utf-8', function (err) {
//     console.log(err);
//   });
// });
var args = process.argv.slice(2);
var fs = require('fs')
fs.readFile(`${args}`, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  data = data.replaceAll("amped.print(", "console.log(");
  data = data.replaceAll("amped.log(",  'console.log("[' + new Date().toISOString().substring(11,23) + '] " +');
  data = data.replaceAll("variable", "var");
  data = data.replaceAll("constant", "const");
  data = data.replaceAll("private-variable", "let");
  data = data.replaceAll("include(", "require(");
  eval(data);



  // fs.writeFile(`${args}`, result, 'utf8', function (err) {
  //    if (err) return console.log(err);
  // });
});