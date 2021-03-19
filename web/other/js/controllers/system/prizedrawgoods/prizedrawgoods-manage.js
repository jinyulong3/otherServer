app.controller("prizedrawgoodsManage",["$scope","$uibModal","toaster","httpJsonHandle","myConstants","$translate",function(i,t,o,s,n,a){console.log(i.app.myData),i.flag="prizedrawgoodsManage",i.host=window.location.host,i.selected_customerId="0",n.getStationListSendData.sessionId=i.app.myData.sessionId,1==i.app.myData.role&&i.selectCustomerChange(),i.search_select_prizedraw_list=[],n.getPrizedrawListSendData.sessionId=i.app.myData.sessionId,i.selectPrizedrawChange=function(){i.getPrizedrawGoodsList.prizeDrawId=i.selected_prizedrawId,console.log(i.getPrizedrawGoodsList),i.goQuery()},i.getPrizedrawGoodsList={sessionId:i.app.myData.sessionId,customerId:"",stationId:"",prizeDrawId:0,deviceId:"",type:0,limit:"",offset:""},i.filterOptions={filterText:"",useExternalFilter:!0},i.totalServerItems=0,i.pagingOptions={pageSizes:[10,15,25,50,100],pageSize:15,currentPage:1},i.columnDefs=[{field:"id",displayName:"ID",width:"*",visible:!1},{field:"customerId",displayName:a.instant("items.customerManage.customerNo"),width:"*",visible:!1},{field:"stationId",displayName:a.instant("items.stationManage.stationId"),width:"*",visible:!1},{field:"prizeDrawId",displayName:"抽奖项目编号",width:"*",visible:!1},{field:"goodId",displayName:"商品编号",width:"*"},{field:"goodName",displayName:"商品名称",width:"*"},{field:"awardCount",displayName:"奖品个数",width:"*"},{field:"oddsOfWinning",displayName:"中奖概率权重",width:"*"},{field:"siteId",displayName:"奖品序号",width:"*",visible:!1},{field:"isEmpty",displayName:"是否空奖",width:"*",cellFilter:"filterPrizeGoodsIsEmpty"},{field:"goodCount",displayName:"该商品库存",width:"*",visible:!1},{field:"time_insert",displayName:"创建时间",width:"150",cellFilter:"filterDateStringSplitMs"},{field:"time_update",displayName:"修改时间",width:"150",cellFilter:"filterDateStringSplitMs"}],i.callback=function(a){console.log(a),i.myData=a.prizeDrawList,i.totalServerItems=a.allCount,o.clear()},i.setPagingData=function(a,t){i.getPrizedrawGoodsList.offset=1==a?0:(a-1)*t,i.getPrizedrawGoodsList.limit=t,s.myPost2(n.URL.systemUrl,i.getPrizedrawGoodsList,n.msgIdName.queryPrizedrawGoodsMsgId,n.msgIdName.queryPrizedrawGoodsMsgName,i.callback)},i.getPagedDataAsync=function(a,t,e){setTimeout(function(){o.pop("wait",constantsLang[i.app.myData.lang].load.reqData,constantsLang[i.app.myData.lang].load.loadingData),i.setPagingData(t,a)},100)},i.$watch("pagingOptions",function(a,t){a!==t&&i.getPagedDataAsync(i.pagingOptions.pageSize,i.pagingOptions.currentPage,i.filterOptions.filterText)},!0),i.$watch("filterOptions",function(a,t){a!==t&&i.getPagedDataAsync(i.pagingOptions.pageSize,i.pagingOptions.currentPage,i.filterOptions.filterText)},!0),i.gridOptions={i18n:"undefined"!=i.app.myData.lang?i.app.myData.lang:"zh-cn",data:"myData",enablePaging:!0,showFooter:!0,footerRowHeight:40,totalServerItems:"totalServerItems",pagingOptions:i.pagingOptions,rowHeight:28,enableRowSelection:!0,multiSelect:!1,columnDefs:"columnDefs",enableColumnResize:!0,showSelectionCheckbox:!0,filterOptions:i.filterOptions},i.goQuery=function(){console.log(i.getPrizedrawGoodsList),void 0!==i.info&&void 0!==i.info.customerId&&""!=i.info.customerId?void 0!==i.info.stationId&&""!=i.info.stationId?void 0!==i.getPrizedrawGoodsList.prizeDrawId&&""!=i.getPrizedrawGoodsList.prizeDrawId&&"0"!=i.getPrizedrawGoodsList.prizeDrawId?(i.getPrizedrawGoodsList.customerId=n.getPrizedrawListSendData.customerId,i.getPrizedrawGoodsList.stationId=n.getPrizedrawListSendData.stationId,i.getPagedDataAsync(i.pagingOptions.pageSize,i.pagingOptions.currentPage)):o.pop("info",constantsLang[i.app.myData.lang].tips.tip,"请选择抽奖项目"):o.pop("info",constantsLang[i.app.myData.lang].tips.tip,"请选择站点"):o.pop("info",constantsLang[i.app.myData.lang].tips.tip,"请选择客户")},app.controller("btnClickAddPrizedrawGoodsCon",["$scope","$uibModalInstance","info","parentScope",function(a,t,e,i){a.parent=i,a.info=e,a.host=i.host,a.flag=i.flag,a.goodsclassList=i.goodsclassList,a.info.customerId=i.getPrizedrawGoodsList.customerId,a.info.stationId=i.getPrizedrawGoodsList.stationId,a.info.prizeDrawId=i.getPrizedrawGoodsList.prizeDrawId,console.log(e),a.info.isEmpty=0,a.ok=function(){a.info.sessionId=i.app.myData.sessionId,a.info.datatype=n.cmdType.ADD,a.info.siteId=0,a.info.isEmpty=a.isEmpty_bool?1:0,console.log(a.info),a.callback2=function(a){console.log(a),o.clear(),o.pop("success",constantsLang[i.app.myData.lang].tips.success,constantsLang[i.app.myData.lang].tips.addSuccess,n.TIMEOUT.timeout1s),t.dismiss(0),i.getPagedDataAsync(i.pagingOptions.pageSize,i.pagingOptions.currentPage,i.filterOptions.filterText)},s.myPost2(n.URL.systemUrl,a.info,n.msgIdName.managePrizeDrawGoodsMsgId,n.msgIdName.managePrizeDrawGoodsMsgName,a.callback2,t),o.pop("wait",constantsLang[i.app.myData.lang].load.reqData,constantsLang[i.app.myData.lang].load.addingData)},a.cancel=function(){console.log(a.info),t.dismiss(0)}}]),i.btnClickAddPrizedraw=function(){void 0!==i.getPrizedrawGoodsList.customerId&&""!=i.getPrizedrawGoodsList.customerId?void 0!==i.getPrizedrawGoodsList.stationId&&""!=i.getPrizedrawGoodsList.stationId?void 0!==i.getPrizedrawGoodsList.prizeDrawId&&""!=i.getPrizedrawGoodsList.prizeDrawId&&"0"!=i.getPrizedrawGoodsList.prizeDrawId?t.open({templateUrl:"tpl/system/prizedrawgoods/addPrizedrawGoods.html",controller:"btnClickAddPrizedrawGoodsCon",size:"md",resolve:{parentScope:i,info:{}}}):o.pop("info",constantsLang[i.app.myData.lang].tips.tip,"请选择抽奖项目"):o.pop("info",constantsLang[i.app.myData.lang].tips.tip,"请选择站点"):o.pop("info",constantsLang[i.app.myData.lang].tips.tip,"请选择客户")},app.controller("btnClickEditPrizedrawGoodsCon",["$scope","$uibModalInstance","info","parentScope",function(a,t,e,i){a.parent=i,a.info=e,a.host=i.host,a.isEmpty_bool=1==a.info.isEmpty,a.ok=function(){a.info.sessionId=i.app.myData.sessionId,a.info.datatype=n.cmdType.CHANGE,a.info.isEmpty=a.isEmpty_bool?1:0,a.info.siteId=0,console.log(a.info),a.callback3=function(a){o.clear(),o.pop("success",constantsLang[i.app.myData.lang].tips.success,constantsLang[i.app.myData.lang].tips.editSuccess,n.TIMEOUT.timeout1s),t.dismiss(0),i.getPagedDataAsync(i.pagingOptions.pageSize,i.pagingOptions.currentPage,i.filterOptions.filterText)},s.myPost2(n.URL.systemUrl,a.info,n.msgIdName.managePrizeDrawGoodsMsgId,n.msgIdName.managePrizeDrawGoodsMsgName,a.callback3,t),o.pop("wait",constantsLang[i.app.myData.lang].load.reqData,constantsLang[i.app.myData.lang].load.editingData)},a.cancel=function(){t.dismiss(0)}}]),i.btnClickEditPrizedraw=function(){var a=i.gridOptions.$gridScope.selectedItems;console.log(a[0]),0==a.length?o.pop("info",constantsLang[i.app.myData.lang].tips.tip,constantsLang[i.app.myData.lang].tips.noSelectRow):t.open({templateUrl:"tpl/system/prizedrawgoods/editPrizedrawGoods.html",controller:"btnClickEditPrizedrawGoodsCon",size:"md",resolve:{parentScope:i,info:a[0]}})},app.controller("btnClickDelPrizedrawGoodsCon",["$scope","$uibModalInstance","info","parentScope",function(a,t,e,i){a.info=e,a.ok=function(){a.info.sessionId=i.app.myData.sessionId,a.info.datatype=n.cmdType.DEL,a.callback3=function(a){o.clear(),o.pop("success",constantsLang[i.app.myData.lang].tips.success,constantsLang[i.app.myData.lang].tips.deleteSuccess,n.TIMEOUT.timeout1s),t.dismiss(0),i.getPagedDataAsync(i.pagingOptions.pageSize,i.pagingOptions.currentPage,i.filterOptions.filterText)},s.myPost2(n.URL.systemUrl,a.info,n.msgIdName.managePrizeDrawGoodsMsgId,n.msgIdName.managePrizeDrawGoodsMsgName,a.callback3,t),o.pop("wait",constantsLang[i.app.myData.lang].load.reqData,constantsLang[i.app.myData.lang].load.deletingData)},a.cancel=function(){t.dismiss(0)}}]),i.btnClickDelPrizedraw=function(){var a=i.gridOptions.$gridScope.selectedItems;0==a.length?o.pop("info",constantsLang[i.app.myData.lang].tips.tip,constantsLang[i.app.myData.lang].tips.noSelectRow):t.open({templateUrl:"tpl/system/prizedrawgoods/delPrizedrawGoods.html",controller:"btnClickDelPrizedrawGoodsCon",size:"md",resolve:{parentScope:i,info:a[0]}})}}]);