

Skip To Main Content

[](../../../../Home.htm)

  * placeholder

Filter:

  * All Files

Submit Search

![Navigate previous](../../../../images/transparent.gif) ![Navigate
next](../../../../images/transparent.gif) ![Expand
all](../../../../images/transparent.gif)
![](../../../../images/transparent.gif)
![Print](../../../../images/transparent.gif)

You are here:

[Software
Version](../../../../ComponentandFeatureOverview/FrontMatters\(Online\)/features-
and-versions.htm): 3.2

# Model assignment

When you have a data model with objects types defined, and a selection of
representations you wish to use for those object types, you can begin
assigning reps to types and objects so that they can be visualized in the
different visualization components of SmartSpace. As described in [Object
representations](../../../Core/Siteviz/object-representations-
introduction.htm), Reps are assigned to objects using a key-value mapping
called a Representation Mode, or rep mode for short.

## Representation Modes

Rep Modes provide a simple way of assigning a rep to an object type with a
persistent key name that can be referenced by other parts of your SmartSpace
application.

While rep modes can be completely custom for each application (they are freely
definable) SmartSpace does include some built-in rep modes that should be used
at appropriate times.

### The <default> Rep Mode

Rep modes in SmartSpace are designed to provide a lot of control over how
objects are visualized in the 2D web map, because they offer a way of
communicating useful status information to end-users. In this sense, the
benefits of rep modes are most evident when controlling the way objects are
rendered to the 2D web map.

Conversely, the 3D visualization of SmartSpace is intended to provide an
interface for interacting with objects in the world model, and as such rep
modes are not supported to the same degree as with the web map. Within the 3D
visualization, SmartSpace includes an in-built rep mode called <default> which
is used to attach a single rep to an object type, typically a 3D rep from an
imported Collada file. However, it is also possible to attach a 2D rep to
objects using the <default> rep mode, and as such these objects will appear as
2D when viewed in the 3D site visualization.

### The ‘foreground’ and ‘background’ Rep Modes

As discussed in detail in [ Searches and Web
maps](../../../Visibility/Webmaps/web-maps-introduction.htm), the SmartSpace
Web maps use predefined searches to query the SmartSpace object model for a
collection of objects that satisfy the parameters of a search. This group of
objects must then be rendered to the SmartSpace Web Map using an appropriate
representation mode. SmartSpace includes a built-in representation mode called
foreground for objects that are part of what is called the foreground search.
Similarly SmartSpace includes another built-in rep mode called background for
when a search is being run as a background (or secondary) search alongside the
primary foreground search. While Foreground and Background searches are
covered in more detail in [ Searches and Web
maps](../../../Visibility/Webmaps/web-maps-introduction.htm), at this point it
is just important to note that these rep modes exist and should be used as the
default rep mode keys for objects to be displayed in the web map.

### The ‘unselectable’ Rep Mode

Occasionally, you might require objects to appear on the web map but not be
selectable by clicking. In this situation, you can create a rep mode whose
name begins with unselectable. For example, you might have a search that
displays workbench objects on the map and in order to make other objects
located on the workbench more easy to select you would make the workbench
object unselectable.

### Custom Rep Modes

