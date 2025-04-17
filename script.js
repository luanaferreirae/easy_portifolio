
// Menu toggle
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    destino.scrollIntoView({ behavior: 'smooth' });
    navLinks.classList.remove("show");
  });
});

// Validação simples do formulário
document.getElementById('form-contato').addEventListener('submit', function(e) {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos.');
    e.preventDefault();
  } else {
    alert('Mensagem enviada com sucesso!');
  }
});