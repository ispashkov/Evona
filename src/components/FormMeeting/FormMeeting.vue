<template lang="pug">
    div.page-section.page-section_dark.page-section_form
        div.container
            div.row.justify-content-center
                div.col-4
                    form.form
                        div.row.mb-4
                            div.col
                                field(type='text' name='userNameMeeting' label='ФИО' v-model='name')

                        div.row.mb-5
                            div.col
                                field(type='tel' name='userPhoneMeeting' label='Телефон' v-model='phone')

                        div.row.justify-content-center
                            button.button.button_primary.button_xl(type='submit') Назначить встречу
</template>

<script src='./FormMeeting'></script>

