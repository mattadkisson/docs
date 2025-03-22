

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

# Configuring Shifts

You configure Shifts using the [Shift patterns
workspace](../BuildandCreate/shift-patterns-configuration.htm) in SmartSpace
Config or, if you have licensed the Visibility component, in the Shifts screen
in SmartSpace Web. See [Shifts in SmartSpace
Web](../Visibility/OpsWebInterface/shifts-configuration-operations-web-
interface.htm) for further details of the latter.

If you have licensed the Rules engine developer, after you have configured
shifts and linked them to objects in your data model, you will be able to use
durations that take shift patterns into account in your business rules. See
[Building definitions](../BusinessRulesDeveloper/rules-engine-developer-
config.htm#_Creating_definitions) for details of the hours between, hours in
the future and the shift of operators.

In the following example, a single pattern of working hours is defined which
is applied to the shift pattern for a standard working week. This pattern is
then associated with all objects of the “product” type.

  1. In SmartSpace Config, choose SHIFT PATTERNS and double-click <Create new shift pattern>. In the dialog, enter “Weekday” for the shift pattern, and “8:30->12:00 13:00->16:30” for the working hours. Click Save.

![screenshot showing example of shift pattern setup](../../images/shift-
pattern.png)

  2. Add a new shift by clicking Create shift and entering “Standard Week” as its name. Choose the newly-created Standard Week from the dropdown and assign the “Weekday” shift pattern by double-clicking beside each relevant day and choosing from the list. Days on which there is no working time to be recorded can be left with the default None.

![screenshot showing a shift being selected for a working
day](../../images/shift-days.png)

  3. After defining working times, you can associate an object with the shift so that durations for the objects take account of the configured working times. To use the “Standard Week” shift with the “Product” type, choose SERVICE PARAMETERS and select Shifts and then drag the Product type into the object browser. Double-click <'Product' objects> and click Edit. In the parameters dialog, choose Standard Week from the dropdown.

![screenshot of setting shift parameters for all objects of the product
type](../../images/3_5-shifts-parameters.png)

## Parameters for Shifts

The following parameters enable shifts to be used by the Business rules engine
and in Reporting.

log duration in shift

Used to record duration using shifts.

report shift activity

Enables setting of the assertion “the shift of <Object> is active” for an
object that has a shift assigned to it.

See [Service parameters](../BuildandCreate/service-parameters-
configuration.htm) for further information on setting parameters for objects.

## Assertions for Shifts

The following assertion is used.

the shift of <Object> is active

If “report shift activity” is set to true for some object with a shift
assigned to it, then when that shift is active the assertion “the shift of
<Object> is active” will be made (and when the shift is inactive the assertion
will be retracted). You can set or unset the ‘shift is active’ assertion for
all objects of a particular type by using the global mechanism in SERVICE
PARAMETERS to set default values for all members of the chosen type.

One use of this assertion is to configure an event handler to fire at a
specific time (e.g. 3 a.m.) by setting up a shift which starts at that time.

  * Configuring Shifts
    * Parameters for Shifts
    * Assertions for Shifts

![Navigate previous](../../images/transparent.gif) ![Navigate
next](../../images/transparent.gif) ![Expand
all](../../images/transparent.gif) ![](../../images/transparent.gif)
![Print](../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

