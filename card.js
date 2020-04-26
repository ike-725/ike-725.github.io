var min = 0 ;
var max = 4 ;

var a = Math.floor (Math.random() * ( max + 1 - min ) )  + min ;


//console.log(a);

//document.writeln("あなたが引いたカードは、、、");


var thema=[
  "好きな男性のタイプは？",
  "初恋の年齢は？",
  "今までで一番楽しかったデートは？",
  "今now好きな人はいる？",
  "告白したい？されたい？"
];

//document.write(thema[a] + "<br>\n");

var a = Math.floor(Math.random() * thema.length);
document.write(thema[a]);
document.write("あ");