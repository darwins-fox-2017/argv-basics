"use strict"

function pig_latin(input){
    var vowel = ['a','i','u','e','o']
    var firstword = input.slice(0,1);
    var lastword = input.slice(1,input.length)
    if(vowel.indexOf(firstword)!= -1){
      return input
    }else{
      return lastword+firstword+"ay"
    }
}

function pig_latin_sentences(input){
  var hasil = ""
  var tampung = input.split(" ")
  for (var i = 0; i < tampung.length; i++) {
    hasil += pig_latin(tampung[i])+" "
  }
  return hasil
}

process.argv.forEach((input)=>{
  console.log(pig_latin_sentences(input));
})
