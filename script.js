class ArrayList{
    constructor(){
        this.array=[];
        let val=Object.values(this)[0];
  
    }
push(el){
    let arr=Object.values(this)[0]
    console.log(a1)
    arr.push(el)
   return arr;

}
pop(){
    let arr=Object.values(this)[0]
    console.log(a1)
    arr.pop();
   return arr;

}
unshift(val){
    let arr=Object.values(this)[0]
    console.log(a1)
    arr.unshift(val);
    return arr;
 
 }
 map(call){
    let arr=Object.values(this)[0]
    arr.map(call);
     return arr;
 }
filter(call){
    arr.filter(call);
    return arr;
}
clear(){
    let arr=object.values(this)[0]
    arr=[];
    return arr;
}
reduce(){
    let arr=object.values(this)[0]
    return arr.reduce(item,startel);
}
concat(){
    let arr=object.values(this)[0]
    console.log(a1)
    return arr.concat();
}
find(call){
    let arr=object.values(this)[0]
    arr.find(call);
    return arr;
}


}

let a1 = new ArrayList();
console.log(a1);
a1.push("hi");
a1.push("hi3");
a1.push("hi4");
a1.push("hi5");
a1.push("hi6");
a1.pop();
console.log(a1);

let arr2=["1","hey","2"]
console.log(a1);

for (const ele of a1) {
    console.log(ele);
    
}