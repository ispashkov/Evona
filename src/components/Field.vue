<template lang='pug'>
     div(:class="[ active ? 'form-group form-group_valid' : 'form-group' ]")
        label.form-group__label(:for='name') {{ label }}
        input.form-group__field(:type='type' :id='name' :name='name' autocomplete='off' ref='field' @focus='onFocus()' @blur='onBlur()')
</template>

<script>
    export default {
        name: 'Field',
        data() {
            return {
                active: false
            }
        },
        props: {
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            label: {
                type: String,
                required: true
            }
        },
        methods: {
            onFocus() {
                this.active = true;
            },

            onBlur() {
                this.$refs.field.value ? this.active = true : this.active = false
            }
        }
    }
</script>


