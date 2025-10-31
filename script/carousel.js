/**===== Carousel Functionality =====**/

document.addEventListener('DOMContentLoaded', () => {
	const prefersReduced = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

	document.querySelectorAll('[data-carousel="slide"]').forEach(car => {
		const slides = [...car.querySelectorAll('[data-carousel-item]')];
		if (!slides.length) return;
		const prev = car.querySelector('[data-carousel-prev]');
		const next = car.querySelector('[data-carousel-next]');
		const dots = [...car.querySelectorAll('[data-carousel-slide-to]')];
		let i = 0, t;

		const upd = n => dots.forEach((d, j) => { d.classList.toggle('bg-white', j===n); d.classList.toggle('bg-white/50', j!==n); j===n?d.setAttribute('aria-current','true'):d.removeAttribute('aria-current'); });
		const show = n => {
			n = ((n % slides.length) + slides.length) % slides.length;
			slides.forEach((s, k) => { s.classList.toggle('hidden', k!==n); s.setAttribute('aria-hidden', k!==n ? 'true' : 'false'); });
			upd(n); i = n;
		};

		prev && prev.addEventListener('click', () => show(i-1));
		next && next.addEventListener('click', () => show(i+1));
		dots.forEach((d, k) => d.addEventListener('click', () => show(k)));

		const start = () => { if (prefersReduced) return; clearInterval(t); t = setInterval(() => show(i+1), 5000); };
		const stop = () => clearInterval(t);

		car.addEventListener('mouseenter', stop); car.addEventListener('mouseleave', start);
		car.addEventListener('focusin', stop); car.addEventListener('focusout', start);

		car.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') prev && prev.click(); else if (e.key === 'ArrowRight') next && next.click(); });

		let sx = 0;
		car.addEventListener('touchstart', e => sx = e.changedTouches[0].clientX, { passive: true });
		car.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) dx < 0 ? show(i+1) : show(i-1); });

		show(0); start();
	});
});
