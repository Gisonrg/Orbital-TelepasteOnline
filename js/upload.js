$(document).ready(function() {


    // $('#upload_result').flexible();
    
    $('#copyBotton2').click(function(){
      $(this).addClass("btn-success");
      $(this).text("Success");
    });

    $('#upload_result').focus(function() {
      $('#copyBotton2').removeClass("btn-success");
      $('#copyBotton2').text("Copy to clipboard");
    });

    // enable upload
		$('#cameraInput').change(function(e) {
   			readQR(this, function(data) {
   				$('#upload_result').text( data );
          $('#copyBotton2').removeClass("btn-success");
          $('#copyBotton2').text("Copy to clipboard");
   			});
		});


    // ZeroClip
    var client = new ZeroClipboard($('#copyBotton2'));
    client.on("ready", function(readyEvent) {
      // alert( "ZeroClipboard SWF is ready!" );
      client.on("copy", function(event) {
        var clipboard = event.clipboardData;
        var data = $('#upload_result').val();
        clipboard.setData("text/plain", data);
      });
      client.on("aftercopy", function(event) {
        // `this` === `client`
        // `event.target` === the element that was clicked
        // event.target.style.display = "none";
      });
    });
});
	