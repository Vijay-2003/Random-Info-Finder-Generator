let fact4text = document.getElementById("fact4text")
let fact4btn = document.getElementById("fact4btn")
let spacefact = [
    'The third closest dwarf planet to the sun is Haumea.',
    'Twelve American astronauts landed on Earths Moon during NASAs Apollo program from 1969 to 1972 and brought back rock samples. During that mission, astronaut Neil Armstrong was the first man to walk on the surface of the Earths moon.',
    'The moons of Uranus are named after characters created by Alexander Pope and William Shakespeare.',
    'In ancient times, a total lunar eclipse or disappearance of the Moon meant that the gods were angry with the people.',
    'The Magellanic Clouds are often reclassified as Magellanic spiral galaxies because they both show signs of a bar structure.',
    'The last appearance of Halleys Comet occurred in 1986.',
    'There is a fairly small central bulge in the Pinwheel Galaxy with about 3 billion solar masses. However, almost no stars are born there compared to many more born in the spiral arms.',
    'The ejected stars of the galaxies extend much farther away and beyond the original galaxies and results in its antenna shape.',
    'There are parts of the universe that simply cannot be seen or detected and scientists refer to these parts as dark matter and dark energy.',
    'When stars are all together and form a pattern, it is called a constellation.',
    'The inner planets rotate slower than the outer planets, which makes them more round at their poles. The inner planets are also denser than the outer planets.',
    'Many scientific experiments have been done to determine if there is life on Mars. There is still no proof of life, but many believe there is a good possibility that there was once life on Mars.',
    'The Hubble Space Telescope is traveling at about 5 miles per second.',
    'The black holes that are said to be located in the center of galaxies are typically a billion times heavier than the Sun.',
    'In 2005 another Kuiper Belt Object was discovered. This dwarf planet is called Eris and it is smaller than Pluto. It takes Eris 580 years to revolve around the sun.',
    'Our solar system is 4.57 billion years old.',
    'Neptunes moon, Triton, orbits the planet backwards. It is the only large moon in our solar system that does this.',
    'Mercury & Venus are the only 2 planets in our solar system that have no moons.',
    'If a star passes too close to a black hole, it can be torn apart.',
    'The hottest planet in our solar system is Venus.',
    'Enceladus, one of Saturns smaller moons, reflects 90% of the Suns light.',
    'The highest mountain discovered is the Olympus Mons, which is located on Mars.',
    'The Whirlpool Galaxy (M51) was the first celestial object identified as being spiral.',
    'A light-year is the distance covered by light in a single year.',
    'The Milky Way galaxy is 105,700 light-years wide.',
    'The Sun weighs about 330,000 times more than Earth.',
    'Footprints left on the Moon wont disappear as there is no wind.',
    'Because of lower gravity, a person who weighs 220 lbs on Earth would weigh 84 lbs on Mars.',
    'Earth is the only planet not named after a God.',
    'Planets are able to orbit because there is no friction in outer space.',
    'There are millions of meteors in the Earths atmosphere every day.',
];
fact4btn.addEventListener("click", function fact4f(){
    let randomspacefact = spacefact[Math.floor(Math.random() * spacefact.length)]
    fact4text.innerText = randomspacefact;
})