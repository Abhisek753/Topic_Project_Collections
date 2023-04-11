
const fetchdata=async(page)=>{
    let res=await fetch(`https://api.thecatapi.com/v1/breeds?limit=5&page=${page||1}`)
    console.log(res)
    let data=await res.json()
    console.log(data)
    display(data)
}
let container = document.querySelector("#allcat");
const display = (data) => {
  container.innerHTML = null;
  data.forEach((el) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
        let name = document.createElement("h2");
        img.src="https://static.vecteezy.com/system/resources/previews/002/410/747/original/cute-siamese-cat-on-yellow-background-free-photo.jpg"
        name.textContent = "Name:- " + el.name;
       let des = document.createElement("h4");
       des.textContent = "Description:- " + el.description;
    let origin = document.createElement("h4");
    origin.textContent = "Origin:-" + el.origin;
    let span = document.createElement("h4");
    span.textContent = "LifeSpan:-" + el.life_span;
    let temp = document.createElement("h4");
    temp.textContent = "Tempra:- " + el.temperament;
    let wikipidia = document.createElement("a");
    wikipidia.textContent = "READ MORE:-" + "WIKIPIDEA";
    wikipidia.href = el.wikipedia_url;
    let view = document.createElement("button");
    view.innerText = "View Image";
    view.addEventListener("click", () => {
      localStorage.setItem("name", el.id);
      console.log(el.id)
      window.location.href = "./cat.html";
    });
    div.append(img, name, des, origin, span, temp, wikipidia, view);
    container.append(div);
  });
};
fetchdata()

let btnseries=document.getElementById("paginate")
const pagination=()=>{
    for(let i=1;i<=10;i++){
        let btn=document.createElement("button")
        btn.innerText=i
        btn.addEventListener("click",()=>{
          fetchdata(i)
         })
        btnseries.append(btn)
      }
}
pagination()

