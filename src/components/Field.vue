<template lang='pug'>
     div(:class="[ active ? 'form-group form-group_valid' : 'form-group' ]")
        label.form-group__label(:for='name') {{ label }}
        textarea.form-group__field(
            :id='name'
            :name='name'
            :value='value'
            autocomplete='off'
            ref='field'
            @focus='onFocus()'
            @blur='onBlur()'
            @input='onInput($event.target.value)'
            :required='required'
            v-if='textarea'
        )
        input.form-group__field(
            :type='type'
            :id='name'
            :name='name'
            :value='value'
            autocomplete='off'
            ref='field'
            @focus='onFocus()'
            @blur='onBlur()'
            @input='onInput($event.target.value)'
            :required='required'
            v-else
        )
</template>

<script>
    export default {
        name: 'Field',
        data() {
            return {
                active: false,
            }
        },
        props: {
            type: {
                type: String,
                required: false
            },
            name: {
                type: String,
                required: true
            },
            label: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: true
            },
            required: {
                required: false
            },
            textarea: {
                required: false
            }
        },
        methods: {
            onFocus() {
                this.active = true;
            },

            onBlur() {
                this.$refs.field.value ? this.active = true : this.active = false
            },

            onInput(value) {
                this.$emit('input', value)
            },
        }
    }
</script>


