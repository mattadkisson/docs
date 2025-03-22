

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
and-versions.htm): 3.4

# Business rules

Use the Business rules workspace to create and edit business rules. For a
detailed explanation of using this feature, see [Rules engine
developer](../BusinessRulesDeveloper/rules-engine-developer-
config.htm#_Toc529277119)

See [Requirements for Rules engine developer](../BusinessRulesDeveloper/rules-
engine-developer-config.htm#_Toc529277121) for the software versions and
licenses required for Rules engine developer.

Click on BUSINESS RULES to display the workspace.

![screenshot of business rules editor](../../images/3_5-business-rules-
workspace.png)

Features of the Business rules workspace are described in the following
sections.

![Closed](../../images/transparent.gif)List of definitions

  * The leftmost part of the workspace list definitions for you to work with. Double-click <Create new definition> to add a new definition—see [[Adding a definition](../BusinessRulesDeveloper/rules-engine-developer-config.htm#_Adding_a_definition)](../BusinessRulesDeveloper/rules-engine-developer-config.htm#_Adding_a_definition). Open a definition for editing by double-clicking it or dragging it into the editor.
  * An icon to the left of a definition’s name identifies the kind of definition it is, if it is incomplete (a work in progress), or if it contains errors:

![screenshot of icons in definitions list](../../images/The Business rules
workspace_1.png)

  * Unsaved definitions are marked with an asterisk (*****).
  * Filters allow you to limit the definitions listed to those that match one or more of: name; label; and which properties are used or set. Enter text at <Type here: filter by NAME> (case sensitive) or drag labels or properties into their respective fields. Click ![](../../images/cross-in-circle_17x17.png) to remove a filter.
  * You can rename a definition by slowly double-clicking its name and entering the new one.
  * You can remove selected definitions from the list by pressing Delete and confirming the deletion. Removing an active definition from the list does not immediately delete it from SmartSpace. To delete an active definition from your system, you must publish a new version of your definitions. See [[Publishing definitions](../BusinessRulesDeveloper/rules-engine-developer-config.htm#_Publishing_definitions)](../BusinessRulesDeveloper/rules-engine-developer-config.htm#_Publishing_definitions).

![Closed](../../images/transparent.gif)Definition editor

The editor provides a multi-tabbed workspace in which you can edit
definitions. Choose a definition, by double-clicking it or dragging it into
the workspace, and it is opened in its own tab in the editor.

![screenshot of the features of the definitions
editor](../../images/3_5-business-rules-workspace-3.png)

Each definition is based on a template which provides a framework that is
shown in the editor and into which you drag elements such as keywords and
properties. See [[Building definitions](../BusinessRulesDeveloper/rules-
engine-developer-
config.htm#_Creating_definitions)](../BusinessRulesDeveloper/rules-engine-
developer-config.htm#_Creating_definitions) for an example of the process.

  * When you drag an element, valid slots are highlighted in the editor and you can only drop the element into an valid slot.
  * Color-coded prompts indicate what can be dragged or entered in a slot.
  * Error messages, described below, also provide help in creating correct definitions.
  * Some slots require you to enter a value; other slots provide you with a dropdown of possible entries.
  * You can drag elements out of a slot and into the area around a definition (the scratchpad). You can also open extra tabs to provide additional scratchpads.
  * You can copy between tabs by using CTRL+C and CTRL+V, and elements can be duplicated by holding down CTRL and dragging them.
  * Drag unwanted elements into the trash can to delete them.
  * Comments can be added to annotate a definition or keywords within it—see [[Adding comments to your definitions](../BusinessRulesDeveloper/rules-engine-developer-config.htm#_Adding_comments_to)](../BusinessRulesDeveloper/rules-engine-developer-config.htm#_Adding_comments_to).
  * Apply label(s) to definitions to categorize them—see [[Organizing definitions](../BusinessRulesDeveloper/rules-engine-developer-config.htm#_Mananging_sets_of)](../BusinessRulesDeveloper/rules-engine-developer-config.htm#_Mananging_sets_of).

When you have finished, you can close individual tabs by clicking the close
button beside their titles or use the Close all tabs button to clear the
editor. When you close a tab, anything in the scratchpad is lost. Changes to a
definition that you wish to keep must be saved before you close SmartSpace
Config (you will be warned if you have unsaved changes), and any new or
changed definitions you want to make active in SmartSpace must be published.
See [[Publishing definitions](../BusinessRulesDeveloper/rules-engine-
developer-
config.htm#_Publishing_definitions)](../BusinessRulesDeveloper/rules-engine-
developer-config.htm#_Publishing_definitions).

![Closed](../../images/transparent.gif)Error messages

While you are editing a definition, SmartSpace monitors it for completeness
and validity—and displays descriptive error messages in real time. Click an
error message and the error is highlighted in the definition:

![screenshot with an example of error highlighting](../../images/3_5-business-
rules-workspace-4.png)

You can save an incomplete definition (or one with errors) but you cannot
publish it.

Click Check all definitions to display a message indicating the status of the
definitions. If the definitions are not OK, the number of incomplete
definitions or definitions which contain errors is displayed.

![Closed](../../images/transparent.gif)Toolbox

The toolbox contains a list of keywords that you use along with properties to
construct definitions. When you drag a keyword into the editor the possible
slots into which it can be dropped are highlighted. Different keywords are
available for different definitions. See [[Keywords for
definitions](../BusinessRulesDeveloper/rules-engine-developer-
config.htm#_Toc529277126)](../BusinessRulesDeveloper/rules-engine-developer-
config.htm#_Toc529277126) for descriptions and availability.

![Closed](../../images/transparent.gif)Properties

The list of properties includes all simple and complex properties created in
the Types and objects workspace, and also any Ubisense types supplied with the
features you have licensed (see [Types and
objects](../Core/Typeandobject/types-and-objects-introduction.htm) for
Ubisense types).

When you drag a property into the editor, the valid slots into which the
property can be dropped are highlighted.

Filters allow you to limit the properties listed to those that match one or
more of: name, type, and argument. Enter text at <Type here: filter by NAME>
(case sensitive) or drag labels or properties into their respective fields.
Click ![](../../images/cross-in-circle_17x17.png) to remove a filter.

![Closed](../../images/transparent.gif)Labels

You can organize definitions and make them easier to locate by creating and
applying labels to them. See [[Organizing
definitions](../BusinessRulesDeveloper/rules-engine-developer-
config.htm#_Mananging_sets_of)](../BusinessRulesDeveloper/rules-engine-
developer-config.htm#_Mananging_sets_of). Labels are also used to identify
items for inclusion in modules for export as described in [Managing
definitions](../BusinessRulesDeveloper/rules-engine-developer-
config.htm#_Toc529277132).

  * Business rules

![Navigate previous](../../images/transparent.gif) ![Navigate
next](../../images/transparent.gif) ![Expand
all](../../images/transparent.gif) ![](../../images/transparent.gif)
![Print](../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

