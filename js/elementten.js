
$(document).ready(function(){
	//what tab did ya click?
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
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
		case 'about':
			return 'More about Daniel Xiao';
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
