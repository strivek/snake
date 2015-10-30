'use strict';
var Dispatcher = require('/js/assets/Flux').Dispatcher;

//Create Dispatcher instance

export var AppDispatcher = new Dispatcher();

/**
 * @desc 增加
 * @param action
 */
AppDispatcher.handleAction = function (action) {
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    })
};



