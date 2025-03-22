

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

# Location Removal Mechanism

The location removal feature is similar to tag removal and object deletion
supported via assertions in SmartSpace core. Location removal allows an
assertion to be made that causes the current location of the object to be
removed, and the assertion will be retracted once this has been done. Location
removal doesn’t require any configuration parameters – it is purely
implemented using a single assertion.

## Assertions for Location Removal

remove location pending flag <Object>

When this flag is asserted for an object, the object’s location will be
removed, and then assertion will be retracted. Any process action that must be
executed after the object has been removed can be safely executed when the
assertion has been retracted. If the object is still getting located by some
other means, such as via driven objects, or an associated tag, then the object
might be located again (possibly immediately).

## Example of Location Removal Use

One example of the use of the location removal mechanism is to clean up
objects that have not been located by their tag for some process-related time
interval. To implement this, specify a stale timeout for the object type, and
then when the stale flag is set for an object, set the location removal
pending flag. This can be can be done using external integration code, or
trivially with Business Rules if they have been licensed.

  * Location Removal Mechanism
    * Assertions for Location Removal
    * Example of Location Removal Use

![Navigate previous](../../../images/transparent.gif) ![Navigate
next](../../../images/transparent.gif) ![Expand
all](../../../images/transparent.gif) ![](../../../images/transparent.gif)
![Print](../../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

