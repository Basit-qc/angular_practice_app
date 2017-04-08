/**
 * Created by basit on 7/30/15.
 */
(function() {
mainApp.service('doctor_profile', function(){
this.doc_data = [
            {
                "id":1,
                "name": "Waqas Javed",
                "education": "M.B.B.S, PhD",
                "address": "Los Angles",
                "speciality": "Skin Specialist"
            },
    {
                "id":2,
                "name": "Muhammad Zohaib",
                "education": "D.H.M.S",
                "address": "Texas",
                "speciality": "Heart Specialist"
            },
{
                "id":3,
                "name": "Ahmad Javed",
                "education": "PhD",
                "address": "Arizona",
                "speciality": "Neuro Surgeon"
            },
    {
                "id":4,
                "name": "Nauman Tariq",
                "education": "PhD",
                "address": "Japan",
                "speciality": "Eye Specialist"
            }];
    });
}());