var htmlLinks = document.getElementById('nav-links');
htmlLinks.innerHTML =
  '<nav class="navbar navbar-inverse navbar-fixed-top">' +
    '<div class="container">' +
      '<div class="navbar-header">' +
        '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">' +
          '<span class="sr-only">Toggle navigation</span>' +
          '<span class="icon-bar"></span>' +
          '<span class="icon-bar"></span>' +
          '<span class="icon-bar"></span>' +
        '</button>' +
        '<a class="navbar-brand" href="../index.html">Simon Herrera</a>' +
      '</div>' +
      '<div id="navbar" class="collapse navbar-collapse">' +
        '<ul class="nav navbar-nav">' +
          '<li><a href="../app/projects.html">Projects</a></li>' +
          '<li><a href="../app/about">About</a></li>' +
          '<li><a href="../app/contact">Contact</a></li>' +
        '</ul>' +
      '</div>' +
    '</div>' +
  '</nav>';

  var footerBar = document.getElementById('footer-bar');
  footerBar.innerHTML =
    // '<p id="main-footer">&copy; 2016 Simon Herrera</p>';
    '<article id="main-footer">' +
      '<p>&copy; 2016 Simon Herrera</p>' +
    '</article>';