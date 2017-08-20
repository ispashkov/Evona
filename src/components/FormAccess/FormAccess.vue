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
                                div.form-group
                                    label.form-group__label(for='userNameB2B') ФИО
                                    input.form-group__field(type="text" id='userNameB2B' autocomplete='off')

                            div.col-6
                                div.form-group
                                    label.form-group__label(for='userCityB2B') Город
                                    input.form-group__field(type="text" id='userCityB2B' autocomplete='off')

                        div.row.mb-5
                            div.col-6
                                div.form-group
                                    label.form-group__label(for='userCompanyB2B') Компания
                                    input.form-group__field(type="text" id='userCompanyB2B' autocomplete='off')

                            div.col-6
                                div.form-group
                                    label.form-group__label(for='userPhoneB2B') Телефон
                                    input.form-group__field(type="tel" id='userPhoneB2B' autocomplete='off')

                        div.row.justify-content-center
                            button.button.button_primary.button_xl(type='submit') Отправить заявку
</template>

<script src='./FormAccess'></script>
