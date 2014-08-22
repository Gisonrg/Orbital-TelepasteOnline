(function($){
	$('document').ready(function(){
		// make the textarea flexible
		$('#qrcode_result').flexible();

		$('#qrcodebox').WebcamQRCode({
			onQRCodeDecode: function( p_data ){
					// console.log(p_data);
					alert("Success!");
					$('#qrcode_result').text( p_data );
					$('#copyBotton').removeClass("btn-success");
					$('#copyBotton').text("Copy to clipboard");
			}
		});
		
		//Button
		$('#copyBotton').click(function(){
			$(this).addClass("btn-success");
			$(this).text("Success");
		});
		$('#qrcode_result').focus(function() {
			$('#copyBotton').removeClass("btn-success");
			$('#copyBotton').text("Copy to clipboard");
		});


		// ZeroClipboard
		var client = new ZeroClipboard($('#copyBotton'));
		client.on( "ready", function( readyEvent ) {
		  // alert( "ZeroClipboard SWF is ready!" );
		  client.on( "copy", function (event) {
			  var clipboard = event.clipboardData;
			  var data = $('#qrcode_result').val();
			  clipboard.setData( "text/plain", data );
			});
		  client.on( "aftercopy", function( event ) {
		    // `this` === `client`
		    // `event.target` === the element that was clicked
		    // event.target.style.display = "none";
		  } ); 
		});


	});
})(jQuery);