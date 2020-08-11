function findLength(){
  var arr = ["I" , "Love" , "Coding" , "Damn" , "!"];

  if(arr == 4 && typeof arr == "string"){
    return true;
  }else{
    return arr[2];
  }
}
// console.log(findlength());


function makeSentence(arr) {
var sentence = " ";

  for(var position = 0; position < arr.length; position++){
    sentence += arr[position] + " ";
  }
  return sentence;
}
var words = ["I" , "Love" , "Coding" , "Damn" , "!"];
console.log(makeSentence(words));


var arr =[2, 12, 8, 14, 80, 0, 1];
arr.sort(function(a,z){   
  return a-z;
})
console.log(arr);

function join(){
    var arr = [2, 12, 8, 14, 80, 0, 1];
    arr.push(17, 3, 21, 10);
    return arr;
}
console.log(join())


const numbers =[ 0, 1, 2, 8, 12, 14, 80 ];
const iterateArray = numbers.filter(function(numbers){
  return numbers >= 10;
})

console.log(iterateArray)