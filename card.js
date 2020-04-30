//var a = Math.floor (Math.random() * ( max + 1 - min ) )  + min ;
//console.log(a);
var thema=[
  'cardimage/0.PNG',
  'cardimage/1.PNG',
  'cardimage/2.PNG',
  'cardimage/3.PNG',
  'cardimage/4.PNG'
];

var max=thema.length;
var min=0;

function randomDraw(){
  //document.write("あ");
  var obj = document.getElementById("random_card");
  var a = Math.floor(Math.random() * thema.length);
  obj.src = thema[a];
  //document.write('<img src='+thema[a]+' />');
}

function orderDraw(){
  
  var arr = [];

  for(var i = 0;i < max;i++){
    arr.push(i);
  }

  shuffle(arr);

  var objC = document.getElementById("orderCard");
  var objB = document.getElementById("drawButton");

  objB.innerHTML = '<input type="button" value="どろー" onclick="orderDrawDraw()">';
  objC.innerHTML = '<img src="cardimage/0.PNG">' 

  document.getElementById('orderCard').src="cardimage/0.PNG"
}

function shuffle(arr){
  var n = arr.length;
  var temp,i;
  while(n){
  i=Math.floor(Math.random()*n--);
  temp=arr[n];
  arr[n]=arr[i];
  arr[i]=temp;
  }
  return arr;
  }

//function rollCard{

//}