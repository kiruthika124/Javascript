let s=16;
let k=15;
let r=10;
if (s<k && s<r){
    if(s<r && k<r){
        console.log("s","k","r")
    }
    else{
        console.log("s","r","k")
    }
}
else if (k<s && k<r){
    if (s<r && s>k){
        console.log("k","s","r")
    }
    else{
        console.log("k","r","s")
    }
}
else{
    if(r<s && s<k){
        console.log("r","s","k")
    }
    else{
        console.log("r","k","s")
    }
}