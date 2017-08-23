import Field from '../Field.vue'

export default {
    name: 'FormPartners',
    components: {Field},
    data() {
        return {
            name: '',
            city: '',
            company: '',
            phone: ''
        }
    }
}