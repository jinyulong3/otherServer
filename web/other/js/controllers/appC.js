app.controller("appC",["$scope","$state","toaster","myConstants","$uibModal","httpJsonHandle","$translate",function(a,s,p,n,t,o,e){var i=e.proposedLanguage()||e.use();a.app.myData.lang=i,""!=a.app.myData.sessionId&&null!=a.app.myData.sessionId&&void 0!==a.app.myData.sessionId||s.go("app.signin")}]);