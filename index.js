document.addEventListener('DOMContentLoaded', function() {
    const daysElement = document.querySelector('#day');
    const hoursElement = document.querySelector('#hours');
    const minutesElement = document.querySelector('#minutes');
    const secondsElement = document.querySelector('#seconds');
  
    const eventDate = new Date(2025, 4, 20, 0, 0);
  
    function updateCountdown() {
      const currentDate = new Date();
      const diff = eventDate - currentDate;
  
      // Եթե ժամանակն ավարտվել է
      if (diff <= 0) {
        document.getElementById('countdown-title').textContent = 'Միջոցառումը սկսվել է!';
        document.getElementById('countdown').style.display = "none"
        clearInterval(countdownInterval);
        return;
      }
  
      // Հաշվարկել օրեր, ժամեր, րոպեներ, վայրկյաններ
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
      // Թարմացնել ցուցադրումը
      daysElement.textContent = days;
      hoursElement.textContent = hours.toString().padStart(2, '0');
      minutesElement.textContent = minutes.toString().padStart(2, '0');
      secondsElement.textContent = seconds.toString().padStart(2, '0');
    }
  
    // Սկսել հետհաշվարկը
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Անմիջապես կանչել առաջին անգամ
  });
  let bees = ""
  for (let i = 0; i < 10; i++) {
      let bee = `<div class="bee" id="bee${i + 1}"></div>`
      bees += bee
  }
  document.body.innerHTML += bees;
  function random(min, max) {
      return Math.random() * (max - min) + min;
  }

  function moveBee(bee) {
      let x = random(0, window.innerWidth);
      let y = random(0, window.innerHeight);

      function animate() {
          x += random(-3, 3);
          y += random(-3, 3);

          x = Math.max(0, Math.min(window.innerWidth - 60, x));
          y = Math.max(0, Math.min(window.innerHeight - 60, y));

          bee.style.transform = `translate(${x}px, ${y}px) rotate(${random(-20, 20)}deg)`;

          requestAnimationFrame(animate);

      }

      animate();
  }


  document.querySelectorAll('.bee').forEach(moveBee);