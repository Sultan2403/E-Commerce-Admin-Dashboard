// Array randomizer...

export default function randomizeArr(arr) {
  const shuffledArr = [...arr];
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[random]] = [
      shuffledArr[random],
      shuffledArr[i],
    ];
  }
  return shuffledArr;
}
