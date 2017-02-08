'use strict'


function pig_latin(kata) {
  var vowel = ['a', 'i', 'u', 'e', 'o'];
  var newword = kata;
  if(vowel.indexOf(kata.substring(0, 1)) == -1) {
    newword = kata.substring(1, kata.length)+kata.substring(0, 1)+'ay';
  }

  return newword;
}

function complete_sentence(kalimat) {

  kalimat = kalimat.split(' ');
  var kalimatPenuh = '';
  for (var i=0; i<kalimat.length; i++) {
    kalimatPenuh += pig_latin(kalimat[i]) + ' ';
  }
  return kalimatPenuh;
}


console.log (complete_sentence(process.argv.splice(2,process.argv.length-2).join(" ")))
