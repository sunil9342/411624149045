fetch("https://jsonplaceholder.typicode.com/posts/3",
    {
        method:"PATCH",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            title:'Title',
            bpdy:'Learningfetch',
            userId:1
        })
    }
)
.then(Response =>Response.json())
.then(data=>{console.log(data)}) 