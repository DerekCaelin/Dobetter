angular.module('app.controllers', [])
  
.controller('deTrumpifierCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('issuesCtrl', ['$scope', '$stateParams', 'memoryService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, memoryService) {
    
    $scope.memoryService = memoryService;
    
    $scope.testtest = function (){
        alert("Test!");
    }
    
    $scope.ChooseIssue  = function(click){
        memoryService.issueOfTheMoment = click;
        alert(issueOfTheMoment);
    }
    


}])
   
.controller('causesCtrl', ['$scope', '$stateParams', 'memoryService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, memoryService) {
    
    $scope.memoryService = memoryService;
    $scope.reveal = memoryService.issueOfTheMoment;

  $scope.causes = [
        {
            name: 'Donate to American Islamic Congress (AIC)',
            description: 'The American Islamic Congress is a non-religious, civic society organization that provides an alternative Muslim voice for the promotion of civil and human rights through advocacy, engagement and education.',
            image: 'http://www.aicongress.org/wp-content/themes/aic/images/logo-img.jpg',
            url: 'http://www.aicongress.org',
            type: 'Islam Environment'
        },
        
         {
            name: 'Howdy',
            description: 'things are loltacular.',
            image: 'img/Photo_103.jpg',
            type: 'Islam'
        },
        
         {
            name: 'Heya',
            description: 'things are radical.',
            image: 'img/Photo_103.jpg',
            type: 'Islam'
        },
        
        {
            name: 'Hi there',
            description: 'things are great.',
            image: 'img/Photo_103.jpg',
            type: 'Bob'
        },
        
        {
            name: 'green thing',
            description: 'things are great.',
            image: 'img/Photo_103.jpg',
            type: 'Environment'
        }
    ];
    
    $scope.causesDisplay = [];
    
     $scope.random = function() {
        return 0.5 - Math.random();
    }
    
    $scope.getRandomIndex = function(length){
        return Math.floor(Math.random() * length);
    }
    
    $scope.getListOfCauses
    
   //Select Random Cause within filter to display
/*   $scope.getRandomCause = function(){
       
       $scope.causesTemp = []; //temporary array of causes
       
       for(int i==0; i=causes.length ; i++){
           
       }
       
   }*/
   
   //open url
   $scope.OpenCauseURL = function (destination){
       alert("Tried to open "+destination);
       window.open(destination);
      
    }

}])
   
 