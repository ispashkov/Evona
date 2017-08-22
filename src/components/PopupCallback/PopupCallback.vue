<template lang="pug">
	div
		div.popup-header
			h3.popup__title Заказать обратный звонок
		div.popup-content
			div.row.mb-4
				div.col-6
					field(type='text' name='userNameCallback' label='ФИО' required v-model='name')
				
				div.col-6
					field(type='tel' name='userPhoneCallback' label='Телефон' required v-model='phone')
			
			div.row.mb-5
				div.col
					field(name='userMessageCallback' label='Сообщение' required textarea v-model='message')
			
			div.row.justify-content-center
				button.button.button_primary.button_lg.js-popupSubmit(type='submit') Отправить

</template>

<script src="./PopupCallback.js"></script>