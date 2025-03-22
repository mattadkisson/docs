

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

# Shifts in SmartSpace Web

The shifts screen in the Operations web interface allows you to view and
modify shift patterns to enable the Business rules engine to define working
times, and for use in Reporting. These activities can also be carried out in
the [Shift patterns workspace](../../BuildandCreate/shift-patterns-
configuration.htm) in SmartSpace Config. For a fuller description of how shift
patterns work, see
[Shifts](../../../ComponentandFeatureOverview/TopLevelFeatures/Business
rules/shifts.htm)

Click on Shifts to display the screen in SmartSpace Web.

Only members of the System.Manager role can access this screen. (For
information on configuring role membership, see [Configuring Roles in
SmartSpace Web](roles-configuration-operations-web-interface.htm) or
[Configuring Roles using SmartSpace
Config](../../BuildandCreate/UsersAndRoles/users-and-roles-
configuration.htm).)

## Creating Shift Patterns

Click on Shift Patterns to open a tab where you can view and define shift
patterns and their associated working times.

![Screenshot of Shift Patterns panel in the Shifts screen of SmartSpace
Web](../../../images/OWI-shifts-1.png)

A shift pattern defines the working times within a 24-hour time period. More
than one period of work can be input for each shift pattern, for example to
enable the scheduling of break periods.

To add a new shift pattern:

  1. Type a name for the shift pattern at Create a new shift pattern called.
  2. Type in the working times:
     * Enter time spans using the 24-hour clock 
     * Use -> to separate start and end times
     * There can be several time spans, for example to indicate scheduled breaks in the working day, separated by a space
     * Time spans cannot extend over midnight
  3. Click Add.

## Defining Shifts

Click on Shifts to open a tab where you can display shifts and view and update
the shift patterns associated with each day of the week.

![Screenshot of Shifts panel in the Shifts screen of SmartSpace
Web](../../../images/OWI-shifts-2.png)

To add shift patterns to the days of the week for a defined shift:

  1. Choose the shift from the dropdown.
  2. Set the shift pattern for a day by choosing from the Working Times dropdown for each day. The dropdown lists None (for a non-working day) and all shift patterns defined in the top part of the screen.
  3. Click Save.

## Overriding a Shift Pattern for a Single Day

You can assign a specific shift pattern to a single date overriding its usual
shift pattern. Click on Non-standard Days to open a tab where you can amend
the shift pattern for a selected shift and date.

![Screenshot of Non-standard Days panel in the Shifts screen of SmartSpace
Web](../../../images/OWI-shifts-3.png)

To assign a specific shift pattern to a single date:

  1. Select the shift from the Shift dropdown.
  2. Select the month and year, and click on the date.
  3. Choose the shift pattern from the dropdown or choose <No Override> to remove a previously-applied override.
  4. Click Save.

Any date that has been overridden is underlined on the calendar display.

## Importing Shift Pattern Overrides

You can import a number of overrides from a text file rather than entering
them individually. This can be useful, for example, to import a year's public
holidays in advance.

The text file must be in CSV format organized as in the following example (the
header row is optional):

    
    
    date,shift,shift pattern
    09/09/2019,Standard Week,None
    10/09/2019,Standard Week,None
    12/09/2019,Standard Week,Early lunch
    16/09/2019,Standard Week,Early lunch
    17/09/2019,Standard Week,Early lunch
    18/09/2019,Standard Week,Early lunch
    19/09/2019,Standard Week,Early lunch
    20/09/2019,Standard Week,

The date field must be in a suitable locale-based format, or YYYY-MM-DD. Any
lines without a valid date in the first column will be ignored.

Leave the third column blank to clear a date override.

The format of the shift and shift pattern must match those configured in the
Shifts screen (or in SmartSpace Config).

The import will also clear any other overrides for the range of dates
included, for each shift mentioned. So, in the above example, Standard Week
overrides on 11/09,13/9,14/9 and 15/9 will be removed, in addition to the
explicit removal for 20/9.

To import shift pattern overrides:

  1. Create a CSV file containing the dates and overrides, as described above.
  2. In the Shifts screen, open the Non-standard Days tab and click Import:

![Import dialog for shift overrides](../../../images/OWI-shift-override-
import.png)

  3. In the Import dialog, click Choose file, select the CSV file, and click Open.
  4. Click Import to start the process.

When the import is complete, the message Completed displays.

  * Shifts in SmartSpace Web
    * Creating Shift Patterns
    * Defining Shifts
    * Overriding a Shift Pattern for a Single Day
    * Importing Shift Pattern Overrides

![Navigate previous](../../../images/transparent.gif) ![Navigate
next](../../../images/transparent.gif) ![Expand
all](../../../images/transparent.gif) ![](../../../images/transparent.gif)
![Print](../../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

