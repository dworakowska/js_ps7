const rotateLeftByOne = array => {
  let temp = array[0];
  let i;
  for (i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array[i] = temp; //przypisanie ostatniego elementu
  return array;
};

const rotateLeft = (array, k) => {
  for (let i = 0; i < k; i++) {
    rotateLeftByOne(array);
  }
  return array;
};

let array = [1, 2, 3, 4, 5, 6];
console.log(rotateLeft(array, 2));
