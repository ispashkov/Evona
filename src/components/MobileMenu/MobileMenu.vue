<template lang="pug">
    include ../../layout/mixins

    div.mobile-menu
        h2.heading-b2b Меню

        button.mobile-menu__close(type='button' @click='closeMenu()')
            +svgIcon(50, 50, '', '#close')

        nav.mobile-menu-nav
            a.mobile-menu-nav__link(href='javascript:void(0)') О брендах
            a.mobile-menu-nav__link(href='javascript:void(0)') Lookbook
            a.mobile-menu-nav__link(href='javascript:void(0)') Коллекции
            a.mobile-menu-nav__link(href='javascript:void(0)') Сотрудничество
            a.mobile-menu-nav__link(href='javascript:void(0)') Купить сейчас
            a.mobile-menu-nav__link(href='javascript:void(0)') Блог
            a.mobile-menu-nav__link(href='javascript:void(0)') Контакты


</template>

<script>
    import './icons/close.svg'

    export default {
        name: 'MobileMenu',
        mounted: function () {
            document.addEventListener('keydown', (e) => {
                if (e.keyCode == 27) {
                    this.$store.dispatch('closeMenu')
                }
            });

            document.addEventListener('mouseup', (e) => {
            
                if (!e.target.closest('.mobile-menu')) {
                    this.closeMenu();
                }
            });
        },
        methods: {
            closeMenu() {
                this.$store.dispatch('closeMenu')
            }
        }
    }
</script>


