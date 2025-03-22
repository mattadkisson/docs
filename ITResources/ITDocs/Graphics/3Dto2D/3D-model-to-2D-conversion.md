

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

[Download as
PDF](../../../../../SmartSpaceDownloads/B7GZWZS4WX9F/UbisenseSmartSpace3Dto2DGraphics.pdf
"link to PDF version of this content")

# Converting a 3D model to a 2D SVG

This guide takes you through the steps required to convert a 3D drawing into a
2D graphic in SVG format suitable for import into SmartSpace. Two tools are
used in the process: SketchUp® to correctly orient the 3D drawing and export
it in a 2D format; Adobe® Illustrator® to edit the 2D image and export it in
SVG format.

The guide will cover the following steps:

  * Correctly orienting a model for export in SketchUp
  * Exporting a 2D model from SketchUp
  * Editing a PDF file in Illustrator
  * Exporting an SVG file from Illustrator
  * Importing the image for use as a representation in SmartSpace

The example shows the conversion of a 3D drawing of a shop floor into a 2D
SVG. The source file for the example is provided in a zip file
[3Dto2DExample.zip](../../../../../SmartSpaceDownloads/B7GZWZS4WX9F/3Dto2DExample.zip
"link to zip file of source files for the texture baking example"). If you
want to work through the instructions step by step, download and unzip the
file to a suitable location.

# Software required

The following lists the software required if you want to work through the
example.

## SketchUp® Pro

The example in this guide uses SketchUp Pro desktop software available from
<https://www.sketchup.com/>.

Note: You cannot use the free web-based version of SketchUp to create a 2D
graphic in SVG format from a 3D SketchUp drawing.

## Adobe® Illustrator® (trial version)

If you do not have a copy of Adobe® Illustrator®, you can download a free
seven-day trial of the software.

Go to <https://www.adobe.com/uk/products/illustrator/free-trial-
download.html#x> and follow the instructions on the Adobe website.

Note: You will be required to supply payment details during the download
process.

# Correctly orienting a model for export using SketchUp®

  1. Open SketchUp by typing sketchup in the Start menu.The SketchUp startup window is displayed.
  2. Open the 3D drawing file by choosing File > Open (CTRL+O), going to the directory where you unzipped the example files, and choosing Gearoid Shop Floor 3D - With coloured sections.skp:

![](../../../../images/Converting a 3D Model to a_628x379.png)

  3. Change the view to top-down by choosing Camera > Standard Views > Top:

![](../../../../images/Converting a 3D Model to a_2_601x363.png)

  4. Ensure you are in the Parallel Projection viewing mode by choosing Camera > Parallel Projection.

This will allow you to export a cleaner view of the model:

![](../../../../images/Converting a 3D Model to a_4_601x363.png)

  5. Remove the outlines of the model: these will make the SVG unnecessarily complex.

Deselect Edges and Profiles by choosing View > Edge Style > Edges and View >
Edge Style > Profiles respectively.

After deselection, the menu looks like this (there should be no ticks by any
of the edge styles):

![](../../../../images/Converting a 3D Model to a_6_515x386.png)

The simplified model looks like this:

![](../../../../images/Converting a 3D Model to a_7_602x768.png)

# Exporting a 2D model from SketchUp

With the model correctly oriented and cleaned up, you can export a 2D file.

Choose File > Export > 2D Graphic... and save the file, ensuring its file type
is PDF:

![](../../../../images/Converting a 3D Model to a_9_602x320.png)

# Editing a PDF file in Adobe® Illustrator®

With the file in 2D format, you can complete the cleanup in Adobe Illustrator.

  1. Open Illustrator by typing illustrator in the Start menu.The Illustrator startup window is displayed.

![](../../../../images/Constructing a High Quality_1_2_601x376.png)

  2. Choose File > Open, navigate to the location where you saved the PDF file, and open the file:

![](../../../../images/Converting a 3D Model to a_12_601x363.png)

  3. If necessary, adjust the size of the artboard:

    1. Choose Windows > Artboards. If you are using the Essentials Classic workspace you can choose the Artboards icon from the tools on the right-hand side of the workspace:

