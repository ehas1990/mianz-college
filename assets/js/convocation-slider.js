/**
 * Convocation Hero Slider & Countdown Timer
 * Target Date: 27 November 2026
 */

(function () {
  'use strict';

  function initConvocationCountdown() {
    const daysEl = document.getElementById('countdown-days');
    const hoursEl = document.getElementById('countdown-hours');
    const minutesEl = document.getElementById('countdown-minutes');
    const secondsEl = document.getElementById('countdown-seconds');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
      return;
    }

    // Target: 27 November 2026, 00:00:00 local time
    const targetDate = new Date(2026, 10, 27, 0, 0, 0).getTime();

    function formatNumber(num) {
      return num < 10 ? '0' + num : String(num);
    }

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        if (timerInterval) {
          clearInterval(timerInterval);
        }
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      daysEl.textContent = formatNumber(days);
      hoursEl.textContent = formatNumber(hours);
      minutesEl.textContent = formatNumber(minutes);
      secondsEl.textContent = formatNumber(seconds);
    }

    // Run immediately once
    updateCountdown();

    // Update every second
    const timerInterval = setInterval(updateCountdown, 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initConvocationCountdown);
  } else {
    initConvocationCountdown();
  }
})();
