    var app = angular.module("app", []); 

    app.controller('listController', function($scope) {

    	$scope.listItems = [];

    	$scope.addListItem = function(newName){
    		this.listItems.push({name: newName, description:''});
    		this.newName = "";
    	};

    	$scope.removeListItem = function (item) { 
    	  	var arrayIndex = this.listItems.indexOf(item);
    	  	this.listItems.splice(arrayIndex, 1);
    	};

    	$scope.resetList = function () { 
    	  	this.listItems=[];
    	};
    }); 

    $(document).on('click', '.check', function(){
    	
    		var textDeco = $(this).siblings('.item').css('text-decoration');

    		if(textDeco=="none"){
    			$(this).siblings('.item').css('text-decoration','line-through');
    			$(this).siblings('.item').css('color','white');
    			$(this).closest('.output_line').css('background-color','#33CCFF');
    			$(this).html('&#927');
    		}
    		else{
    			$(this).siblings('.item').css('text-decoration','none');
    			$(this).siblings('.item').css('color','black');
    			$(this).closest('.output_line').css('background-color','#ccc');
    			$(this).html('&#10003');    			
    		}

    });