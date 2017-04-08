/**
 * Created by basit on 7/29/15.
 */
(function() {
    mainApp.controller('myController', function ($scope, doctor_list) {
        $scope.result = doctor_list.doc_list;
    });
}());
