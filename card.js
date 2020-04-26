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

document.write(thema[a] + "<br>\n");

/*
if (a == 0){
  a = "あなたは物女ですか？";
}else if (a == 1){
  a = "好きな食べ物は？";
}else if (a == 2){
  a = "昨日お風呂入った？";
}else if (a == 3){
  a = "レッサーパンダ派？アライグマ派？";
}else if (a == 4){
  a = "髪きった？";
}

document.write(a);

*/

