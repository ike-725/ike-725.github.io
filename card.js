//var a = Math.floor (Math.random() * ( max + 1 - min ) )  + min ;
//console.log(a);
var thema=[
  'cardimage/0.PNG',
  'cardimage/1.PNG',
  'cardimage/2.PNG',
  'cardimage/3.PNG',
  'cardimage/4.PNG'
];

function randomDraw(){
  var max=4;
  var min=0;

  //document.write("あ");
  var obj = document.getElementById("random_card");
  var a = Math.floor(Math.random() * thema.length);
  obj.src = thema[a];
  //document.write('<img src='+thema[a]+' />');
}

//function rollCard{

//}