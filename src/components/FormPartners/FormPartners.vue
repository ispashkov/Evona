<template lang="pug">
    div.page-section.page-section_dark.page-section_form
        div.container
            div.row.justify-content-center
                div.col-12.col-md-10.col-lg-8.col-xl-6
                    form.form

                        div.row
                            div.col
                                h2.form__title Начать сотрудничество

                        div.row.mb-4
                            div.col-6
                                field(type='text' name='userName' label='ФИО')

                            div.col-6
                                field(type='text' name='userCity' label='Город')

                        div.row.mb-5
                            div.col-6
                                field(type='text' name='userCompany' label='Компания')

                            div.col-6
                                field(type='tel' name='userPhone' label='Телефон')

                        div.row.justify-content-center
                            button.button.button_primary.button_xl(type='submit') Отправить заявку

                        div.row
                            div.col
                                span.form__description *А он – действительно классный
</template>

<script src='./FormPartners'></script>

