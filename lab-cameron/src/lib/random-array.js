const randomArray = number => {

  const arr = [];

  for (let i = 0; i < number; i++) {
    const randomInt = Math.floor(Math.random() * 100);
    arr.push(randomInt);
  }

  return arr;
};

module.exports = randomArray;
