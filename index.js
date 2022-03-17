const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// 1. get access to each sentence
// 2. touch each word
// 3. capitialize each first letter only
// 4. return the array

// ["what" "does" "the" "this" "keyword" "mean?"]

// const titleCased = () => {
//   const newArr = tutorials.map((phrase) => {
//     const words = phrase.split(" ");
//     const capPhrase = words.map((word) => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     const answer = capPhrase.join(" ");
//     return answer;
//   });
//   // doesnt see a return so it gives us undefined
//   return newArr;
// };

const titleCased = () =>
  tutorials.map((phrase) =>
    phrase
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
