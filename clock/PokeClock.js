//like the screensaver, I started my code with preloading the images I'll be using for my clock. In this case, the first 59 Pokémon in the Pokédex, the 3 Pokédexes, and the Pokeball image
function preload()
{
  // load image
  Bulb = loadImage("Bulb.png");
  Ivy= loadImage("Ivy.png");
  Venu = loadImage("Venu.png");
  Char = loadImage("4Char.png");
  Charm = loadImage("5Charm.png");
  Chariz = loadImage("6Chariz.png");
  Squi = loadImage("7Squi.png");
  War = loadImage("8War.png");
  Blast = loadImage("9Blast.png");
  Cat = loadImage("10Cat.png");
  Meta = loadImage("11Meta.png");
  Butt = loadImage("12Butt.png");
  Wee = loadImage("13Wee.png");
  Kak = loadImage("14Kak.png");
  Bee = loadImage("15Bee.png");
  Pid = loadImage("16Pid.png");
  Pidg = loadImage("17Pidg.png");
  Pidge = loadImage("18Pidge.png");
  Rat = loadImage("19Rat.png");
  Rati = loadImage("20Rati.png");
  Spe = loadImage("21Spe.png");
  Fea = loadImage("22Fea.png");
  Eka = loadImage("23Eka.png");
  Arb = loadImage("24Arb.png");
  Pik = loadImage("25Pik.png");
  Rai = loadImage("26Rai.png");
  Sand = loadImage("27Sand.png");
  Sands = loadImage("28Sands.png");
  Nid = loadImage("29Nid.png");
  Nidor = loadImage("30Nidor.png");
  Queen = loadImage("31Queen.png");
  Nid2 = loadImage("32Nid.png");
  Nidor2 = loadImage("33Nidor.png");
  King = loadImage("34King.png");
  Clef = loadImage("35Clef.png");
  Clefa = loadImage("36Clefa.png");
  Vulp = loadImage("37Vulp.png");
  Nine = loadImage("38Nine.png");
  Jigg = loadImage("39Jigg.png");
  Wigg = loadImage("40Wigg.png");
  Zub = loadImage("41Zub.png");
  Gol = loadImage("42Gol.png");
  Odd = loadImage("43Odd.png");
  Gloo = loadImage("44Gloo.png");
  Vile = loadImage("45Vile.png");
  Par = loadImage("46Par.png");
  Para = loadImage("47Para.png");
  Ven = loadImage("48Ven.png");
  Moth = loadImage("49Moth.png");
  Dig = loadImage("50Dig.png");
  Dug = loadImage("51Dug.png");
  Meow = loadImage("52Meow.png");
  Pers = loadImage("53Pers.png");
  Psy = loadImage("54Psy.png");
  Gold = loadImage("55Gold.png");
  Mankey = loadImage("56Mankey.png");
  Prime = loadImage("57Prime.png");
  Grow = loadImage("58Grow.png");
  Arc = loadImage("59Arc.png");
  Poke = loadImage("0Pokeball.png");
  Dex = loadImage("pokedex.png");
  KDex = loadImage("KalosDez.png");
  RDex = loadImage("RotomDex.png");
}

//Here's the traditional "create canvas" function these all start with
function setup() {
  createCanvas(1600, 900);
}

