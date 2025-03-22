

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

# Tracing Platform Data Use

In the SmartSpace release 3.2 there is a new tes_profile trace stream which is
always enabled. Every five minutes, each running schema server prints a line
to this trace stream. This profile stream can be used to detect issues with
the performance of the system, such as spikes in load or continually growing
table sizes. Eventually we intend to write an IT support feature which will
record these traces and support reporting. For higher level methods of
monitoring all aspects of system health, see [Health
monitoring](../../ComponentandFeatureOverview/TopLevelFeatures/Advanced
IT/health-monitoring.htm).

tes_profile: Aggregation%Aggregated|41.654|403|403|0

The columns are separated by “|” and area as follows:

Column | Example | Meaning  
---|---|---  
Name of schema |  Aggregation%Aggregated |  The name of the schema as advertised to clients  
Transaction rate |  41.654 |  The average number of transactions per second for this schema across the last five minutes  
Total row count |  403 |  The total number of rows in all tables in the schema now  
Max row count |  403 |  The number of rows in the largest table in the schema now  
Max row table |  0 |  The index of the largest table within the schema now  
  

![Navigate previous](../../images/transparent.gif) ![Navigate
next](../../images/transparent.gif) ![Expand
all](../../images/transparent.gif) ![](../../images/transparent.gif)
![Print](../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

