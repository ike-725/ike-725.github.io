var min = 0 ;
var max = 4 ;

var a = Math.floor (Math.random() * ( max + 1 - min ) )  + min ;


//console.log(a);

//document.writeln("あなたが引いたカードは、、、");


var thema=["あなたは物女ですか？","好きな食べ物は？","昨日お風呂入った？","レッサーパンダ派？アライグマ派？","髪きった？"];

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

