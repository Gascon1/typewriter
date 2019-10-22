const sentence = "hello there from lighthouse labs";


const stringAnimation = (sentence) => {
  let counter = 0;
  for (let char of sentence) {
    setTimeout(() => {process.stdout.write(char)}, counter);
    counter += 70;
  }
  setTimeout(() => {console.log()}, counter);
}


stringAnimation(sentence);