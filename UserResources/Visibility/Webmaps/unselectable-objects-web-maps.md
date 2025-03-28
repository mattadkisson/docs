

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

[Software
Version](../../../ComponentandFeatureOverview/FrontMatters\(Online\)/features-
and-versions.htm): 3.3

# Making objects unclickable on the web map

By using a rep mode whose name begins with unselectable, you can display
objects on the web map which cannot be selected by clicking on them. One case
where this is valuable is where a search returns both foreground and
background objects, but the background objects are close to the foreground
objects. Making the background objects unclickable makes it easier for users
to select the foreground objects they are interested in so they can view their
details.

The following section gives an example of how to go about this.

  1. In SmartSpace Config, use the MODEL ASSIGNMENT task to assign the rep to a type and give it a representation mode. Double-click \<Add new type rep> and choose the type and rep and enter a name for the custom rep mode that begins with unselectable.

In the example below, the table type has the representation mode unselectable
assigned and selected under Show in 2D.

![unselectable onject setting in assign reps
workspace](../../../images/3_5-unselectable-assignreps.png)

  1. In SmartSpace Config, use the WEB SEARCHES task to add the rep mode to a search. In the Representation modes section of the workspace, double-click <Add mode>, choose the rep mode you created in the MODEL ASSIGNMENT task and click Add. For example, the search below is based on the asset id property of the table type which has been associated with the unselectable rep mode:

![example of search config with an unselectable rep
mode](../../../images/3_5-unselectable-search.png)

  * Making objects unclickable on the web map

![Navigate previous](../../../images/transparent.gif) ![Navigate
next](../../../images/transparent.gif) ![Expand
all](../../../images/transparent.gif) ![](../../../images/transparent.gif)
![Print](../../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

