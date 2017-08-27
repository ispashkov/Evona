<template lang="pug">
    include ../../layout/mixins

    div(:class='[selected ? "selectbox selectbox_selected" : "selectbox"]')
        div.selectbox-heading( @click='toggle()') {{ selected ? selectItem : placeholder}}

            button.selectbox__icon(type='button' v-if='selected' @click.stop='clear()')
                +svgIcon(12, 12, '', '#delete-filter')

            button.selectbox__icon(type='button' v-else)
                +svgIcon(10, 6, '', '#filter-arrow')(v-else)
        
        transition(name='fadeUp')
            ul.selectbox-dropdown(v-if='active')
                li.selectbox-dropdown__item(@click='select($event.target.attributes.value.value)' value='Evona') Evona
                li.selectbox-dropdown__item(@click='select($event.target.attributes.value.value)' value='Nysense') Nysense
                
</template>

<script src='./Selectbox'></script>
