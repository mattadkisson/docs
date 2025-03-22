

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

# Tag association

Object to tag assignment allows you to configure ranges of tags and associate
them with types.

You can also define one or more positions on a type with which a tag can be
associated.

Tag positions are also used in [Automated tag
association](../../../ComponentandFeatureOverview/TopLevelFeatures/Location
rules/automated-tag-association.htm) if you have licensed this feature.

With the licensing of the Visibility component, you can [view the status of
individual tags](../../Visibility/OpsWebInterface/tag-status-operations-web-
interface.htm) and monitor [Automated tag
association](../../LocationRules/ConfigLocRules/automated-tag-association-
configuration.htm#h3_7) via the Operations web interface, and also [configure
web forms that allow association and disassociation of
tags](../../Visibility/Webforms/tag-association-disassociation-web-
forms.htm#TagAssoc) from within the browser.

# The Tag association workspace

The Tag association workspace is a configuration interface for creating ranges
of number for tags, associating ranges of tags to types, defining tag
positions on types, and manually assigning tags to individual objects.

Click on TAG ASSOCIATION to display the workspace.

![Screenshot of SmartSpace Config with Tag Association
workspace](../../../images/3_5-tag-association-workspace.png)

The workspace is described in the following sections:

![Closed](../../../images/transparent.gif)Associate tags with objects

In the Associate tags with objects area, you can manually associate a tag with
an object, and a position on that object, by double-clicking<Associate tag
with object>. See Associating tags with objects.

Battery status is filled in by the underlying RTLS.

Tag type is a drop-down menu selection that you can make when you associate
the tag to the object, or later (using the slow double-click). Tag types are
not to be confused with (object) Types, which are referred to in the panels
below.

![Closed](../../../images/transparent.gif)Define tag ranges

In the Define tag ranges area, you can define and name a range of tags by
double-clicking<Create new tag range>. See Defining Tag Ranges.

![Closed](../../../images/transparent.gif)Assign tag ranges to types

In the Assign tag ranges to types area, you can assign a named tag range to a
type by double-clicking<Assign tag range to type>. See Assigning Tag Ranges to
Types.

![Closed](../../../images/transparent.gif)Assign tag positions to types

In the Assign tag positions to types area, you can create a named tag position
for a type, defined as an offset from the type's origin, by double-clicking
<Create new tag position>. See Assigning Tag Positions to Types.

# Tag ranges, types and positions

## Defining Tag Ranges

To define a range of tag IDs, in the Tag association workspace:

  1. Double-click <Create new tag range>.
  2. Input a name for the range, and the start and end numbers for the range.
  3. Click Save.

You can remove a tag range by selecting it and pressing Delete.

You cannot delete a tag range which is associated with a type.

## Assigning Tag Ranges to Types

To associate a tag range with a type, in the Tag association workspace:

  1. Double-click <Assign tag range to type>.
  2. Select a type and the name of a range and click Save.

You can remove the association between a tag range and a type by selecting it
and pressing Delete.

## Assigning Tag Positions to Types

To define a position for a tag relative to a type's origin, in the Tag
association workspace:

  1. Double-click <Create new tag position>.
  2. Input a name for the tag's position, select a type, and input the x, y and z coordinates for the tag relative to the type's origin.
  3. Click Save.

You can remove a tag position by selecting it and pressing Delete.

# Associating tags with objects

To associate a tag with an object, in the Tag association workspace:

  1. Double-click <Associate tag with object>.
  2. Input a valid tag ID, and select the owner type, the owner, and the tag's position.

If no position has been defined for the owner type, Origin is displayed and
the tag is deemed to be at the object's origin.

Tag type is a drop-down menu selection that you can make when you associate
the tag to the object, or later (using the slow double-click).

  3. Click Save.

You can remove the association between objects and their tags by selecting one
or more rows in the Associate tags with objects area and pressing Delete.

To change the tag associated with an object, create a new association, as
described above, inputting the new tag ID, and save it. This replaces the
existing association.

You can reset a tag's battery status, after the battery has been replaced, by
selecting the and clicking Tag battery replaced. You are asked to confirm the
operation.

  * Tag association
  * The Tag association workspace
  * Tag ranges, types and positions
    * Defining Tag Ranges
    * Assigning Tag Ranges to Types
    * Assigning Tag Positions to Types
  * Associating tags with objects

![Navigate previous](../../../images/transparent.gif) ![Navigate
next](../../../images/transparent.gif) ![Expand
all](../../../images/transparent.gif) ![](../../../images/transparent.gif)
![Print](../../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

