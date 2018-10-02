const fs = require('fs');
var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var CREDENTIALS = JSON.parse(fs.readFileSync('ibm-watson-credentials.json'));
var visualRecognition = new VisualRecognitionV3(CREDENTIALS);

var images = [
	'https://media.self.com/photos/58af45c1a323456596cc0842/4:3/w_728,c_limit/fall-fruit-bowl-cardamom-cashew-cream-870.jpg',
	'https://www.displayfakefoods.com/store/pc/catalog/2862-lg.jpg',
	'http://assets.kraftfoods.com/recipe_images/opendeploy/107811_640x428.jpg',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi6mbGd1iT-jr_xBecHQQ_Dk7ghCMPlxUXVVcJ4iUTDa64BVs0',
	'https://www.stayathomemum.com.au/cache/860x380-0/wp-content/uploads/2015/12/bigstock-Bangkok-jan-A-Waxwork-Of-178261381-e1502062851153.jpg',
	'http://static.asiawebdirect.com/m/phuket/portals/hong-kong-hotels-ws/homepage/attractions/madame-tussauds/pagePropertiesImage/madame-tussauds-hong-kong.jpg.jpg'
];

images.forEach(element => {
	visualRecognition.classify({url:element, accept_language: 'es'}, function(err, res) {
		//var result = res.images[0].classifiers[0].classes
		if (err) {
			console.log(err);
		} else {
			console.log(JSON.stringify(res, null, 2));
			// result.forEach(element => {
			// 	console.log('%s: %s', element.class, element.score)
			// 	if (element.type_hierarchy) console.log('	type_hierarchy:',element.type_hierarchy);
			// });
			// console.log('--------------------------------------')
		}
	});	
});

