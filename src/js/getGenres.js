// import { genres } from './data/genres';

// const getGenres = ids => {
//   const arr = [];
//   ids.forEach(id => {
//     if (genres[id]) {
//       arr.push(genres[id]);
//     }
//   });
//   if (arr.length <= 2) {
//     return arr;
//   } else {
//     return arr.slice(0, 2) + ', Other';
//   }
// };

// function getG(arr) {
//   const array = [];
//   arr.forEach(el => {
//     array.push(el.name);
//   });

//   if (array.length <= 2) {
//     return array;
//   } else {
//     return array.slice(0, 2) + ', Other';
//   }
// }

function getGenres(id,gnrArr) {
    const genreNamesSlice = [];
  gnrArr.filter((i) => {
    i.map((r) => {
      if (id.includes(r.id)) {
        genreNamesSlice.push(r.name)
          }
    })
  });
  if (genreNamesSlice.length <= 2) {
    console.log(genreNamesSlice)
    return genreNamesSlice;
  } else {
    return genreNamesSlice.slice(0, 2) + ', Other';
  }
};

function getGenresLib(id) {
  console.log(id)
    const genreNamesSlice = [];
    id.map(i => genreNamesSlice.push(i.name));
  if (genreNamesSlice.length <= 2) {
    console.log(genreNamesSlice)
    return genreNamesSlice;
  } else {
    return genreNamesSlice.slice(0, 2) + ', Other';
  }
};

export {getGenres, getGenresLib}
