fetch("header.html").then(response=>{
    return response.text();
}).then(text=>{
    document.getElementById("header").innerHTML=text;
});
