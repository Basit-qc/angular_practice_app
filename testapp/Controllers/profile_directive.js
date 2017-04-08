/**
 * Created by basit on 8/4/15.
 */
(function () {
mainApp.controller('profile_directive', function($scope, doctor_profile) {
        $scope.doctorData = doctor_profile.doc_data;
        $scope.Waqas = $scope.doctorData[0];
        $scope.Zohaib = $scope.doctorData[1];
        $scope.Ahmad = $scope.doctorData[2];
        $scope.Nauman = $scope.doctorData[3];

  });
})();