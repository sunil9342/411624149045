console.log("A")
setTimeout(()=>{
    console.log("D")
},2000)
setTimeout(()=>{
    console.log("B")
},0)
console.log("C");
function example(){
    console.log("fail")
}
const example1=()=>{
    console.log("fail")
}

const promise=new Promise((resolve,reject)=>{
    setTimeout(example,2000)
    setTimeout(example1,0)
})
promise.then(res=>{console.log("res")})
.catch(err=>console.log(err))

