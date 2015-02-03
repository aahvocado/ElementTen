var mainprojects = [];//project page
var games = [];
var designs = [];
$(document).ready(function(){
	initAllProjects();
	createProjects(mainprojects, 'projects');
	createProjects(games, 'games');
	createProjects(designs, 'designs');

	//clear body data from modal (mostly used so videos will stop)	
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
		if(p.date !== ''){
			$('.modal-title').html(p.name + ' ('+p.date+')');
		}else{
			$('.modal-title').html(p.name);
		}
		$('.modal-body').html(p.descriptionString);
		if(p.weburl === ''){
			$('.btn-primary').hide();
		}else{
			$('.btn-primary').show();
		}
		$('.view-project').click(function(){
			window.location = p.weburl;
		});
	});
}


//put all these project objects into arrays man
function initAllProjects(){
	//main projects
	mainprojects = [];
	mainprojects.push(betrayalhelper);
	mainprojects.push(mentorweb);
	mainprojects.push(atlcivicdashboard)

	//games
	games = [];
	games.push(perspectivegame);
	games.push(towerofdormin);
	games.push(quietus);
	games.push(survivorgame);
	games.push(pongrevolutions);
	games.push(rainvolcano);
	games.push(wanteverything);
	games.push(skyfall);

	//designs
	designs = [];
	designs.push(textposter);
	designs.push(workreadygrad);
	designs.push(robocop);
	designs.push(fastshop);
	designs.push(tiamatmedia);
}

//project class
function projectObject(name, imgpath){
	this.name = name;
	this.imgpath = imgpath;
	this.descriptionString = '';//give me a description!
	//url var?
}

/*
	PROJECTS
*/
var mentorweb = new projectObject('MentorWeb', 'images/mentorweb.png');
mentorweb.date = '2014';
mentorweb.subname = 'mentorweb';
mentorweb.weburl = 'http://dev.m.gatech.edu/d/mosborne8/w/MentorAngular/';
mentorweb.descriptionString = 'Web application made using AngularJS, HTML, CSS. Made to match mentors and mentees for the Georgia Tech BME program. Developed using Agile methodologies and worked heavily with a client to gather requirements and make an awesome application. Check out the video we made for it! <br><br>'+
				'<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/c6vKkqgn3K4" frameborder="0" allowfullscreen></iframe></div>'

var betrayalhelper = new projectObject('Betrayal at House on the Hill Helper', 'images/betrayalhelper.png');
betrayalhelper.date = '2015';
betrayalhelper.subname = 'betrayalhelper';
betrayalhelper.weburl = 'http://www.elementten.com/BetrayalHelper/';
betrayalhelper.descriptionString = 'Personal project made using Semantic UI along with JQuery and Javascript to make a web application for the board game <a href="http://boardgamegeek.com/boardgame/10547/betrayal-house-hill">Betrayal at House on the Hill</a> because the pieces it came with were not functional enough.';

var atlcivicdashboard = new projectObject('Atlanta Civic Dashboard', 'images/atlcivicdashboard.png');
atlcivicdashboard.date = '2013';
atlcivicdashboard.subname = 'atlcivicdashboard';
atlcivicdashboard.weburl = 'http://egg.lmc.gatech.edu/friendfinder/CivicDashboard/index.html';
atlcivicdashboard.descriptionString = "Made using Javascript and open source projects Gridster and ALS. Prototyped for to organize data from Atlanta's services.";

/*
	GAMES
*/
var perspectivegame = new projectObject('Perspective', 'images/perspectivegame.png');
perspectivegame.date = '2014';
perspectivegame.subname = 'perspectivegame';
perspectivegame.weburl = 'http://www.newgrounds.com/portal/view/650719';
perspectivegame.descriptionString = "Made in Unity. I was one of the artists and level designers on a team to make this wonderful puzzle game. It's a platforming game with 2D and 3D perspective swapping as the main mechanics. It was well received and someone even made a walkthrough video for us! Check it out! <br><br>"+
								'<div class="embed-responsive embed-responsive-16by9"><iframe width="420" height="315" src="https://www.youtube.com/embed/CQf3rCo6vJs" frameborder="0" allowfullscreen></iframe></div>'+
								"<br>Clicking view project will take you to play in on Newgrounds.";

var towerofdormin = new projectObject('Tower of Dormin', 'images/towerofdormin.png');
towerofdormin.date = '2013';
towerofdormin.subname = 'towerofdormin';
towerofdormin.weburl = 'http://vgdev.org/games/fall2013/towerofdormin/';
towerofdormin.descriptionString = "Personal project made using Flash and Actionscript 3. A sidescrolling-procedurally-generated-slashing game. Was made with some members of Georgia Tech's VGDev.";

var quietus = new projectObject('Quietus', 'images/quietus.png');
quietus.date = '2013';
quietus.subname = 'quietus';
quietus.weburl = 'http://www.elementten.com/unity/QuietusWebBuild.html';
quietus.descriptionString = "Developed in Unity. A unique art game that was issued as a challenge to my group in an attempt to bring a different subject to games. I was the lead concept artist as well as an assistant 3D modeler.";

