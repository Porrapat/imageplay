var Jimp = require("jimp");
 
// open a file called "lenna.png" 
Jimp.read("src_test/lenna.jpg", function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)            // resize 
         .quality(60)                 // set JPEG quality 
         .greyscale()                 // set greyscale 
         .write("dist/BJPG/lena-small-bw.jpg"); // save 
});