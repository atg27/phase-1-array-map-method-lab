const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map (strings => {
  const splitString = strings.split(' ');
  const capitalizeEachSplitString = splitString.map(splitString => splitString.charAt(0).toUpperCase() + splitString.slice(1));
  const joined = capitalizeEachSplitString.join(' ');
  return joined;
  
  });
}
