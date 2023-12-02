function sum(...a) {
    let sum = 0;
    if (a.length === 0) {
      return 0;
    } else {
      for (let i = 0; i < a.length; i++) {
        sum += a[i];
      }
      return sum;
    }
  }
  
  console.log(sum(1, 2, 4, 9, 1, 2));