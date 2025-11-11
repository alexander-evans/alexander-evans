// Simple theme toggle + year injection (keeps site interactive but remains ATS-friendly)
(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const yearEl = document.getElementById('year');

  function setTheme(theme){
    if(theme === 'dark'){
      root.setAttribute('data-theme','dark');
      toggle.textContent = '☀️';
      toggle.setAttribute('aria-pressed','true');
    } else {
      root.removeAttribute('data-theme');
      toggle.textContent = '🌙';
      toggle.setAttribute('aria-pressed','false');
    }
    try{ localStorage.setItem('theme', theme); } catch(e){}
  }

  (function init(){
    const saved = (() => {
      try { return localStorage.getItem('theme'); } catch(e) { return null; }
    })();
    if(saved === 'dark') setTheme('dark');
    yearEl.textContent = new Date().getFullYear();
  })();

  if(toggle){
    toggle.addEventListener('click', function(){
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }
})();