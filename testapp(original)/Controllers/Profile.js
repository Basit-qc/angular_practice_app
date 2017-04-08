/**
 * Created by basit on 7/30/15.
 */
(function() {
    mainApp.controller('Profile', function ($scope, $routeParams, doctor_profile) {
        $scope.doctorId = $routeParams.doctorId;
        $scope.doctorData = doctor_profile.doc_data;
        $scope.profile = null;

        function init(){
            for(var index=0, len=$scope.doctorData.length; index<len; index++) {
                if ($scope.doctorData[index].id === parseInt($scope.doctorId)){
                    $scope.profile = $scope.doctorData[index];
                    break;
                }

            }
        }
        init();
    });
}());