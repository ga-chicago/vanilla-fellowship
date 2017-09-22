// Dramatis Personae
const hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir',
  'Todd Herskovitz of the Hill People'
];

const lands = ['The Shire', 'Rivendell', 'Mordor'];
const body = $('body');

const makeMiddleEarth = () => {
    // create a section tag with an id of middle-earth
    const middleEarth = $('<section ID="middle-earth">');
    for(let i = 0; i < lands.length; i++) {
      // add each land as an article tag
      const land = $('<article>');
      // inside each article tag include an h1 with the name of the land
      const name = $('<h1>')
      name.text(lands[i])
      land.append(name);
      middleEarth.append(land);
    }
    // append middle-earth to your document body
    body.append(middleEarth);
}
makeMiddleEarth();

const theShire = $(document.body).find( ":contains(Shire)" )
const rivendell = $(document.body).find( ":contains(Rivendell)" )
const mordor = $(document.body).find( ":contains(Mordor)" );
const makeHobbits = () => {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  const hobbitList = $('<ul>');
  for(let i = 0; i < hobbits.length; i++) {
  // give each hobbit a class of hobbit
    const hobbit = $('<li class="hobbit">');
    hobbit.text(hobbits[i]);
    hobbitList.append(hobbit);
  }
  theShire.append(hobbitList);
}
makeHobbits();


const frodo = $(document.body).find( ":contains(Frodo)" );
const keepItSecretKeepItSafe = () => {
  // create a div with an id of 'the-ring'
  const theRing = $('<div ID="the-ring" class="magic-imbued-jewelry">');
  // add the ring as a child of Frodo
  frodo.append(theRing);
}
keepItSecretKeepItSafe();


const makeBuddies =  () => {
  // create an aside tag
  const aside = $('<aside>');
  const buddyList = $('<ul>');
  for(let i = 0; i < buddies.length; i++) {
    // attach an unordered list of the 'buddies' in the aside
    const buddy = $('<li>');
    buddy.text(buddies[i]);
    buddyList.append(buddy);
  }
  // insert your aside as a child element of rivendell
  aside.append(buddyList);
  rivendell.append(aside);
}
makeBuddies();

const strider = $(document.body).find( ":contains(Strider)");

const beautifulStranger = () => {
  // change the 'Strider' textnode to 'Aragorn'
  strider.text('Aragon');
}
beautifulStranger();

const hobbitses = $(document.body).find( ":contains(Hobbit)");
const leaveTheShire = () => {
  // assemble the hobbits and move them to Rivendell
  rivendell.append(hobbitses);
}
leaveTheShire();


//What is query selector all? Check the docs. 
const fellowshipMembers = rivendell.find( ":contains(<li)>)");

const forgeTheFellowShip = () => {
  // create a new div called 'the-fellowship' within rivendell
  const theFellowship = $("<div ID='the-fellowship'>");
  for(let i = 0; i < fellowshipMembers.length; i++) {
    theFellowship.append(fellowshipMembers[i]);
    // alert(fellowshipMembers[i].textContent + ' has joined the fellowship!');
  }
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  rivendell.append(theFellowship);
}
forgeTheFellowShip();


const gandalf = fellowshipMembers[0];
const theBalrog = () => {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  gandalf.text('Gandalf the White');
  // apply style to the element
  gandalf.css('border', '3px solid gray');
  // make the background 'white', add a grey border
  gandalf.css('backgroundColor', 'white');
}
theBalrog();


const boromir = fellowshipMembers[4];
const hornOfGondor = () => {
  alert('the horn of gondor has blown');
  // pop up an alert that the horn of gondor has been blown
  boromir.css('textDecoration', 'line-through');
  // Boromir's been killed by the Uruk-hai!
  // Remove Boromir from the Fellowship
  boromir.parentNode.remove(boromir)
}
hornOfGondor();


const sam = fellowshipMembers[6];
const itsDangerousToGoAlone = () => {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  mordor.append(frodo);
  mordor.append(sam);
  const mountDoom = $('<div ID="mount-doom">');
  mordor.append(mountDoom);
  // add a div with an id of 'mount-doom' to Mordor
}
itsDangerousToGoAlone();


const gollum = 0, theRing = 0;
const weWantsIt = () => {
  // Create a div with an id of 'gollum' and add it to Mordor
  gollum = $('<div ID="gollum">');
  theRing = frodo.find( ":contains(ring)");
  gollum.append(theRing);
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  const mountDoom = mordor.find( ":contains(doom)>");
  mountDoom.append(gollum);
}
weWantsIt();


const thereAndBackAgain = () => {
  gollum.parent.remove(gollum);
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  const hobbitUL = ('<ul>');
  const hobbits = body.find( ":contains(hobbits)>");
  for(let i = 0; i < hobbits.length; i++){
    hobbitUL.append(hobbits[i]);
  }
  theShire.append(hobbitUL);
  // Move all the hobbits back to the shire
}
thereAndBackAgain();