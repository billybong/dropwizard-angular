dropwizard-angular
==================

Silly project for playing around with a simple CRUD app using Dropwizard and AngularJS
Bundled as an application using Gradle install plugin.

You can start the DropWizard server through "gradlew run", or if you prefer to package it,
then simply run "gradlew installApp" to build. You dont need either Maven or Gradle to build, just Java.
If you used installApp, then start with:

cd /build/install/dropwizard-angular/bin/
dropwizard-angular server ../conf/config.yml
