<template lang="pug">
	include ../../layout/mixins
	
	div.overlay(@click="close()")
		div.popup(@click.stop="")
			form
				button.popup__close.js-popupClose(type='button' @click="close()")
					+svgIcon(50, 50, '', '#close')
				
				slot
				
				div.popup-footer
		
</template>

<script src="./PopupWrapper.js"></script>