angular.module('ionicApp', ['ionic'])

.controller('MyCtrl', function($scope) {
  // don't be scared by the image value, its just datauri
  
  $scope.items = [
    { id: 1, album: 'Floating Zone Change', artist: 'Current Floating Zone: *currentZone*', image:'http://i.c-b.co/is/image/LandOfNod/Letter_Giant_Enough_F_231843_LL/&$web_zoom$&wid=913&hei=913/1308310656/not-giant-enough-letter-f.jpg' },
    { id: 2, album: 'Package Upgrade', artist: 'Current Package: *currentPackage*', image: 'https://lh3.ggpht.com/WeJfA3StPErh2Bn6Wkeu09JkygcK7obuqUYu5Cq8NXruG_PhCrCdXr68EbaSkMzOx7s=h900' },
    { id: 3, album: 'Someday', artist: 'Nickelback', image: '' },
    { id: 4, album: 'All The Right Reasons', artist: 'Nickelback', image: '' }
  ];
  
});