var min = 0 ;
var max = 4 ;

//var a = Math.floor (Math.random() * ( max + 1 - min ) )  + min ;


//console.log(a);

//document.writeln("あなたが引いたカードは、、、");


var thema=[
  'image/0.PNG',
  'image/1.PNG',
  'image/2.PNG',
  'image/3.PNG',
  'image/4.PNG'
];

//document.write(thema[a] + "<br>\n");


var a = Math.floor(Math.random() * thema.length);
document.getElementById('card').innerHTML = '<img src="thema[a]">';
//document.write(thema[a]);
obj.src = thema[a];