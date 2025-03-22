

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

# Business rule trace

Use the Business rule trace workspace to trace the behavior of published rules
and events. For a detailed explanation of using this feature, see [Rules
engine trace](../BusinessRulesDeveloper/rules-engine-developer-
config.htm#_Toc529277136)

Click on BUSINESS RULE TRACE to display the workspace.

![screen shot showing the business rules trace with a definition displayed and
a list of transactions in the trace viewer](../../images/3_5-business-rules-
trace-workspace.png)

Features of the Business rule trace workspace are described in the following
sections.

![Closed](../../images/transparent.gif)Definition viewer

Displays the logic of the current rule definition. As you step through the
trace, additional information is displayed explaining changes to be made.

You can click in the definition to set or unset a breakpoint.

Check Show variable values in the Options popup to display values of variables
instead of variable names in the rule definition.

![Closed](../../images/transparent.gif)Transaction viewer

Displays the current transaction and lists the actual events and any actions
performed on the data. Events are highlighted in green if the command executed
successfully or red if the command failed to execute. Right-click a command to
set or unset a breakpoint. Double-click a command to jump to its position in
the Definition viewer and Trace viewer.

![Closed](../../images/transparent.gif)Trace viewer

Lists transactions and the rules and events involved in each. The estimated
elapsed time taken to process a transaction is shown.

  * An icon to the left of a definition’s name identifies the kind of definition it is:

![icons identifying kinds of
definition](../../images/BusinessRulesTraceWorkspaceDefTypes.png)

  * Definitions with breakpoints that will actually be hit in this trace are identified by an icon that also indicates whether it is enabled:

![illustration of breakpoint enabled and disabled
icons](../../images/BusinessRulesTraceWorkspaceBreakpointsHit.png)

  * An arrow ![image of a green arrow pointing to the right](../../images/ProgressArrow.png) indicates progress when stepping through the trace and identifies the current definition.
  * Check Show skipped events in the Options popup to display events that have not been hit by the trace.

If the Real-time rules engine has been licensed and you have loaded a geometry
cell in the Types and objects workspace, you can see cellular rule evaluations
and the cell is indicated beside the transaction. Site-level transactions are
labeled Site.

Other additional information includes: skipped for rule evaluations that
didn't result in any changes, and event handlers for 'X becomes true' when X
became false (and vice versa); recursive for an event that was handled within
the previous evaluation.

You can copy the contents of the trace viewer to the Clipboard by clicking in
it and pressing Ctrl+C. To clear the content of the trace viewer, click Clear.

![Closed](../../images/transparent.gif)Toggle breakpoints for properties

Displays a list of properties set by the published rule and event definitions.
By selecting a property, breakpoints are set wherever that property is set.

  * Enter text at <Type here: filter by NAME> (case sensitive) to limit the definitions listed to those whose names match the your input. Click ![screen shot of cross in circle](../../images/cross-in-circle.png) to remove the filter.

  * Double-click a property to toggle breakpoints. See [Using Breakpoints](../BusinessRulesDeveloper/rules-engine-developer-config.htm#Using).

Properties with breakpoints are identified by an icon indicating whether
breakpoints are enabled or not:

![illustration of breakpoint enabled and disabled
icons](../../images/BusinessRulesTraceWorkspaceBreakpointsOnOff.png)

![Closed](../../images/transparent.gif)Set breakpoints

Displays a list of all published rule and event definitions.

  * Enter text at <Type here: filter by NAME> (case sensitive) to limit the definitions listed to those whose names match the your input. Click ![screen shot of cross in circle](../../images/cross-in-circle.png) to remove the filter.
  * Drag properties into <Drag here: filter by SETS PROPERTY> or <Drag here: filter by USES PROPERTY> to display only definitions that set or use those properties.
  * An icon to the left of a definition’s name identifies the kind of definition it is:

![icons identifying kinds of
definition](../../images/BusinessRulesTraceWorkspaceDefTypes.png)

  * Double-click a definition to display it to set breakpoints. See [Using Breakpoints](../BusinessRulesDeveloper/rules-engine-developer-config.htm#Using).

Definitions with breakpoints are identified by an icon indicating whether
breakpoints are enabled or not:

![illustration of breakpoint enabled and disabled
icons](../../images/BusinessRulesTraceWorkspaceBreakpointsOnOff.png)

![Closed](../../images/transparent.gif)Playback buttons

Use the playback buttons to step through the code. An arrow ![right-pointing
green arrow](../../images/ProgressArrow.png) indicates progress in each of the
viewers.

![Image of button to search back through trace for
breakpoints](../../images/search-back-button.png)searches back through the
trace for breakpoints

![Image of button to step back through the trace](../../images/step-back-
button.png)steps back through the trace

![Image of button to step through trace](../../images/step-forward-
button.png)steps through the trace

![Image of button to search through trace for
breakpoints](../../images/search-forward-button.png)searches through the trace
for breakpoints

![Closed](../../images/transparent.gif)Trace options

Click Options to display a popup of options to configure the trace:

![Screen shot of options popup](../../images/3_5-business-rules-workspace-
options.png)

  * Choose Stop listening when a breakpoint is hit to stop the addition of events to the trace when a breakpoint is hit
  * Choose Automatically scroll to current trace to keep the display in the Trace viewer in sync whilst stepping through definitions
  * Choose Show variable values to display values instead of variable names in the Definition viewer
  * Choose Show skipped events for the trace to include rule evaluations that didn't result in any changes, and event handlers for 'X becomes true' when X became false (and vice versa)
  * By default, a maximum of 200 transactions is shown. You can enter a different value between 1 and 1000. Click Reset to return to the default setting

  * Business rule trace

![Navigate previous](../../images/transparent.gif) ![Navigate
next](../../images/transparent.gif) ![Expand
all](../../images/transparent.gif) ![](../../images/transparent.gif)
![Print](../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

