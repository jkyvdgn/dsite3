const bubblesContainer = document.querySelector('.bubbles');

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const size = Math.random() * 100 + 50; 
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}vw`;
  bubble.style.setProperty('--size', `${size}px`);

  bubble.style.animationDelay = `${Math.random() * 3}s`; 

  bubblesContainer.appendChild(bubble);

    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

// скорость появления пузырей (опционально)
setInterval(createBubble, 400); //  каждые 400 мс (раньше было 500)
