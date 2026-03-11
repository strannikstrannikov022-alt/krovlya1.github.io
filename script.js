const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

const feedbackForm = document.getElementById('feedback-form');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const [nameInput, phoneInput, messageInput] = feedbackForm.querySelectorAll('input, textarea');
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();
    const text = [
      'Здравствуйте, интересует ремонт кровли.',
      name ? `Имя: ${name}` : '',
      phone ? `Телефон: ${phone}` : '',
      message ? `Сообщение: ${message}` : ''
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/79116317777?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });
}
