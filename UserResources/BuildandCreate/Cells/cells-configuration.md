

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

# Cells

SmartSpace manages location data using a cellular architecture. The three
levels to this architecture are outlined in the table below:

Cell | Purpose  
---|---  
Site Cell |  The Site Cell represents the entire area that is covered by SmartSpace. It is created by default when you install the system.  
Geometry Cell |  The Site Cell contains one or more Geometry Cells. A Geometry Cell represents a smaller area within the Site Cell, such as:

  * the floor of a building
  * a production area

Geometry cell level is where the relationships between objects are evaluated.  
Location Cell |  A Geometry Cell contains one or more Location Cells. Location cell level is where location data, such as (x,y,z) position or rotation, is managed. This data can be directly input from sensor systems, or can be set manually for example by using the Place objects workspace. A Location Cell might cover:

  * a process in a production area
  * a phase in the production cycle

  
  
Setting up a cell hierarchy involves defining the three-dimensional spaces
within which object locations, and the relationships between objects, are of
interest.

In a valid cell hierarchy:

  * All Geometry Cells are contained by the Site Cell
  * A Location Cell is contained by a single Geometry Cell

  * Location Cells do not overlap

You can use a representation of your site and other objects to help in
defining the extent of cells. To see a map and other background objects in the
Cell viewer, you must first import and place these using the Model import
workspace. See [Importing a site model](../SiteVisualization/model-
import.htm#ImportSite) and [Importing an object
representation](../SiteVisualization/model-import.htm#Importin2).

For further details on the advantages of a cellular architecture, see
[Partitioning](../../../ITResources/ITDocs/ArchiProtocols/architecture-and-
protocols.htm#h1_11) in Ubisense Architecture and Protocols.

# The Cells workspace

The Cells workspace is a configuration interface for creating the cell
hierarchy, and defining and modifying the physical extents of cells.

Click on CELLS to display the workspace.

![Screen capture showing Cells Workspace in SmartSpace
Config](../../../images/3_5-cells-workspace.png)

The workspace is described in the following sections:

![Closed](../../../images/transparent.gif)Cell hierarchy

The list of Geometry Cells and Location Cells as they are currently configured
is displayed. The Site Cell is not shown.

  * Double-clicking <Create new geometry cell> opens a dialog where you can define the name and extent of a Geometry Cell and position the cell on the map. See Adding Geometry Cells.
  * When at least one geometry cell has been defined, double-clicking<Create new location cell> opens a dialog where you can define the name and extent of a Location Cell and position the cell on the map. See Adding Location Cells.
  * Double-clicking a cell's name opens a dialog and allows you to edit the cell's extent.
  * Slowly double-clicking a cell's name allows you to rename the cell.

![Closed](../../../images/transparent.gif)Cell viewer

When a cell is selected from the list of cells, it is highlighted in the Cell
viewer.

  * To zoom into the workspace, rotate the mouse wheel away from you.
  * To zoom out of the workspace, rotate the mouse wheel towards you.
  * If the cell is too large (or too small) to view in the workspace, press Home to go back to the default screen setting.

If SmartSpace detects errors during the configuration of the cell hierarchy,
an additional panel displays with a description of the error. Follow the
onscreen instructions to correct the error(s). See the [Cell
configuration](../troubleshooting.htm#Cell) section of Troubleshooting for
details of the error messages.

# Creating your cell hierarchy

When you install SmartSpace a site cell is automatically created but is not
visible in the Cells workspace. Use the following instructions to define the
Geometry Cells and Location Cells contained within your site cell.

When adding cells, bear the following in mind:

  * When defining the cell extent, you may prefer to work in the 2D view.
  * Ensure the extent of any Location Cell falls within a single Geometry Cell.
  * If there are multiple Geometry Cells, ensure that they do not overlap.
  * If there are multiple Location Cells, ensure that they do not overlap.

## Adding Geometry Cells

To add a Geometry Cell:

  1. Double-click <Create new geometry cell>.

  2. Give the cell a meaningful name.
  3. Create the extent of the new cell by following the onscreen instructions. Using your mouse, add points to create the required extent for the cell – it must cover the area of interest. When you click and drag to add a point, the coordinates of the point are displayed.   
A Geometry Cell can be any shape. However, we recommend that you create a cell
that is reasonably square or rectangular, and that you avoid a long, thin
rectangle.

  4. Define the top and bottom boundaries of Geometry Cells so they are large enough to contain the Location Cells.

  5. Select Snap Grid to snap the cell extent to the nearest intersection of lines in the grid, when you drag the points with your mouse.
  6. After you have created the cell, you can use the View options to check it in either 2D or 3D.

  7. Click Save.

When you create the first Geometry Cell, it will not usually be inside the
Site Cell. SmartSpace can automatically fix the error by enlarging the Site
Cell to contain the cell hierarchy. Follow the onscreen instructions in the
Errors panel if you need to fix this. If you add further Geometry Cells whose
extents lie outside of the Site Cell, you can fix the errors by following the
onscreen instructions. See the [Cell
configuration](../troubleshooting.htm#Cell) section of Troubleshooting for
details of the error messages.

## Adding Location Cells

To add a Location Cell:

  1. In the list of cells, expand the Geometry Cell that will contain the new Location Cell.

Double-click <Create new location cell>.

  2. Give the cell a meaningful name.
  3. Create the extent of the new cell by following the onscreen instructions. Using your mouse, add points to create the required extent for the cell – it must cover the area of interest. When you click and drag to add a point, the coordinates of the point are displayed. 

  4. Define the top and bottom boundaries of the cell so that it is contained within a single Geometry Cell.

  5. Select Snap Grid to snap the cell extent to the nearest intersection of lines in the grid, when you drag the points with your mouse.
  6. After you have created the cell, you can use the View options to check it in either 2D or 3D.

  7. Click Save.

If you add a Location Cell which is not contained within one single Geometry
Cell, SmartSpace can automatically fix the error. Follow the onscreen
instructions in the Errors panel if you need to fix this.

Similarly, if you create overlapping Location Cells, SmartSpace will identify
the cells and offer you the chance to make adjustments.

See the [Cell configuration](../troubleshooting.htm#Cell) section of
Troubleshooting for details of the error messages.

## Starting Cell Services

After you have configured the cells for your site, you must deploy them.

Deploy the cell services for the Site Cell, each Geometry Cell, and each
Location Cell:

  1. Start the Service Manager tool. The Cells option lists the Site Cell, and all the Geometry Cells, and Location Cells that you have created.

  2. You can deploy services for either:

     * The entire Site Cell, including all the Geometry Cells and Location Cells that it contains.

     * A particular Geometry Cell or Location Cell.

After you deploy services for a cell, the status of the cell changes to
Running.

## Modifying Cells

To modify an existing Geometry Cell or Location Cell:

  1. On the Cell hierarchy tab, double-click the cell to display the editor.
  2. Modify the shape and/or extent of the cell, as required.
  3. Click Save.

## Deleting Cells

To delete a cell:

  1. In the Cell hierarchy tab, select the cell.
  2. Press the Delete key.
     * Geometry Cells: The Geometry Cell and its Location Cells are deleted.

     * Location Cell: The Location Cell is deleted.

  3. Using the Service Manager tool, undeploy services for the deleted cells:

    1. Run Service Manager 3.
    2. In the Cells folder, expand Site.
    3. Right-click the cell that you have deleted, and then click Stop.

  * Cells
  * The Cells workspace
  * Creating your cell hierarchy
    * Adding Geometry Cells
    * Adding Location Cells
    * Starting Cell Services
    * Modifying Cells
    * Deleting Cells

![Navigate previous](../../../images/transparent.gif) ![Navigate
next](../../../images/transparent.gif) ![Expand
all](../../../images/transparent.gif) ![](../../../images/transparent.gif)
![Print](../../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

