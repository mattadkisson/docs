

Skip To Main Content

[](../../Home.htm)

  * placeholder

Filter:

  * All Files

Submit Search

![Navigate previous](../../images/transparent.gif) ![Navigate
next](../../images/transparent.gif) ![Expand
all](../../images/transparent.gif) ![](../../images/transparent.gif)
![Print](../../images/transparent.gif)

You are here:

[Software
Version](../../ComponentandFeatureOverview/FrontMatters\(Online\)/features-
and-versions.htm): 3.2

# Testing a Specific Set of Licensed Components

## Background

In SmartSpace the modular licensing means that specific features are enabled
or disabled depending on the components that a customer has purchased. This
means that applications developed for the customer must be tested against the
specific set of licensed components the customer has bought.

This document describes methods to run up a dataset using only a specific set
of licenses.

## Method

  1. Obtain a license with the purchased set of components.
  2. Uninstall all current SmartSpace licenses.
  3. Install the purchased SmartSpace licenses for the customer.
  4. Stop core and controller.
  5. Backup your dataset.
  6. In your dataset, remove file ULicense%Data.udata.
  7. Start core and controller.
  8. Using Service Manager, undeploy and remove all services.
  9. Install services from a current release of SmartSpace. You will be offered only the licensed subset of services.
  10. Test your application.

![Navigate previous](../../images/transparent.gif) ![Navigate
next](../../images/transparent.gif) ![Expand
all](../../images/transparent.gif) ![](../../images/transparent.gif)
![Print](../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

