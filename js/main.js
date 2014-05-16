require.config({
    paths: {
        'jquery': 'libs/jquery/jquery',
        'underscore': 'libs/underscore/underscore',
        'backbone' : 'libs/backbone/backbone',
        'marionette': 'libs/marionette/marionette.bundled',
        'spin': 'libs/spin/spin',
        'handlebars': 'libs/handlebars/handlebars'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'mariontte': {
            deps: ['backbone'],
            exports: 'Marionette'
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    }
});

require([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'handlebars'
], function ( $, _, Backbone, Marionette, Handlebars ) {
    'use strict';
    // App entry point

});