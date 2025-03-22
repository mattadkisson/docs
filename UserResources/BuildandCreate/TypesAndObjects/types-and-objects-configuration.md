

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

The Types and objects workspace provides a drag-and-drop interface for working
with types, objects, and their properties when you define your data model.
Objects are based on parent types and can have a range of properties depending
on the features you have licensed. You can also create types using other
Ubisense-supplied types whose availability depends on the features you have
licensed. (For a list of these types and where they are used in SmartSpace,
see [Ubisense Types](../../Core/Typeandobject/types-and-objects-
introduction.htm).)

Simple properties allow you to specify one-to-one and many-to-one relations
between objects. Complex properties allow the inclusion of joins between types
so that one-to-many or even many-to-many relations can be defined. You can
define complex properties based on your data model; other complex properties
are provided with specific features of SmartSpace or can be added by
SmartSpace when you perform certain configuration activities, such as defining
spatial relations.

In addition to building your data model, you can also use the workspace to add
specific instances of data types to populate your data model, and monitor
objects and their property values in real-time when property values are
changed either by external business systems you have integrated with
SmartSpace or by the SmartSpace Business rules engine.

# The Types and objects workspace

The Types and objects workspace in SmartSpace Config provides tools to create,
edit and delete both types and properties.

Click on TYPES / OBJECTS to display the workspace.

![screen shot of the Types and objects workspace](../../../images/3_5-types-
and-objects-workspace.png)

The workspace is divided into three main areas whose content depends on which
features you have licensed and which types and objects you are working with.
The workspace is described in the following sections:

![Closed](../../../images/transparent.gif)Types and properties

Types are listed, with their unique name property where applicable, in a
hierarchy with the Ubisense Object at its head and other types located in the
structure according to the types they are based on. Click on the arrows to
expand or collapse parts of the structure. To display a list of all instances
of a type, drag the name of the type from the hierarchy into the object
browser. The total number of objects of this types is given in the title bar
of the dialog.

The hierarchy includes:

  * Ubisense-generated types (which types are available depends on which features are licensed; see [Ubisense Types](../../Core/Typeandobject/types-and-objects-introduction.htm))
  * Custom types as defined by users for applications

A type that is based on more than one type will appear below all of its
parents.

Double-clicking <Create new type> opens a dialog where a new type can be
defined.

When a type is selected, a second table displays showing all the properties of
that type. Properties can be:

  * Properties inherited from parent types, either Ubisense-supplied or user-defined
  * Space properties
  * With the licensing of Business object properties, any of the basic types string, bool, time, int and double as well as custom types used as properties

Double-clicking <Create new property> opens a dialog where a new property can
be defined for the type.

For each property listed, its type, parent (if the property is inherited) and
its attributes are shown. Attributes can be:

  * blank, for site-level properties
  * assertion for assertions
  * cellular for cellular properties
  * unique name for the type's unique name property

![Closed](../../../images/transparent.gif)Learn more

When adding properties to types, you specify which service manages the
property and hence where its values are stored. There are three choices:

  * the site-level object property data service (the default)
  * the site-level assertion store
  * with the licensing of the Real-time rules engine, the cell-level object property data service

