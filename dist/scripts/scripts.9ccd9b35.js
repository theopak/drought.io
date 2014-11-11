"use strict";angular.module("droughtioApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","angularCharts"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("droughtioApp").controller("MainCtrl",["$scope","$http",function(a,b){a.chartType="line",a.config={tooltips:!0,labels:!1,legend:{display:!0,position:"right",htmlEnabled:!0},colors:[],lineLegend:"traditional",lineCurveType:"cardinal",isAnimate:!0,yAxisTickFormat:"s"},a.acData={series:["Sales","Income","Expense","Laptops","Keyboards"],data:[{x:"Laptops",y:[100,500,0],tooltip:"this is tooltip"},{x:"Desktops",y:[300,100,100]},{x:"Mobiles",y:[351]},{x:"Tablets",y:[54,0,879]}]};a.getNormalsData=function(){b({method:"GET",headers:{Accept:"application/json",token:"kjslmSNkMbvnPHEMUqxlAiKcBlpERRzr"},url:"http://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datatypeid=PRCP&startdate=2012-01-01&enddate=2012-12-30&locationid=ZIP:12180"}).success(function(){a.error=""}).error(function(b,c){a.error="Error: "+c})},a.getNormalsData()}]),angular.module("droughtioApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);