var app=angular.module('app',[]);
var data=[
	{	
		id:1,
		color:"#4391EA",
		title:"新列表1",
		todo:[
			{t:"中午12点开会",bool:true},
			{t:"中午23点开会",bool:false}
		]

	},
	{
		id:2,
		color:"#EA9501",
		title:"新列表2",
		todo:[
			{t:"中午11点开会",bool:true},
			{t:"中午5点开会",bool:true},
			{t:"中午22点开会",bool:false}
		]

	},
	{
		id:3,
		color:"#E1171B",
		title:"新列表3",
		todo:[
			{t:"中午19点开会",bool:true},
			{t:"中午24点开会",bool:false}
		]
	}
]
var color=["#4391EA","#EA9501","#E1171B","#28AB08","#7BCDC8"]
	app.controller('c',function($scope){
		$scope.data=data;
		$scope.color=color;
		$scope.index=0;

		$scope.changColor=function(v){
			$scope.index=v;
		}

		$scope.add=function(){
			var i=$scope.data[data.length-1].id+1;
			$scope.data.push({
				id:i,
				color:$scope.color[i%color.length],
				title:"新列表"+i,

			})
			$scope.index=$scope.data.length-1;
		}

			$scope.zhuangt=false;
		$scope.block=function(){
			$scope.ccolor=$scope.data[$scope.index].color;
			$scope.zhuangt=!$scope.zhuangt;
			$scope.checkTitle=$scope.data[$scope.index].title;

			// console.log($scope.checkTitle)
		}
		$scope.absColor=function(f){
			$scope.ccolor=f;
		}
		$scope.del=function(i){
			data.splice(i,1)
			$scope.zhuangt=false;
			$scope.index=0;
		}
		$scope.over=function(){
			$scope.data[$scope.index].color=$scope.ccolor;
			$scope.zhuangt=false;
			$scope.data[$scope.index].title=$scope.checkTitle;
		}
		$scope.pushs=function(){
			console.log(data[$scope.index].todo)
			$scope.data[$scope.index].todo.push({
				t:'',
				bool:false
			})
		}
		$scope.qiehuan=function(w){
			// console.log(w)
			w.bool=true;
		}
		$scope.huilai=function(x){
			// console.log(x)
			x.bool=false;
		}
		$scope.blurs=function(x,ew){
			$scope.texts=ew.target.innerText;
			x.t=$scope.texts
		}

	})
	