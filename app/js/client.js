'use strict';

require('angular/angular');

var makeupsApp = angular.module('makeupsApp', []);

require('./makeups/controllers/makeups_controller')(makeupsApp);