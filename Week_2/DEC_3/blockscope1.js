function fun() {
    console.log(x); // TDZ for x
    let x = 10;
    console.log(x);
}

if(true) {
    // console.log(typeof y);
    console.log(y); // TDZ for y
    const y = 10;
    console.log(y);
}

// fun();