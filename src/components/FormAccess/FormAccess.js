import Field from '../Field.vue'

export default {
    name: 'FormAccess',
    components: {
        Field
    },
    data() {
        return {
            name: '',
            city: '',
            company: '',
            phone: ''
        }
    }
}