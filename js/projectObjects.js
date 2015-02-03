//creates a project and then does a lot of stuff
function createProject(){

}
//give the project a click listener that will change modal data
function giveProjectOnClickListener(){

}

function projectObject(name, imgpath){
	this.name = name;
	this.imgpath = imgpath;
	this.descriptionString = '';//give me a description!
	//maybe a url var?
}
//There's a lot of crap to copy paste so let's make it easier
var mentorweb = new projectObject('Mentor Web', 'images/mentorweb.png');
mentorweb.descriptionString = 'Web application made using AngularJS, html, css. Made to match mentors and mentees.'
