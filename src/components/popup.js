import { overlay } from './Contacts/Contacts';


const popupShow = document.querySelectorAll('.js-popupShow');

for (let i = 0; i < popupShow.length; i++) {
	popupShow[i].addEventListener('click', function () {
		const href = this.getAttribute('data-href');
		
		fetch(href)
			.then(res => res.text())
			.then(data => {
				new Popup(data);
			});
		overlay.classList.add('overlay_active');
	});
}

overlay.addEventListener('click', function () {
	this.innerHTML = '';
	this.classList.remove('overlay_active');
});

class Popup {
	constructor(body) {
		this.init(body);
	}
	
	close() {
		overlay.click();
	}
	
	init(body) {
		
		overlay.innerHTML = body;
		
		const btnClose = overlay.querySelector('.js-popupClose');
		const popup = overlay.querySelector('[data-popup]');
		
		btnClose.addEventListener('click', () => this.close());
		popup.addEventListener('click', e => e.stopPropagation());
		document.addEventListener('keydown', e => e.keyCode == 27 ? this.close() : false);
	}
}




