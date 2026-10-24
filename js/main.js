const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const faqButtons = document.querySelectorAll('.faq-question');
const form = document.querySelector('.contact-form');
const yearEl = document.getElementById('year');
const scrollTopButton = document.querySelector('.scroll-top');
const brandLink = document.querySelector('.brand');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-label', isExpanded ? 'Open navigation menu' : 'Close navigation menu');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation menu');
    });
  });
}

if (brandLink) {
  brandLink.addEventListener('click', (event) => {
    const target = brandLink.getAttribute('href');

    if (target === '#top') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const faqItem = button.closest('.faq-item');
    const answer = faqItem?.querySelector('.faq-answer');
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    button.setAttribute('aria-expanded', String(!isExpanded));
    if (faqItem) {
      faqItem.classList.toggle('is-open', !isExpanded);
    }

    if (answer) {
      answer.hidden = isExpanded;
    }
  });
});

const revealElements = document.querySelectorAll('.reveal');

if (revealElements.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
    }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

function setFieldState(input, message) {
  const errorNode = document.getElementById(`${input.id}-error`);
  const isValid = !message;

  input.setAttribute('aria-invalid', String(!isValid));
  if (errorNode) {
    errorNode.textContent = message || '';
  }

  return isValid;
}

if (scrollTopButton) {
  const toggleScrollTopButton = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const threshold = document.documentElement.scrollHeight / 2;
    scrollTopButton.classList.toggle('is-visible', scrollPosition > threshold);
  };

  toggleScrollTopButton();
  window.addEventListener('scroll', toggleScrollTopButton, { passive: true });

  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

if (form) {
  let successTimeoutId = null;

  const showSuccessToast = () => {
    const successMessage = document.getElementById('form-success');
    if (!successMessage) {
      return;
    }

    successMessage.hidden = false;
    successMessage.style.display = 'block';
  };

  const hideSuccessToast = () => {
    const successMessage = document.getElementById('form-success');
    if (!successMessage) {
      return;
    }

    successMessage.hidden = true;
    successMessage.style.display = 'none';
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const projectInput = document.getElementById('project');
    let isFormValid = true;

    if (!nameInput || !emailInput || !projectInput) {
      return;
    }

    const name = nameInput.value.trim();
    if (!name) {
      isFormValid = setFieldState(nameInput, 'Please enter your name.') && isFormValid;
    } else {
      isFormValid = setFieldState(nameInput, '') && isFormValid;
    }

    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      isFormValid = setFieldState(emailInput, 'Please enter your business email.') && isFormValid;
    } else if (!emailPattern.test(email)) {
      isFormValid = setFieldState(emailInput, 'Please enter a valid email address.') && isFormValid;
    } else {
      isFormValid = setFieldState(emailInput, '') && isFormValid;
    }

    const project = projectInput.value.trim();
    if (!project) {
      isFormValid = setFieldState(projectInput, 'Please share a brief project description.') && isFormValid;
    } else if (project.length < 20) {
      isFormValid = setFieldState(projectInput, 'Please provide a bit more detail about your project.') && isFormValid;
    } else {
      isFormValid = setFieldState(projectInput, '') && isFormValid;
    }

    if (isFormValid) {
      const submitButton = form.querySelector('.submit-button');

      if (submitButton) {
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Message ready to send';
        submitButton.disabled = true;

        if (successTimeoutId) {
          clearTimeout(successTimeoutId);
        }

        showSuccessToast();

        successTimeoutId = setTimeout(() => {
          submitButton.textContent = originalText;
          submitButton.disabled = false;
          form.reset();
          hideSuccessToast();
        }, 10000);
      }
    }
  });
}
