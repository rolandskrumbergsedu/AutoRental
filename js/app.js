'use strict';

angular.module('autoApp', []);

angular.module('autoApp')
    .controller('reservationController', [
        '$scope', '$http' , function($scope, $http) {
            
            $scope.request = {};
            $scope.postLoading = false;
            $scope.postSuccess = false;
            $scope.postError = false;
            
            $scope.sendReservation = function() {
                
                $scope.postLoading = true;
                
                $http.post('http://autorentalapi.azurewebsites.net/api/reservation', $scope.request)
                    .then(function (response) {
                        
                        $scope.postLoading = false;
                        
                        var postResult = response.status;
                        if (postResult === '200') {
                            $scope.postSuccess = true;
                        } else {
                            $scope.postError = true;
                        }
                        
                    });
            }
            
            $scope.cleanPrevious = function() {
                $scope.request = {};
                $scope.postLoading = false;
                $scope.postSuccess = false;
                $scope.postError = false;
            }
            
        }
    ]);

