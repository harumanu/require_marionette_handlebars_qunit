require.config({
    baseUrl: './',
    paths: {
        'QUnit': '../js/libs/qunit/qunit',
        'sinon': '../js/libs/sinon/sinon',
        'sinon.qunit': '../js/libs/sinon/sinon.qunit',
        'jquery': '../js/libs/jquery/jquery',
    },
    shim: {
        'QUnit': {
            exports: 'QUnit',
            init: function () {
                QUnit.config.autoload = false;
                QUnit.config.autostart = false;
            }
        },
        'sinon': {
            exports: 'sinon'
        },
        'sinon.qunit': {
            exports: 'sinon',
            deps: ['QUnit', 'sinon']
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    }
});

// require the unit tests.
require(
    ['QUnit', 'sinon', 'sinon.qunit'],
    function ( QUnit, sinon, sinonQunit ) {
        'use strict';
        // Tests
    }
);