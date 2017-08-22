import Field from '../Field.vue'

    export default {
        name: 'Auth',
        components: { Field },
        data() {
            return {
                email: '',
                password: '',
                emailAuth: '',
                passwordAuth: ''
            }
        },
        computed: {
            user() {
                return this.$store.getters.getUser
            }
        },
        watch: {
            user(value) {
                if (value !== null && value !== undefined) {
                    this.$router.push('/')
                }
            }
        },
        methods: {
            onSingup() {
                this.$store.dispatch('singUp', {
                    email: this.email,
                    password: this.password
                })

                this.email = "";
                this.password = "";
            },

            onSingin() {
                this.$store.dispatch('singIn', {
                    email: this.emailAuth,
                    password: this.passwordAuth
                })

                this.emailAuth = '';
                this.passwordAuth = '';
            }
        }
    }