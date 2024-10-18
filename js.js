let titl=document.getElementById("text")
let price=document.getElementById("price")
let texes=document.getElementById("texes")
let ads=document.getElementById("ads")
let dis=document.getElementById("dis")
let total=document.getElementById("title")
let but=document.getElementById("bn")
let count=document.getElementById("count")
let mood="creat"
let tmp;

function gettotal(){
    if(price.value!='')
        {
            let x=(+price.value + +ads.value + +texes.value)- +dis.value
        total.innerHTML=x
        total.style.backgroundColor='green'
        }
        else{        total.style.backgroundColor='red'
          total.innerHTML=x

        }
        }
       /* let datepro;
if(localStorage.pro !=null)
{
  datepro=JSON.parse(localStorage.pro);
} else{
  datepro=[]
}
    

function show(){
    let ti='';

for(let i=0;i<datepro.length;i++) 

{
   t=datepro[i]
  console.log(datepro[i].titl)

  ti+=`
<tr>
  <td>${i}</td>
  <td>${datepro[i].titl}</td>
  <td>${datepro[i].price}</td>
  <td>${datepro[i].texes}</td>
  <td>${datepro[i].ads}</td>
  <td>${datepro[i].dis}</td>
  <td>${datepro[i].total}</td>
  <td><button>upload</button></td>
  <td><button>download</button></td>
  </tr>
  `}
document.getElementById("tb").innerHTML=ti

}
but.onclick=function(){
let newpro={
titl:titl.value,
price:price.value,
texes:texes.value,
ads:ads.value,
dis:dis.value,
total:total.innerHTML,
} 
datepro.push(newpro)
localStorage.setItem("pro", JSON.stringify(datepro))
console.log(datepro)
 reset()
 show()
}
show()
*/
function reset(){
  price.value=''
  texes.value=''
  ads.value=''
  dis.value=''
  total.innerHTML=''
  titl.value=''
  count.value=''
}
let datepro;
if(localStorage.pro!=null){
datepro=JSON.parse(localStorage.pro)
}
else{datepro=[]}
 let dd=document.getElementById("da")
function show(){ 
//gettotal()
let ty=''

for(let i=0;i<datepro.length;i++){
ty+=`<tr>
  <td>${i}</td>
  <td>${datepro[i].titl}</td>
  <td>${datepro[i].price}</td>
  <td>${datepro[i].texes}</td>
  <td>${datepro[i].ads}</td>
  <td>${datepro[i].dis}</td>
  <td>${datepro[i].total}</td>
  <td><button onclick="del(${i})">Delete</button></td>
  <td><button onclick="up(${i})">update</button></td>
  </tr>`
if(datepro.length>0){
dd.innerHTML=`<button onclick="al()">Delete all (${datepro.length})</button>`}
else{dd.innerHTML=''}
}
document.getElementById("tb").innerHTML=ty
}


but.onclick=function(){
let opp={
  titl:titl.value,
  total:total.innerHTML,
  price:price.value,
  texes:texes.value,
  ads:ads.value,
  dis:dis.value,
  count:count.value
}

if (mood==='creat')
{
if(opp.count>1)
{
for(let i=0;i<opp.count;i++)
{
  datepro.push(opp)
}
}
else{datepro.push(opp)}

}
else{mood==="creat"
count.style.display=''
datepro[tmp]=opp;

}








localStorage.setItem("pro",JSON.stringify(datepro))

console.log(datepro)


reset()
show()
}

function del(i){
  datepro.splice(i,1)
 localStorage.pro=JSON.stringify(datepro)
 show()
}

show()
function al(){
  localStorage.clear()
  datepro.splice(0)
show()
console.log("ghada")
}

/*
function up(i){
titl.value=datepro[i].titl
texes.value=datepro[i].texes
ads.value=datepro[i].ads
dis.value=datepro[i].dis
price.value=datepro[i].price

count.style.display='none'
but.innerHTML='update'
mood='update'
tmp=i;
scroll({top:0,
  behavior:"smooth"
})
}*/
function up(i){
titl.value=datepro[i].titl
texes.value=datepro[i].texes
ads.value=datepro[i].ads
dis.value=datepro[i].dis
.value=datepro[i].price
total.innerHTML=datepro[i].total
but.innerHTM='Update'
count.style.display='none'
mood='update'
scroll({top:0,behavior:"smooth"})

tmp=i;


}
let sreach=document.getElementById("search")
show()
let sr="title"
function gets(id){
if(id=="gyt")

{
 sr="title"
sreach.placeholder='sreach use title'
}
else{
  sr='c'
  sreach.placeholder='sreach use value'
}
sreach.focus()
}
function sreachr(value){
let ty='';
if(sr=='title')
{
for (let index = 0; index < array.length; index++) {
  if(datepro[i].titl.includes(value))
  {
ty+=
`<tr>
  <td>${i}</td>
  <td>${datepro[i].titl}</td>
  <td>${datepro[i].price}</td>
  <td>${datepro[i].texes}</td>
  <td>${datepro[i].ads}</td>
  <td>${datepro[i].dis}</td>
  <td>${datepro[i].total}</td>
  <td><button onclick="del(${i})">Delete</button></td>
  <td><button onclick="up(${i})">update</button></td>
  </tr>`


show()


  }
  document.getElementById("tb").innerHTML=ty
}





}


}

localStorage.clear()