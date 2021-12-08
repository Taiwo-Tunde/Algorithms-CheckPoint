function countSentence(strings) {
  let result = {
    sentenceLength: 0,
    wordsCount: 1,
    vowelCount: 0,
  };

  result.sentenceLength = strings.length;

  for (let i = 0; i < strings.length; i++) {
    if (strings[i] == " " || strings[i] == ".") {
      result.wordsCount += 1;
    }
  }

  let newSentence = Array.from(strings.toLowerCase());
  result.vowelCount = newSentence.filter((letter) =>
    "aeiou".includes(letter)
  ).length;
  return result;
}

console.log(countSentence("I am Working to be better than yesterday"));
