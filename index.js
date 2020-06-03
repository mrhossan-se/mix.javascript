  //remove the extra space
  var speech = "i am a      good   person. idon't  snore at  night ";

  var count = 0;
  for(var i = 0; i<speech.length; i++){
     var char = speech[i];
     if(char == " " && speech[i -1] !=" " ){
        count++;
     }
  }
  //count++;
  console.log("now exact space here :", count)