//here's where things get more interesting. This is where the images are displayed.
function draw(){
  //first, the Pokédexes. These had to be displayed first so they're on the bottom layer, and so I could easily place the Pokemon into the center of each dex
  image(RDex,50,-400,2300,1200);
  image(Dex,-50,0,600,800);
  image(KDex, 550, 0, 400, 780);
  
  //Now for the stars of the show, the Pokemon. I use the if function to have each Pokemon show up at their specific second, and because of how the Pokédexes are placed, the prior Pokémon isn't visible. If it isn't the Pokemon's turn, it instead draws a Bulbasaur picture offscreen. I did this a different way on my previous version, whre instead of the Pokédex hiding the previous Pokemon, I used clear(Bulb) which would instead clear the space. That didn't work when I used the Pokedexes for some reason, but it isn't noticeable with how the Pokédexes cover up old images.
  if(second()===1){
    image(Bulb,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
  
    if(second()===2){
    image(Ivy,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
  
    if(second()===3){
    image(Venu,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
  
    if(second()===4){
    image(Char,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
  
    if(second()===5){
    image(Charm,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
  
    if(second()===6){
    image(Chariz,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
  
    if(second()===7){
    image(Squi,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
  
      if(second()===8){
    image(War,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
  
      if(second()===9){
    image(Blast,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
  
      if(second()===10){
    image(Cat,1100,325,250,250);
  }else{image(Cat,500,5000,50,50)}
  
      if(second()===11){
    image(Meta,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===12){
    image(Butt,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===13){
    image(Wee,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===14){
    image(Kak,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===15){
    image(Bee,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===16){
    image(Pid,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===17){
    image(Pidg,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===18){
    image(Pidge,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===19){
    image(Rat,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===20){
    image(Rati,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===21){
    image(Spe,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===22){
    image(Fea,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===23){
    image(Eka,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===24){
    image(Arb,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===25){
    image(Pik,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
   
      if(second()===26){
    image(Rai,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===27){
    image(Sand,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===28){
    image(Sands,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===29){
    image(Nid,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===30){
    image(Nidor,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===31){
    image(Queen,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===32){
    image(Nid2,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===33){
    image(Nidor2,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===34){
    image(King,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===35){
    image(Clef,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===36){
    image(Clefa,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===37){
    image(Vulp,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===38){
    image(Nine,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===39){
    image(Jigg,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===40){
    image(Meta,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===41){
    image(Zub,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===42){
    image(Gol,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===43){
    image(Odd,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===44){
    image(Gloo,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===45){
    image(Vile,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===46){
    image(Par,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===47){
    image(Para,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===48){
    image(Ven,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===49){
    image(Moth,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===50){
    image(Dig,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===51){
    image(Dug,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===52){
    image(Meow,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===53){
    image(Pers,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===54){
    image(Psy,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===55){
    image(Gold,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===56){
    image(Mankey,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===57){
    image(Prime,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===58){
    image(Grow,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 
      if(second()===59){
    image(Arc,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
 //it took me a while to figure out why it wouldn't display an image when the second===60, but after looking I realized it's second 0, so I decided to put a Pokeball for that second because it was a sort of "source" for the Pokeémon, and it meant I wouldn't have to change every second value for the other Pokemon.
      if(second()===0){
    image(Poke,1100,325,250,250);
  }else{image(Bulb,1,5000,1,1)}
  

//This is essentially the exact same as the second function, but using hour values instead, and placed in the first Pokédex.
   if(hour()===1){
    image(Bulb,130,290,190,190);
  }else{image(Bulb,1,5000,1,1)}
  
    if(hour()===2){
    image(Ivy,130,290,190,190);
  }else{image(Bulb,1,5000,1,1)}
  
    if(hour()===3){
    image(Venu,130,290,190,190);
  }else{image(Bulb,1,5000,1,1)}
  
    if(hour()===4){
    image(Char,130,290,190,190);
  }else{image(Bulb,1,5000,1,1)}
  
    if(hour()===5){
    image(Charm,130,290,190,190);
  }else{image(Bulb,1,5000,1,1)}
  
    if(hour()===6){
    image(Chariz,130,290,190,190);
  }else{image(Bulb,1,5000,1,1)}
  
    if(hour()===7){
    image(Squi,130,290,190,190);
  }else{image(Bulb,1,5000,1,1)}
  
      if(hour()===8){
    image(War,130,290,190,190);
  }else{image(Bulb,1,5000,1,1)}
  
      if(hour()===9){
    image(Blast,130,290,190,190);
  }else{image(Bulb,1,5000,1,1)}
  
      if(hour()===10){
    image(Cat,130,290,190,190);
  }else{image(Cat,500,5000,50,50)}
  
      if(hour()===11){
    image(Meta,130,290,190,190);
  }else{image(Bulb,1,5000,1,1)}
 
      if(hour()===12){
    image(Butt,130,290,190,190);
  }else{image(Bulb,1,5000,1,1)}
 
      if(hour()===13){
    image(Wee,130,290,190,190);
  }else{image(Bulb,1,5000,1,1)}
 
      if(hour()===14){
    image(Kak,130,290,190,190);
  }else{image(Bulb,1,5000,1,1)}
 
      if(hour()===15){
    image(Bee,130,290,190,190);
  }else{image(Bulb,1,5000,1,1)}
 
      if(hour()===16){
    image(Pid,130,290,190,190);
  }else{image(Bulb,1,5000,1,1)}
 
      if(hour()===17){
    image(Pidg,130,290,190,190);
  }else{image(Bulb,1,5000,1,1)}
 
      if(hour()===18){
    image(Pidge,130,290,190,190);
  }else{image(Bulb,1,5000,1,1)}
 
      if(hour()===19){
    image(Rat,130,290,190,190);
  }else{image(Bulb,1,5000,1,1)}
 
      if(hour()===20){
    image(Rati,130,290,190,190);
  }else{image(Bulb,1,5000,1,1)}
 
      if(hour()===21){
    image(Spe,130,290,190,190);
  }else{image(Bulb,1,5000,1,1)}
 
      if(hour()===22){
    image(Fea,130,290,190,190);
  }else{image(Bulb,1,5000,1,1)}
 
      if(hour()===23){
    image(Eka,130,290,190,190);
  }else{image(Bulb,1,5000,1,1)}
 
      if(hour()===0){
    image(Poke,130,290,190,190);
  }else{image(Bulb,1,5000,1,1)}
  
  //again, essentially the same thing as the previous funcitons, but with the minute function instead of second


if(minute()===1){
    image(Bulb,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
  
    if(minute()===2){
    image(Ivy,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
  
    if(minute()===3){
    image(Venu,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
  
    if(minute()===4){
    image(Char,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
  
    if(minute()===5){
    image(Charm,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
  
    if(minute()===6){
    image(Chariz,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
  
    if(minute()===7){
    image(Squi,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
  
      if(minute()===8){
    image(War,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
  
      if(minute()===9){
    image(Blast,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
  
      if(minute()===10){
    image(Cat,575,225,350,350);
  }else{image(Cat,500,5000,50,50)}
  
      if(minute()===11){
    image(Meta,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===12){
    image(Butt,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===13){
    image(Wee,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===14){
    image(Kak,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===15){
    image(Bee,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===16){
    image(Pid,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===17){
    image(Pidg,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===18){
    image(Pidge,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===19){
    image(Rat,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===20){
    image(Rati,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===21){
    image(Spe,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===22){
    image(Fea,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===23){
    image(Eka,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===24){
    image(Arb,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===25){
    image(Pik,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
   
      if(minute()===26){
    image(Rai,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===27){
    image(Sand,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===28){
    image(Sands,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===29){
    image(Nid,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===30){
    image(Nidor,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===31){
    image(Queen,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===32){
    image(Nid2,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===33){
    image(Nidor2,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===34){
    image(King,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===35){
    image(Clef,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===36){
    image(Clefa,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===37){
    image(Vulp,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===38){
    image(Nine,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===39){
    image(Jigg,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===40){
    image(Meta,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===41){
    image(Zub,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===42){
    image(Gol,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===43){
    image(Odd,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===44){
    image(Gloo,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===45){
    image(Vile,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===46){
    image(Par,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===47){
    image(Para,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===48){
    image(Ven,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===49){
    image(Moth,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===50){
    image(Dig,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===51){
    image(Dug,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===52){
    image(Meow,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===53){
    image(Pers,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===54){
    image(Psy,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===55){
    image(Gold,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===56){
    image(Mankey,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===57){
    image(Prime,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===58){
    image(Grow,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===59){
    image(Arc,575,225,350,350);
  }else{image(Bulb,500,5000,50,50)}
 
      if(minute()===0){
    image(Poke,575,225,350,250);
  }else{image(Bulb,500,5000,50,50)}



}
