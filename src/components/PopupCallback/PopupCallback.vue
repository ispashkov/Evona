<template lang="pug">
	div
		div.popup-header
			h3.popup__title Заказать обратный звонок
		div.popup-content
			div.row.mb-4
				div.col-6
					div.form-group
						label.form-group__label(for='userNameCallback') ФИО
						input.form-group__field(type="text" id='userNameCallback' autocomplete='off')
				
				div.col-6
					div.form-group
						label.form-group__label(for='userPhoneCallback') Телефон
						input.form-group__field(type="tel" id='userPhoneCallback' autocomplete='off')
			
			div.row.mb-5
				div.col
					div.form-group
						label.form-group__label(for='userMessageCallback') Сообщение
						textarea.form-group__field(id='userMessageCallback' autocomplete='off')
			
			div.row.justify-content-center
				button.button.button_primary.button_lg.js-popupSubmit(type='submit') Отправить

</template>

<script src="./PopupCallback.js"></script>