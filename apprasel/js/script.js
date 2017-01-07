var app = angular.module("myapp", [])
app.controller("ListController2", ['$scope', function($scope) {
  $scope.subjectAverages = [{
    'subjectName': '',
    'yearSem': '',
    'studentsAppeared': '',
     'studentsPassed':'',
     'percentage':'',
     'average':'',
     'facultyComment':''
  }];


  $scope.calculatePercentage = function(val) {
    val.percentage = (parseFloat(val.studentsPassed)*100)/parseFloat(val.studentsAppeared);
    $scope.calAverage();
  };

  $scope.addNew = function(personalDetail) {
    $scope.subjectAverages.push({
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
    $scope.subjectAverages.splice( index, 1);
    $scope.calAverage();
    // if no rows left in the array create a blank array
    if ($scope.subjectAverages.length() === 0){
      $scope.subjectAverages = [];
      $scope.calAverage();
    }
    
  };

  $scope.calAverage=function()
  {
    var total =0;
    angular.forEach($scope.subjectAverages,function(item){
      total += item.percentage;
    })
    $scope.subjectAverages[0].average = (total/$scope.subjectAverages.length).toFixed(2);
  }
}]);

app.controller("ListController3", ['$scope', function($scope) {
  $scope.proctoringAverages = [{
    'studentAlloted': '',
    'yearSem': '',
    'studentsAppeared': '',
     'studentsPassed':'',
     'percentage':'',
     'average':'',
     'facultyComment':''
  }];


  $scope.calculatePercentage = function(val) {
    val.percentage = (parseFloat(val.studentsPassed)*100)/parseFloat(val.studentsAppeared);
    $scope.calAverage();
  };

  $scope.addNew = function(proctoringAverage) {
    $scope.proctoringAverages.push({
      'studentAlloted': "",
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
    $scope.proctoringAverages.splice( index, 1);
    $scope.calAverage();
    // if no rows left in the array create a blank array
    if ($scope.proctoringAverages.length() === 0){
      $scope.proctoringAverages = [];
      $scope.calAverage();
    }
    
  };

  $scope.calAverage=function()
  {
    var total =0;
    angular.forEach($scope.proctoringAverages,function(item){
      total += item.percentage;
    })
    $scope.proctoringAverages[0].average = (total/$scope.proctoringAverages.length).toFixed(2);
  }
}]);


app.controller("ListController4", ['$scope', function($scope) {
  $scope.studentFeedbacks = [{
    'subjectName': '',
    'yearSem': '',
    'studentsAppeared': '',
     'studentsPassed':'',
     'percentage':'',
     'average':'',
     'facultyComment':''
  }];


  $scope.calculatePercentage = function(val) {
    val.percentage = (parseFloat(val.studentsPassed)*100)/parseFloat(val.studentsAppeared);
    $scope.calAverage();
  };

  $scope.addNew = function(studentFeedback) {
    $scope.studentFeedbacks.push({
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
    $scope.studentFeedbacks.splice( index, 1);
    $scope.calAverage();
    // if no rows left in the array create a blank array
    if ($scope.studentFeedbacks.length() === 0){
      $scope.studentFeedbacks = [];
      $scope.calAverage();
    }
    
  };

  $scope.calAverage=function()
  {
    var total =0;
    angular.forEach($scope.studentFeedbacks,function(item){
      total += item.percentage;
    })
    $scope.studentFeedbacks[0].average = (total/$scope.studentFeedbacks.length).toFixed(2);
  }
}]);

app.controller("ListController5", ['$scope', function($scope) {
  $scope.researchPublications = [{
    'researchPaper': "Scopus/SCI",
    'no_Paper': '',
    'maxMark': 20,
    'obtainedMarks':''
     
  },
  {
    'researchPaper': "National/International Journal",
    'no_Paper': '',
    'maxMark': 15,
    'obtainedMarks':''
  },
  {
    'researchPaper': "Reputed Conference",
    'no_Paper': '',
    'maxMark': 10,
    'obtainedMarks':''
     
  },
  {
    'researchPaper': "Journal/Conference",
    'no_Paper': '',
    'maxMark': 5,
    'obtainedMarks':''
     
  },
  {
    'researchPaper': "No Journal/Conference",
    'no_Paper': '',
    'maxMark': 0,
    'obtainedMarks':''
     
  }

  ];
  }]);



app.controller("ListController6", ['$scope', function($scope) {
  $scope.scopusDetails = [{
    'JournalDetail': '',
    'JournalNumber': '',
    'reviewDetail': '',
     'author':''
     
  }];


 

  $scope.addNew = function(scopusDetail) {
    $scope.scopusDetails.push({
      'JournalDetail': "",
    'JournalNumber': "",
    'reviewDetail': "",
     'author':""
     
     
    });
  };
  
  $scope.removeRow=function(index){       
       // remove the row specified in index
    $scope.scopusDetails.splice( index, 1);
    $scope.calAverage();
    // if no rows left in the array create a blank array
    if ($scope.scopusDetails.length() === 0){
      $scope.scopusDetails = [];
      
    }
    
  };

  
}]);



app.controller("ListController7", ['$scope', function($scope) {
  $scope.nationalJournals = [{
    'JournalDetail': '',
    'JournalNumber': '',
    'reviewDetail': '',
     'author':''
     
  }];


 

  $scope.addNew = function(nationalJournal) {
    $scope.nationalJournals.push({
      'JournalDetail': "",
    'JournalNumber': "",
    'reviewDetail': "",
     'author':""
     
     
    });
  };
  
  $scope.removeRow=function(index){       
       // remove the row specified in index
    $scope.nationalJournals.splice( index, 1);
    
    // if no rows left in the array create a blank array
    if ($scope.nationalJournals.length() === 0){
      $scope.nationalJournals = [];
      
    }
    
  };

  
}]);


app.controller("ListController8", ['$scope', function($scope) {
  $scope.reputedConferences = [{
    'title': '',
    'type': '',
    'detail': '',
     'author':''
     
  }];


 

  $scope.addNew = function(reputedConference) {
    $scope.reputedConferences.push({
      'title': "",
    'type': "",
    'detail': "",
     'author':""
     
     
    });
  };
  
  $scope.removeRow=function(index){       
       // remove the row specified in index
    $scope.reputedConferences.splice( index, 1);
    
    // if no rows left in the array create a blank array
    if ($scope.reputedConferences.length() === 0){
      $scope.reputedConferences = [];
      
    }
    
  };

  
}]);
