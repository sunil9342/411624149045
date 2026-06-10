console.log("hello")

const first=1;
const second=2;
console.log(first);
const str="sunil";
console.log(str);
const fruits=["apple","orange","mango"]
console.log(fruits[1])
fruits[1]="banana";
console.log(fruits[1]);
const arr=[1,"name",false,2.3]
console.log(arr)
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
const fourth=document.getElementById("ptag")
fourth.innerHTML="this is sunil"
function newfunction(){
    console.log("i am writing")
}
const input= document.getElementById("eventListener")
const output= document.getElementById("Ptag")

input.addEventListener("input",()=>{
    output.textContent=input.value
})
const newvar=document.createElement("h1");
newvar.textContent="new paragraph";
document.body.appendChild.apply(newvar);

newvar.remove()