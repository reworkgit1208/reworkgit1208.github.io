// Array de tecnologías con imágenes online
const technologies = [
  { 
    name: 'Vulkan', 
    image: 'images/tech/image.png' 
  },
  { 
    name: 'C++', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png' 
  },
  { 
    name: 'Next.js', 
    image: 'images/tech/image(1).png' 
  },
  { 
    name: 'React', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' 
  },
  { 
    name: 'Node.js', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png' 
  },
  { 
    name: 'Python', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' 
  },
  { 
    name: 'C#', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/1200px-C_Sharp_wordmark.svg.png' 
  },
  { 
    name: 'Java', 
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png' 
  },
  { 
    name: 'MongoDB', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png' 
  },
  { 
    name: 'Git', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png' 
  },
  { 
    name: 'Docker', 
    image: 'images/tech/image(10).png' 
  },
  { 
    name: 'TypeScript', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png' 
  },
  { 
    name: 'AWS', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png' 
  }
];

// Configuración de partículas
function initParticles() {
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 2 }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": { "enable": true, "mode": "grab" },
          "onclick": { "enable": true, "mode": "push" },
          "resize": true
        }
      }
    });
  }
}

// Inicializar el slider de tecnologías
function initTechSlider() {
  const techSlider = document.getElementById('tech-slider');
  
  // Renderizar slides
  technologies.forEach(tech => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `
      <div class="tech-item">
        <img src="${tech.image}" alt="${tech.name}" class="tech-logo" 
             onerror="this.onerror=null;this.src='https://via.placeholder.com/150?text=${tech.name}'">
        <span class="tech-name">${tech.name}</span>
      </div>
    `;
    techSlider.appendChild(slide);
  });

  // Inicializar Swiper
  return new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: { delay: 2000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: {
      0: { slidesPerView: 2, spaceBetween: 20 },
      640: { slidesPerView: 3, spaceBetween: 25 },
      1024: { slidesPerView: 4, spaceBetween: 30 }
    }
  });
}

// Animación al hacer scroll
function setupScrollAnimation() {
  const animateOnScroll = () => {
    document.querySelectorAll('.scroll-animate').forEach(element => {
      if (element.getBoundingClientRect().top < window.innerHeight - 100) {
        element.classList.add('animate');
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();
}

// Configuración del formulario de contacto
function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
      
      setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Enviado';
        
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.innerHTML = `
          <i class="fas fa-check-circle"></i>
          <p>¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.</p>
        `;
        this.parentNode.insertBefore(successMessage, this.nextSibling);
        
        setTimeout(() => {
          this.reset();
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          successMessage.remove();
        }, 3000);
      }, 1500);
    });
  }
}

// Smooth scrolling para enlaces internos
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Efecto hover para la imagen de perfil
function setupProfileHover() {
  const profileImg = document.getElementById('profile-img');
  if (profileImg) {
    profileImg.addEventListener('mouseenter', () => {
      profileImg.style.transform = 'scale(1.05) rotate(5deg)';
    });
    profileImg.addEventListener('mouseleave', () => {
      profileImg.style.transform = 'scale(1) rotate(0)';
    });
  }
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  // Precargar imágenes de tecnologías
  technologies.forEach(tech => {
    const img = new Image();
    img.src = tech.image;
  });

  // Inicializar componentes
  initParticles();
  const techSwiper = initTechSlider();
  setupScrollAnimation();
  setupContactForm();
  setupSmoothScrolling();
  setupProfileHover();

  // Actualizar el año actual
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Actualizar Swiper después de cargar las imágenes
  window.onload = function() {
    techSwiper.update();
  };
});