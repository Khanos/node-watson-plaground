const fs = require('fs');
var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var CREDENTIALS = JSON.parse(fs.readFileSync('ibm-watson-credentials.json'));;
var params = {
	images_file: fs.createReadStream('./resources/fruitbowl.jpg')
};
console.log(CREDENTIALS);
var visualRecognition = new VisualRecognitionV3(CREDENTIALS);
visualRecognition.classify(params, function(err, res) {
	if (err) {
		console.log(err);
	} else {
		console.log(JSON.stringify(res, null, 2));
	}
});