app.controller("staffManage",["$scope","$uibModal","toaster","httpJsonHandle","myConstants","$translate",function(s,a,n,i,o,t){s.selected_customerId="0",s.app.myData.customerListNoAll=s.app.myData.customerList.slice(0),"0"==s.app.myData.customerListNoAll[0].customerId&&s.app.myData.customerListNoAll.splice(0,1),s.default_search_select_station_list={stationId:"0",stationName:t.instant("public.all")},s.search_select_station_list=[s.default_search_select_station_list],s.selected_stationId="0",o.getStationListSendData.sessionId=s.app.myData.sessionId,0!=s.app.myData.role&&(s.selected_customerId=s.app.myData.customerListNoAll[0].customerId),s.callback_getStationList=function(t){s.search_select_station_list=s.search_select_station_list.concat(t.fieldValues),"0"!=s.selected_customerId?s.getStaffListSendData.where=" customerId='"+s.selected_customerId+"'":s.getStaffListSendData.where="",1!=s.pagingOptions.currentPage&&(s.pagingOptions.currentPage=1)},s.selectCustomerChange=function(){console.log(s.selected_customerId),s.search_select_station_list=[s.default_search_select_station_list],"0"!=s.selected_customerId?(o.getStationListSendData.where=" customerId='"+s.selected_customerId+"'",s.getStaffListSendData.where=" customerId='"+s.selected_customerId+"'"):(o.getStationListSendData.where="",s.getStaffListSendData.where=""),s.pagingOptions.currentPage=1,s.getPagedDataAsync(s.pagingOptions.pageSize,s.pagingOptions.currentPage),i.myPost2(o.URL.systemUrl,o.getStationListSendData,o.msgIdName.normalSelectMsgId,o.msgIdName.normalSelectMsgName,s.callback_getStationList)},s.selectStationChange=function(){console.log(s.selected_customerId),"0"!=s.selected_stationId?s.getStaffListSendData.where=" stationId='"+s.selected_stationId+"'":"0"!=s.selected_customerId?s.getStaffListSendData.where=" customerId='"+s.selected_customerId+"'":s.getStaffListSendData.where="",1!=s.pagingOptions.currentPage?s.pagingOptions.currentPage=1:s.getPagedDataAsync(s.pagingOptions.pageSize,s.pagingOptions.currentPage)},1==s.app.myData.role&&s.selectCustomerChange(),s.getStaffListSendData={sessionId:s.app.myData.sessionId,tableName:"view_staff_station",fields:[],where:"",limit:"",offset:""},s.filterOptions={filterText:"",useExternalFilter:!0},s.totalServerItems=0,s.pagingOptions={pageSizes:[10,15,25,50,100],pageSize:15,currentPage:1},s.columnDefs=[{field:"stationId",displayName:t.instant("items.stationManage.stationId"),width:"*"},{field:"stationName",displayName:t.instant("items.stationManage.stationName"),width:"*"},{field:"staffId",displayName:"员工号",width:"*"},{field:"name",displayName:t.instant("items.staffManage.name"),width:"*"},{field:"photoUrl",displayName:"员工照片",width:"*"},{field:"stars",displayName:"员工星级",width:"*"},{field:"phoneNum",displayName:t.instant("items.staffManage.phoneNum"),width:"*"},{field:"createTime",displayName:t.instant("items.staffManage.createTime"),width:"*",cellFilter:"filterDateStringSplitMs"}],s.callback=function(t){s.myData=t.fieldValues,s.totalServerItems=t.allCount,n.clear()},s.setPagingData=function(t,a){s.getStaffListSendData.offset=1==t?0:(t-1)*a,s.getStaffListSendData.limit=a,i.myPost2(o.URL.systemUrl,s.getStaffListSendData,o.msgIdName.normalSelectMsgId,o.msgIdName.normalSelectMsgName,s.callback)},s.getPagedDataAsync=function(t,a,e){setTimeout(function(){n.pop("wait",constantsLang[s.app.myData.lang].load.reqData,constantsLang[s.app.myData.lang].load.loadingData),s.setPagingData(a,t)},100)},s.getPagedDataAsync(s.pagingOptions.pageSize,s.pagingOptions.currentPage),s.$watch("pagingOptions",function(t,a){t!==a&&s.getPagedDataAsync(s.pagingOptions.pageSize,s.pagingOptions.currentPage,s.filterOptions.filterText)},!0),s.$watch("filterOptions",function(t,a){t!==a&&s.getPagedDataAsync(s.pagingOptions.pageSize,s.pagingOptions.currentPage,s.filterOptions.filterText)},!0),s.gridOptions={i18n:"undefined"!=s.app.myData.lang?s.app.myData.lang:"zh-cn",data:"myData",enablePaging:!0,showFooter:!0,footerRowHeight:40,totalServerItems:"totalServerItems",pagingOptions:s.pagingOptions,enableColumnResizing:!0,rowHeight:28,enableRowSelection:!0,multiSelect:!1,columnDefs:"columnDefs",enableColumnResize:!0,showSelectionCheckbox:!0,filterOptions:s.filterOptions},app.controller("btnClickAddStaffCon",["$scope","$uibModalInstance","info","parentScope",function(t,a,e,s){t.parent=s,t.info=e,t.customerListNoAll=s.app.myData.customerListNoAll,t.info.customerId=t.customerListNoAll[0].customerId,t.stationListNoAll=[],t.ok=function(){t.info.sessionId=s.app.myData.sessionId,t.info.datatype=o.cmdType.ADD,console.log(t.info),t.callback2=function(t){n.clear(),n.pop("success",constantsLang[s.app.myData.lang].tips.success,constantsLang[s.app.myData.lang].tips.addSuccess,o.TIMEOUT.timeout1s),a.dismiss(0),s.getPagedDataAsync(s.pagingOptions.pageSize,s.pagingOptions.currentPage,s.filterOptions.filterText)},i.myPost2(o.URL.systemUrl,t.info,o.msgIdName.staffManageMsgId,o.msgIdName.staffManageMsgName,t.callback2,a),n.pop("wait",constantsLang[s.app.myData.lang].load.reqData,constantsLang[s.app.myData.lang].load.addingData)},t.cancel=function(){a.dismiss(0)}}]),s.btnClickAddOil=function(){a.open({templateUrl:"tpl/system/staff/addStaff.html",controller:"btnClickAddStaffCon",size:"md",resolve:{parentScope:s,info:{}}})},app.controller("btnClickEditStaffCon",["$scope","$uibModalInstance","info","parentScope",function(t,a,e,s){(t.info=e).password="",t.ok=function(){t.info.sessionId=s.app.myData.sessionId,t.info.datatype=o.cmdType.CHANGE,console.log(t.info),t.callback3=function(e){n.clear(),n.pop("success",constantsLang[s.app.myData.lang].tips.success,constantsLang[s.app.myData.lang].tips.editSuccess,o.TIMEOUT.timeout1s),a.dismiss(0),s.app.myData.stationList.forEach(function(t,a){t.stationId==e.stationId&&(s.app.myData.stationList[a].stationName=e.stationName)}),s.getPagedDataAsync(s.pagingOptions.pageSize,s.pagingOptions.currentPage,s.filterOptions.filterText)},i.myPost2(o.URL.systemUrl,t.info,o.msgIdName.staffManageMsgId,o.msgIdName.staffManageMsgName,t.callback3,a),n.pop("wait",constantsLang[s.app.myData.lang].load.reqData,constantsLang[s.app.myData.lang].load.editingData)},t.cancel=function(){a.dismiss(0)}}]),s.btnClickEditOil=function(){var t=s.gridOptions.$gridScope.selectedItems;0==t.length?n.pop("info",constantsLang[s.app.myData.lang].tips.tip,constantsLang[s.app.myData.lang].tips.noSelectRow):a.open({templateUrl:"tpl/system/staff/editStaff.html",controller:"btnClickEditStaffCon",size:"md",resolve:{parentScope:s,info:t[0]}})},app.controller("btnClickDelStaffCon",["$scope","$uibModalInstance","info","parentScope",function(t,a,e,s){t.info=e,t.ok=function(){t.info.sessionId=s.app.myData.sessionId,t.info.datatype=o.cmdType.DEL,t.callback3=function(t){n.clear(),n.pop("success",constantsLang[s.app.myData.lang].tips.success,constantsLang[s.app.myData.lang].tips.deleteSuccess,o.TIMEOUT.timeout1s),a.dismiss(0),s.getPagedDataAsync(s.pagingOptions.pageSize,s.pagingOptions.currentPage,s.filterOptions.filterText)},i.myPost2(o.URL.systemUrl,t.info,o.msgIdName.staffManageMsgId,o.msgIdName.staffManageMsgName,t.callback3,a),n.pop("wait",constantsLang[s.app.myData.lang].load.reqData,constantsLang[s.app.myData.lang].load.deletingData)},t.cancel=function(){a.dismiss(0)}}]),s.btnClickDelOil=function(){var t=s.gridOptions.$gridScope.selectedItems;0==t.length?n.pop("info",constantsLang[s.app.myData.lang].tips.tip,constantsLang[s.app.myData.lang].tips.noSelectRow):a.open({templateUrl:"tpl/system/staff/delStaff.html",controller:"btnClickDelStaffCon",size:"md",resolve:{parentScope:s,info:t[0]}})}}]);