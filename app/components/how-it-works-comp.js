import Ember from 'ember';

/**
 * Custom How it works blocks.
 *
 * @param {Boolean} (optional) hideHeader = hide header.
 * @param {Boolean} (optional) hideStepOne = hide step one.
 * @param {Boolean} (optional) hideStepTwo = hide step two.
 * @param {Boolean} (optional) hideStepThree = hide step three.
 * @param {Boolean} (optional) hideFooter = hide footer.
 *
 * Usage:
    {{#how-it-works hideFooter=true as |section|}}
        {{#if (eq section 'header')}}
            header content/elements
        {{else if (eq section 'stepOne')}}
            step one content/elements
        {{else if (eq section 'stepTwo')}}
            step two content/elements
        {{else if (eq section 'stepThree')}}
            step three content/elements
        {{/if}}
    {{/how-it-works}}
 *
 * If you hide a element you don't have to check it, like the footer(hideFooter=true) in this case.
 *
 *
 * Example: frontend/lib/onepercent/templates/home.hbs
 */
export default Ember.Component.extend({
    header:  true,
    stepOne: true,
    stepTwo: true,
    stepThree: true,
    footer: true
});
