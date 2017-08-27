<template lang='pug'>

    include ../../layout/mixins

    div.search
        form.form
            input.search__field(type='text' placeholder='Поиск')
            button.search__submit(type='submit')
                +svgIcon(22, 22, 'search__icon', '#search')
        

</template>

<script src='./Search'></script>

