<template lang="pug">
    include ./layout/mixins

    
    div.app
        Header-Component
        
        main.main
            div.container
                div.row.justify-content-center
                    div.col-10.col-lg-8.col-xl-6
                        div.row.no-gutters
                            div.col-6
                                div.page-section.page-section_wrap.page-section_light
                                    form.form.form_singup
                                        h2.form__title Регистрация
                                        
                                        field(type='text' name='userNameSingup' label='ФИО' class='mb-4')
                                        
                                        field(type='email' name='userEmailSingup' label='E-mail' class='mb-4')
                                       
                                        field(type='password' name='userPassSingup' label='Пароль' class='mb-4')
                                        
                                        field(type='password' name='userRepassSingup' label='Пароль*' class='mb-5')
                                        
                                        div.d-flex.justify-content-center
                                            button.button.button_primary.button_lg(type='submit') Зарегистрироваться
                                    
                            div.col-6
                                div.page-section.page-section_wrap.page-section_light
                                    form.form.form_singup
                                        h2.form__title Авторизация
                                        
                                        field(type='email' name='userEmailSingin' label='E-mail' class='mb-4')
                                       
                                        field(type='password' name='userPassSingin' label='Пароль' class='mb-5')
                                        
                                        div.d-flex.justify-content-center
                                            button.button.button_primary.button_lg(type='submit') Авторизоваться


        include ./components/Footer/Footer

        transition(name='fade')
            PopupWrapper(v-if="this.$store.getters.getShowPopupCallback")
                PopupCallback

</template>

<script>

    import HeaderComponent from './components/HeaderB2B/HeaderB2B.vue'
    import PopupWrapper from './components/PopupWrapper/PopupWrapper.vue'
    import PopupCallback from './components/PopupCallback/PopupCallback.vue'
    import Field from './components/Field.vue'

    export default {
        name: 'Application',
        components: {
            HeaderComponent,
            PopupWrapper,
            PopupCallback,
            Field
        }
    }
</script>

<style lang="scss">

    @import './styles/tools/variables';
    @import './styles/tools/vendors';

    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .main {
        padding: 3*$spacer 0;
    }

</style>


