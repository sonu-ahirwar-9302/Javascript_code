document.body.style.backgroundColor="cyan";

const data1=[
    {key:"image/img.jpg.jpg",title:"product",kart:"add to cark"},
    {key:"image/img.jpg.jpg",title:"product",kart:"add to cark"},
    {key:"image/img.jpg.jpg",title:"product",kart:"add to cark"},
    {key:"image/img.jpg.jpg",title:"product",kart:"add to cark"},
]
let object_data="";
data1.map(e=>{
    // document.getElementById("box1").innerHTML=`<img src="${e.key}"/>`
    object_data+=`"<img src="${e.key}" class="img-1">
    <br><h1>${e.title}</h1>
    <button class="btn">${e.kart}</button>`;
})
document.getElementById("box1").innerHTML=object_data;