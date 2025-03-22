

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

# Parking

Parking is an extension of robust assertion points, where the object is
snapped into the given bay while it satisfies the strong evidence. Configuring
parking is almost exactly the same as for robust assertion points, so you
should first read the section on [Robust assertion points](robust-assertion-
point-configuration.htm).

Whilst the terminology used is parking-based, this functionality can be
applied more generally where the location of objects should be snapped to a
set of allowed locations and orientations, such as presenting a cleaned-up
view of noisy location data.

There are four major differences between parking and assertion points.

  1. The types used are different:

Assertion Area → Parking Area

Assertion Point → Parking Bay

Parking Area is derived from Assertion Area, and Parking Bay is derived from
Assertion Point. This means that they inherit all spatial properties,
parameters and assertions, and these inherited configurations have the same
function.

  2. There are two additional parameters of Parking Area: “default orientation” and “default orientation used”. These will be discussed below.
  3. The configuration parameter “allow multiple objects” is false for all objects of type Parking Area. You can change this parameter as required, to allow multiple objects to park at each bay if this makes sense, but it usually does not.
  4. When the assertion “has located” is made for a parking bay and object, the object is also snapped to the location of the parking bay. 

## Location Snapping

Parking, as with assertion points, is only applied for objects that have an
associated tag, because the tag location, along with the attachment position
on the object, is used to decide whether the object is at the parking bay.

While an object is parked at a bay (“has located” has been asserted), each
time a tag location is seen for the object, it will be placed in the bay if it
is not currently there. The orientation used will be that of the parking bay,
possibly rotated by 180 degrees if “forwards only” is false. The tag locations
will be used to decide whether the object is still in the bay.

As with assertion points, if the tag satisfies the parameters to leave the
parking bay, then the “has located” assertion will be retracted, and the
object will move again according to the tag position. If the default
orientation parameters are set, and the object is still “controlled” by the
parking area, then that orientation will be applied as the tag moves.

Also, as with assertion points, if the “controls” assertion is retracted for a
parking area and object, the object will move again according to the tag
position.

## Parameters for Parking Areas

The parameters of parking areas are the same as assertion areas, but with the
following additional parameters.

default orientation

When “default orientation used” is set to true, and an object is “controlled”
by a Parking Area, but not currently parked at a bay, then the orientation of
the object (its “yaw”, or rotation about the vertical axis) will be snapped to
this angle, in degrees. The tag position offset will be applied assuming that
the object orientation is this default orientation.

This is only used if the object is not currently parked in a bay. When parked
at a bay, the orientation of the bay will be used instead, either forwards or
backwards if the parking area is configured to allow this (“forwards only” set
to false).

default orientation used

Set to true to enable the default orientation within the area as described
above.

## Multiple Parking Areas

Only one parking area should control a given object at a time. If multiple
areas control an object at the same time, the resulting parking behavior is
undefined. Normally this means that parking area extents should not overlap.

Technically, the intersection of any two parking area extents should not be
able to contain the origin space of the parked objects – spatial hysteresis
within the SmartSpace spatial monitoring then prevents the object from being
controlled by both areas at the same time. See the section on Spatial
monitoring for more details.

## Layout of Parking Bays

It is worth noting that the driven objects feature, described in the section
on [Driven objects](driven-objects-configuration.htm) can be used to lay out
large numbers of regularly positioned parking bays, which may simplify the
configuration of parking for a large site. Essentially the process is to
create a container with the correct layout parameters, and then add each bay
to the container in the correct order so that they get placed in a grid that
matches the real bay layout. This technique only works where the parking area
layout is exactly regular over extended areas of the site.

When dealing with many parking bays it is probably most convenient to prepare
a set of commands for the ubisense_udm_admin command-line tool, rather than
manipulating the “is contained by” relation using SmartSpace Config.

  * Parking
    * Location Snapping
    * Parameters for Parking Areas
    * Multiple Parking Areas
    * Layout of Parking Bays

![Navigate previous](../../../images/transparent.gif) ![Navigate
next](../../../images/transparent.gif) ![Expand
all](../../../images/transparent.gif) ![](../../../images/transparent.gif)
![Print](../../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

