let r=1;
let u=2;
let k=3;
if (r>u & r>k) {
    if (r>u & u>k) {
        console.log("r","u","k");
    }
    else {
        console.log("r","k","u");

    }
}
else if (u>r & u>k) {
    if (u>r & k>r) {
        console.log("u","r","k");
    }
    else {
        console.log("u","k","r");
    }
    
}
else{
    if (k>r && r>u ) {
        console.log("k","r","u");
        
    }
    else   {
        console.log("k","u","r");
    } 
}