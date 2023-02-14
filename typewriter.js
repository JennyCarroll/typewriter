const sentence = "hello there from lighthouse labs";
let time = 0;
for (const char in sentence) {
  setTimeout(() => {
    // console.log("test", sentence.length - 1, char);
    if (sentence.length - 1 === char) {
      process.stdout.write(`${sentence[char]} \n`);
    }
    process.stdout.write(sentence[char]);
  }, time);
  time += 50;
}

setTimeout(() => {
  process.stdout.write("\n");
}, time + 1);
