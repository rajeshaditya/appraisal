var app = angular.module("myapp", [])
app.controller("ListController", ['$scope', function($scope) {
  $scope.personalDetails = [{
    'subjectName': '',
    'yearSem': '',
    'studentsAppeared': '',
     'studentsPassed':'',
     'percentage':'',
     'average':''
  }];


  $scope.calculatePercentage = function(val) {
    val.percentage = (parseFloat(val.studentsPassed)*100)/parseFloat(val.studentsAppeared);
    $scope.calAverage();
  };

  $scope.addNew = function(personalDetail) {
    $scope.personalDetails.push({
      'subjectName': "",
    'yearSem': "",
    'studentsAppeared': "",
     'studentsPassed':"",
     'percentage':""
     
    });
  };
  $scope.parseFloat = function(value) {
    return parseFloat(value);
  };
  $scope.removeRow=function(index){       
       // remove the row specified in index
    $scope.personalDetails.splice( index, 1);
    $scope.calAverage();
    // if no rows left in the array create a blank array
    if ($scope.personalDetails.length() === 0){
      $scope.personalDetails = [];
      $scope.calAverage();
    }
    
  };

  $scope.calAverage=function()
  {
    var total =0;
    angular.forEach($scope.personalDetails,function(item){
      total += item.percentage;
    })
    $scope.personalDetails[0].average = (total/$scope.personalDetails.length).toFixed(2);
  }
}]);