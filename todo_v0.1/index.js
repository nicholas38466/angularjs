(function (angular) {
    window.app = angular.module('todo',[]);

    window.app.controller('todos', ['$scope', function ($scope) {
        $scope.getList = function(){
            var list = localStorage.getItem('list');
            if(list) $scope.list = JSON.parse(list);
        }
        $scope.saveTodos = function(){
            localStorage.setItem('list', JSON.stringify($scope.list))
            console.log($scope.list)
        }
        $scope.newTodo = {}
        $scope.getDate = function(){
            var date = new Date().toLocaleString().split(',')[0];
            var time = new Date().toLocaleString().split(',')[1];
            return date+'('+time+')'
        }
        $scope.list = [];
        $scope.checkOrigin = function(){
            var i;
            for(i=0;i<$scope.list.length;i++){
                if($scope.list[i].title===$scope.newTodo.title) return ('this task created... his id = ' + (i+1))
            }
            return true
        }
        $scope.addTodo = function(){
            
            if($scope.newTodo.title){
                if($scope.checkOrigin()===true){
                    $scope.newTodo.date = $scope.getDate();
                    $scope.newTodo.done = false;
                    $scope.list.push($scope.newTodo);
                    $scope.newTodo = {};
                    $scope.saveTodos();
                }
                else{
                    alert($scope.checkOrigin());
                }
            }
            else{
                alert('enter title')
            }
        }
       

    }])


})(window.angular);


