document.addEventListener('DOMContentLoaded', () => {
  // The archived page's layout is preserved. Backend account creation/login is intentionally not connected.
  const login = document.getElementById('LogInForm');
  if (login) login.addEventListener('submit', event => {
    event.preventDefault();
    showNotice('Login is a visual demo right now. No username or password was sent or saved.');
  });
  const signup = document.getElementById('signup-button');
  if (signup) signup.addEventListener('click', () => {
    showNotice('Signup is a visual demo right now. Account creation is not connected yet.');
  });
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const id = link.getAttribute('href');
      if (id && id.length > 1 && document.querySelector(id)) {
        event.preventDefault();
        document.querySelector(id).scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
  function showNotice(message) {
    let notice = document.getElementById('platform-demo-notice');
    if (!notice) {
      notice = document.createElement('div');
      notice.id = 'platform-demo-notice';
      notice.setAttribute('role','status');
      notice.style.cssText = 'position:fixed;z-index:99999;left:50%;bottom:24px;transform:translateX(-50%);max-width:min(90vw,560px);padding:14px 18px;background:#333;color:#fff;border-radius:4px;box-shadow:0 4px 18px #0004;font:14px/1.4 Arial,sans-serif';
      document.body.appendChild(notice);
    }
    notice.textContent = message;
    notice.hidden = false;
  }
});
