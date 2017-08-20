const field = document.querySelectorAll('.form-group__field');

for (let i = 0; i < field.length; i++) {

	field[i].addEventListener('focus', function () {
		this.closest('.form-group').classList.add('form-group_valid');
	});

	field[i].addEventListener('blur', function () {
		this.value
			? this.closest('.form-group').classList.add('form-group_valid')
			: this.closest('.form-group').classList.remove('form-group_valid');
	});

}