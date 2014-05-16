require.config({
    paths: {
        'jquery': 'libs/jquery/jquery',
        'underscore': 'libs/underscore/underscore',
        'backbone' : 'libs/backbone/backbone',
        'backbone.babysitter' : 'libs/backbone/backbone.babysitter',
        'backbone.wreqr' : 'libs/backbone/backbone.wreqr',
        'marionette': 'libs/marionette/marionette',
        'spin': 'libs/spin/spin',
        'handlebars': 'libs/handlebars/handlebars'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone.wreqr': {
            deps: ['backbone'],
            exports: 'Backbone.Wreqr'
        },
        'backbone.babysitter': {
            deps: ['backbone'],
            exports: 'Backbone.ChildViewContainer'
        },
        'marionette': {
            deps: ['backbone', 'backbone.babysitter', 'backbone.wreqr'],
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