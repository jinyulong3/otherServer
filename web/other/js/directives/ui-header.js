angular.module("app").directive("printerSet",["$uibModal","toaster","csharpPublicMethod","csharpSerialPortTransfer",function(r,l,c,p){return{restrict:"AE",template:"<a href>打印机配置</a>",scope:!1,link:function(s,e,t){e.bind("click",function(){var n=s.app.settings.printerSetting_serialPort,i=s.app.settings.printerSetting_rate,e=p.getListComs(),t=c.arrCSharpRate,a=[],o=[];angular.forEach(e,function(e,t){var r=[e,e==n];a.push(r)}),angular.forEach(t,function(e,t){var r=[e,e==i];o.push(r)}),r.open({templateUrl:"tpl/blocks/header/printerSet.html",controller:function(e,t,r){e.info=r,e.okPrinterSetModal=function(){s.app.settings.printerSetting_serialPort=$("#printerSettingSerialPort ").val(),s.app.settings.printerSetting_rate=$("#printerSettingSerialRate ").val(),p.setPortName(s.app.settings.printerSetting_serialPort),p.setBaudRate(s.app.settings.printerSetting_rate),l.pop("success","设置打印机","设置打印机串口成功",2e3)},e.testPrinter=function(){var e=p.open();console.log(e),e?(p.sendStr("测试打印内容\r\n\r\n\r\n\r\n\r\n\r\n"),p.close()):l.pop("error","错误","打开串口失败，请设置打印机串口",4e3),console.log("测试完毕")},e.cancel=function(){t.dismiss(0)}},size:"md",resolve:{info:function(){return{title:"打印机配置",arrSerialPort:a,arrRate:o}}}})})}}}]).directive("uiHeaderAbout",["$uibModal","csharpPublicMethod",function(n,i){return{restrict:"AE",template:"<a href>关于</a>",scope:!0,link:function(r,e,t){e.bind("click",function(){var e=i.csharpGetMainVer(),t=i.csharpGetPluginVer();n.open({templateUrl:"tpl/blocks/header/about.html",controller:function(e,t,r){e.info=r,e.cancel=function(){t.dismiss(0)}},size:"md",resolve:{info:function(){return{mainVersion:e,vebVersion:r.app.version,IcCardReaderPluginVersion:t}}}})})}}}]).directive("themeSet",["$uibModal",function(n){return{restrict:"AE",template:"<a href>主题设置</a>",scope:{myUserData:"="},link:function(r,e,t){e.bind("click",function(){n.open({templateUrl:"tpl/blocks/header/themeSet.html",controller:function(e,t){e.cancel=function(){t.dismiss(0)},e.testButton=function(){r.myUserData.navbarHeaderColor="bg-primary",r.myUserData.navbarCollapseColor="bg-white-only",r.myUserData.asideColor="bg-dark"}}})})}}}]);