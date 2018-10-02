var fs = require('fs');
var watson = require('watson-developer-cloud');
var CREDENTIALS = JSON.parse(fs.readFileSync('ibm-watson-credentials.json'));
//var VisualRecognitionV3 = new watson.VisualRecognitionV3(CREDENTIALS.VisualRecognitionV3);
//var ToneAnalyzerV3 = new watson.ToneAnalyzerV3(CREDENTIALS.ToneAnalyzerV3);
var LanguageTranslatorV3 = new watson.LanguageTranslatorV3(CREDENTIALS.LanguageTranslatorV3);

/**
 * Testing the image analizer.
 */
// var images = [
// 	'https://media.self.com/photos/58af45c1a323456596cc0842/4:3/w_728,c_limit/fall-fruit-bowl-cardamom-cashew-cream-870.jpg',
// 	'https://www.displayfakefoods.com/store/pc/catalog/2862-lg.jpg',
// 	'http://assets.kraftfoods.com/recipe_images/opendeploy/107811_640x428.jpg',
// 	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi6mbGd1iT-jr_xBecHQQ_Dk7ghCMPlxUXVVcJ4iUTDa64BVs0',
// 	'https://www.stayathomemum.com.au/cache/860x380-0/wp-content/uploads/2015/12/bigstock-Bangkok-jan-A-Waxwork-Of-178261381-e1502062851153.jpg',
// 	'http://static.asiawebdirect.com/m/phuket/portals/hong-kong-hotels-ws/homepage/attractions/madame-tussauds/pagePropertiesImage/madame-tussauds-hong-kong.jpg.jpg'
// ];

// images.forEach(element => {
// 	VisualRecognitionV3.classify({url:element, accept_language: 'es'}, function(err, res) {
// 		//var result = res.images[0].classifiers[0].classes
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log(JSON.stringify(res, null, 2));
// 			// result.forEach(element => {
// 			// 	console.log('%s: %s', element.class, element.score)
// 			// 	if (element.type_hierarchy) console.log('	type_hierarchy:',element.type_hierarchy);
// 			// });
// 			// console.log('--------------------------------------')
// 		}
// 	});	
// });
/**
 * END: Testing the image analizer.
 */

 /**
 * Testing the tone Analizer.
 * https://www.ibm.com/watson/developercloud/tone-analyzer/api/v3/node.html?node#tone
 */
var text = 'Team, I know that times are tough! Product ' +
    'sales have been disappointing for the past three ' +
    'quarters. We have a competitive product, but we ' +
    'need to do a better job of selling it!'

// var toneParams = {
//     'tone_input': {
//         'text': text
//     },
//     'content_type': 'application/json'
// };

// ToneAnalyzerV3.tone(toneParams, function(error, toneAnalysis) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(JSON.stringify(toneAnalysis, null, 2));
//     }
// });
 /**
 * Testing the tone Analizer.
 */


/**
 * Testing the lenguage traslator.
 */
var parameters = {
    text: text,
    model_id: 'en-es'
};

LanguageTranslatorV3.translate(
    parameters,
    function(error, response) {
        if (error)
            console.log(error)
        else
            console.log(JSON.stringify(response, null, 2));
    }
);
/**
 * Testing the lenguage traslator
 */