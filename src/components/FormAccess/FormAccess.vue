<template lang='pug'>
    div.page-section.page-section_dark.page-section_form
        div.container
            div.row.justify-content-center
                div.col-12.col-md-10.col-lg-8.col-xl-6
                    form.form

                        div.row
                            div.col
                                h2.form__title Получить доступ к b2b

                        div.row.mb-4
                            div.col-6
                                field(type='text' name='userNameB2B' label='ФИО')

                            div.col-6
                                field(type='text' name='userCityB2B' label='Город')

                        div.row.mb-5
                            div.col-6
                                field(type='text' name='userCompanyB2B' label='Компания')

                            div.col-6
                                field(type='tel' name='userPhoneB2B' label='Телефон')

                        div.row.justify-content-center
                            button.button.button_primary.button_xl(type='submit') Отправить заявку
</template>

<script src='./FormAccess'></script>
