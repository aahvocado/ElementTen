
$(document).ready(function(){
	//what tab did ya click?
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		window.scrollTo(0,0);
 		// $("html, body").animate({ scrollTop: 0 }, "fast");

		var tabname = $(e.target).attr('aria-controls');
		$('.jumbo-info').empty();
		if(tabname == 'home'){
			$('.jumbo-info').append('<p class="lead"> Hello again! </p>');
			$('li').removeClass('active');
		}else{
			$('.jumbo-info').append('<p class="lead">'+ tabname +'</p>');
		}
		$('.jumbo-info').append('<p class="sublead">'+ getText(tabname) +'</p>');
	})


});

//return some header text to fill in 
function getText(tabname){
	switch(tabname){
		case 'home':
			return 'Daniel Xiao is a multidisciplinary developer and designer who has a passion for creating interactive projects. He works with Javascript, JQuery, HTML, and CSS to design web applications. He works in Flash + Actionscript, Unity + C#, and Photoshop to design games. Look at his projects below!';
			break;
		case 'projects':
			return 'major projects Daniel has made';
			break;
		case 'games':
			return 'a collection of game projects';
			break;
		case 'designs':
			return 'ideation from graphic design to functional design';
			break;
		case 'about':
			return 'more about Daniel Xiao';
			break;
		default:
			return 'Oh, you found the default text.'
			break;
	}
}

//download a file hopefully
function download(file)
{
	 window.location=file;
}
