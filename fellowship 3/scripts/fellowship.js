console.log("Linked.");

// Dramatis Personae
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

var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`

   var body1 = document.getElementsByTagName('body')[0];
   var section = document.createElement('section');

   section.id = 'middle-earth';

   for (var i = 0; i < lands.length; i++) {
   		var article = document.createElement('article');
      var land = document.createTextNode('<h1>' + lands[i] + '</h1>');

      article.appendChild(land);
      section.appendChild(article);
   }

   body1.insertBefore(section, body1.firstChild);
};

var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`

   var unorderedList = document.createElement('ul');
   var shire = document.getElementsByTagName('article')[0];

   for (var x = 0; x < hobbits.length; x++) {
      var lineItem = document.createElement('li');
      var lineItemText = document.createTextNode(hobbits[x]);

      lineItem.appendChild(lineItemText);
      unorderedList.appendChild(lineItem);
   }

   shire.appendChild(unorderedList);
};

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`

   var div = document.createElement('div');
   var first = document.getElementsByTagName('li')[0];

   div.id = 'the-ring';
   div.className = 'magic-imbued-jewelry';

   first.appendChild(div);
};

var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`

   var aside = document.createElement('aside');
   var unorderedList2 = document.createElement('ul');
   var rivendell = document.getElementsByTagName('article')[1];

   for (var z = 0; z < buddies.length; z++) {
      var lineItem2 = document.createElement('li');
      var lineItemText2 = document.createTextNode(buddies[z]);

      lineItem2.appendChild(lineItemText2);
      unorderedList2.appendChild(lineItem2);
   }

   aside.appendChild(unorderedList2);
   rivendell.appendChild(aside);
};

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`

   var tmpBuddies = document.getElementsByTagName('li');

   for (var a = 0; a < tmpBuddies.length; a++) {
    if (tmpBuddies[a].innerHTML === "Strider") {
      tmpBuddies[a].innerHTML = "Aragorn";
    }
   }
};

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`

   var oldShire = document.getElementsByTagName('ul')[0];
   var rivendell = document.getElementsByTagName('aside')[0];
   var newHobbits = document.createElement('ul');

   while (oldShire.childNodes.length) {
      newHobbits.appendChild(oldShire.firstChild);
   }

   oldShire.remove();
   rivendell.appendChild(newHobbits);
};

var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party

    var theFellowship = document.createElement('div');
    var rivendellDiv = document.getElementsByTagName('article')[1];
    var allCharacters = document.getElementsByTagName('ul');
    var newGroupList = document.createElement('ul');

    theFellowship.id = 'the-fellowship';

    for (var c = 0; c < allCharacters.length; c++) {
      while (allCharacters[c].childNodes.length) {
          alert(allCharacters[c].firstChild.innerHTML + " has joined your party.");

          newGroupList.appendChild(allCharacters[c].firstChild);
      }
    }

    var removeAside = document.getElementsByTagName('aside')[0];
    removeAside.remove();

    theFellowship.appendChild(newGroupList);
    rivendellDiv.appendChild(theFellowship);
};

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border

   var changeName = document.getElementsByTagName('li');

   for (var j = 0; j < changeName.length; j++) {
      if (/Gandalf/.test(changeName[j].innerHTML)) {
          changeName[j].innerHTML = "Gandalf the White";
          changeName[j].style.backgroundColor = "white";
          changeName[j].style.border = "2px solid grey";
      }
   }
};

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship

   var removeBoromir = document.getElementsByTagName('li');
 
   alert("The Horn of Gondor has been blown!");

   for (var k = 0; k < removeBoromir.length; k++) {
      if (/Boromir/.test(removeBoromir[k].innerHTML)) {
          removeBoromir[k].remove();
      }
   }
};

var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`

    var mordorDiv = document.createElement('div');
    var mordorArticle = document.getElementsByTagName('article')[2];
    var outOfFellowship = document.getElementsByTagName('li');
    var newGroupList2 = document.createElement('ul');

    mordorDiv.id = 'mount-doom';

    var tempCounter = 0;

    for (var z = 0; z < outOfFellowship.length; z++) {
        if (((outOfFellowship[tempCounter].innerHTML).indexOf("Frodo") != -1) || ((outOfFellowship[tempCounter].innerHTML).indexOf("Sam") != -1)) {
          newGroupList2.appendChild(outOfFellowship[tempCounter]);

          tempCounter--   //to accommodate the change in the array length
        }

          tempCounter++
    }

    mordorDiv.appendChild(newGroupList2);
    mordorArticle.appendChild(mordorDiv);
};

var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom

   var gollumDiv = document.createElement('div');
   var mordorArticle = document.getElementsByTagName('article')[2];
   var mountDoom = document.getElementById('mount-doom');

   gollumDiv.id = 'gollum';
   mordorArticle.appendChild(gollumDiv);

   document.getElementsByClassName('magic-imbued-jewelry')[0].removeAttribute('id');
   gollumDiv.className = "the-ring";

   mountDoom.appendChild(gollumDiv);
};

var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`

   var characters = document.getElementsByTagName('li');
   var shireList = document.createElement('ul');
   var theShire = document.getElementsByTagName('article')[0];

   document.getElementById('gollum').remove();

   for (var z = 0; z < characters.length; z++) {
      if ((characters[z].innerHTML.indexOf("'") != -1) || (characters[z].innerHTML.indexOf("Frodo") != -1)) {
          shireList.appendChild(characters[z]);

          z--
      }
   }

   theShire.append(shireList);
};