In general, you can accept the default. For further information on SmartSpace
data services and their use in real-time systems, see [Real-time control
components and data flow](../../../ITResources/ITDocs/real-time-rules/real-
time-rules-configuration.htm#_Toc18686577).

![Closed](../../../images/transparent.gif)Complex properties

Complex properties are listed along with their type and attributes. Depending
on the features you have licensed there may be Ubisense-supplied complex
properties listed here, along with any you have created yourself if you have
licensed the Business object properties feature.

A filter allows you to limit items listed to those containing a match, or
partial match, with the text you input (![cross inside a
circle](../../../images/cross-in-circle.png) clears the filter).

Double-clicking <Create new complex property> opens the complex properties
creation dialog where you can define a new complex property.

![Closed](../../../images/transparent.gif)Object browser

In addition to controls for creating and editing type and property
definitions, the workspace includes an object browser. The object browser has
two purposes:

  * It provides a drag-and-drop interface for creating new instances of object types and/or properties of types.
  * It provides a live window into the object model allowing users to inspect objects and their property values in real-time when property values change as a result of integration (with external business systems) or as properties are acted on by the SmartSpace Business rules engine.

Dragging a type into the object browser (or pressing Enter or double-clicking
with the mouse) will open that type in a dedicated window that floats in the
object browser space. The window lists all instances of the type as well as an
option to create new objects of that type (the total number of instances of
the type is given in the title bar of the window). A filter allows you to
limit items listed to those containing a match, or partial match, with the
text you input (![cross inside a circle](../../../images/cross-in-circle.png)
clears the filter).

When using the <Create new object> option, it is possible to create multiple
object instances at once by listing a set of object names, e.g. Product1
Product2 Product3, separated by a carriage return to signify that these are
different object names. Depending on the complexity of the object type, you
will also be prompted to assign property values. This may be important if the
object will be acted on by the SmartSpace Business rules engine.

It is possible to delete object instances by selecting the required object
with the mouse and pressing Delete. As long as that object is not explicitly
linked to other elements of the system, it will be possible to delete it.
Otherwise, you will be prompted to manually break those links before you can
delete the object.

The same drag, enter or double-click action can be used to create an
inspection window for any property of a type. New instances of that property
can be created in a similar way to object instances by selecting <Create new
property row>. The window that pops up will prompt you to select which objects
should be assigned the property value you’re about to enter. A filter allows
you to limit items listed to those containing a match, or partial match, with
the text you input (![cross inside a circle](../../../images/cross-in-
circle.png) clears the filter).

![screen shot showing selection of multiple items for property
setting](../../../images/3_5-select-types-for-property-update.png)

The dialog gives you the option to assign/initialize a single property value
or assign the value universally to a group of objects. If those objects
already have a value you will need to explicitly overwrite their current
values by selecting the Overwrite existing values check box.

# Working with types and objects

## Creating a new type

To create a new type, click on TYPES / OBJECTS to open the Types and objects
workspace and double-click <Create new type>.

This will display the type creation dialog. At this point you can:

  1. Give your new type a name.
  2. Decide whether you want the type to inherit from any existing types.
  3. Give your new type a property with which instances of the object can be uniquely identified, .i.e. a “name” or “UID” property.

Click Save when you have entered the required information.

## Adding simple properties to a type

If you want to add additional properties to your new type, select the type in
the top half of the Types and properties list and double-click the <Create new
property>option in the lower half.

This will pop up the property creation dialog. From here you must:

  1. Give the new property a name.
  2. Select which service manages the property. In general, you can accept the default, the site-level object property data service. See [Ubisense Real-Time Rules: Concepts and Configuration](../../../ITResources/ITDocs/real-time-rules/real-time-rules-configuration.htm) for further information.
  3. Choose a type for the property from the whose value has type dropdown.

This can be:

     * a space attribute. See Adding a space property to a type.
     * a data storage type of string, bool, time, int or double.
     * a custom type.
  4. Click Save.

# Adding a space property to a type

Spatial relations in SmartSpace require objects to have one or more space
properties defined which can be referenced in a spatial relation definition.

To add a space property to a type, use the Types and objects workspace to add
a new property to the type, much like adding a property of any other basic or
custom type:

  1. Select the required type.
  2. Double-click <Create new property>.

![screen shot showing create new property dialog](../../../images/3_5-add-new-
space-property.png)

  3. Give the property a name – the term <prefix> extent is a good generic name for this type of property.
  4. At which is managed by you can select the service which manages this property. Accept the default option of the site-level object property data service. In general, you should accept the default, but see [Ubisense Real-Time Rules: Concepts and Configuration](../../../ITResources/ITDocs/real-time-rules/real-time-rules-configuration.htm) for further information. 
  5. Ensure you have selected the Space type from the type dropdown.
  6. Click Save to save the new property.

If you now select the type in the Types and objects workspace, an additional
row of details is displayed with the name of the space property followed by
Space.

![screen shot showing new space property added to the list of
properties](../../../images/3_5-new-space-property.png)

# Creating new object instances

To create new instances of an object class, in the Types and objects
workspace:

  1. Drag the object type from the TYPE list into the object browser.
  2. Choose <Create new object>.
  3. Give the new object a unique name.
  4. Click Save.

![screen shot showing how to add a new object
instance](../../../images/3_5-object-instances.png)

**Note:** It is possible to create multiple new objects at once using line-
separated names for each new object.

![example of creating several new objects
simultaneously](../../../images/3_5-object-instances-2.png)

You can view and edit the properties of any object by dragging it into the
object browser workspace:

![screen shot showing how to display a list of object instances, and the
properties of one of them](../../../images/3_5-object-instances-3.png)

  * Types and objects
  * The Types and objects workspace
  * Working with types and objects
    * Creating a new type
    * Adding simple properties to a type
  * Adding a space property to a type
  * Creating new object instances

![Navigate previous](../../../images/transparent.gif) ![Navigate
next](../../../images/transparent.gif) ![Expand
all](../../../images/transparent.gif) ![](../../../images/transparent.gif)
![Print](../../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

