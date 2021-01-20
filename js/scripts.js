$(document).ready(function() {
  $("form#textEntry").submit(function(event) {
    event.preventDefault();
    isVowell($("input#inputText").val());
    // $(".outputText").text(vowell);
  });
});

function isVowell(inputLetter)  {
  const vowell = inputLetter.replace(/[aeiou]{1,1}/i, "way");
  console.log(vowell);
//   if(vowell.includes(inputLetter)) {
    // output = inputLetter + "way";
    // return output;
//   }
  // else {
  //   output = inputLetter + "ay";
  //   return output;
  // }
}