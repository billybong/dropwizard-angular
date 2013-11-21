dropwizard-angular
==================

Silly project for playing around with a simple CRUD app using Dropwizard and AngularJS
Bundled as an application using the maven shade plugin.

Build with:
mvn clean package

Then run with:
java -jar target/fatjar.jar server src/dist/conf/config.yml
