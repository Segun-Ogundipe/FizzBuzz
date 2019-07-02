let count = document.getElementById('count');
let start = document.getElementById('start');

document.getElementById('start').addEventListener('click', () => {

  for (let i = 1; i <= 100; i++) {
      let result = '';
      result += (i % 3) === 0 ? 'Fizz' : '';
      result += (i % 5) === 0 ? 'Buzz' : '';

      setTimeout(() => {
        start.style.display = 'none';
          if (result !== '') {
              count.innerHTML = result;
          } else {
              count.innerHTML = i;
          }
      }, i * 1000);
  }
})