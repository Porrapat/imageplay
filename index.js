var Jimp = require("jimp");

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}


var i = 0;

// loop for reading the same image until process will be killed/exited

function loop(filename_to_read) {
    console.log('%s', filename_to_read);
    Jimp.read("src/BJPG/"+filename_to_read).then(function(lenna) {
		
		console.log(filename_to_read + " Writed");
		lenna.write("dist/BJPG/"+filename_to_read); // save 
		
        // loop(filename);
    }).catch(function (err) {
        console.log(err);
    });
}

// read images
var i=1;

for (i=1;i <= 10;i++) {
	var filename_to_read = 'STAR'+pad(i,3)+' copy.jpg';
	loop(filename_to_read);
}

/*
var i=1;

for (i=1;i <= 3;i++) {
	// STAR001 copy.jpg
	// console.log('STAR'+pad(i,3)+' copy.jpg');
	
	var filename_to_read = 'STAR'+pad(i,3)+' copy.jpg';
	console.log(filename_to_read);
	Jimp.read("src/BJPG/"+filename_to_read, function (err, lenna) {
		if (err) throw err;
		// lenna.resize(256, 256)         // resize 
		//	 .quality(60)                 // set JPEG quality 
		//	 .greyscale()                 // set greyscale 
		console.log(filename_to_read + " Writed.");
		lenna.write("dist/BJPG/"+filename_to_read); // save 
	});
}
*/

/*
Jimp.read("src_test/lenna.jpg", function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)            // resize 
         .quality(60)                 // set JPEG quality 
         .greyscale()                 // set greyscale 
         .write("dist/BJPG/lena-small-bw.jpg"); // save 
});
*/