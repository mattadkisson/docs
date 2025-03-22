

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

# Location rules

## Overview

This document describes the configuration of the features that make up the
Location rules component of SmartSpace. The features described are:

Automated tag association

This allows a tag detected at a given location to be associated with an
externally determined candidate object, subject to conditions that make this
association robust in a production environment. This includes the display of
the status of an association point using a web browser.

Robust location

An assertion point detects when an object is located at a given place using
strong evidence, including distance and speed. This allows the point to be
robust to transient process errors in production, such as carrying assets
close to a gate location.

Parking bay snapping

Parking is an extension of robust assertion points, where the object is
snapped into the given bay while it satisfies the strong evidence.

Driven objects

This supports locating an object based on the location of another container
object. When the container moves, the contained objects are carried along.
Various layout options are supported.

Stale location detection

When an object has an associated tag, and no sighting of that tag has been
generated for a configured time interval, an assertion is made that the object
is “stale”. This assertion is retracted as soon as the tag is located again.

Location removal

The location removal feature is similar to tag removal and object deletion
supported via assertions in SmartSpace core. Location removal allows an
assertion to be made that causes the current location of the object to be
removed, and the assertion will be reset once this has been done.

## Audience

This guide should be read by those who will be setting up a SmartSpace system
to use the features of Location rules, or those who are maintaining a system
that uses Location rules.

## Prerequisites

### Installation

Location rules is a licensed component of SmartSpace 3.2 and later. See
[SmartSpace Installation](../../Installation/InstallationWiz.htm) for
information on requirements and installation process. You will need a license
for Location rules in order to install it.

The automatic association status web page is part of SmartSpace Web. See the
installation instructions for SmartSpace Web in [SmartSpace
Installation](../../Installation/InstallationWiz.htm) for requirements and
installation process.

### SmartSpace Config

The configuration of Location rules features is done in the SmartSpace Config
application. Use the Ubisense Application Manager tool to download this
application after the services have been installed.

  * Location rules
    * Overview
    * Audience
    * Prerequisites
      * Installation
      * SmartSpace Config

![Navigate previous](../../../images/transparent.gif) ![Navigate
next](../../../images/transparent.gif) ![Expand
all](../../../images/transparent.gif) ![](../../../images/transparent.gif)
![Print](../../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

