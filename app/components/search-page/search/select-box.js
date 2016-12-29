import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['custom-select-box'],
    active: false,
    prompt: `Select an option`,
    activeSelectBox: false,

    selectedValue: function(){
        var value = this.get('value');
        if (value) {
            var item = this.get('content').filterBy(this.get('optionValuePath'), value)[0];
            if (item.get) {
                this.set('activeSelectBox', true);
                return item.get(this.get('optionLabelPath'));
            } else {
                this.set('activeSelectBox', true);
                return item[this.get('optionLabelPath')];
            }
        }
        this.set('activeSelectBox', false);
        return this.get('prompt');
    }.property('value'),

    showOptions: Ember.computed.gt('content.length', 1),

    mouseEnter: function() {
        this.checkPosition();
    },

    click: function() {
        this.checkPosition();
    },

    checkPosition: function() {
        var boxHover = this.$('.box-hover');
        if (boxHover.length < 1) return;

        var currentPosition = boxHover.offset(),
            elmWidth = boxHover.width();

        if ((currentPosition.left + elmWidth) > $(window).width()) {
            boxHover.addClass('is-right-aligned');
        }
    },

    actions: {
        selectOption: function(item) {
            if (item && item.get) {
                this.set('value', item.get(this.get('optionValuePath')));
                this.set('activeSelectBox', true);
            } else if (item) {
                this.set('value', item[this.get('optionValuePath')]);
                this.set('activeSelectBox', true);
            } else {
                this.set('value', null);
                this.set('activeSelectBox', false);
            }
        },

        clearSelect() {
            this.set('value', null);
            this.set('activeSelectBox', false);
        },

        toggleMenu() {
            if (this.Resolution.isSmall) {
                this.toggleProperty('isShowMenu');
            }
        }
    }
});
