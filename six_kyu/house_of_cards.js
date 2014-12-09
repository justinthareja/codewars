function houseOfCards (floors) {

	var r = 0;
	var w = 0;

	for (i = 0; i < floors + 1; i ++) {
		
		r += w;
		w ++;

		for (j = 0; j < w; j++) { r += 2; }	
	}

return r;

}

