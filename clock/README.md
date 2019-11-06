# Pokéclock

This clock was made in P5js. Best way to see it is using this link: 
https://editor.p5js.org/Yoshiplayr/present/hz3q9w2WM
Because of all the images, running the code found in the file yourself likely wouldn't work.

To tell the time, you use the respective Pokémon's dex number, for example, Bulbasaur is one, Charmander is 4, Pikachu is 25, and so on. 
You read the clock from left to right - Hours in the Kanto Pokédex, Minutes in the Kalos Pokédex, Seconds in the Rotom Dex.
So, for a time example, Weedle Nidorino Pikachu is 13 hours, 33 minutes, and 25 seconds

The inspiration is sort of from the Golan Levin clocks we saw in class, the book one specifically made me think of the horizontal layout in a more abstract way.
Otherwise, my thought process was purely thinking about how I could represent numbers with symbols, and given how gaming-centric my other projects have been, Pokémon just seemed like a good fit.

This time, the coding process was substantially easier now that I was more familiar with P5js. The problem I had with the last assignment was loading in the images, but now that I was able to do that adding the images was an easy, yet time consuming, process.
The only trouble I really had was working with the if_else function, but after simply copy-pasting the example from P5js's reference page and messing around where values were placed, it all ended up working out. Making the other images disappear when the new ones appeared wasn't hard, the Pokédexes cover up the new images instantly, but the original clock without the dexes I simply added a clear command under the first else and it cleared all the old images. The original version of the clock can be seen here:
https://editor.p5js.org/Yoshiplayr/present/IuIMghPKm

