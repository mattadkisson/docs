

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
PDF](../../../../SmartSpaceDownloads/B7GZWZS4WX9F/AngleIDConnect.pdf "link to
PDF version of this content")

[Software
Version](../../../ComponentandFeatureOverview/FrontMatters\(Online\)/features-
and-versions.htm): 3.2

# Overview of AngleID connect

The AngleID connect service package is a collection of services responsible
for connecting AngleID readers with the UDM. Currently the package consists of
one service, the entry/exit connector, which keeps the UDM updated with
objects which satisfy AngleID recipes.

# Setting up AngleID connect

The package is installed via service installer. For the service to run, you
must define the address and port to listen for readers on. This, plus other
configurable options, are defined using the following configuration
parameters:

Parameter name |  Description  
---|---  
entry_exit_connector_address |  The IP address to listen for readers on. This should be the address of the machine running the service.  
entry_exit_connector_port |  The port to listen for readers on.   
entry_exit_connector_sync_interval |  How often the service should check the validity of the UDM’s contents, in seconds. This sync allows existing values in the UDM to update to changes in tag ownership and undoes incorrect external changes to the UDM.  
  
These are global parameters and should be defined using the
ubisense_configuration_client tool.

# What AngleID connect does

When the service is started for the first time it will add a new type to the
UDM; the Ubisense AngleID Recipe. Recipe objects of this type are
automatically created for you whenever a reader sends recipe data to the
service, using the Id1/Id2 naming format from AngleID Configuration (where
recipes should be defined with unique IDs). Do not rename these recipe
objects. The recipe objects have a live flag which tells you whether a reader
for this recipe is currently connected.

The service also adds a new “object satisfies recipe” property to the UDM.
This property is used to store which objects currently satisfy which AngleID
Recipe; when a tag owned by an object satisfies a recipe, that object/recipe
pair is added to this property and vice versa. It is maintained by the service
and any (incorrect) changes made by users will be reverted. If you remove or
rename a recipe in AngleID Configuration and want to remove the corresponding
AngleID Recipe object from the UDM, you will need to restart the service then
delete the object.

  * Overview of AngleID connect
  * Setting up AngleID connect
  * What AngleID connect does

![Navigate previous](../../../images/transparent.gif) ![Navigate
next](../../../images/transparent.gif) ![Expand
all](../../../images/transparent.gif) ![](../../../images/transparent.gif)
![Print](../../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

