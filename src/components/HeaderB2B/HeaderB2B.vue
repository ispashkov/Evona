<template lang="pug">
    include ../../layout/mixins

    header(class="header header_scroll")
        div.header-top
            div.container
                div.row
                    div.col-4.header-top__left
                        div.header-hamburger(@click='showMenu()')
                            span.header-hamburger__line
                            span.header-hamburger__line
                            span.header-hamburger__line
                        a.header__phone(href="tel:+74951090459") + 7 495
                            =" "
                            b 109-04-59
                        button.button.button_primary.header__button.js-popupShow(type='button' @click="showPopupCallback()") Заказать звонок
                    div.col-4.header-top__center
                        div.header-logo
                            a.header-logo__item(href="./index.html")
                                +svgIcon(170, 38, 'header-logo__icon header-logo__icon_evona', '#evona_white')
                            a.header-logo__item(href="./index.html")
                                +svgIcon(190, 54, 'header-logo__icon header-logo__icon_nysense', '#nysense_white')
                    div.col-4.header-top__right
                            a.button.button_primary.header__button.header__button_b2b(href="javascript:void(0)") Личный кабинет
                            div.header-languages
                                a.header-languages__link.header-languages__link_active(href="javascript:void(0)") RU
                                a.header-languages__link(href="javascript:void(0)") EN
</template>

<script>
    import './images/header-stick-bg.png'
    import './images/evona_white.svg'
    import './images/nysense_white.svg'

    export default {
        name: 'Header',
        methods: {
            showPopupCallback() {
                this.$store.dispatch('showPopupCallback');
            },

            showMenu() {
                this.$store.dispatch('showMenu');
            }
        }
    }
</script>

