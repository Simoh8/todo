let names:string[]=['ian','elvis'];

let people:Array<string>=['ian ','elvis']

const people =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('hello there')
    },3000)
})
promise.then(data=>{
    console.log(data.toUpperCase());
    
})