/*
 * the link of every element with an accesskey attribute will be launched,
 * when the user presses the key defined in the accesskey attribute
 */
$(document).ready( function() {
	$('[accesskey]').filter(function(){
		var $key = $(this).prop('accessKey').charCodeAt(0);
		var $url = $(this).attr("href");
		$("body").keyup(function(event) {
			if($key == event.which) {
				location.href=$url;
				//alert("URL: "+ $url);
			}
		});
	});
});