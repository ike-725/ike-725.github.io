var min = 0 ;
var max = 4 ;

var a = Math.floor (Math.random() * ( max + 1 - min ) )  + min ;


//console.log(a);

//document.writeln("あなたが引いたカードは、、、");


var thema=[
  '0.PNG',
  '1.PNG',
  '2.PNG',
  '3.PNG',
  '4.PNG'
];

//document.write(thema[a] + "<br>\n");

var a = Math.floor(Math.random() * thema.length);
document.write(thema[a]);