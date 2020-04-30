var cards =[];
var max=5;
var backTimer;
var count=0;

function start(){


var arr = [];
for(var i =0;i<max;i++){
arr.push(i);
}

shuffle(arr);


var panel=document.getElementById('panel');

while( panel.firstChild ){
  panel.removeChild( panel.firstChild );
} 

for(i=0;i<max ;i++){
        var div = document.createElement('div');
        div.className = 'card back';
        div.index = i;
        div.number = arr[i];
        div.innerHTML = '';
        div.onclick = turn;
        panel.appendChild(div);
        cards.push(div);
}


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


function turn(e){
var div =e.target;

if(backTimer)return;

if(div.className=='card back'){
div.className='card';
div.innerHTML='<img src="cardimage/'+(div.number)+'.PNG" height="110" width="80"/>'

document.getElementById('res_img').src="cardimage/"+(div.number)+".PNG"

}
else{return;}
count++;
//if(count==max){}
}





