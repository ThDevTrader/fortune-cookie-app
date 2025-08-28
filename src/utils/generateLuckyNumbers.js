export const generateLuckyNumbers = () => {
      const numbers = [];

      for (let count = 0; count < 6; count++) {
        const newNumber = Math.floor(Math.random() * 60) + 1;
        if (!numbers.includes(newNumber)) {
          numbers.push(newNumber);
        } else {
          count--;
        }
      }

      return numbers;
    };