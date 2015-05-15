# Project setup instructions for developers

https://compass.fngn.com/departments/Technology/SD/SitePages/angular-gulp%20project%20setup.aspx


# How do I create patterns?

1. Create a directory (e.g. my-pattern) in src/app/patterns
2. Inside my-pattern directory, create a HTML file which must have the exactly same name as its parent directory's (in this case, my-pattern.html)
3. Register this new pattern in src/app/patterns/patterns.value.js


# How do I add CSS style sheets to my pattern?

Create a SASS file (e.g. my-pattern.scss) in src/app/patterns/my-pattern/ directory. 
The file name can be anything, but it's recommended to use the same name as its parent directory's.

Note: only SASS files (*.scss) will be picked up by the Style Guide. CSS files will be ignored.

In order to scope your CSS, so it won't "pollute" other parts of the Style Guide, prefix your CSS rules with an ID selector, e.g., 

```css
#my-pattern-c .awesome-ui {
  color: #bada55;
}
```

my-pattern-c stands for my-pattern container if you're curious. But it can be anything.

Of course, you need to add this ID to your HTML (my-pattern.html):

```html
<h3>My pattern</h3><br>

<div id="my-pattern-c">
  Content goes here
</div>
```


# How do I add Angular code?

Create my-pattern.controller.js in src/app/patterns/my-pattern/ directory.

Add ng-controller="MyPatternCtrl" to HTML (my-pattern.html):

```html
<h3>My pattern</h3><br>

<div id="my-pattern-c" ng-controller="MyPatternCtrl">
  Content goes here
  <p>{{ test }}</p>
</div>
```

Here is an example of Angular controller:

```JavaScript
(function() {
  'use strict';

  angular
    .module('styleguide')
    .controller('MyPatternCtrl', MyPatternCtrl);


  function MyPatternCtrl($scope) {
    $scope.test = 'Hello, world!';
  }

})();
```

