import Ember from 'ember';

export default Ember.Component.extend({
    isActive: function(){
        // Check if it's an Ember or a plain object
        if (this.get('option').get) {
            return (this.get('selected') == this.get('option').get(this.get('optionValuePath')));
        }
        if (this.get('option')) {
            return (this.get('selected') == this.get('option')[this.get('optionValuePath')]);
        }
        return false;
    }.property('option', 'selected', 'optionValuePath'),

    name: function(){
        // Check if it's an Ember or a plain object
        if (this.get('option').get) {
            return this.get('option').get(this.get('optionLabelPath'));
        }
        return this.get('option')[this.get('optionLabelPath')];
    }.property('optionLabelPath', 'option'),

    actions: {
        selectOption: function(item) {
            this.sendAction('selectOption', item);
        }
    }
});
