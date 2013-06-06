---
layout: page
title: Rob Easthope
tag: landing
---
<div class="jumbotron">
  <div class="jumbotron-content-wrap">
    <div class="brand"> </div>
    <div class="jumbotron-title-wrap">
      <h1>I'm Rob Easthope</h1>
      <h1>A Front end designer &amp; developer</h1>
      <h1>Based in London, England.</h1>

      <div class="navbar hidden-sm" data-spy="affix" data-offset-top="500">
        <div class="container">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
            <a class="navbar-brand" href="{{ HOME_PATH }}"> </a> 
          </button>
          <a class="navbar-brand hidden-sm" href="{{ HOME_PATH }}"> </a> <!-- Desktop branding -->
          <nav class="nav-collapse collapse center-nav">
            <ul class="nav">
              {% include themes/saffron/nav.html %}
            </ul>
          </nav>
        <!-- /container -->
        </div>
      <!-- /navbar -->
      </div>
    <!-- /jumbotron-title-wrap -->
    </div>
  <!-- /jumbotron-content-wrap -->
  </div>
<!-- /Jumbotron -->
</div>
<section class="portfolio">
  <a id="portfolio"></a>
  <div class="row">
    <div class="thumbnails">
      <div class="col col-6 col-md-4 col-lg-4">
        <div class="thumbnail brixton">
          <a class="thumbnail-rollover" href="#">
            <h3 class="portfolio-title thumbnail-text-wrap">The Brixton Advice Centre</h3>
          </a>
        </div>
      </div>
      <div class="col col-6 col-md-4 col-lg-4">
        <div class="thumbnail lambeth">
          <a class="thumbnail-rollover" href="#">
            <div class="thumbnail-text-wrap">
              <h3 class="portfolio-title">The Lambeth Advice Network</h3>
            </div>
          </a>
        </div>
      </div>
      <div class="col col-6 col-md-4 col-lg-4">
        <div class="thumbnail lancastrians">
          <a class="thumbnail-rollover" href="#">
            <div class="thumbnail-text-wrap">
              <h3 class="portfolio-title">The Association of Lancastrians in London</h3>
            </div>
          </a>
        </div>
      </div>
      <div class="col col-6 col-md-4 col-lg-4">
        <div class="thumbnail eufn">
          <a class="thumbnail-rollover" href="#">
            <div class="thumbnail-text-wrap">
              <h3 class="portfolio-title">EUFN</h3>
            </div>
          </a>
        </div>
      </div>
      <div class="col col-6 col-md-4 col-lg-4">
        <div class="thumbnail ambr">
          <a class="thumbnail-rollover" href="#">
            <div class="thumbnail-text-wrap">
                <h3 class="portfolio-title">AMBR</h3>
            </div>
          </a>
        </div>
      </div>
      <div class="col col-6 col-md-4 col-lg-4">
        <div class="thumbnail layla">
          <a class="thumbnail-rollover" href="#">
            <div class="thumbnail-text-wrap">
              <h3 class="portfolio-title">Layla Moran - Oxford West &amp; Abingdon campaign</h3>
            </div>
          </a>
        </div>
      </div>
      <!--
      <div class="col col-6 col-md-4 col-lg-3">
        <div class="thumbnail saffron">
          <a class="thumbnail-rollover" href="#">
            <div class="thumbnail-text-wrap">
              <h3 class="portfolio-title">Portfolio</h3>
            </div>
          </a>
        </div>
      </div>
      -->
      <!--
      <div class="col col-6 col-md-4 col-lg-3">
        <div class="thumbnail swimlondon">
          <a class="thumbnail-rollover" href="#">
            <div class="thumbnail-text-wrap">
              <h3 class="portfolio-title">Swim London</h3>
            </div>
          </a>
        </div>
      </div>
      -->
      <!--
      <div class="col col-6 col-md-4 col-lg-3">
        <div class="thumbnail waterleaf">
          <a class="thumbnail-rollover" href="#">
            <div class="thumbnail-text-wrap">
              <h3 class="portfolio-title">Waterleaf</h3>
            </div>
          </a>
        </div>
      </div>
      -->
    </div>
  </div>
</section>

<div class="row">
  <section class="about">
    <a id="about"> </a>
    <div class="col-12 col-md-5 col-lg-5 col-offset-1">
      <div class="section-header">
        <h1>About</h1>
      </div>
      <p>If you would like to say hello or work with me on a project, feel free to <a href="mailto: robeasthope@gmail.com">email</a> or tweet me <a href="http://twitter.com/robeasthope">@robeasthope</a>.</p>
    </div>
  </section>
  <section class="contact">
    <a id="contact"> </a>
    <div class="col-12 col-md-5 col-lg-5">
      <div class="section-header">
        <h1>Contact</h1>
      </div>
      <p>Email: <a href="mailto: robeasthope@gmail.com">robeasthope@gmail.com</a></p>
      <p>Twitter: <a href="http://twitter.com/robeasthope">@robeasthope</a></p>
      <p>Skype: <a href="rob01225">@robeasthope</a></p>
    </div>
  </section>
</div>
{% include JB/setup %}