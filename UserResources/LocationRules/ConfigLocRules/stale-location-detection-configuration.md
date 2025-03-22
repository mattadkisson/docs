

Skip To Main Content

[](../../../Home.htm)

  * placeholder

Filter:

  * All Files

Submit Search

![Navigate previous](../../../images/transparent.gif) ![Navigate
next](../../../images/transparent.gif) ![Expand
all](../../../images/transparent.gif) ![](../../../images/transparent.gif)
![Print](../../../images/transparent.gif)

You are here:

[Download as
PDF](../../../../SmartSpaceDownloads/B7GZWZS4WX9F/SmartSpaceLocRulesConfig.pdf
"link to PDF version of this content")

[Software
Version](../../../ComponentandFeatureOverview/FrontMatters\(Online\)/features-
and-versions.htm): 3.2

# Stale Location Detection

The stale location detection feature is used to report objects for which the
associated tag is no longer getting locations. For example, if a tag is taken
out of the coverage of the location system, the object will be left at the
seen last location. The system allows a maximum time interval to be configured
for object types, or for individual objects. These timeouts can also be
dynamically overridden. If an object has been located using an associated tag,
and then the tag stops generating sightings for the time interval configured,
an assertion is generated that the object location is “stale”. As soon as a
new sighting is made of the tag, the stale assertion is retracted.

It is up to external integration code, or to business rules (if the Business
rules component has been licensed) to decide what to do when a stale assertion
has been made for an object. For example, the object might be assigned a new
representation indicating that its location is stale. In some cases, it may be
appropriate to remove the object location when it becomes stale. The
appropriate choice of action depends on the application. A simple method for
cleaning up stale locations can be configured without the need for business
rules or external integration.

## Setting a Stale Timeout

Using SmartSpace Config, in the SERVICE PARAMETERS task, select Stale location
timeouts, and then locate the type of object for which stale location
detection is required from the list of objects. (Use the Expand All button to
display the object hierarchy, if necessary.) Drag the object type into the
object browser to open a window listing all instances of this type.

![Selecting the Product type to configure stale location
detection](../../../images/3_5-stale-location-detection.png)

In order to configure stale detection for all objects of a given type, double-
click the row '_object name_ ' objects. To configure a single object, double-
click the particular instance you require.

![screen shot of parameters for stale location
detection](../../../images/3_5-stale-location-detection-1.png)

Now click Edit and enter the timeout to use in seconds. Normally the timeout
to use will be a function of the business process, or will be related to the
expected location rate of the tag attached to the object. For example, if the
tag is expected to generate a sighting every three seconds, and you wish to
detect when the tag has not been seen for three sightings, a timeout of 10
seconds would be appropriate. Alternatively, if the business use case requires
the object representation to change if the location is more than five minutes
old, set a timeout of 5*60 = 300 seconds.

The output of stale location detection uses an assertion stale flag <Object>.
This will typically be examined and acted upon using some integration code, or
via the Business rules component if it has been licensed. For testing and
development it can be viewed using TYPES/OBJECTS in SmartSpace Config.

## Dynamically Setting Stale Timeouts

In addition to the method described in Setting a Stale Timeout, there is an
assertion, which appears in the TYPES / OBJECTS task as ‘Object’ stale timeout
is ‘Double’ seconds: Bool, that allows a timeout specified in the service
parameters to be overridden dynamically.

If an object has a timeout specified in this assertion, it will override the
timeout specified in the service parameters. This allows the stale timeout for
an object to be modified using Business rules, or via one of the integration
methods for business properties. For example, if an object’s tag is expected
to be seen less frequently when it is in a particular part of a process, the
assertion can be used to increase the stale timeout while the object is in
that part of the process.

## Removing Stale Object Locations

A simple method for cleaning up stale objects from the map without the use of
a business rule or external integration can be configured by using the remove
when stale service parameter which appears under Stale location timeouts in
the SERVICE PARAMETERS task.

This parameter is a Boolean and defaults to false. If it is configured to be
true for an object, then when that object’s stale flag becomes set, the
object’s location will also be removed (via the remove location pending flag).

This provides a simple configuration to remove stale objects from the map.
Business rules would still be needed to support more complex rules for
removing objects based on combinations of the stale flag and other process
state.

## Parameters for Stale Location Detection

The following parameters are used to control stale location detection.

stale timeout

How long to wait for a sighting before asserting that an object is stale. Set
to zero (the default) to disable stale location detection.

remove when stale

If this is configured to be true for an object, then when that object’s stale
flag becomes set, the object’s location will also be removed (via the remove
location pending flag). Defaults to false.

## Assertions for Stale Location Detection

The following assertions are used by the Stale location detection feature.
They will typically be examined and acted upon using some integration code, or
via the Business rules component if it has been licensed. For testing and
development they can be viewed using TYPES/OBJECTS in SmartSpace Config.

stale flag <Object>

The stale flag will be set to true for any object currently detected as stale,
and will be removed when the object tag is sighted again.

‘Object’ stale timeout is ‘Double’ seconds: Bool

If an object has a timeout specified in this assertion, it will override
(dynamically) the timeout specified in the service parameters.

  * Stale Location Detection
    * Setting a Stale Timeout
    * Dynamically Setting Stale Timeouts
    * Removing Stale Object Locations
    * Parameters for Stale Location Detection
    * Assertions for Stale Location Detection

![Navigate previous](../../../images/transparent.gif) ![Navigate
next](../../../images/transparent.gif) ![Expand
all](../../../images/transparent.gif) ![](../../../images/transparent.gif)
![Print](../../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

