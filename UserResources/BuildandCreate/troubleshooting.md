

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

# Troubleshooting

## Cell configuration

![Closed](../../images/transparent.gif)When adding or modifying cells in the
Cells workspace, I see the message Errors (double-click to fix).

SmartSpace displays error messages during cell configuration if cells break
the following rules for cell hierarchies:

  * All Geometry Cells are contained by the Site Cell
  * A Location Cell is contained by a single Geometry Cell

  * Location Cells do not overlap

If errors are identified, you can double-click on their descriptions to
correct them. You may see one or more of the following messages:

  * The site cell does not contain all the geometry cells   
Double-click this message and you will be asked if you want to Extend the site
cell to contain all geometry cells? You can either choose Yes and allow
SmartSpace to extend the site cell so that it contains all the geometry cells
or choose No to edit the extent(s) of the geometry cell(s) yourself.

  * The extent of location cell is not contained by the extent of geometry cell   
Double-click this message and you will be asked if you want to Change the
extent of geometry cell to cover location cell? You can either choose Yes and
allow SmartSpace to extend the geometry cell so that it contains the location
cell or choose No to edit the extent of the location cell yourself.

  * The extent of location cell overlaps location cell   
Double-click this message and you will be taken back to a dialog where you can
edit the extent of the first location cell in the message.

## Site visualization

![Closed](../../images/transparent.gif)I want to delete a background
representation, but I can't select it because my site visualization is
complex. (How to remove background reps that are hidden or layered beneath
other objects and representations)

It is possible for the site visualization to become quite complex with
multiple layers of objects and representations. In this situation, trying to
select a specific background representation using your mouse in order to
remove it from the scene may not be straightforward.

To this end, it is important to understand that when you drop a background
representation into the scene, SmartSpace actually creates a hidden system
level object to which the representation gets attached. This means that
although your background representations are not attached to any objects in
your defined data model, there is in fact a hidden “background object” used to
host the rep and place it in the scene.

It is therefore possible, like with all other type-to-rep and object-to-rep
assignments that are discussed in [Adding a representation to a
type](SiteVisualization/assignreps/model-assignment.htm#Adding), to delete
those assignments from the dataset. In deleting an assignment in this way, you
are also completely removing it from the world model (if it has been placed
there).

![screen shot of Model Assignment workspace with <Background objects> selected
from the dropdown and available background images
displayed](../../images/3_5-removing-background-image.png)

To delete a hard-to-reach background rep:

  1. Go to the Model assignment workspace.
  2. Select the “Representations Assigned to Types” dropdown list. Browse up the list to the Object Type called Background objects and select.
  3. This will list all the “hidden” background objects. To delete one, select the row in the table and use the Delete key on your keyboard.

![Closed](../../images/transparent.gif)The default view in the map is zoomed
out too far.

If you find that the default zoom on the maps in SmartSpace Config is further
out than expected, this is likely to be because of a 2D rep you have scaled.
When you are scaling a 2D rep, you must make sure you scale the z axis size to
a similar scale to the x and y axes, otherwise the default zoom in the
SmartSpace Config maps may be further out than expected. For example, if you
have a rep with (Scale X, Scale Y, Scale Z) set to (0.05, 0.05, 1.0), you will
find that the map default zoom gives a lot of space around the rep. This is
automatically done correctly if you scale the image using reference points
(described in [Resizing a representation based on the distance between two
points](SiteVisualization/model-import.htm#Resizing)) or if you set the
image's overall size. But if you directly set the scale, it is up to you to
ensure that the relative scales are reasonable.

## Spatial relationship definition

![Closed](../../images/transparent.gif)I don't see a representation for the
object whose spatial properties I'm defining.

If you don’t see a representation for your object, you need to ensure that you
have assigned a <default> representation for your object type. See [Adding a
representation to a type](SiteVisualization/assignreps/model-
assignment.htm#Adding)

## Users and roles

![Closed](../../images/transparent.gif)The Send notification emails and
Display notifications on maps check boxes are not accessible when you add a
user, or another role, to a role.

This is the expected behavior.

Notifications are generated when you use the Notify action in the Business
rules engine.

Notify accepts several different inputs:

  * Named user
  * Email address
  * Group name

For the first two, notify generates a web map popup or an email notification
respectively. It’s obvious what is being requested at the rules engine level
because of the type of input.

Groups, however, could contain both users and email addresses, so you have to
tell the system if you want one or both (maps notifications and emails)
explicitly. Otherwise you run the risk of sending alert emails to everyone in
an active directory group when all you wanted was popups on the web map.

## Web maps

![Closed](../../images/transparent.gif)I don’t see any objects appearing in
the web map.

  * Check that you have a representation mode assigned
  * Check that you have added a representation mode to the search
  * Check that objects have a location
  * Check that objects are within a location cell.

![Closed](../../images/transparent.gif)My reps with text labels are rotated
differently to the rotation of the objects they represent.

Some care should be taken when adding labels to SVGs due to how SmartSpace
handles their display on the web map.

When SVGs with labels are used as representations, SmartSpace attempts to keep
the text the right way up when it displays objects using this rep on the web
map. This may mean that the rep is rotated differently to the associated
object. For example when an object with an SVG with a label is rotated by 180
degrees, the rep gets rotated by 360 degrees to prevent label text displaying
upside down. This flipping of the rep's orientation may cause unexpected
results with asymmetric reps.

If reps of this type are used as background maps, this behavior may be
especially confusing for users as part of their frame of reference may
suddenly rotate. Because of this, it is recommended not to add text labels in
SVGs of background maps. Instead, if labels are required, create them as
separate background objects relative to the background map.

See [Adding a label to the representation of an
object](../Visibility/Webmaps/labels-for-representations-web-maps.htm) for
information on adding labels to SVGs.

  * Troubleshooting
    * Cell configuration
    * Site visualization
    * Spatial relationship definition
    * Users and roles
    * Web maps

![Navigate previous](../../images/transparent.gif) ![Navigate
next](../../images/transparent.gif) ![Expand
all](../../images/transparent.gif) ![](../../images/transparent.gif)
![Print](../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

