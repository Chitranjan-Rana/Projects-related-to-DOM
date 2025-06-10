const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')  // 2nd method

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
});
