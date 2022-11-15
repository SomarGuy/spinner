let incre = 100;
let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ","\r|   ","\r/   ","\r-   ","\r\\   ","\r|   "];
for (const spin of spinner) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, incre)
  incre += 200;
};