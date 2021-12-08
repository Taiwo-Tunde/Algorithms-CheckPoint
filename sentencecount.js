function sentenceRead(text) {
  let sentenceLength = 0;
  let numWords = 1;
  let vowelCount = 0;

  char = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
  };

  for (i = 0; i < text.length; i++) {
    sentenceLength = text.length;

    if (char[text[i].toLowerCase()]) {
      vowelCount += 1;
    }

    if (text[i] === " ") {
      numWords += 1;
    }
  }
  return { sentenceLength, numWords, vowelCount };
}

console.log(sentenceRead("Everything will be Alright"));
