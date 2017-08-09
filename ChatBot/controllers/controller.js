var chatBot = angular.module('chatBot',['ngAnimate']);

chatBot.controller('chatBotCtrl', function($scope) {
	console.log("HELLO FROM THE OTHER SIDE");
	$scope.messages = {}
	var message_data = {
		greeting : "Hello Kevin.What can I do for you?",
		start : "Great",
		specifications : {
			header_width : "Choose a method",
			header_height : "Choose a design process to continue with.. ",
			body_width : "Great!What would be your preferred channel?",
			body_height : "What's the height of the body?",
			footer_width : "What's the width of the footer?",
			footer_height : "What's the height of the footer?"
		}
	}
	var i = -1;
	$scope.myvalue=false;
    $scope.myvalue1=false;
	$scope.func = function()
	{	
		i++
		$scope.messages[i]=$scope.sent_message;
		document.getElementById('chatmsg').value="";
		if($scope.messages[i]=="Hi"|| $scope.messages[i]=="hi"||$scope.messages[i]=="Hello"||$scope.messages[i]=="hello")
		{
			i++
			$scope.messages[i]=message_data.greeting;
		}
		else if($scope.messages[i]=="ToyBox ConceptBuilder"||$scope.messages[i]=="toybox" ||$scope.messages[i]=="conceptbuilder")
		{
			i++
			$scope.messages[i]=message_data.start;
			i++
			$scope.messages[i]=message_data.specifications.header_width;
            $scope.myvalue=true;

		}
		else if(i==5)
		{
			i++
            $scope.myvalue=false;
			$scope.messages[i]=message_data.specifications.header_height;
            $scope.myvalue1=true;

		}
		else if(i==7)
		{
			i++
            $scope.myvalue1=false;
			$scope.messages[i]=message_data.specifications.body_width;
		}
		// else if(i==9)
		// {
		// 	i++
		// 	$scope.messages[i]=message_data.specifications.body_height;
		// }
		// else if(i==11)
		// {
		// 	i++
		// 	$scope.messages[i]=message_data.specifications.footer_width;
		// }
		// else if(i==13)
		// {
		// 	i++
		// 	$scope.messages[i]=message_data.specifications.footer_height;
		// }
		// else
		// {
		// 	$scope.header_width = $scope.messages[5], $scope.header_height = $scope.messages[7], $scope.body_width = $scope.messages[9], $scope.body_height = $scope.messages[11]
		// 	$scope.footer_width= $scope.messages[13],$scope.footer_height= $scope.messages[15];
		// 	$scope.banner= true;
		// }
		// console.log($scope.messages)
	}
	$scope.func1= function(){
		$scope.chatbox=true;
		$scope.banner=false;
		console.log("Adadadasd")
	}
});