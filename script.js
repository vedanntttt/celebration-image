document.addEventListener('DOMContentLoaded', function () {
  const img = document.getElementById('celebrate-img');
  let isCelebrating = false;

  function playConfetti() {
    if (isCelebrating) return;
    isCelebrating = true;
    
    if (window.confetti && typeof window.confetti === 'function') {
      // Adjust particle count for mobile vs desktop
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile ? 5 : 8;
      const duration = 3000;
      const end = Date.now() + duration;
      
      (function frame() {
        window.confetti({
          particleCount: particleCount,
          startVelocity: isMobile ? 25 : 35,
          spread: 100,
          ticks: isMobile ? 50 : 70,
          origin: { x: Math.random(), y: Math.random() * 0.5 },
          colors: ['#667eea', '#764ba2', '#f093fb', '#4facfe']
        });
        
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        } else {
          isCelebrating = false;
        }
      })();
    } else {
      // Fallback: emoji rain
      const container = document.createElement('div');
      container.className = 'emoji-fall';
      document.body.appendChild(container);
      
      const emojis = ['🎉', '✨', '🎊', '💥', '👏', '🌟', '💫'];
      const isMobile = window.innerWidth < 768;
      const emojiCount = isMobile ? 25 : 40;
      
      for (let i = 0; i < emojiCount; i++) {
        const span = document.createElement('span');
        span.className = 'emoji';
        span.style.left = Math.random() * 100 + '%';
        span.style.animationDelay = (Math.random() * 1.8) + 's';
        span.style.fontSize = (isMobile ? 16 : 18 + Math.random() * 12) + 'px';
        span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        container.appendChild(span);
      }
      
      setTimeout(() => {
        container.remove();
        isCelebrating = false;
      }, 4500);
    }
  }

  function celebrate() {
    playConfetti();
  }

  // Trigger celebration when image loads
  if (img.complete && img.naturalHeight !== 0) {
    // Image already cached
    setTimeout(() => celebrate(), 300);
  } else {
    img.addEventListener('load', () => {
      setTimeout(() => celebrate(), 300);
    }, { once: true });
  }

  // Allow replay on tap/click with debounce
  img.addEventListener('click', celebrate);
  img.addEventListener('touchend', (e) => {
    e.preventDefault();
    celebrate();
  });

  // Prevent double-tap zoom on mobile
  img.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });
});
