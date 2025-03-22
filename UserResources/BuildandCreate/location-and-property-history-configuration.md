

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

# Location and property history

Use the Location and property history workspace to configure the logging of
application data from SmartSpace to an external database for use in Reporting.

Before you can log data, you need to set up a suitable database. After you
have created a database, use the Location and property history workspace to
connect to the database and to identify the properties and locations you want
to log.

For a detailed description of these activities, see [SmartSpace
Reporting](../Reporting/reporting-developer.htm).

## Overview of the Location and property history workspace

Click on PROPERTY HISTORY to display the workspace.

![example of property history workspace](../../images/3_5-property-history-
workspace.png)

The workspace is described in the following sections:

![Closed](../../images/transparent.gif)Database logger

The current connection is displayed.

Select SQL Server or Oracle and click Edit to edit the connection string.
Connection settings depend on how the database was created.

![Closed](../../images/transparent.gif)Property and type selection

The middle pane shows a list of all defined properties. Double-click the
property for which you want to record property rows and select a logging
method and (temporal only) a retention interval.

Click Save and the database table corresponding to the logged property will be
created automatically.

![Closed](../../images/transparent.gif)Location logging

The bottom pane shows a list of all object types. Double-click the type for
which you want to enable location logging and select a logging method and
(temporal only) a retention interval. Set a distance threshold which is
considered to be a “significant” change in location.

Click Save and the database table corresponding to the logged property will be
created automatically.

  * Location and property history
    * Overview of the Location and property history workspace

![Navigate previous](../../images/transparent.gif) ![Navigate
next](../../images/transparent.gif) ![Expand
all](../../images/transparent.gif) ![](../../images/transparent.gif)
![Print](../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

