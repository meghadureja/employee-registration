'use strict';
 
angular.module('myApp').controller('EmployeeController', ['$scope', 'EmployeeService', function($scope, EmployeeService) {
    var self = this;
    self.employee={id:null,name:'',gender:'',address:'',designation:''};
    self.employees=[];
 
    self.submit = submit;
    self.edit = edit;
    self.remove = remove;
    self.reset = reset;
    $scope.roles = ["Associate Consultant", "Lead Consultant", "Director" ,"Associate Manager"];
 
    fetchAllEmployees();
 
    function fetchAllEmployees(){
        EmployeeService.fetchAllEmployees()
            .then(
            function(d) {
                self.employees = d;
            },
            function(errResponse){
                console.error('Error while fetching Employees');
            }
        );
    }
 
    function createEmployee(employee){
        EmployeeService.createEmployee(employee)
            .then(
            fetchAllEmployees,
            function(errResponse){
                console.error('Error while creating Employee');
            }
        );
    }
 
    function updateEmployee(employee, id){
        EmployeeService.updateEmployee(employee, id)
            .then(
            fetchAllEmployees,
            function(errResponse){
                console.error('Error while updating Employee');
            }
        );
    }
 
    function deleteEmployee(id){
        EmployeeService.deleteEmployee(id)
            .then(
            fetchAllEmployees,
            function(errResponse){
                console.error('Error while deleting Employee');
            }
        );
    }
 
    function submit() {
        if(self.employee.id===null){
            console.log('Saving New Employee', self.employee);
            createEmployee(self.employee);
        }else{
            updateEmployee(self.employee, self.employee.id);
            console.log('Employee updated with id ', self.employee.id);
        }
        reset();
    }
 
    function edit(id){
        console.log('id to be edited', id);
        for(var i = 0; i < self.employees.length; i++){
            if(self.employees[i].id === id) {
                self.employee = angular.copy(self.employees[i]);
                break;
            }
        }
    }
 
    function remove(id){
        console.log('id to be deleted', id);
        if(self.employee.id === id) {//clean form if the employee to be deleted is shown there.
            reset();
        }
        deleteEmployee(id);
    }
 
 
    function reset(){
        self.employee={id:null,employeename:'',address:'',email:''};
        $scope.myForm.$setPristine(); //reset Form
    }
 
}]);