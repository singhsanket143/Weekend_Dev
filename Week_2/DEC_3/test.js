function fun() { // global
    if(true) {
        var x = 10; // fun x = 10
        let y = 20; // if block y = 20
    }

    console.log(x); // 10
    console.log(y); // error
}

fun();