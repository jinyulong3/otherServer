angular.module("app").controller("customerSelectGoodsclassCon",["$scope","httpJsonHandle","myConstants",function(o,t,e){o.customerList=o.app.myData.customerList.slice(1),o.goodsclassList=[{classId:"0",className:"全部"}],o.goodsclassNoAll=[],log(o.customerList),e.queryGoodsclassData.sessionId=o.app.myData.sessionId,o.search_select_station_list=[{stationId:"0",stationName:"全部"}],o.stationListAll=[{stationId:"0",stationName:"全部"}],e.getStationListSendData.sessionId=o.app.myData.sessionId,log(o.stationListAll),o.selectCustomerChange=function(s){console.log(s),o.show1=!1,o.show2=!1,o.show3=!1,o.parentClassId="0",e.queryGoodsclassData.parentClassId="0",void 0===s?(e.queryGoodsclassData.customerId=o.info.customerId,e.getStationListSendData.where=" customerId='"+o.info.customerId+"'"):(e.queryGoodsclassData.customerId="",e.getStationListSendData.where=" customerId='"+s+"'"),o._callback=function(s){o.goodsclassList=s.goodsclassList;o.goodsclassList.unshift({classId:"0",className:"第1级类别"}),o.goodsclassNoAll=o.goodsclassList.slice(0),console.log(o.goodsclassList)},t.myPost2(e.URL.systemUrl,e.queryGoodsclassData,e.msgIdName.queryGoodsclassMsgId,e.msgIdName.queryGoodsclassMsgName,o._callback),o._callback_stations=function(s){o.stationListNoAll=s.fieldValues,o.stationListAll=o.search_select_station_list.concat(s.fieldValues)},t.myPost2(e.URL.systemUrl,e.getStationListSendData,e.msgIdName.normalSelectMsgId,e.msgIdName.normalSelectMsgName,o._callback_stations)},void 0!==o.info&&void 0!==o.info.customerId&&console.log(o.info.customerId),console.log(o.type)}]).directive("customerSelectGoodsclass",["httpJsonHandle","myConstants",function(s,o){return{restrict:"E",templateUrl:"tpl/dire/customerSelect.html",controller:"customerSelectGoodsclassCon",replace:!1,resolve:{httpJsonHandle:s,myConstants:o}}}]).controller("goodsclassSelectCon",["$scope","myConstants","httpJsonHandle",function(o,s,t){0==o.goodsclassList.length&&(o.goodsclassList=[{classId:"0",className:"第1级类别"}]),o.show1=!1,void 0!==o.parent&&(s.queryGoodsData.sessionId=o.parent.app.myData.sessionId),o.goodsclassSelChange=function(){console.log(o.info.classId0),o.show2=!1,o.show3=!1,"0"==o.info.classId0?(console.log("classId0选择全部 隐藏下一级select"),o.show1=!1,o.show2=!1,o.toQuery_parentClassId="0",o.currentClassId="0"):(o.toQuery_parentClassId=o.info.classId0,o.currentClassId=o.info.classId0,console.log("classId0选择类别 显示下一级select"),s.queryGoodsclassData.parentClassId=o.info.classId0,o._callback1=function(s){o.goodsclassList1=s.goodsclassList;o.goodsclassList1.unshift({classId:"0",className:"第2级类别"}),o.goodsclassNoAll1=o.goodsclassList.slice(1),console.log(o.goodsclassList1),o.show1=!0},t.myPost2(s.URL.systemUrl,s.queryGoodsclassData,s.msgIdName.queryGoodsclassMsgId,s.msgIdName.queryGoodsclassMsgName,o._callback1),s.queryGoodsData.customerId=o.info.customerId,s.queryGoodsData.stationId=o.info.stationId,s.queryGoodsData.classId=o.currentClassId,o._callback2=function(s){o.goodsList=s.goodsList,console.log(o.goodsList)},t.myPost2(s.URL.systemUrl,s.queryGoodsData,s.msgIdName.queryGoodsMsgId,s.msgIdName.queryGoodsMsgName,o._callback2))}}]).directive("goodsclassSelect",["httpJsonHandle","myConstants",function(s,o){return{restrict:"E",templateUrl:"tpl/dire/goodsclassSelect.html",controller:"goodsclassSelectCon",replace:!1,resolve:{httpJsonHandle:s,myConstants:o}}}]).controller("goodsclassSelectCon1",["$scope","myConstants","httpJsonHandle",function(o,s,t){o.show2=!1,void 0!==o.parent?s.queryGoodsData.sessionId=o.parent.app.myData.sessionId:s.queryGoodsData.sessionId=o.app.myData.sessionId,o.goodsclassSelChange1=function(){console.log(o.info.classId0),"0"==o.info.classId1?(console.log("classId1选择全部 隐藏下一级select"),o.show2=!1,o.toQuery_parentClassId=o.info.classId0,o.currentClassId=o.info.classId0):(o.toQuery_parentClassId=o.info.classId1,o.currentClassId=o.info.classId1,console.log("classId1选择类别 显示下一级select"),s.queryGoodsclassData.parentClassId=o.info.classId1,o._callback1=function(s){o.goodsclassList2=s.goodsclassList;o.goodsclassList2.unshift({classId:"0",className:"第3级类别"}),o.goodsclassNoAll2=o.goodsclassList2.slice(1),console.log(o.goodsclassList2),o.show2=!0},t.myPost2(s.URL.systemUrl,s.queryGoodsclassData,s.msgIdName.queryGoodsclassMsgId,s.msgIdName.queryGoodsclassMsgName,o._callback1))}}]).directive("goodsclassSelect1",["httpJsonHandle","myConstants",function(s,o){return{restrict:"E",templateUrl:"tpl/dire/goodsclassSelect1.html",controller:"goodsclassSelectCon1",replace:!1,resolve:{httpJsonHandle:s,myConstants:o}}}]).controller("goodsclassSelectCon2",["$scope","myConstants","httpJsonHandle",function(s,o,t){s.show2=!1,s.goodsclassSelChange2=function(){console.log(s.info.classId2),"0"==s.info.classId2?(console.log("classId2选择全部 隐藏下一级select"),s.show3=!1,s.toQuery_parentClassId=s.info.classId1,s.currentClassId=s.info.classId1):(console.log("classId2选择类别 显示下一级select"),s.currentClassId=s.info.classId2)}}]).directive("goodsclassSelect2",["httpJsonHandle","myConstants",function(s,o){return{restrict:"E",templateUrl:"tpl/dire/goodsclassSelect2.html",controller:"goodsclassSelectCon2",replace:!1,resolve:{httpJsonHandle:s,myConstants:o}}}]).controller("goodsSelectCon",["$scope","myConstants","httpJsonHandle",function(s,o,t){s.goodsSelChange=function(){console.log(s.info.goodsId),s.info.goodsId}}]).directive("goodsSelect",["httpJsonHandle","myConstants",function(s,o){return{restrict:"E",templateUrl:"tpl/dire/goodsSelect.html",controller:"goodsSelectCon",replace:!1,resolve:{httpJsonHandle:s,myConstants:o}}}]);