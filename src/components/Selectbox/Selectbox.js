import './icons/delete-filter.svg'
import './icons/filter-arrow.svg'

export default {
    name: 'Selectbox',
    data() {
        return {
            active: false,
            selected: false,
            selectItem: null
        }
    },
    props: {
        placeholder: {
            type: String,
            required: true
        }
    },
    mounted: function () {
        document.addEventListener('keydown', (e) => {
            if (e.keyCode == 27) {
                this.active = false;
            }
        });

        document.addEventListener('mouseup', (e) => {
            
            if (!e.target.closest('.selectbox')) {
                this.active = false
            }
        });

    },
    methods: {
        clear() {
            this.selected = false;
            this.selectItem = null;
        },

        toggle() {
            this.active = !this.active;
        },

        select(value) {
            this.selected = true;
            this.active = false;

            this.selectItem = value;
        }
    }
}