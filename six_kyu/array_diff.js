function array_diff(a, b) {
	return a.filter(function(element) {
		return b.indexOf(element) === -1;
	})	  
}
