let count = 1;
const interval = setInterval(() => {
  console.log(count);
  count++;

  if (count > 10) {
    clearInterval(interval);
  }
}, 1000); // 1000 milliseconds = 1 second
