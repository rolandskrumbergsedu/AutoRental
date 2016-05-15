'use strict';

angular.module('autoApp', []);

angular.module('autoApp')
    .controller('reservationController', [
        '$scope', '$http' , function($scope, $http) {
            
            $scope.request = {};
            
            $scope.sendReservation = function() {
                $http.post('http://autorentalapi.azurewebsites.net/api/reservation', $scope.request)
                    .then(function (response) {
                        $scope.postResult = response.status;
                    });
            }
            
        }
    ]);

