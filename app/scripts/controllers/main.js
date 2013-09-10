'use strict';

angular.module('testangApp')
    .controller('MainCtrl', function ($scope) {
        $scope.todos = {
            items: [],
            add: function(item){
                this.items.push(item);
            }
        };

    });
