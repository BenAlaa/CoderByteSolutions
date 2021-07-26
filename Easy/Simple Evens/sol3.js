function SimpleEvens(num) { 
  return (num.toString().split('').every(i => !(i%2))) ? 'true' : 'false';
}

SimpleEvens(readline());