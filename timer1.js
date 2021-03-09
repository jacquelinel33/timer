let inputArr = process.argv.slice(2);
// inputArr.sort((a,b) => a - b);

let timer = () => {
  for (let time of inputArr) {
    if (!isNaN(time) && time > 0) {
      let delay = time * 1000;
      setTimeout(() => {
        process.stdout.write('beep\n');
      }, delay);
      delay += inputArr[time];
    }
  }
};

timer();