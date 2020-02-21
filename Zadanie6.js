String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const pigLatinTranslate = text => {
  let words = text.split(" ");
  let transformed = words.map(word => {
    const element = word.toLowerCase();
    let first = element.slice(0, 1);
    let middle = element.slice(1, element.length);
    return middle + first + "ay";
  });

  return transformed.join(" ").capitalize();
};

console.log(pigLatinTranslate("The quick brown fox"));
