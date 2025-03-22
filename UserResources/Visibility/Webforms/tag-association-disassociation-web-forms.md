

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

# Creating forms for manual tag association and disassociation

Tags can be associated with objects in a number of ways. The following
describes how to configure web forms for manual association and disassociation
of tags. You can also manually associate tags with objects using the [Tag
association workspace](../../BuildandCreate/ManTagAssociation/tag-association-
configuration.htm) in SmartSpace Config and, with the licensing of the
Location rules component, [Automated tag
association](../../LocationRules/ConfigLocRules/automated-tag-association-
configuration.htm) becomes available to you.

Before you can associate and disassociate tags in SmartSpace Web, you need to
define a search that includes the relevant tags and objects, and then create
forms for association and disassociation.

## Creating a Search for Objects and Tags

In SmartSpace Config, open the WEB SEARCHES tab and define a search. The
example below shows a search, vehicles and tags, based on the Product type and
including the Associated Tag property.

![screen shot showing a search defined for a product including the Associated
Tag property](../../../images/ExampleSearchManTagAssoc.png)

Remember to use the USERS / ROLES tab in SmartSpace Config, or the Roles
screen in SmartSpace Web, to add the search to roles that are to use it.

## Creating Forms for Association and Disassociation

In SmartSpace Config, open the WEB FORMS tab and create forms for association
and disassociation. The example below shows the Tag Association form which
uses the vehicles and tags search and has been configured to allow users to
Modify existing objects and for Compulsory tag association. The Tag
Disassociation form is set up similarly, but with Disassociation as the tag
association setting. (Additional association and disassociation settings shown
in the lower part of the screen are discussed in [Configuration options for
Web forms](../../BuildandCreate/WebForms/web-forms-
configuration.htm#Configur).)

![Example Form Settings for Manual Tag
Association](../../../images/ExampleFormManTagAssoc.png)

Remember to use the Available to Roles tab in the Web forms workspace, or the
Roles screen in SmartSpace Web, to add the forms to roles that are to use
them.

## Define a Tag Position

If the tag will be offset from the origin of the object, define a tag
position. In SmartSpace Config choose the TAG ASSOCIATION tab and in Tag
Positions for Types define a new tag position.

![screen shot of definition of tag positions by
type](../../../images/ExampleTagManTagAssoc.png)

## Using Web forms to Associate and Disassociate Tags

On the Configuration screen in SmartSpace Web you should now see two tabs for
the two forms you created. The Tag Association screen is shown below.

![screen capture of Tag Association form in SmartSpace
web](../../../images/ExampleConfigManTagAssoc.png)

Use the form in the lower part of the screen to input the Tag Id (a compulsory
item, indicated by an asterisk), and the tag's position and type if these have
been made available in the form.

If you display the Tag Disassociation screen, you should see the following.

![screen capture of Tag Disassociation form in SmartSpace
web](../../../images/ExampleConfigManTagAssoc2.png)

Note that you cannot change any details in the Disassociate Tag form and you
are offered a single Disassociate button.

  * Creating forms for manual tag association and disassociation
    * Creating a Search for Objects and Tags
    * Creating Forms for Association and Disassociation
    * Define a Tag Position
    * Using Web forms to Associate and Disassociate Tags

![Navigate previous](../../../images/transparent.gif) ![Navigate
next](../../../images/transparent.gif) ![Expand
all](../../../images/transparent.gif) ![](../../../images/transparent.gif)
![Print](../../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

