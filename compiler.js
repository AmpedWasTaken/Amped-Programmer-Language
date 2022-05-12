var args = process.argv.slice(2);
var fs = require('fs')

if (args.length < 1) {
  console.log('Usage: node compiler.js <file>.amped');
  process.exit(1);
} else {
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
    data = data.replaceAll("runcode(", "eval(");
    eval(data);
  });
}