'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('droughtioApp'));

  var MainCtrl,
    scope,
    httpMock;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    httpMock = $httpBackend;
    scope = $rootScope.$new();
    // httpMock.when('GET', 'http://www.ncdc.noaa.gov/cdo-web/api/v2/datasets/ANNUAL')
    //   .respond({value: 'goodValue'});
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  // Make sure to finish each (mock) HTTP request
  afterEach(function () {
    httpMock.verifyNoOutstandingExpectation();
    httpMock.verifyNoOutstandingRequest();
  });

  // it('should get data from the NOAA API and attach it to the scope', function () {
  //   httpMock.expectGET('http://www.ncdc.noaa.gov/cdo-web/api/v2/datasets/ANNUAL');
  //   httpMock.flush();
  //   expect(scope.orderFormList).toMatch('goodValue');
  // });
});