var survivorgame = new projectObject('Survivor', 'images/survivorgame.png');
survivorgame.date = '';
survivorgame.subname = 'survivorgame';
survivorgame.weburl = 'http://www.elementten.com/other/DXSurvivor.gba';
survivorgame.descriptionString = 'Gameboy Advance game made in C. Meant to be an atmospheric game in an older technology. You will need a Gameboy Advance emulator to play this, alternatively you can try to play it <a href="http://jpfau.github.io/gbajs/">here</a> after downloading the rom. Pressing view project will download the ROM.';

var pongrevolutions = new projectObject('Pong Revolutions', 'images/pongrevolutions.png');
pongrevolutions.date = '2009';
pongrevolutions.subname = 'pongrevolutions';
pongrevolutions.weburl = 'http://www.kongregate.com/games/Neonaxil/p-revolutions';
pongrevolutions.descriptionString = "Developed in Flash. One of the earlist games I conceptualized. The game is essentially pong, except with RPG-esque skills to use to spice up the game.";

var skyfall = new projectObject('Skyfall', 'images/skyfall.png');
skyfall.date = '';
skyfall.subname = 'skyfall';
skyfall.weburl = 'http://www.elementten.com/skyfall_web/';
skyfall.descriptionString = "Developed in Unity. Group project done to examine the cinematic aspects of interaction. I was the creative lead and programmer. Pressing view project will take you to the game's website.";


var rainvolcano = new projectObject("I'm Going to Rain in Your Volcano", 'images/rainvolcano.png');
rainvolcano.date = '2010';
rainvolcano.subname = 'rainvolcano';
rainvolcano.weburl = 'http://www.kongregate.com/games/Neonaxil/im-going-to-rain-in-your-volcano';
rainvolcano.descriptionString = "Developed in Flash. This game happened when creating a theme around Island. I used the idea of a square island which then became a volcano. Then there was a cloud that was raining in the volcano and the rest is history. Pressing view project will take you to the game on Kongregate.";


var wanteverything = new projectObject('Want Everything', 'images/wanteverything.png');
wanteverything.date = '2010';
wanteverything.subname = 'wanteverything';
wanteverything.weburl = 'http://www.kongregate.com/games/Neonaxil/want-everything';
wanteverything.descriptionString = "Developed in Flash in 48 hours. A game based around the idea of a player's greed. I wanted to challenge a player to decide if they wanted to get more and more, or go for the one goal. Pressing view project will take you to the game on Kongregate.";


var newnull = new projectObject('', 'images/newnull.png');
newnull.date = '';
newnull.subname = 'newnull';
newnull.weburl = '';
newnull.descriptionString = "";

/*
	DESIGNS
*/
var workreadygrad = new projectObject('WorkReadyGrad Animated Info Video', 'images/workreadygrad.png');
workreadygrad.date = '';
workreadygrad.subname = 'workreadygrad';
workreadygrad.weburl = 'https://www.workreadygrad.com/';
workreadygrad.descriptionString = "Done in Flash and AfterEffects. I got the opportunity to work as an intern doing design work for WorkReadyGrad, and one of my jobs was to animate a video to show what WorkReadyGrad was all about. <br><br>" +
							'<div class="embed-responsive embed-responsive-16by9">'+
							'<iframe width="560" height="315" src="https://www.youtube.com/embed/d5oVKx72W2c" frameborder="0" allowfullscreen></iframe>'+
							'</div>'+
							"<br> Click view project to visit WorkReadyGrad.";

var textposter = new projectObject('Text Messaging Steps', 'images/textposter.png');
textposter.date = '2013';
textposter.subname = 'textposter';
textposter.weburl = 'http://imgur.com/a/d0Lhb#0';
textposter.descriptionString = "A satirical poster on how to send text messages and how easy it is to be lazy. Made in Photoshop."+
								'<img src="http://i.imgur.com/1SQVNnW.png">'+
								"Click the view project button to see iterations.";

var robocop = new projectObject('Robocop Dispatch Interface', 'images/robocop.png');
robocop.date = '2013';
robocop.subname = 'robocop';
robocop.weburl = 'http://elementten.com/design/robocop_grid/index.html';
robocop.descriptionString = "Made using Javascript. Designed as a mockup for a future technology of manipulating lots of real time police information.";

var fastshop = new projectObject('FastShop video', 'images/fastshop.png');
fastshop.date = '2013';
fastshop.subname = 'fastshop';
fastshop.weburl = '';
fastshop.descriptionString = "An assignment where the goal was to create a unique ubiquitous computing system. My goal was to speed the process of shopping instead of wandering around a grocery store. I animated a storyboard in Flash and gave narrated it through Audacity."+
							'<div class="embed-responsive embed-responsive-16by9">'+
							'<iframe width="560" height="315" src="https://www.youtube.com/embed/Seme_Fx0bGA" frameborder="0" allowfullscreen></iframe>'+
							'</div>';
var tiamatmedia = new projectObject('Tiamat Media', 'images/tiamatmedia.png');
tiamatmedia.date = '2012';
tiamatmedia.subname = 'tiamatmedia';
tiamatmedia.weburl = 'http://www.tiamatmedia.com';
tiamatmedia.descriptionString = "I was the lead graphic designer for a game group where we acted as a company with a working website. I did the main branding which constantly evolved as we identified what the company was meant to represent. ";

var newnull = new projectObject('', 'images/newnull.png');
newnull.date = '';
newnull.subname = 'newnull';
newnull.weburl = '';
newnull.descriptionString = "";
