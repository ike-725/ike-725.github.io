var min = 0 ;
var max = 4 ;

//var a = Math.floor (Math.random() * ( max + 1 - min ) )  + min ;


//console.log(a);

//document.writeln("あなたが引いたカードは、、、");


var thema=[
  'https://github.com/ike-725/ike-725.github.io/blob/master/image/0.PNG',
  'https://github.com/ike-725/ike-725.github.io/blob/master/image/1.PNG',
  'https://github.com/ike-725/ike-725.github.io/blob/master/image/2.PNG',
  'https://github.com/ike-725/ike-725.github.io/blob/master/image/3.PNG',
  'https://github.com/ike-725/ike-725.github.io/blob/master/image/4.PNG'
];

//document.write(thema[a] + "<br>\n");


var a = Math.floor(Math.random() * thema.length);
document.write('<img src='+thema[a]+' />');
//document.write('<img src="thema[a]" />');
//document.write(thema[a]);
