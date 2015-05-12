'use strict';

angular.module('styleguide')
  .controller('ComponentsCtrl', ComponentsCtrl);


function ComponentsCtrl($scope, $window, $log) {

  $scope.components = [{
      id: 'alert', name: 'Alerts'
    }, {
      id: 'buttons', name: 'Buttons'
    }, {
      id: 'colors', name: 'Colors'
    }, {
      id: 'container', name: 'Containers'
    }, {
      id: 'dropdown', name: 'Dropdowns'
    }, {
       id: 'fonts', name: 'Fonts'
    }, {
      id: 'form', name: 'Forms'
    }, {
      id: 'modal', name: 'Modals'
    }, {
      id: 'navs', name: 'Navs'
    }, {
      id: 'popover', name: 'Popover'
    }, {
      id: 'progressbar', name: 'Progressbar'
    }, {
      id: 'table', name: 'Tables'
    }, {
      id: 'tooltip', name: 'Tooltips'
    }
  ];

  //Alerts
  $scope.alerts = [
    { type:'danger', msg: 'You have encountered a system error. Please try later.' },
    { type:'success', msg: 'Great job for start thinking about retirement!' },
    { type:'info', msg: 'Click <a href="www.google.com">here</a> to learn more about this feature!' }
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Just out of the over alert!'});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

  //Tab navigation
  $scope.tabs = [
    { title: 'Get dynamic title', content: 'Choose related content' },
    { title: 'Another dynamic title', content: 'More related content is here!' },
  ];

  $scope.alertMe = function() {
    setTimeout(function() {
      $window.alert('You\'ve hit the alert tab!');
    });
  };

  //Accordion
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header -1',
      content: 'Dynamic Group Body -1'
    },
    {
      title: 'Dynamic Group Header -2',
      content: 'Dynamic Group Body -2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length +1;
    $scope.items.push('Item ' +  newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  //Collapse
  $scope.isCollapsed = false;

  //Dropdown menus
  $scope.items = [
    'The first item',
    'The second item',
    'The third item'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopePropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

}

