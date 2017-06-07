var Jimp = require("jimp");
var path = require('path');

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

var i = 0;

// loop for reading the same image until process will be killed/exited
function loop(filename_to_read,i) {
    console.log('%s', filename_to_read);
    Jimp.read("src/BJPG/"+filename_to_read).then(function(image) {
		console.log(i + "." + filename_to_read + " Writed");
		var bg_image = new Jimp(1087, 118, 0xFFFFFFFF, function (err, bg_image) {
			// this image is 256 x 256, every pixel is set to 0x00000000
			image.resize(876,94);
			bg_image.blit( image, 196, 12, 0, 0, 876, 94  );
			
			// Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
			Jimp.loadFont('font-to-use/font.fnt').then(function (font) {
				bg_image.print(font, 20, 40, "STAR"+pad(i,3));
				bg_image.write("dist/BJPG/"+filename_to_read); // save 
			});
		});
        // loop(filename);
    }).catch(function (err) {
        console.log(err);
    });
}

// read images
var i=1;
for (i=1;i <= 5;i++) {
	var filename_to_read = 'STAR'+pad(i,3)+' copy.jpg';
	loop(filename_to_read,i);
}

/*
Jimp.read("src_test/lenna.jpg", function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)            // resize 
         .quality(60)                 // set JPEG quality 
         .greyscale()                 // set greyscale 
         .write("dist/BJPG/lena-small-bw.jpg"); // save 
});
*/