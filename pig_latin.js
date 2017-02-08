'use strict'
//console.log(getdata(argv));

let pigLatin = (word) => {
  let firstLetter = word.charAt(0);
  if(isPowel(firstLetter)){
    return word
  }else{
    return `${word.substr(1)}${firstLetter}ay`;
  }
}

let isPowel = (char) => {
  return (/^[aeiou]$/i).test(char);
}

let convert = (sentence) => {
  let result = []
  let words = sentence.trim().split(/\s+/g)
  for (let i=0;i<words.length;i++) {
    result[i] = pigLatin(words[i])
  }

  return result.join(" ")
}

// Your CLI code here
let argv = process.argv;

let getdata = (argv) =>{
  let data=[];
  for (var i = 2; i < argv.length; i++) {
    data.push(argv[i])
  }
  return data.join(' ')
}

console.log(convert(getdata(argv)));
