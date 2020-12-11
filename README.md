
clone repo

install python 2.7 or greater

open a terminal window

run python -m SimpleHTTPServer 8443

open a browser and navigate to http://localhost:8443

you may need to provide the path to the file RBLDDemo.html

Steps:

-Create a project in LaunchDarkly
-Create a feature flag called 'SayHelloButton'
-Create a Rollbar Project using the JavaScript SDK
-Add the rollbar JS SDK snipped to RBLDDemo.html
-Start the web Server run python -m SimpleHTTPServer 8443 and make sure you
can navigate to http://localhost:8443/LDDemo/JSLaunchDarklyDemo/RBLDDemo.html
Add the Launch Darkly notification in Rollbar (NOTE you will need Michael M (PM) to enable
this for you at the project level.
-NOTE for the Launch Darkly integration (notification) you want your rule to look like this:

New/Reactivated Item → Toggle feature flag SayHelloButton to off

THis way it will turn off the feature flag when there is a new or reactivated item.

-In Launch Darkly Turn on the Feature Flag
-Refresh your Application http://localhost:8443/LDDemo/JSLaunchDarklyDemo/RBLDDemo.html
-Click the sayHello button to generate errors
-Look in Rollabar UI for new or recurring items
-Resolve any items that show up
-Go back to the Launch Darkly UI and refresh your feature flag it should be turned off
you can also refresh your UI application to see this as well.
-In launch Darkly Click on your project click on your feature flag then click history
and you should see a recent entry like this:

A service token updated SayHelloButton in  Production
16 hours ago — ian-LD-Demo — Using the token "IanDemo" (…2fbe)
Feature Flag change made due to new Rollbar occurrence https://rollbar.com/ianianf/LDJSDemo/items/6/occurrences/142717344263/
