module.exports = function reverse (n) {
  if(n < 0){
      n *= -1;
  }

  while(n % 10 === 0){
    n /= 10;
  }

  return +(n.toString().split("").reverse().join(""))
}
