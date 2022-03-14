var values = [];
var opHamming = [];
function addRecord() {
  var inp = document.getElementById('inputtext');
  var ex = /^[0-9]{5}$/;
 if(ex.test(inp.value) == false)
 {
    alert("Please enter a vaild number of length 5, Entered value is = "+inp.value)
 }else{
      values.push(inp.value);
      inp.value = "";
      displayRecord();
  }
}
function calculateRecord(){
    for(i=0;i<values.length-1;i++){
    console.log(values[i]+ " "+ values[i+1])
    opHamming.push(hamming(values[i], values[i+1]));
    }
    displayHamming()
}
function populateList(arr){
    var str = '';
    for(var i = 0; i < arr.length; i++){
        str += '<li>' + arr[i] + '</li>';
    }
    return '<ul>'+str+'</ul>';
}
function displayHamming() {
  var arr = populateList(opHamming)
  document.getElementById("opHamming").innerHTML = "<h3>Hamming distance:</h3>"+arr+"";
}
function displayRecord() {
  values.sort(function(a, b){return a - b});
  var arr = populateList(values)
  document.getElementById("values").innerHTML = "<h3>Entered values in sorted order:</h3>"+arr;
}