![](../../../../images/Converting a 3D Model to a_13_210x330.png)

    2. Select Artboard 1 in the Artboards panel and choose Object > Artboards > Fit to Artwork Bounds.
  4. Set the color of the walls (where you previously removed their outlines in SketchUp).
    1. Hold down Shift and click on each of the walls to select them all:

![](../../../../images/Converting a 3D Model to a_17_601x362.png)

    2. With the walls selected, double-click the Fill icon in the toolbar on the left-hand side of the workspace:

  
![](../../../../images/Converting a 3D Model to a_19.png)

    3. In the Color Picker dialog, drag the circular cursor to select your preferred colour, or type in the colour value (as HSB, RGB, CMYK, Hex#).

For example, enter the RGB values, R: 221 G: 221 B: 221 to choose a light
gray:

![](../../../../images/Converting a 3D Model to a_21_602x414.png)

The file looks like this:

![](../../../../images/Converting a 3D Model to a_22_536x818.png)

  5. Choose File > Save As... and save the file, ensuring the file type is set to Adobe Illustrator (*.Ai):

![](../../../../images/Converting a 3D Model to a_24_526x391.png)

# Exporting a vector graphic from Illustrator

With file editing complete in Illustrator, the final step is to save the
result as a vector file (.SVG).

  1. Choose File > Save As...File > Export As... and in the dialog, ensure the file type is set to SVG (*.SVG) and that Use Artboards is checked:

![](../../../../images/Exporting SVG file from Illustrator_421x291.png)

![screen shot of Export dialog](../../../../images/Editing a SVG and
converting_34_600x368.png)

  2. Give the file a name.
  3. Click Save and then click OK to save the default settings in the SVG Options dialog:

![](../../../../images/Exporting SVG file from Illustrator_1_424x587.png)

This will provide you with an SVG file which can be successfully imported into
SmartSpace.

  4. Click Save and the SVG Options dialog displays:

![](../../../../images/Editing a SVG and converting_37.png)

  5. Make sure the following details are selected:

     * Styling: Inline style

     * Font: SVG

     * Images: Embed

     * Object IDs: Layer Names

     * Decimal: 4

The Minify and Responsive check boxes should be checked.

  6. With the correct options selected, click OK.

# Importing the image into SmartSpace

This section describes how you can import your 2D image into SmartSpace using
the SmartSpace Config application. If you need further information on using
SmartSpace Config, see [Configure
SmartSpace](../../../../UserResources/BuildandCreate/smartspace-config-
introduction.htm).

  1. Run SmartSpace Config and open the MODEL IMPORT tab:

![](../../../../images/TextureBaking_84_601x363.png)

  2. Double-click <Import representation>.

  3. Navigate to the SVG file which you exported from Illustrator and select it.

The filename, including its suffix, becomes the default name of the
representation. Edit the name as required.

  4. Click Save.

The Model import workspace should look like this:

![](../../../../images/3d2d-ModelImport_600x392.png)

If necessary, you can resize and set the origin of the model. See [Model
import](../../../../UserResources/BuildandCreate/SiteVisualization/model-
import.htm) for further information on importing representations into
SmartSpace.

  5. Open the OBJECT PLACEMENT tab.

![](../../../../images/TextureBaking_88_601x363.png)

  6. Drag the file that you just imported into the workspace:

![](../../../../images/3d2d-ObjectPlacement_600x392.png)

  * Converting a 3D model to a 2D SVG
  * Software required
    * SketchUp® Pro
    * Adobe® Illustrator® (trial version)
  * Correctly orienting a model for export using SketchUp®
  * Exporting a 2D model from SketchUp
  * Editing a PDF file in Adobe® Illustrator®
  * Exporting a vector graphic from Illustrator
  * Importing the image into SmartSpace

![Navigate previous](../../../../images/transparent.gif) ![Navigate
next](../../../../images/transparent.gif) ![Expand
all](../../../../images/transparent.gif)
![](../../../../images/transparent.gif)
![Print](../../../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

