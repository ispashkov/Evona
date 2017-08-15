//ICONS
import '../../assets/icons/evona_white.svg'
import '../../assets/icons/nysense_white.svg'
import '../../assets/icons/Arrow_Download.svg'
import '../../assets/icons/instagram.svg'
import '../../assets/icons/facebook.svg'
import '../../assets/icons/youtube.svg'
import '../../assets/icons/DoubleChevronDown.svg'

import '../../assets/video/video.mp4'

//IMAGES
import '../../assets/images/screen.jpg'
import '../../assets/images/header-bg.png'
import '../../assets/images/header-stick-bg.png'


const headerTop = document.querySelector('.js-headerScroll');

window.addEventListener('scroll', function () {
	this.scrollY > 0 ? headerTop.classList.add('header_scroll') : headerTop.classList.remove('header_scroll')
});