let inputArr = process.argv.slice(2);
// inputArr.sort((a,b) => a - b);

let timer = () => {
  for (let time of inputArr) {
    let delay = time;
    setTimeout(() => {
      process.stdout.write('beep\n');
    }, delay);
    delay += inputArr[time];
  }
};

timer();