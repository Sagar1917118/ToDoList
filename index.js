let btn=document.querySelector("#generateButton");
let reference=document.querySelector(".Reference");
let noteBook=document.querySelector(".notebook");
let Data=document.querySelector("#textArea");
let DeleBtn=document.querySelector(".CrossIcon");
let array=[];
btn.addEventListener("click",createElement);
function createElement(){
  if(Data.value==""){ 
    alert("Invalid Response");
  }
  else{
  let list=document.createElement('li');
  list.innerHTML=reference.innerHTML;
  list.classList.remove("special");
  let x=list.querySelector(".info");
  x.textContent=Data.value;
  noteBook.appendChild(list);
  }
  Data.value="";
}
function gamma(e){
  

}
noteBook.addEventListener("click",function (e){ 
    let x=e.target;
    if(x.nodeName==="BUTTON"){
      console.log(x);
      let z=x.parentNode;
      console.log(z);
      let y=z.querySelector(".info");
        x.classList.toggle("alpha");
        y.classList.toggle("beta");
    }
    if(x.nodeName==="I"){ 
      let a=x.parentNode;
      console.log(a);
      let b=a.parentNode;
      console.log(b);
      b.removeChild(a);
    }
});
