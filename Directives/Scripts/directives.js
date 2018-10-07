/*-----------------Directive01-------------------------*/
var app = angular.module("directivesApp",[]);
app.directive("helloworldelement",function(){
	return {
		restrict:"E",
		template: "<h1>Hello World Element from Directive</h1>"
	}
});

app.directive("helloworldattr",function(){
	return {
		restrict:"A",/*Default*/
		template: "<h1>Hello World Attribute from Directive</h1>"
	}
});

app.directive("helloworldclass",function(){
	return {
		restrict:"C",
		template: "<h1>Hello World Class from Directive</h1>"
	}
});

app.directive("helloworldcomment",function(){
	return {
		restrict:"M",
		replace:true,
		template: "<h1>Hello World Comment from Directive</h1>"
	}
});


app.directive("helloworld",function(){
	return {
		restrict:"AC",
		template: "<h1>Hello World from Directive</h1>"
	}
});

/*-------------------Directive02-----------------------------*/
app.directive("mouseentry",function(){
	return {
		link:function(scope,element,attrs){
			element.bind('mouseenter',function(){
				element.addClass(attrs.datastyle);
			})
		}
	}
});

app.directive("mouseleft",function(){
	return function(scope,element,attrs){
			element.bind('mouseleave',function(){
				element.removeClass(attrs.datastyle);
			})
	}
});

/*-------------------Directive03---------------------------*/


app.controller("AppController",function($scope){
	$scope.modelVariable = "Initial Value";
	
	$scope.sayHi=function(){
		alert('Hi');
	}
	
	$scope.sayBye=function(){
		alert('Bye');
	}
});

app.directive('showalert',function(){
	return function(scope,element,attrs){
		element.bind('click',function(){
			scope.$apply(attrs.showalert);
		})
	}
});

app.directive('changeValue',function(){
	return function(scope,element,attrs){
	/*Setting Watch Explicitly*/
		scope.$watch('modelVariable', function(newValue, oldValue) {
			console.log("Old Value : "+ oldValue+" New Value : "+newValue);
		});
		element.bind('click',function(){
			scope.modelVariable = "Value Changed";
			scope.$apply(); //Triggering Digest Cycle
		});
	}
});



/*---------------------Directive04------------------------------*/
app.directive('repodirective',function(){
	return{
		restrict:"E",
		controller : function($scope){
			$scope.styleAddCounter=0;
			$scope.style01 = "customStyle";
			
			this.styleAdded = function(){
				$scope.styleAddCounter+=1;
				console.log('Style Added');
			}
			this.styleRemoved = function(){
				console.log('Style Removed');
			}
		},
		link : function(scope,element,attrs){
			console.log("From repodirective :"+attrs.class);
		}
	}
})

app.directive('sty01',function(){
	return{
		require : '^repodirective',
		link : function(scope,element,attrs,directive){
		
			element.bind('mouseenter',function(){
				element.addClass(scope.style01);
				console.log("Style Added counter :"+scope.styleAddCounter);
				directive.styleAdded();
			})
			
			element.bind('mouseleave',function(){
				element.removeClass(scope.style01);
				directive.styleRemoved();
			})
			
			console.log("From sty01 directive :"+attrs.class);
		}
	}
})

/*----------------------Directive05----------------------------*/

app.controller('AccountController',function($scope){
	$scope.accounttype = "Savings Account";
});

/*Directive uses parent controller scope*/
app.directive('account',function(){
	return{
		template: '<div>{{accounttype}}</div>',
		link:function(scope,element,attrs){
			scope.accounttype = attrs.accounttype;
		}
	}
})


/*
app.directive('account',function(){
	return{
		scope:{
			accounttype:"@" //reading from attribute
		},
		template: '<div>{{accounttype}}</div>'
	}
})
*/

/*------------------------Directive06---------------------------*/

app.controller('AccCntrl',function($scope){
	$scope.accounttype = "Savings Account";
})
app.directive('acc',function(){
	return{
		replace:true,
		scope:{
			acctype:"=" //two way binding
		},
		template: '<input type="text" ng-model="acctype">'
	}
})

/*-------------------------Directive07----------------------------*/

app.controller('MobileCntrl',function($scope){
	$scope.sendMessage = function(msg){
		alert('Recieved : '+msg);
	}
})
app.directive('mobile',function(){
	return{
		scope:{
			typeMessage:"&" /*Invoke Expression.  Need to call it as type-Message in view*/
		},
		template: '<input type="text" ng-model="message">'+
				  '<input type="button" ng-click="typeMessage({msg:message})" value="Send Message" />'
	}
})
/*-------------------------Directive08---------------------------*/
app.directive('wrapdiv',function(){
	return{
		scope:{
			customstyle:"@"
		},
		transclude:true,
		template:'<div class="{{customstyle}}"><h1>WrapDiv Directive</h1><div ng-transclude></div></div>'
	}
})
/*-------------------------Directive09--------------------------*/
app.directive('insertTemplate',function(){
	return{
			templateUrl: 'test.html'
		}
})
/*--------------------------Directive10----------------------------*/

/*app.run(function($templateCache){
	$templateCache.put('test','<h3>Test from templatecache</h3>')
})*/
app.directive('addTemplate',function($templateCache){
	return{
		template: $templateCache.get('test')
	}
})

/*-----------------------------------------------------------------*/
