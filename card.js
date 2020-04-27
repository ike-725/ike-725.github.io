//var a = Math.floor (Math.random() * ( max + 1 - min ) )  + min ;
//console.log(a);
var thema=[
  'image/0.PNG',
  'image/1.PNG',
  'image/2.PNG',
  'image/3.PNG',
  'image/4.PNG'
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