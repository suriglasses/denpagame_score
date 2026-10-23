fetch("header.html").then(response=>{
    return response.text();
}).then(text=>{
    document.getElementById("header").innerHTML=text;
});

function score_value(hit,time){//(120000[ミリ秒]-かかった時間+1)*的へのヒット数
  return (120000-time+1)*hit;
}
