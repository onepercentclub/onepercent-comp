import Ember from 'ember';

export default Ember.Component.extend({
    data: null,

    setUpCarousel: function() {
        let quoteSlider = this.$('.quote-carousel').unslider({
                dots: false,
                fluid: true,
                delay: 8000,
                keys: false
            });

        this.set('data', quoteSlider.data('unslider'));
    }.on('didInsertElement'),

    actions: {
        previous: function() {
            let data = this.get('data');
            data.prev();
        },

        next: function() {
            let data = this.get('data');
            data.next();
        }
    }
});
