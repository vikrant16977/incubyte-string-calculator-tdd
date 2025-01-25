export function add(numbers) {
   //Handle Empty string
    if (!numbers) return 0;
   let numbersArray= numbers.split(',')
   return numbersArray.reduce((sum, num) => (num <= 1000 ? sum + +num : sum), 0);
}