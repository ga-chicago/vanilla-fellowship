console.log("Linked.");
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;
//Q1
var makeMiddleEarth = function (){
    var secMiddleEarth = document.createElement('section')
    secMiddleEarth.id = 'middle-earth';
    console.log(secMiddleEarth)
    for (var i = 0; i < lands.length; i++) {
      var land = document.createElement('article');
      console.log(land);
      var midEarthH1 = document.createElement('h1');
      console.log(midEarthH1)
      midEarthH1.innerHTML = lands[i];
      console.log(midEarthH1.innerHTML);
      land.appendChild(midEarthH1);
      console.log(land);
      secMiddleEarth.appendChild(land);
    }
    body.appendChild(secMiddleEarth);
};
makeMiddleEarth();

//Q2
  theShire = body.getElementsByTagName('article')[0];
var makeHobbits = function() {
  var hobListUl  = document.createElement('ul');
  for (var i = 0; i < hobbits.length; i++) {
    var hobLi = document.createElement('li');
    hobLi.className = 'hobbit';
    hobLi.innerHTML = hobbits[i];
    hobListUl.appendChild(hobLi);
  }
    theShire.appendChild(hobListUl);
}
makeHobbits();

//Q3
var frodo = body.getElementsByTagName('li')[0];
var keepItSecretKeepItSafe = function(){
  var divRing = document.createElement('div');
  divRing.id = 'the-ring';
  divRing.className = 'magic-imbued-jewelry';
  frodo.appendChild(divRing);
}
keepItSecretKeepItSafe();

//Q4
var rivendellV = body.getElementsByTagName('article')[1];
var makeBuddies = function(){
  var asideB = document.createElement('aside');
  var buddyList = document.createElement('ul');
  for (var i = 0; i < buddies.length; i++) {
    var buddy = document.createElement('li');
    buddy.innerHTML = buddies[i];
    buddyList.appendChild(buddy);
}
  asideB.appendChild(buddyList);
  rivendellV.appendChild(asideB);
}

makeBuddies();

//Q5

var strider = rivendellV.getElementsByTagName('li')[3];
var beautifulStranger = function(){
    strider.innerHTML = 'Aragon';
}
beautifulStranger();

//Q6
var hobbits = theShire.getElementsByTagName('ul');
var leaveTheShire = function(){
  rivendellV.appendChild(hobbits[0])
}
leaveTheShire();

//Q7
var fellowshipMembers = rivendellV.querySelectorAll('li');
var forgeTheFellowship = function(){
  var theFellowship = document.createElement('div');
  theFellowship.id = 'the-fellowship';
  for (var i = 0; i < fellowshipMembers.length; i++) {
    theFellowship.appendChild(fellowshipMembers[i]);
    alert(fellowshipMembers[i].textContent + ' has joined the fellowship!');
  }
  rivendellV.appendChild(theFellowship);
}

forgeTheFellowship();

//Q8
var newG = fellowshipMembers[0];
var theBalrog = function(){
  newG.innerHTML = 'Gandalf the White';
  newG.style.border = '3px solid Grey'
  newG.style.backgroundColor = 'White';
}
theBalrog();

//Q9
var boromir = fellowshipMembers[4];
var hornOfGondor = function(){
  alert('The horn of Gondor has been blown!');
  boromir.style.textDecoration = 'linethrough';
  boromir.parentNode.removeChild(boromir)
};
hornOfGondor();

//Q10
var Mordor = body.getElementsByTagName('article')[2];
var sam = fellowshipMembers[6];
var itsDangerousToGoAlone = function(){
  Mordor.appendChild(frodo);
  Mordor.appendChild(sam);
  var mountDoom = document.createElement('div');
  mountDoom.id = 'mount-doom';
  Mordor.appendChild(mountDoom);

};
itsDangerousToGoAlone();

//Q11
var gollum;
var theRing;
var weWantsIt = function(){
  gollum = document.createElement('div');
  gollum.id = 'gollum';
  theRing = frodo.getElementsByTagName('div')[0];
  gollum.appendChild(theRing);
  var mountDoom = Mordor.getElementsByTagName('div')[0];
  mountDoom.appendChild(gollum);
}
weWantsIt();

//Q12

var thereAndBackAgain = function () {
  gollum.parentElement.removeChild(gollum);
  var hobbitUL = document.createElement('ul');
  var hobbits = body.querySelectorAll('.hobbit');
  for(var i = 0; i < hobbits.length; i++){
    hobbitUL.appendChild(hobbits[i]);
  }
  theShire.appendChild(hobbitUL);
}
thereAndBackAgain();
