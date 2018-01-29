window.onload = function() {
	setTimeout(function() {
		$("#site-loader").fadeOut();
	},500);
	var page = GET("s");
	if(page) {
		var base = new Base64();
		var url = base.decode(page);
		document.getElementById('frame').src = url;
		document.getElementById('frame').style.display = '';
		document.getElementsByClassName('box')[0].style.display = 'none';
	}
	if(GET("e")) {
		var base = new Base64();
		var result = base.encode(GET("e"));
		console.log(result);
	}
}

function GET(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable) {
			return pair[1];
		}
    }
    return(false);
}