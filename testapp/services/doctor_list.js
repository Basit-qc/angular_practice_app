/**
 * Created by basit on 7/30/15.
 */
(function() {
mainApp.service('doctor_list', function(){
this.doc_list = [
            {
                "id":1,
                "name": "Waqas",
                "speciality": "Skin Specialist"
            },
            {
                "id":2,
                "name": "Zohaib",
                "speciality": "Heart Specialist"
            },
            {
                "id":3,
                "name": "Ahmed",
                "speciality": "Neuro Surgeon"
            },
            {
                "id":4,
                "name": "Nauman",
                "speciality": "Eye Specialist"
            }];
    });
}());
