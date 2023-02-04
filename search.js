const nationalAnthem = 'amar sonar bangla ami tomay valobasi chirodin tomar akash tomar batas amar prane bajay bashi';

// const doesExit = nationalAnthem.includes('bangla');
// const doesExit = nationalAnthem.includes('bangladesh');

const searchString = 'BanGla';
const searchStringLower = searchString.toLowerCase();
const doesExitLower = nationalAnthem.toLowerCase();
const doesExit = doesExitLower.includes(searchStringLower);
console.log(doesExit);

const doesExitOneLine = nationalAnthem.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExitOneLine);