var mainprojects = [];//project page
var games = [];
var designs = [];
$(document).ready(function(){
	initAllProjects();
	createProjects(mainprojects, 'projects');
	//clicking on a project item  -- !!! this one is just for test
	// $('.item-clickable').click(function(){
	// 	$('#myModal').modal('show');
	// 	$('.modal-title').html(mentorweb.name);
	// 	$('.modal-body').html(mentorweb.descriptionString);
	// })
	//clicking the view project button
	
	$('#myModal').on('hidden.bs.modal', function (e) {
	  $('.modal-body').empty();
	})
});

//creates a project and then does a lot of stuff
function createProjects(list, type){
	for(var i=0;i<list.length;i++){
		var rownum = i===0 ? 0:Math.floor(i/3);
		var p = list[i];//p is for project :)

		if(i%3 === 0){//make a new row for every third project
			//make the card (row div)
			$('<div></div>',{
				class: type +'-page '+ rownum + ' row'
			}).appendTo('#'+type);
		}
		//make the column div
		$('<div></div>',{
			class: 'item-clickable ' + '' + p.subname + '-'+ i + ' col-md-4 ' + type + '-page' + '-' + i
		}).appendTo('.'+type+'-page'+'.'+rownum);

		var contentString = '<img src="images/' + p.subname + '.png">';//add the image
		contentString += '<h4 class="title">' + p.name + '<span class="glyphicon glyphicon-chevron-right"></span></h4>'
		$('.'+type+'-page'+'-'+i).append(contentString);
		giveProjectOnClickListener(p, p.subname + '-'+ i);
	}
}
//give the project a click listener that will change modal data
//param: project object
function giveProjectOnClickListener(project, clickClass){
	var p = project;
	$('.'+clickClass).on('click',function(){
		$('#myModal').modal('show');
		$('.modal-title').html(p.name);
		$('.modal-body').html(p.descriptionString);
		$('.view-project').click(function(){
			window.location = p.weburl;
		});
	});
}

function projectObject(name, imgpath){
	this.name = name;
	this.imgpath = imgpath;
	this.descriptionString = '';//give me a description!
	//url var?
}
//There's a lot of crap to copy paste so let's make it easier
var mentorweb = new projectObject('MentorWeb', 'images/mentorweb.png');
mentorweb.subname = 'mentorweb';
mentorweb.weburl = 'http://dev.m.gatech.edu/d/mosborne8/w/MentorAngular/';
mentorweb.descriptionString = 'Web application made using AngularJS, html, css. Made to match mentors and mentees.'+
				'<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/c6vKkqgn3K4" frameborder="0" allowfullscreen></iframe></div>'

var betrayalhelper = new projectObject('Betrayal at House on the Hill Helper', 'images/betrayalhelper.png');
betrayalhelper.subname = 'betrayalhelper';
betrayalhelper.weburl = 'http://www.elementten.com/BetrayalHelper/';
betrayalhelper.descriptionString = '';

function initAllProjects(){
	mainprojects = [];
	mainprojects.push(mentorweb);
	mainprojects.push(betrayalhelper);

}
