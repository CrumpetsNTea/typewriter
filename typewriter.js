// str = "hello there from lighthouse labs";

const sentence = (str) => {
  let time = 50; //establish delay time
  for (const char of str) {
    // let letter = str[char];
    setTimeout(() => {
      process.stdout.write(char); //for each character, write it out
    }, time); time += 50; //outisde of the setTimeout, this will increase time by 50ms
  } //so once a character is written, it adds 50ms - so next char is written 50ms later
  setTimeout(() => {
    process.stdout.write("\n");
  }, time); //prints a newline at the end of the loop (since time increases
  //inside the loop, time will be equivalent to the end of the loop +50ms here
};
sentence("hello from lighthouse labs");