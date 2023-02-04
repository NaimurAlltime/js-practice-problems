const nationalAnthem = 'amar sonar bangla. ami tomay valobasi. chirodin tomar akash tomar batas. amar prane bajay bashi';

const parts = nationalAnthem.split(' ');
const sentences = nationalAnthem.split('.');
const chars = nationalAnthem.split('');
// console.log(parts);
// console.log(sentences);
// console.log(chars);

// slice 
console.log(nationalAnthem.slice(5, 17));
console.log(nationalAnthem.substring(5, 18));
console.log('------------');

// join 
const lines = [  'amar sonar bangla',
'Ami tomay valobasi',
'Chirodin tomar akash tomar batas',
'Amar prane bajay bashi'];

const newSong = lines.join('. ');
console.log(newSong)
