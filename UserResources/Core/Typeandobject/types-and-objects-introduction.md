

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
and-versions.htm): 3.2

# Types and objects

## Introduction to Types and Objects

A critical first step in creating a new SmartSpace application is to design
and implement your data model and object model. With SmartSpace you can create
new domain-specific object types to use in building taxonomies, modeling
entities and referring to real-world objects.

At the most basic level, all new types are Ubisense Objects which can be
assigned two simple properties. These properties (also sometimes referred to
as attributes) are a unique identifier (a name) and, where applicable, one or
more space properties. Space properties and their purpose are discussed in
[Spatial monitoring](../Spatialrelations/spatial-relations-introduction.htm).

Ubisense type creation follows standard object-oriented best practice,
including single and multiple inheritance. This means that new types can
inherit from several different types to include all the properties of the
parents, and can satisfy ‘is a’ type checking wherever types of the parent
class are referred to.

As well as using Ubisense Objects, you can also create types using other
Ubisense-supplied types. These are described below. In your data model, you
can only use Ubisense types associated with features you have licensed.

## Ubisense Types

Below are the Ubisense types and the components or features to which they
belong:

Ubisense type | Description  
---|---  
Core |   
Ubisense Object |  Ubisense Object is the most basic type and in the absence of any more complex types is the basis for all new data model types. (See Creating a custom type and adding a space property for an example of configuring a custom data type.) This type allows you to create custom data types which have a unique name and optionally include one or many space properties allowing the type to be included in different SmartSpace spatial relations.  
Location rules  
Assertion Area | Used in Robust location. Assertion area has two main functions: to group together assertion points with the same configuration parameters and to control a set of objects which can be located at one of its assertion points. See [Robust assertion points](../../LocationRules/ConfigLocRules/robust-assertion-point-configuration.htm) for how to use this type.  
Assertion Point | Used in Robust location. Assertion points report when an object is at a given place, using strong evidence, including distance from the point and the speed at which the object is moving. See [Robust assertion points](../../LocationRules/ConfigLocRules/robust-assertion-point-configuration.htm) for how to use this type.  
Building |  Used in Room snapping to group rooms and doorways. See [Configuring Room snapping](../../LocationRules/RoomSnapping/room-snapping-configuration.htm).  
Doorway |  Used in Room snapping to define a space through which tags can pass between rooms. See [Configuring Room snapping](../../LocationRules/RoomSnapping/room-snapping-configuration.htm).  
Parking Area | Used in Parking bay snapping. Parking Area is derived from Assertion Area and inherits all spatial properties, parameters and assertions from Assertion Area; and these inherited configurations have the same function. See [Parking](../../LocationRules/ConfigLocRules/parking-configuration.htm) for how to use this type.  
Parking Bay | Used in Parking bay snapping. Parking Bay is derived from Assertion Point and inherits all spatial properties, parameters and assertions from Assertion Point; and these inherited configurations have the same function. See [Parking](../../LocationRules/ConfigLocRules/parking-configuration.htm) for how to use this type.  
Path Group | Used in Paths and queues. A Path Group is a logical grouping of paths used to determine which objects are being controlled by the path tracking location rules. See [Creating the data model for Paths and queues](../../LocationRules/PathsAndQueues/paths-queues-configuration.htm#PQModel) for further information.  
Path Point | Used in Paths and queues. A path point is an object intended to be located exactly on a path. Creating objects based on the Path point type gives objects features to get them to snap to paths or be generated at regular intervals. See [Creating the data model for Paths and queues](../../LocationRules/PathsAndQueues/paths-queues-configuration.htm#PQModel) for further information.  
Room |  Used in Room snapping to define areas inside of which tags are snapped to locations. See [Configuring Room snapping](../../LocationRules/RoomSnapping/room-snapping-configuration.htm).  
Tag Association Point | Used in Automated tag association. During automated tag association a sequence of objects created from an external source are assigned to tags detected at a Tag Association Point. See [Automated tag association](../../LocationRules/ConfigLocRules/automated-tag-association-configuration.htm) for how to use this type.  
RFID integration  
AngleID Recipe |  Automatically created by AngleID connect. A recipe in AngleID contains instructions to tell tag readers what to do with streams of angle readings generated when the readers detect Ubisense tags. See [What AngleID connect does](../../RFIDIntegration/AngleIDConnect/angleid-connect-configuration.htm#h1_3) for further information.  
LLRP Reader | Used in the LLRP interface to create type for LLRP readers you want to connect to. See [LLRP Tag Reader Configuration](../../RFIDIntegration/LLRPinterface/LLRP-tag-reader-configuration.htm) for further information.  
RTLS integration  
Action |  Used by External data connector. Abstract base type for all actions. See [Overview of the External data connector](../../RTLSIntegration/ExternalDataConnector/external-data-connector-configuration.htm).  
Association Action |  Used by External data connector. Associates unassociated parsed objects with free tags from a given range. See [Overview of the External data connector](../../RTLSIntegration/ExternalDataConnector/external-data-connector-configuration.htm).  
Cartesian Location Action |  Used by External data connector. Injects object/tag locations from Cartesian (x/y/z) data. See [Overview of the External data connector](../../RTLSIntegration/ExternalDataConnector/external-data-connector-configuration.htm).  
Fixed Location Action |  Used by External data connector. Injects object/tag locations at a fixed position. See [Overview of the External data connector](../../RTLSIntegration/ExternalDataConnector/external-data-connector-configuration.htm).  
GPS Location Action |  Used by External data connector. Injects object/tag locations from GPS data. See [Overview of the External data connector](../../RTLSIntegration/ExternalDataConnector/external-data-connector-configuration.htm).  
GPS Reference Point | Used by External data connector. Used to configure GPS coordinate conversion. See [Overview of the External data connector](../../RTLSIntegration/ExternalDataConnector/external-data-connector-configuration.htm).  
HTTP Listener Stream |  Used by External data connector. Listens for POST/PUT HTTP(S) requests. See [Overview of the External data connector](../../RTLSIntegration/ExternalDataConnector/external-data-connector-configuration.htm).  
HTTP Request Stream |  Used by External data connector. Retrieves data via periodic HTTP(S) GET requests. See [Overview of the External data connector](../../RTLSIntegration/ExternalDataConnector/external-data-connector-configuration.htm).  
Location Action |  Used by External data connector. Abstract base class for actions on object/tag location data. See [Overview of the External data connector](../../RTLSIntegration/ExternalDataConnector/external-data-connector-configuration.htm).  
Location Zone Action |  Used by External data connector. Used to define inclusion/exclusion extents for location actions.  See [Overview of the External data connector](../../RTLSIntegration/ExternalDataConnector/external-data-connector-configuration.htm).  
Object Action |  Used by External data connector. Abstract base class for actions on objectdata. See [Overview of the External data connector](../../RTLSIntegration/ExternalDataConnector/external-data-connector-configuration.htm).  
Object Creation Action | Used by External data connector. Creates missing SmartSpace objects to match objects from parsed data. It is recommended that you only have one Object Creation Action per External system. See [Overview of the External data connector](../../RTLSIntegration/ExternalDataConnector/external-data-connector-configuration.htm).  
Object Tag Action |  Used by External data connector. Abstract base class for actions on object/tag data. See [Overview of the External data connector](../../RTLSIntegration/ExternalDataConnector/external-data-connector-configuration.htm).  
Property Action |  Used by External data connector. Sets UDM property values for objects based on parsed data. See [Overview of the External data connector](../../RTLSIntegration/ExternalDataConnector/external-data-connector-configuration.htm).  
SQL Stream |  Used by External data connector. Connects and queries external SQL systems.  See [Overview of the External data connector](../../RTLSIntegration/ExternalDataConnector/external-data-connector-configuration.htm).  
Stream |  Used by External data connector. Abstract base type for streams. See [Overview of the External data connector](../../RTLSIntegration/ExternalDataConnector/external-data-connector-configuration.htm).  
Tag Battery Action |  Used by External data connector. Asserts tag battery status from parsed data. See [Overview of the External data connector](../../RTLSIntegration/ExternalDataConnector/external-data-connector-configuration.htm).  
Text Connector Stream |  Used by External data connector. Abstract base class for text connector stream. See [Overview of the External data connector](../../RTLSIntegration/ExternalDataConnector/external-data-connector-configuration.htm).  
Text Listener Stream |  Used by External data connector. Abstract base class for text listener streams. See [Overview of the External data connector](../../RTLSIntegration/ExternalDataConnector/external-data-connector-configuration.htm).  
Text Stream |  Used by External data connector. Abstract base class for text based streams. See [Overview of the External data connector](../../RTLSIntegration/ExternalDataConnector/external-data-connector-configuration.htm).  
Websocket Connector Stream |  Used by External data connector. Connects to a server via websockets and listens for data. See [Overview of the External data connector](../../RTLSIntegration/ExternalDataConnector/external-data-connector-configuration.htm).  
Zone | Used by External data connector. Used to define inclusion/exclusion extents for location actions.  See [Overview of the External data connector](../../RTLSIntegration/ExternalDataConnector/external-data-connector-configuration.htm).  
GPS Reference Point | Used by AVL/GPS connect. See [Web Source Injector](../../RTLSIntegration/AVL-GPSConnect/web-source-injector-configuration.htm).  
GPS Zone | Used by AVL/GPS connect. See [Web Source Injector](../../RTLSIntegration/AVL-GPSConnect/web-source-injector-configuration.htm).  
Web Location Source | Used by AVL/GPS connect. See [Web Source Injector](../../RTLSIntegration/AVL-GPSConnect/web-source-injector-configuration.htm).  
Generation 2 integration |   
Generation2 Area |  Used to define areasIn ACS, areas are used to partition the site model. Usually an area will represent some complete, but relatively self-contained region of the site, such as one floor of a building, or one functional area of a large floor. for use with Smart Factory Assembly (ACS). See [Creating areas for use in ACS](../../ACS/area-creation-for-ACS.htm).  
  
## Creating a custom type and adding a space property

Types and objects are created using the SmartSpace Config application. You can
find a description of the workspace for creating types and objects in [Types
and objects](../../BuildandCreate/TypesAndObjects/types-and-objects-
configuration.htm). The instructions below take you through creating a type,
giving it a name, and adding a spatial property.

To create a new type, click on TYPES / OBJECTS to open the Types and objects
workspace and double-click <Create new type>.

This will display the type creation dialog. At this point you must:

  1. Give your new Type a name.
  2. Decide whether you want the type to inherit from any existing types.
  3. Give your new type a property with which instances of the object can be uniquely identified, .i.e. a “name” or “UID” property.
  4. Click Save.

![screen capture showing the <Create new type> option and a dialog where a new
type is created](../../../images/3_5-custom-type.png)

If you want to add a space property to your new type, select the type in the
top half of the Types and properties list and double-click the <Create new
property> option in the lower half.

This will pop up the property creation dialog. From here you must:

  1. Give the new property a name. Because we are creating a property of type Space, it is good practice to use the term “extent” or “space” as part of the name.

  2. At which is managed by you can select the service which manages this property. Accept the default option of the site-level object property data service. In general, you should accept the default, but see [Ubisense Real-Time Rules: Concepts and Configuration](../../../ITResources/ITDocs/real-time-rules/real-time-rules-configuration.htm) for further information.

  3. From the dropdown menu, choose Space as the property's type.

![screen shot showing the <Create new property> option and a dialg where the
proerty is given a name and the Space type is
selected](../../../images/3_5-custom-type-2.png)

  4. Click Save.

  * Types and objects
    * Introduction to Types and Objects
    * Ubisense Types
    * Creating a custom type and adding a space property

![Navigate previous](../../../images/transparent.gif) ![Navigate
next](../../../images/transparent.gif) ![Expand
all](../../../images/transparent.gif) ![](../../../images/transparent.gif)
![Print](../../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

