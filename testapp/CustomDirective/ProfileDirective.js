/**
 * Created by basit on 8/4/15.
 */
(function(){
mainApp.directive('profile', function() {
   var directive = {};
   directive.restrict = 'E';
   directive.templateUrl = 'templates/profile_structure.html';
   directive.scope = {
       profile : "=name"
   };
   return directive;
});

})();