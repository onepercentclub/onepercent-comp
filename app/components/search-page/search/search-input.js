import Ember from 'ember';

export default  Ember.TextField.extend({
    placeholder: function() {
        let count = this.get('optionText'),
            project = this.pluralize({
                amount: count,
                singular: `project`,
                plural: `projects`
            }),
            task = this.pluralize({
                amount: count,
                singular: `task`,
                plural: `tasks`
            });
    }.property('optionText'),

    pluralize (props) {
        if (props.amount === 1) {
            return props.singular;
        } else {
            return props.plural;
        }
    },
    // don't submit on enter
    didInsertElement: function(){
        $('#search-form').on('submit', function(e) {
            return false;
        });
    }
});
