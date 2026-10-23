fetch("header.html").then(response=>{
    return response.text();
}).then(text=>{
    document.getElementById("header").innerHTML=text;
});

function score_value(hit,time){//(120[秒]-かかった時間)*的へのヒット数
  return (120-time)*hit;
}
