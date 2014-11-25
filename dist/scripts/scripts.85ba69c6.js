"use strict";var app=angular.module("droughtioApp",["ngAnimate","ngResource","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]);app.factory("globalService",function(){var a=[],b=[],c=function(){angular.forEach(b,function(a){a()})},d={registerObserverCallback:function(a){b.push(a)},queue:function(b){a.push(b),c()},nextSelection:function(){return a.shift()}};return d});var reformatNormalsResponse=function(a){console.log(a);var b=[],c=0;return angular.forEach(a,function(a,d){console.log("data point:",d,a),b.push({x:Date.parse(a.date),y:c+=a.value})}),console.log(b),b};app.factory("RainfallSeriesProvider",["$resource",function(a){return a("http://www.ncdc.noaa.gov/cdo-web/api/v2/data",{},{get:{method:"GET",isArray:!0,headers:{Accept:"application/json",token:"kjslmSNkMbvnPHEMUqxlAiKcBlpERRzr"},transformResponse:function(a){var b=0,c=0,d=angular.fromJson(a).results;return _.map(d,function(a){if(0===c)a.date=c;else{if(c==a.date)return void console.log("skip "+a.date);c=a.date}return b+=a.value})},params:{datasetid:"GHCND",datatypeid:"PRCP",limit:800}}})}]),app.factory("d3Service",["$document","$window","$q","$rootScope",function(a,b,c,d){function e(){d.$apply(function(){f.resolve(b.d3)})}var f=c.defer(),g={d3:function(){return f.promise}},h=a[0].createElement("script");h.type="text/javascript",h.async=!0,h.src="http://d3js.org/d3.v3.min.js",h.onreadystatechange=function(){"complete"===this.readyState&&e()},h.onload=e;var i=a[0].getElementsByTagName("body")[0];return i.appendChild(h),g}]),app.factory("chartFactory",["$q","$timeout",function(a,b){var c=(a.defer(),{}),d={},e=function(){};return c.get=function(a){var c;return b(function(){},100).then(function(){return c=d[a]})},c.getAll=function(){return b(function(){return d},100)},c.register=function(a,b){e(b),d[a]=b},c}]),app.directive("droughtMap",["d3Service","$q","globalService",function(a,b,c){return{restrict:"AE",replace:!0,scope:{data:"=",onClick:"&"},link:function(b,d){console.log("inside drought map!!!"),a.d3().then(function(a){function b(b){if(o.node()===this)return e();o.classed("active",!1),o=a.select(this).classed("active",!0);var c=l.bounds(b),d=c[1][0]-c[0][0],f=c[1][1]-c[0][1],g=(c[0][0]+c[1][0])/2,i=(c[0][1]+c[1][1])/2,k=.9/Math.max(d/h,f/j),n=[h/2-k*g,j/2-k*i];m.transition().duration(750).call(p.translate(n).scale(k).event)}function e(){o.classed("active",!1),o=a.select(null),m.transition().duration(750).call(p.translate([0,0]).scale(1).event)}function f(){n.attr("transform","translate("+a.event.translate+")scale("+a.event.scale+")")}function g(){a.event.defaultPrevented&&a.event.stopPropagation()}var h=window.innerWidth,i=Math.max(window.innerHeight-$("#navbar").outerHeight(),240),j=i-$("#details").outerHeight()>240?i-$("#details").outerHeight():i,k=a.geo.albersUsa().scale(700).translate([h/2,j/2]),l=a.geo.path().projection(k),m=a.select(d[0]).append("svg").attr("width",h).attr("height",j),n=m.append("g").on("click",g,!0),o=a.select(null),p=a.behavior.zoom().translate([0,0]).scale(1).scaleExtent([1,8]).on("zoom",f);n.call(p).call(p.event),a.json("/assets/us.json",function(a,d){n.append("g").attr("id","states").selectAll("path").data(topojson.feature(d,d.objects.states).features).enter().append("path").attr("class","administrative").attr("d",l).on("click",b),n.append("g").attr("id","counties").selectAll("path").data(topojson.feature(d,d.objects.counties).features).enter().append("path").attr("class","county").attr("d",l).on("click",function(a){var b=a.id;console.log(b),c.queue(b)})}),a.json("/assets/USDM_20141111-topo.json",function(a,b){var c={};for(var d in b.objects)if(c=b.objects[d],"function"!=typeof c)break;var e=0;n.append("g").attr("id","zones").selectAll("path").data(topojson.feature(b,c).features).enter().append("path").attr("class","zone").attr("d",l).attr("class",function(){return"severity"+e++})})})}}}]),app.directive("chart",["chartFactory",function(a){return{restrict:"EAC",scope:{config:"="},template:"<div></div>",replace:!0,link:function(b,c,d){b.config.type||(b.config.type="line");var e=b.config;e.bindto="#"+d.id;var f=c3.generate(e);a.register(d.id,f)}}}]),app.directive("rainChart",["$compile",function(a){return{restrict:"AE",scope:{series:"=",renderer:"=",onClick:"&"},link:function(b,c,d){console.log("inside rainChart"),b.$watchCollection("[series, renderer]",function(e,f){console.log("rainChart scope.$watchCollection newValue, oldvalue:",e,f);var g=angular.element(c);g.empty();var h=a("<div></div>")(b);g.append(h);var i=new Rickshaw.Graph({element:c[0],width:d.width<window.innerWidth?window.innerWidth:d.width,height:d.height<window.innerHeight?d.height:window.innerHeight,series:b.series,renderer:b.renderer,interpolation:"step-after",xScale:d3.time.scale(),stack:!1,palette:"spectrum14"}),j=(new Rickshaw.Fixtures.Time,new Rickshaw.Graph.Axis.Time({graph:i,timeFixture:new Rickshaw.Fixtures.Time.Local,tickFormat:i.x.tickFormat("%B")}));j.render();{var k=new Rickshaw.Graph.Legend({graph:i,element:document.querySelector("#legend")});new Rickshaw.Graph.Behavior.Series.Toggle({graph:i,legend:k}),new Rickshaw.Graph.Behavior.Series.Highlight({graph:i,legend:k}),new Rickshaw.Graph.HoverDetail({graph:i,xFormatter:function(a){var b=new Date(a);return b.toDateString()},yFormatter:function(a){return a+" inches (YTD)"}})}console.log(i),i.render()})}}}]),app.directive("d3Bars",["$window","$timeout","d3Service",function(a,b,c){return{restrict:"A",scope:{data:"=",label:"@",onClick:"&"},link:function(d,e,f){console.log("!!!"),c.d3().then(function(c){var g,h=parseInt(f.margin)||20,i=parseInt(f.barHeight)||20,j=parseInt(f.barPadding)||5,k=c.select(e[0]).append("svg").style("width","100%");a.onresize=function(){d.$apply()},d.$watch(function(){return angular.element(a)[0].innerWidth},function(){d.render(d.data)}),d.$watch("data",function(a){d.render(a)},!0),d.render=function(a){k.selectAll("*").remove(),a&&(g&&clearTimeout(g),g=b(function(){var b=c.select(e[0])[0][0].offsetWidth-h,f=d.data.length*(i+j),g=c.scale.category20(),l=c.scale.linear().domain([0,c.max(a,function(a){return a.score})]).range([0,b]);k.attr("height",f),k.selectAll("rect").data(a).enter().append("rect").on("click",function(a){return d.onClick({item:a})}).attr("height",i).attr("width",140).attr("x",Math.round(h/2)).attr("y",function(a,b){return b*(i+j)}).attr("fill",function(a){return g(a.score)}).transition().duration(1e3).attr("width",function(a){return l(a.score)}),k.selectAll("text").data(a).enter().append("text").attr("fill","#fff").attr("y",function(a,b){return b*(i+j)+15}).attr("x",15).text(function(a){return a.name+" (scored: "+a.score+")"})},200))}})}}}]),app.controller("MainCtrl",["$scope","$http","globalService","RainfallSeriesProvider",function(a,b,c,d){function e(a){return a}var f={name:"Troy, NY",color:"orange",data:[{x:e("2012-01-01"),y:0},{x:e("2012-01-02"),y:0},{x:e("2012-01-03"),y:0},{x:e("2012-01-04"),y:0},{x:e("2012-01-05"),y:0},{x:e("2012-01-06"),y:0},{x:e("2012-01-07"),y:0},{x:e("2012-01-08"),y:0},{x:e("2012-01-09"),y:0},{x:e("2012-01-10"),y:0},{x:e("2012-01-11"),y:0},{x:e("2012-01-12"),y:86},{x:e("2012-01-13"),y:137},{x:e("2012-01-14"),y:142},{x:e("2012-01-15"),y:142},{x:e("2012-01-16"),y:142},{x:e("2012-01-17"),y:157},{x:e("2012-01-18"),y:198},{x:e("2012-01-19"),y:198},{x:e("2012-01-20"),y:198},{x:e("2012-01-21"),y:198},{x:e("2012-01-22"),y:198},{x:e("2012-01-23"),y:198},{x:e("2012-01-24"),y:234},{x:e("2012-01-25"),y:234},{x:e("2012-01-26"),y:234},{x:e("2012-01-27"),y:493},{x:e("2012-01-28"),y:518},{x:e("2012-01-29"),y:518},{x:e("2012-01-30"),y:518},{x:e("2012-01-31"),y:523},{x:e("2012-02-01"),y:523},{x:e("2012-02-02"),y:523},{x:e("2012-02-03"),y:523},{x:e("2012-02-04"),y:523},{x:e("2012-02-05"),y:523},{x:e("2012-02-06"),y:523},{x:e("2012-02-07"),y:523},{x:e("2012-02-08"),y:523},{x:e("2012-02-09"),y:523},{x:e("2012-02-10"),y:523},{x:e("2012-02-11"),y:523},{x:e("2012-02-12"),y:523},{x:e("2012-02-13"),y:650},{x:e("2012-02-14"),y:650},{x:e("2012-02-15"),y:650},{x:e("2012-02-16"),y:650},{x:e("2012-02-17"),y:680},{x:e("2012-02-18"),y:680},{x:e("2012-02-19"),y:685},{x:e("2012-02-20"),y:685},{x:e("2012-02-21"),y:685},{x:e("2012-02-22"),y:685},{x:e("2012-02-23"),y:710},{x:e("2012-02-24"),y:710},{x:e("2012-02-25"),y:776},{x:e("2012-02-26"),y:776},{x:e("2012-02-27"),y:776},{x:e("2012-02-28"),y:776},{x:e("2012-02-29"),y:776},{x:e("2012-03-01"),y:1005},{x:e("2012-03-02"),y:1005},{x:e("2012-03-03"),y:1005},{x:e("2012-03-04"),y:1005},{x:e("2012-03-05"),y:1005},{x:e("2012-03-06"),y:1005},{x:e("2012-03-07"),y:1005},{x:e("2012-03-08"),y:1005},{x:e("2012-03-09"),y:1048},{x:e("2012-03-10"),y:1048},{x:e("2012-03-11"),y:1048},{x:e("2012-03-12"),y:1048},{x:e("2012-03-13"),y:1048},{x:e("2012-03-14"),y:1048},{x:e("2012-03-15"),y:1048},{x:e("2012-03-16"),y:1099},{x:e("2012-03-17"),y:1122},{x:e("2012-03-18"),y:1122},{x:e("2012-03-19"),y:1122},{x:e("2012-03-20"),y:1122},{x:e("2012-03-21"),y:1122},{x:e("2012-03-22"),y:1122},{x:e("2012-03-23"),y:1122},{x:e("2012-03-24"),y:1122},{x:e("2012-03-25"),y:1122},{x:e("2012-03-26"),y:1122},{x:e("2012-03-27"),y:1122},{x:e("2012-03-28"),y:1122},{x:e("2012-03-29"),y:1155},{x:e("2012-03-30"),y:1155},{x:e("2012-03-31"),y:1155},{x:e("2012-04-01"),y:1155},{x:e("2012-04-02"),y:1175},{x:e("2012-04-03"),y:1175},{x:e("2012-04-04"),y:1175},{x:e("2012-04-05"),y:1178},{x:e("2012-04-06"),y:1178},{x:e("2012-04-07"),y:1178},{x:e("2012-04-08"),y:1178},{x:e("2012-04-09"),y:1178},{x:e("2012-04-10"),y:1178},{x:e("2012-04-11"),y:1178},{x:e("2012-04-12"),y:1178},{x:e("2012-04-13"),y:1178},{x:e("2012-04-14"),y:1178},{x:e("2012-04-15"),y:1178},{x:e("2012-04-16"),y:1178},{x:e("2012-04-17"),y:1178},{x:e("2012-04-18"),y:1178},{x:e("2012-04-19"),y:1178},{x:e("2012-04-20"),y:1178},{x:e("2012-04-21"),y:1178},{x:e("2012-04-22"),y:1440},{x:e("2012-04-22"),y:1658},{x:e("2012-04-23"),y:2001},{x:e("2012-04-23"),y:2395},{x:e("2012-04-24"),y:2395},{x:e("2012-04-24"),y:2400},{x:e("2012-04-25"),y:2403},{x:e("2012-04-25"),y:2406},{x:e("2012-04-26"),y:2406},{x:e("2012-04-26"),y:2406},{x:e("2012-04-27"),y:2411},{x:e("2012-04-27"),y:2411},{x:e("2012-04-28"),y:2411},{x:e("2012-04-29"),y:2411},{x:e("2012-04-29"),y:2411},{x:e("2012-04-30"),y:2411},{x:e("2012-04-30"),y:2411},{x:e("2012-05-01"),y:2495},{x:e("2012-05-01"),y:2592},{x:e("2012-05-02"),y:2617},{x:e("2012-05-02"),y:2665},{x:e("2012-05-03"),y:2729},{x:e("2012-05-03"),y:2831},{x:e("2012-05-04"),y:2859},{x:e("2012-05-04"),y:2897},{x:e("2012-05-05"),y:2897},{x:e("2012-05-06"),y:2897},{x:e("2012-05-07"),y:2897},{x:e("2012-05-07"),y:2897},{x:e("2012-05-08"),y:3034},{x:e("2012-05-08"),y:3186},{x:e("2012-05-09"),y:3392},{x:e("2012-05-09"),y:3580},{x:e("2012-05-10"),y:3610},{x:e("2012-05-10"),y:3640},{x:e("2012-05-11"),y:3645},{x:e("2012-05-11"),y:3648},{x:e("2012-05-12"),y:3648},{x:e("2012-05-13"),y:3648},{x:e("2012-05-14"),y:3663},{x:e("2012-05-14"),y:3678},{x:e("2012-05-15"),y:3843},{x:e("2012-05-15"),y:4006},{x:e("2012-05-16"),y:4133},{x:e("2012-05-16"),y:4290},{x:e("2012-05-17"),y:4465},{x:e("2012-05-17"),y:4579},{x:e("2012-05-18"),y:4579},{x:e("2012-05-19"),y:4579},{x:e("2012-05-20"),y:4579},{x:e("2012-05-21"),y:4579},{x:e("2012-05-21"),y:4579},{x:e("2012-05-22"),y:4609},{x:e("2012-05-22"),y:4650},{x:e("2012-05-23"),y:4739},{x:e("2012-05-23"),y:4785},{x:e("2012-05-24"),y:4785},{x:e("2012-05-24"),y:4785},{x:e("2012-05-25"),y:4821},{x:e("2012-05-25"),y:4834},{x:e("2012-05-26"),y:4834},{x:e("2012-05-27"),y:4834},{x:e("2012-05-28"),y:4834},{x:e("2012-05-29"),y:4834},{x:e("2012-05-29"),y:4834},{x:e("2012-05-30"),y:5152},{x:e("2012-05-30"),y:5431},{x:e("2012-05-31"),y:5616},{x:e("2012-05-31"),y:5730},{x:e("2012-06-01"),y:5730},{x:e("2012-06-01"),y:5730},{x:e("2012-06-02"),y:5766},{x:e("2012-06-02"),y:5809},{x:e("2012-06-03"),y:5845},{x:e("2012-06-03"),y:5901},{x:e("2012-06-04"),y:6013},{x:e("2012-06-04"),y:6168},{x:e("2012-06-05"),y:6183},{x:e("2012-06-05"),y:6193},{x:e("2012-06-06"),y:6193},{x:e("2012-06-06"),y:6193},{x:e("2012-06-07"),y:6196},{x:e("2012-06-07"),y:6201},{x:e("2012-06-08"),y:6216},{x:e("2012-06-08"),y:6216},{x:e("2012-06-09"),y:6246},{x:e("2012-06-09"),y:6282},{x:e("2012-06-10"),y:6282},{x:e("2012-06-11"),y:6282},{x:e("2012-06-11"),y:6282},{x:e("2012-06-12"),y:6282},{x:e("2012-06-12"),y:6282},{x:e("2012-06-13"),y:6518},{x:e("2012-06-13"),y:6726},{x:e("2012-06-14"),y:6726},{x:e("2012-06-14"),y:6726},{x:e("2012-06-15"),y:6726},{x:e("2012-06-16"),y:6726},{x:e("2012-06-17"),y:6726},{x:e("2012-06-18"),y:6726},{x:e("2012-06-19"),y:6726},{x:e("2012-06-20"),y:6726},{x:e("2012-06-21"),y:6726},{x:e("2012-06-22"),y:6726},{x:e("2012-06-23"),y:6726},{x:e("2012-06-24"),y:6726},{x:e("2012-06-25"),y:6744},{x:e("2012-06-25"),y:6774},{x:e("2012-06-26"),y:6820},{x:e("2012-06-26"),y:6833},{x:e("2012-06-27"),y:6863},{x:e("2012-06-27"),y:6881},{x:e("2012-06-28"),y:6881},{x:e("2012-06-28"),y:6881},{x:e("2012-06-29"),y:6884},{x:e("2012-06-29"),y:6887},{x:e("2012-06-30"),y:6887},{x:e("2012-07-01"),y:6887},{x:e("2012-07-02"),y:6989},{x:e("2012-07-02"),y:7004},{x:e("2012-07-03"),y:7004},{x:e("2012-07-03"),y:7012},{x:e("2012-07-04"),y:7035},{x:e("2012-07-04"),y:7081},{x:e("2012-07-05"),y:7081},{x:e("2012-07-06"),y:7081},{x:e("2012-07-06"),y:7081},{x:e("2012-07-07"),y:7081},{x:e("2012-07-08"),y:7081},{x:e("2012-07-09"),y:7081},{x:e("2012-07-10"),y:7081},{x:e("2012-07-10"),y:7081},{x:e("2012-07-11"),y:7081},{x:e("2012-07-12"),y:7081},{x:e("2012-07-14"),y:7310},{x:e("2012-07-15"),y:7313},{x:e("2012-07-16"),y:7648},{x:e("2012-07-17"),y:7648},{x:e("2012-07-18"),y:7686},{x:e("2012-07-19"),y:7686},{x:e("2012-07-20"),y:7686},{x:e("2012-07-21"),y:7686},{x:e("2012-07-22"),y:7686},{x:e("2012-07-23"),y:7691},{x:e("2012-07-24"),y:7793},{x:e("2012-07-24"),y:7892},{x:e("2012-07-25"),y:7892},{x:e("2012-07-26"),y:7900},{x:e("2012-07-26"),y:7900},{x:e("2012-07-27"),y:7918},{x:e("2012-07-27"),y:7938},{x:e("2012-07-28"),y:7951},{x:e("2012-07-29"),y:8169},{x:e("2012-07-30"),y:8210},{x:e("2012-07-30"),y:8240},{x:e("2012-07-31"),y:8240},{x:e("2012-08-01"),y:8240},{x:e("2012-08-02"),y:8240},{x:e("2012-08-03"),y:8240},{x:e("2012-08-04"),y:8240},{x:e("2012-08-05"),y:8240},{x:e("2012-08-06"),y:8352},{x:e("2012-08-06"),y:8459},{x:e("2012-08-07"),y:8459},{x:e("2012-08-08"),y:8459},{x:e("2012-08-08"),y:8459},{x:e("2012-08-09"),y:8459},{x:e("2012-08-10"),y:8459},{x:e("2012-08-11"),y:8619},{x:e("2012-08-11"),y:8903},{x:e("2012-08-12"),y:8982},{x:e("2012-08-12"),y:9043},{x:e("2012-08-13"),y:9043},{x:e("2012-08-13"),y:9043},{x:e("2012-08-14"),y:9043},{x:e("2012-08-14"),y:9043},{x:e("2012-08-15"),y:9061},{x:e("2012-08-15"),y:9084},{x:e("2012-08-16"),y:9087},{x:e("2012-08-16"),y:9133},{x:e("2012-08-17"),y:9133},{x:e("2012-08-18"),y:9153},{x:e("2012-08-18"),y:9173},{x:e("2012-08-19"),y:9173},{x:e("2012-08-19"),y:9173},{x:e("2012-08-20"),y:9173},{x:e("2012-08-21"),y:9181},{x:e("2012-08-21"),y:9181},{x:e("2012-08-22"),y:9181},{x:e("2012-08-23"),y:9181},{x:e("2012-08-23"),y:9181},{x:e("2012-08-24"),y:9181},{x:e("2012-08-25"),y:9181},{x:e("2012-08-26"),y:9181},{x:e("2012-08-27"),y:9181},{x:e("2012-08-28"),y:9298},{x:e("2012-08-28"),y:9445},{x:e("2012-08-29"),y:9465},{x:e("2012-08-29"),y:9465},{x:e("2012-08-30"),y:9465},{x:e("2012-08-31"),y:9465},{x:e("2012-09-01"),y:9465},{x:e("2012-09-02"),y:9465},{x:e("2012-09-03"),y:9465},{x:e("2012-09-04"),y:9465},{x:e("2012-09-04"),y:9465},{x:e("2012-09-05"),y:9503},{x:e("2012-09-05"),y:9541},{x:e("2012-09-06"),y:9541},{x:e("2012-09-06"),y:9541},{x:e("2012-09-07"),y:9541},{x:e("2012-09-07"),y:9541},{x:e("2012-09-08"),y:9541},{x:e("2012-09-08"),y:9541},{x:e("2012-09-09"),y:9825},{x:e("2012-09-09"),y:10074},{x:e("2012-09-10"),y:10074},{x:e("2012-09-11"),y:10074},{x:e("2012-09-12"),y:10074},{x:e("2012-09-13"),y:10074},{x:e("2012-09-14"),y:10074},{x:e("2012-09-15"),y:10104},{x:e("2012-09-15"),y:10122},{x:e("2012-09-16"),y:10122},{x:e("2012-09-17"),y:10122},{x:e("2012-09-18"),y:10122},{x:e("2012-09-19"),y:10503},{x:e("2012-09-19"),y:10963},{x:e("2012-09-20"),y:10963},{x:e("2012-09-21"),y:10963},{x:e("2012-09-21"),y:10963},{x:e("2012-09-22"),y:10963},{x:e("2012-09-23"),y:11082},{x:e("2012-09-23"),y:11082},{x:e("2012-09-24"),y:11082},{x:e("2012-09-24"),y:11082},{x:e("2012-09-25"),y:11082},{x:e("2012-09-26"),y:11087},{x:e("2012-09-26"),y:11097},{x:e("2012-09-27"),y:11120},{x:e("2012-09-27"),y:11158},{x:e("2012-09-28"),y:11204},{x:e("2012-09-28"),y:11242},{x:e("2012-09-29"),y:11323},{x:e("2012-09-29"),y:11447},{x:e("2012-09-30"),y:11472},{x:e("2012-09-30"),y:11490},{x:e("2012-10-01"),y:11513},{x:e("2012-10-01"),y:11528},{x:e("2012-10-02"),y:11528},{x:e("2012-10-02"),y:11528},{x:e("2012-10-03"),y:11531},{x:e("2012-10-03"),y:11531},{x:e("2012-10-04"),y:11536},{x:e("2012-10-04"),y:11536},{x:e("2012-10-05"),y:11579},{x:e("2012-10-05"),y:11635},{x:e("2012-10-06"),y:11635},{x:e("2012-10-07"),y:11635},{x:e("2012-10-08"),y:11655},{x:e("2012-10-08"),y:11675},{x:e("2012-10-09"),y:11675},{x:e("2012-10-10"),y:11675},{x:e("2012-10-11"),y:11728},{x:e("2012-10-11"),y:11751},{x:e("2012-10-12"),y:11751},{x:e("2012-10-12"),y:11754},{x:e("2012-10-13"),y:11762},{x:e("2012-10-13"),y:11767},{x:e("2012-10-14"),y:11853},{x:e("2012-10-14"),y:11927},{x:e("2012-10-15"),y:11960},{x:e("2012-10-15"),y:11988},{x:e("2012-10-16"),y:12214},{x:e("2012-10-16"),y:12351},{x:e("2012-10-17"),y:12351},{x:e("2012-10-18"),y:12351},{x:e("2012-10-18"),y:12351},{x:e("2012-10-19"),y:12354},{x:e("2012-10-19"),y:12354},{x:e("2012-10-20"),y:12748},{x:e("2012-10-20"),y:13246},{x:e("2012-10-21"),y:13269},{x:e("2012-10-21"),y:13294},{x:e("2012-10-22"),y:13294},{x:e("2012-10-23"),y:13294},{x:e("2012-10-24"),y:13297},{x:e("2012-10-24"),y:13297},{x:e("2012-10-25"),y:13297},{x:e("2012-10-25"),y:13300},{x:e("2012-10-26"),y:13300},{x:e("2012-10-27"),y:13300},{x:e("2012-10-28"),y:13300},{x:e("2012-10-29"),y:13300},{x:e("2012-10-29"),y:13300},{x:e("2012-10-30"),y:13374},{x:e("2012-10-30"),y:13458},{x:e("2012-10-31"),y:13466},{x:e("2012-10-31"),y:13479},{x:e("2012-11-01"),y:13484},{x:e("2012-11-01"),y:13484},{x:e("2012-11-02"),y:13487},{x:e("2012-11-03"),y:13487},{x:e("2012-11-03"),y:13487},{x:e("2012-11-04"),y:13487},{x:e("2012-11-05"),y:13487},{x:e("2012-11-06"),y:13487},{x:e("2012-11-07"),y:13487},{x:e("2012-11-08"),y:13487},{x:e("2012-11-08"),y:13487},{x:e("2012-11-09"),y:13487},{x:e("2012-11-10"),y:13487},{x:e("2012-11-11"),y:13487},{x:e("2012-11-12"),y:13487},{x:e("2012-11-13"),y:13624},{x:e("2012-11-13"),y:13738},{x:e("2012-11-14"),y:13822},{x:e("2012-11-14"),y:13924},{x:e("2012-11-15"),y:13924},{x:e("2012-11-16"),y:13924},{x:e("2012-11-17"),y:13924},{x:e("2012-11-18"),y:13924},{x:e("2012-11-19"),y:13924},{x:e("2012-11-20"),y:13924},{x:e("2012-11-21"),y:13924},{x:e("2012-11-22"),y:13924},{x:e("2012-11-23"),y:13924},{x:e("2012-11-24"),y:13929},{x:e("2012-11-24"),y:13929},{x:e("2012-11-25"),y:13929},{x:e("2012-11-26"),y:13929},{x:e("2012-11-26"),y:13929},{x:e("2012-11-27"),y:13929},{x:e("2012-11-28"),y:13937},{x:e("2012-11-28"),y:13942},{x:e("2012-11-29"),y:13942},{x:e("2012-11-29"),y:13942},{x:e("2012-11-30"),y:13942},{x:e("2012-12-01"),y:13952},{x:e("2012-12-01"),y:13965},{x:e("2012-12-02"),y:13965},{x:e("2012-12-03"),y:14018},{x:e("2012-12-04"),y:14021},{x:e("2012-12-04"),y:14021},{x:e("2012-12-05"),y:14079},{x:e("2012-12-05"),y:14137},{x:e("2012-12-06"),y:14137},{x:e("2012-12-07"),y:14137},{x:e("2012-12-08"),y:14208},{x:e("2012-12-08"),y:14277},{x:e("2012-12-09"),y:14282},{x:e("2012-12-09"),y:14292},{x:e("2012-12-10"),y:14348},{x:e("2012-12-10"),y:14404},{x:e("2012-12-11"),y:14490},{x:e("2012-12-11"),y:14576},{x:e("2012-12-12"),y:14576},{x:e("2012-12-12"),y:14576},{x:e("2012-12-13"),y:14576},{x:e("2012-12-14"),y:14576},{x:e("2012-12-15"),y:14576},{x:e("2012-12-16"),y:14576},{x:e("2012-12-17"),y:14640},{x:e("2012-12-17"),y:14688},{x:e("2012-12-18"),y:14812},{x:e("2012-12-18"),y:14969},{x:e("2012-12-19"),y:15002},{x:e("2012-12-19"),y:15030},{x:e("2012-12-20"),y:15030},{x:e("2012-12-20"),y:15030},{x:e("2012-12-21"),y:15053},{x:e("2012-12-21"),y:15091},{x:e("2012-12-22"),y:15170},{x:e("2012-12-22"),y:15241},{x:e("2012-12-23"),y:15241},{x:e("2012-12-24"),y:15241},{x:e("2012-12-25"),y:15251},{x:e("2012-12-25"),y:15276},{x:e("2012-12-26"),y:15276},{x:e("2012-12-27"),y:15337},{x:e("2012-12-28"),y:15411},{x:e("2012-12-29"),y:15411},{x:e("2012-12-30"),y:15467},{x:e("2012-12-30"),y:15746}]},g=_.pluck(f.data,"x");g.unshift("time");var h=_.pluck(f.data,"y");h.unshift("testSeries"),a.appendSeries=function(b,c){d.get({startdate:c+"-01-01",enddate:c+"-12-31",locationid:b},function(d){console.log("droughtioApp.controller:MainCtrl:$scope.appendSeries:data",d),a.year=c,d.unshift(b.toString()),i.load({columns:[d]})})},a.selectionQueue=[],a.year=2010,a.rainfallSeriesCollection=[],a.schema={x:{type:"datetime",format:"%Y-%m-%d",name:"Date"}},a.config={bindto:"#chart",data:{x:"time",columns:[g,h]},axis:{x:{type:"timeseries",tick:{count:12,format:"%b"}}},legend:{position:"right"},type:"area-step"};var i=c3.generate(a.config);a.appendSeries("FIPS:12",2012);var j=function(){var b="FIPS:"+c.nextSelection().toString().substring(0,2);console.log(b),a.appendSeries(b,2012)};c.registerObserverCallback(j)}]);