If you have the Visibility component licensed you can create custom rep modes
that allow you to display decoration reps alongside objects. See [Decorations
and Representation Modes in the web map](../../../Core/Siteviz/object-
representations-introduction.htm#DecorationsAndRepModes) for an example of
this. To take full advantage of these custom rep modes (and add or remove them
dynamically) the SmartSpaceBusiness rules engine must be licensed as well. To
actually write the logic which controls how and when these custom rep modes
are assigned requires a license for the Rules engine developer.

# The Model assignment workspace

Representations can be assigned generically to all objects of a specific type
(1-many mapping), or directly to objects themselves (1-1 mapping). The Model
assignment workspace provides two tabulated views of these mappings: one for
types and one for objects.

Click on MODEL ASSIGNMENT to display the workspace.

![screen shot of the Model Assignment workspace with models assigned to types
in the top part of the screen and to specific objects in the lower part of the
screen](../../../../images/3_5-assign-representations-workspace.png)

The workspace is described in the following sections:

### List of type-assigned reps

A list of types and their allotted representations is displayed along with
their representation modes.

  * Check boxes are available to allow you to indicate if this type and representation paring should be used in 2D (for example in Web maps) or in 3D (in the 3D site visualization).
  * Double-clicking <Add new type rep> allows you to assign a rep to a type

### Object selector

The object selector allows you to refine the list of objects and their
representations shown in the lower half of the screen.

  * Choose an object type from the list to narrow the display and use <Filter by name> to find specific objects within the result set (using a partial string match)
  * Choose <Background objects> to display background representations to which SmartSpace has attached a hidden system level object. (This enables you to work with background reps even when the environment becomes complex and accessing them directly from the environment display becomes difficult. See [Site visualization](../../troubleshooting.htm#_bm).)

### List of object-assigned reps

A list of objects and their allotted representations is displayed along with
their representation modes.

  * Check boxes are available to allow you to indicate if this object and representation paring should be used in 2D (for example in Web maps) or in 3D (in the 3D site visualization)
  * Double-clicking <Add new object rep> allows you to assign a rep to a type

### Copying models to Ubisense Generation 2.X products

If your installation includes a Generation 2 product such as Smart Factory
Assembly (ACS), a button is provided to enable you to copy models to the
Generation 2 program. See [Copying models for use in ACS](../../../ACS/copy-
models-for-ACS.htm) for information on copying models, and the Smart Factory
Assembly (ACS) manual or online Help for examples of their use.

# Adding a representation to a type

To add a representation for a type:

  1. Double-click <Add new type rep>.
  2. Choose the object type.
  3. Choose the representation from the list of imported reps.
  4. Add a name for the representation mode. Leave this as <default> if:
    1. You are working with 3D reps
    2. You don’t intend to change your object representation programmatically (using the Business rules engine)
  5. Click Save.
  6. Use the check boxes displayed beside the new details for your object and representation pair to control how and where the representation assignment you’ve just created is used. There are two options:

Show in 2D: tells SmartSpace you want this representation/rep mode pair to be
visible for this class of object when they are displayed in the web map

Show in 3D: tells SmartSpace you want this representation/rep mode pair to be
visible for this class of object when they are displayed in the 3D site
visualization

Only the ‘<default>’ rep mode gets rendered to the 3D site visualization, so
any other rep modes here will be ignored by the system.

# Adding a representation to an object

To assign a representation to a specific object:

    1. Double-click <Add new object rep>.
    2. Choose the object.
    3. Choose the representation from the list of imported reps.
    4. Add a name for the representation mode. Leave this as <default> if:
      1. You are working with 3D reps
      2. You don’t intend to change your object representation programmatically (using the Business rules engine)
    5. Click Save.
    6. Use the check boxes displayed beside the new details for your object and representation pair to control how and where the representation assignment you’ve just created is used. There are two options:  
Show in 2D: tells SmartSpace you want this representation/rep mode pair to be
visible for this class of object when they are displayed in the web map  
Show in 3D: tells SmartSpace you want this representation/rep mode pair to be
visible for this class of object when they are displayed in the 3D site
visualization

Only the ‘<default>’ rep mode gets rendered to the 3D site visualization, so
any other rep modes here will be ignored by the system.

  * Model assignment
    * Representation Modes
      * The <default> Rep Mode
      * The ‘foreground’ and ‘background’ Rep Modes
      * The ‘unselectable’ Rep Mode
      * Custom Rep Modes
  * The Model assignment workspace
      * List of type-assigned reps
      * Object selector
      * List of object-assigned reps
      * Copying models to Ubisense Generation 2.X products
  * Adding a representation to a type
  * Adding a representation to an object

![Navigate previous](../../../../images/transparent.gif) ![Navigate
next](../../../../images/transparent.gif) ![Expand
all](../../../../images/transparent.gif)
![](../../../../images/transparent.gif)
![Print](../../../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

