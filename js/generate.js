(function($){
	$('document').ready(function(){
		// $('#qrcode_result').flexible();
		


		$('#generateBotton').click(function() {
			$('#qrcodebox').html('');
			var opts = {
			  lines: 13, // The number of lines to draw
			  length: 20, // The length of each line
			  width: 10, // The line thickness
			  radius: 30, // The radius of the inner circle
			  corners: 1, // Corner roundness (0..1)
			  rotate: 0, // The rotation offset
			  direction: 1, // 1: clockwise, -1: counterclockwise
			  color: '#000', // #rgb or #rrggbb or array of colors
			  speed: 1, // Rounds per second
			  trail: 60, // Afterglow percentage
			  shadow: false, // Whether to render a shadow
			  hwaccel: false, // Whether to use hardware acceleration
			  className: 'spinner', // The CSS class to assign to the spinner
			  zIndex: 2e9, // The z-index (defaults to 2000000000)
			  top: '50%', // Top position relative to parent
			  left: '50%' // Left position relative to parent
			};
			var target = document.getElementById('qrcodebox');
			var spinner = new Spinner(opts).spin(target);
			var content = encodeURIComponent($('#qrcode_result').val());
			var url = "https://api.qrserver.com/v1/create-qr-code/?data="+content+"&size=320x320";
			console.log(url);
			var img = $("<img />").attr('src', url)
		    .load(function() {
		        if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
		            alert('broken image!');
		        } else {
		        	spinner.stop();
		        	img.addClass("qrcode_img");
		        	var share = new Share(".share-btn", {
		        	  image: url,
					  networks: {
					  	google_plus: {
					      url: encodeURIComponent(url),
					    },
					    twitter: {
					      url: url,
					      description:  "This is my QR code generated from Telepaste: "+encodeURIComponent(url),
					    },
					    facebook: {
					      app_id:"713847372009482",
					      title: "This is my QR code generated from Telepaste",
					      description: "The QR code has the content of "+content,
					      url:"gisonrg.github.io/Orbital-TelepasteOnline/"
					    },
					    pinterest: {
					      enabled: false
					    },
					    email: {
					      title:  "This is my QR code generated from Telepaste",
					      description:  "The QR code has the content of "+content+", \nand you can download it as "+url,
					    }
					  }
					});
		            $("#qrcodebox").html(img);
		        }
		    });
		});

		
	});
})(jQuery);