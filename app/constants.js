angular.module('Teste')
  .constant('httpRequest', httpRequest);

function httpRequest(url, method, data, $q, $http) {
  const deferred = $q.defer();
  const baseUrl = '';

   $http({
    method: method,
    url: baseUrl + url,
    data: data
  })
  .then((data, status, headers, config) => {
    deferred.resolve(data);
  })
  .catch((data, status, headers, config) => {
    deferred.reject(data);
  });

  return deferred.promise;
}
