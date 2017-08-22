<template lang="pug">
    include ./layout/mixins

    
    div.app
        Header-Component
        transition(name='slideInLeft')
            MobileMenu(v-if='menu')
        
        main(:class='[ auth ? "main main_center" : "main" ]')
            router-view


        include ./components/Footer/Footer

        transition(name='fade')
            PopupWrapper(v-if="this.$store.getters.getShowPopupCallback")
                PopupCallback

</template>

<script>

    import HeaderComponent from './components/HeaderB2B/HeaderB2B.vue'
    import MobileMenu from './components/MobileMenu/MobileMenu.vue'
    import PopupWrapper from './components/PopupWrapper/PopupWrapper.vue'
    import PopupCallback from './components/PopupCallback/PopupCallback.vue'
    import Auth from './components/Auth/Auth.vue'

    export default {
        name: 'Application',
        components: {
            HeaderComponent,
            MobileMenu,
            PopupWrapper,
            PopupCallback,
            Auth
        },
        computed: {
            menu() {
                return this.$store.state.MobileMenu.show
            },

            auth() {
                return this.$route.path == '/auth' || this.$route.path == '/' ? true : false
            },

            userIsAuthenticated() {
                return this.$store.getters.getUser !== null && this.$store.getters.getUser !== undefined
            }
        },
        created() {
            if (!this.userIsAuthenticated) {
                this.$router.push('/auth')
            }
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

        &_center {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

</style>


