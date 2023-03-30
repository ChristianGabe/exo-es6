let sum = (numbers) => {
    return numbers.reduce((total, number) => {
      return total + number;
    });
  }
  console.log(sum([1, 2, 3, 4, 5]));