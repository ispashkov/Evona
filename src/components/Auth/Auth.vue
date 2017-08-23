<template lang="pug">
    div.container
        div.row.justify-content-center
            div.col-6
                div.row.no-gutters
                    div.col-6
                        div.page-section.page-section_wrap.page-section_light.page-section_angle-left
                            form.form.form_singup(@submit.prevent='onSingup()')
                                h2.heading-b2b.heading-b2b_form Я - новый партнер
                                            
                                field(type='email' name='userEmailSingup' label='E-mail*' class='mb-4' v-model='email' required)

                                field(type='password' name='userPasswordSingup' label='Пароль*' class='mb-5' v-model='password' required)
                                
                                
                                div.d-flex.justify-content-center
                                    button.button.button_primary.button_lg(type='submit') Отправить заявку
                    div.col-6
                        div.page-section.page-section_wrap.page-section_gray.page-section_angle-right
                            form.form.form_singup(@submit.prevent='onSingin()')
                                h2.heading-b2b.heading-b2b_form Авторизация
                                
                                field(type='email' name='userEmailSingin' label='E-mail' class='mb-4' v-model='emailAuth' required)
                                
                                field(type='password' name='userPassSingin' label='Пароль' class='mb-5' v-model='passwordAuth' required)
                                
                                div.d-flex.justify-content-center
                                    button.button.button_primary.button_lg(type='submit') Войти
</template>

<script src='./Auth'></script>

