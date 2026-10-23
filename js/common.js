fetch("header.html").then(response=>{
    return response.text();
}).then(text=>{
    header=document.getElementById("header");
    if(header!=null){
        header.innerHTML=text;
    }
});

function score_value(tank,hit,time){//(120000[ミリ秒]-かかった時間+1)*的へのヒット数
  return (120000-time+1)*hit;
}
