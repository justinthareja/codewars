/*

Let's implement the zipObject function that enables such results

zipObject(['fred', 'barney'], [30, 40])
=> { 'fred': 30, 'barney': 40 }

zipObject([['fred', 30], ['barney', 40]])
=> { 'fred': 30, 'barney': 40 }

The zipObject creates an object composed from arrays of keys and values. 
It is provided with either a single two dimensional array, i.e. [[key1, value1], [key2, value2]] or with two arrays, 
one of keys and one of corresponding values.

If only keys are given, then set the values to undefined.

zipObject(['fred', 'barney'])
{ fred: undefined, barney: undefined }
If neither keys nor values are specified, then return {}

zipObject()
{}

*/

// define an empty object var zip = {}
// first check if arguments.length === 0; return zip

// next check to see if (!values) 

// if there aren't values 

// next have to check what the key is, since it can either be a keys array or a two dimensional array with key/value pairs

// how to determine the behavior?
// if (typeof keys[0] === 'object')

// iterate another forEach loop to zip

// keys.forEach(function (property) {
// 	zip[property[0]] = property[1];
// })

// if there are not arrays within the keys array, then you need to assign undefined as a value:
// values = new Array(keys.length)

// if there are values:
// need to act on all values within keys, so run a forEach loop on all keys within the element
// function (key) {
// 	zip[key] = values[keys.indexOf(key)]
// }



// return zip



function zipObject (keys, values) {
	var zip = {};

	if (arguments.length === 0) {
		return zip;
	}
	if (!values) {
		if(typeof keys[0] === 'object') {
			keys.forEach(function (property) {
				zip[property[0]] = property[1];
			})
		}
		values = new Array(keys.length);
	}
	keys.forEach(function (key) {
		zip[key] = values[keys.indexOf(key)];
	})
	
	return zip;
}




// function zipObject(keys, values) {   
//   var result = {};
  
//   (keys || []).forEach(function(item, index) { 
//     if (item instanceof Array) {
//       result[item[0]] = item[1];
//     } else {
//       result[item] = (values || [])[index];
//     }
//   });
  
//   return result;  
// }
