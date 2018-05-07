// add a module and give it a name for it to work

const app = angular.module("TodoApp", [])

// keeps the state - the brains of your HTML - instead of the innerHTML stuff??? HTML will drive the logic of the application - used to be Javascripts (ifs, loops) will be in the HTML now
// $scope is what the magic happens
// controllers get data, like arrays, and then HTML will drive how that data is manipulated and will drive the user experience. controller holds the state and functions.

// this is a 2 way binding - goes both ways
app.controller("TodoCtrl", function($scope, $http) {
    $scope.title = "Welcome to your task list"
    $scope.macaroni = "wut"
    $scope.newTaskName = ""
    // this const can't be binded to the HTML because there isn't the $scope
    // const = x

    $scope.todos = [
        { name: "Mow the lawn", complete: "incomplete" },
        { name: "Cut the grass", complete: "complete" },
        { name: "Kill the ants", complete: "incomplete" },
        { name: "Trim the weeds", complete: "complete" }
    ]

    $scope.addTask = function () {
        const anObject = {
            "name": $scope.newTaskName,
            "complete": "incomplete"
        }

        $scope.todos.push(anObject)
        
        // empties out the input field after button is clicked
        $scope.newTaskName = ""
    }

    $scope.killTodo = function(todo) {
        // Do you see the PFM here of full object comparison?
        // indexOf finds the index of a certain value in an array - this will work for complex objects, as well as simple
        var todoIndex = $scope.todos.indexOf(todo)
      
        if (todoIndex >= 0) {
          $scope.todos.splice(todoIndex, 1)
        }
      }

    //   this is like $.ajax()
    // this is auto dependency, but you have to declare it as a dependency for your controller as $http as a parameter passed to your controller
    // $http is a promise by default because it has a .then on it
      $http
        .get("https://socks.firebaseio.com/songs/.json")
        .then(
            function(firebaseObjectOfObjects) {
                for (let songId in firebaseObjectOfObjects) {
                    console.log(firebaseObjectOfObjects[songId])
                }
            }
      )

      
})




