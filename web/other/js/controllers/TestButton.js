app.controller("TestButton",["$scope","httpJsonHandle","toaster","csharpManageIcCard","csharpPublicMethod",function(o,t,e,s,n){o.myscope={type:"success",title:"Title",text:"Message"},o.post=function(){var o=t.myPost();console.log("$http",o),o.then(function(o){console.log("成功",o.data.resMsg),e.pop("success","网络请求","请求成功回应",2e3)},function(o){console.log(o)})},o.testIcCard=function(){n.setTitle()},o.showLog=function(){n.showLog(!0)},o.addLog=function(){n.addLog("第一条日志")},o.beep10=function(){s.beep10()}}]);