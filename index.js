 
//  var speech = "i am a good person. i like to good person";
//  var count = 0;
//  for (let i = 0; i < speech.length; i++) {
//    const char = speech[i];
//    if (char == " ") {
//      count++;
//    }
//  }
//  console.log(count)//answer is =  9
  
 var speech = "i am     a good    person i like to good person";
 var count = 0;
 for (let i = 0; i < speech.length; i++) {
   const char = speech[i];
   if (char == " " && speech[i-1] != " ") {
     count++;
   }
 }
//count++;
 console.log(count)