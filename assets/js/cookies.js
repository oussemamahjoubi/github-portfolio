// assets/js/cookies.js
(function () {
    const OVERLAY_ID = 'cookies-overlay';
    const ACCEPT_ID = 'cookie-accept';
    const REJECT_ID = 'cookie-reject';
    const EXIT_ID = 'cookie-exit';
    const STORAGE_KEY = 'analytics_consent';
    const PLAUSIBLE_DOMAIN = 'https://oussemamahjoubi.github.io/github-portfolio/'; // <- remplacer si besoin

    function showOverlay(){ const el = document.getElementById(OVERLAY_ID); if(el){ el.style.display='flex'; el.setAttribute('aria-hidden','false'); } }
    function hideOverlay(){ const el = document.getElementById(OVERLAY_ID); if(el){ el.style.display='none'; el.setAttribute('aria-hidden','true'); } }

    function loadPlausible(){
        if (window.plausible || document.querySelector('script[data-domain="'+PLAUSIBLE_DOMAIN+'"]')) return;
        const s = document.createElement('script');
        s.defer = true;
        s.setAttribute('data-domain', PLAUSIBLE_DOMAIN);
        s.src = 'https://plausible.io/js/plausible.js';
        document.head.appendChild(s);
    }

    function setConsent(value){
        localStorage.setItem(STORAGE_KEY, value ? 'true' : 'false');
        if(value) loadPlausible();
        hideOverlay();
    }

    document.addEventListener('DOMContentLoaded', function () {
        const consent = localStorage.getItem(STORAGE_KEY);
        if (consent === null) showOverlay();
        else if (consent === 'true') loadPlausible();

        const acceptBtn = document.getElementById(ACCEPT_ID);
        const rejectBtn = document.getElementById(REJECT_ID);
        const exitBtn = document.getElementById(EXIT_ID);

        if (acceptBtn) acceptBtn.addEventListener('click', () => setConsent(true));
        if (rejectBtn) rejectBtn.addEventListener('click', () => setConsent(false));
        if (exitBtn) exitBtn.addEventListener('click', () => hideOverlay());

        // Track Download CV
        const downloadBtn = document.querySelector('.download-btn');
        if (downloadBtn){
            downloadBtn.addEventListener('click', function () {
                if (window.plausible) plausible('Download CV');
            });
        }

        // Add hidden UTM/referrer inputs to contact form
        const contactForm = document.getElementById('contact-form');
        if (contactForm){
            if (!document.getElementById('utm_source')) {
                const utm = document.createElement('input');
                utm.type = 'hidden'; utm.name = 'utm_source'; utm.id = 'utm_source';
                contactForm.appendChild(utm);
            }
            if (!document.getElementById('referrer')) {
                const ref = document.createElement('input');
                ref.type = 'hidden'; ref.name = 'referrer'; ref.id = 'referrer';
                contactForm.appendChild(ref);
            }
            const params = new URLSearchParams(window.location.search);
            document.getElementById('utm_source').value = params.get('utm_source') || document.referrer || 'direct';
            document.getElementById('referrer').value = document.referrer || 'direct';

            contactForm.addEventListener('submit', function () {
                if (window.plausible) plausible('Contact form submit');
            });
        }
    });
})();
