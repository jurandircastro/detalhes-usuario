'use strict';

angular.module('Teste')
  .controller('TesteController', TesteController);

function TesteController ($rootScope, $scope) {
    console.log(navigator);

    $scope.browser;

    function get_browser() {
        var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
        if(/trident/i.test(M[1])){
            tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
            $scope.browser = {
                name:'Microsoft Edge',
                version:(tem[1]||'')
            };
        }   
        if(M[1]==='Chrome'){
            tem=ua.match(/\bOPR|Opr\/(\d+)/)
 
        }   
        M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        
        if((tem=ua.match(/version\/(\d+)/i))!=null){
            M.splice(1,1,tem[1]);
        }
        $scope.browser = {
            name: M[0],
            version: M[1]
        };
    
        if (/Edge\/\d./i.test(navigator.userAgent)){
            var index = window.navigator.userAgent.indexOf("Edge");
            if (index > 0) {
                $scope.browser = {
                name: "Microsoft Edge",
                version: parseInt(window.navigator.userAgent.substring(index+ 5, window.navigator.userAgent.indexOf(".", index)))
            };
            }
        }
        
    }

    $scope.operating_system;

    function get_operating_system(){
        if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) $scope.operating_system = {name:"Windows 10"};
        if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) $scope.operating_system = {name: "Windows 8"};
        if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) $scope.operating_system = {name: "Windows 7"};
        if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) $scope.operating_system = {name: "Windows Vista"};
        if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) $scope.operating_system = {name: "Windows XP"};
        if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) $scope.operating_system = {name: "Windows 2000"};
        if (window.navigator.userAgent.indexOf("Mac") != -1) $scope.operating_system = {name: "Mac/iOS"};
        if (window.navigator.userAgent.indexOf("X11") != -1) $scope.operating_system = {name: "UNIX"};
        if (window.navigator.userAgent.indexOf("Linux") != -1) $scope.operating_system = {name: "Linux"};
    }

    $scope.alert = false;

    function isValid(){
        if($scope.browser.name == "Microsoft Edge" && $scope.browser.version < 11){$scope.alert = true;}
        if($scope.browser.name == "Chrome" && $scope.browser.version < 52){$scope.alert = true;}
        if($scope.browser.name == "Firefox" && $scope.browser.version < 47){$scope.alert = true;}
        if($scope.browser.name == "Safire" && $scope.browser.version < 9) {$scope.alert = true;} 
    }

    get_operating_system();
    get_browser();
    isValid();
}
