

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

# Example of ACS with message forwarding with the ACS Protocol

Demonstration of ACS with Message Forwarding with the ACS Protocol.

Preparing of the Ubisense Platform including: Area, Region and Cells.

Configuration of ACS including: Workspaces, External Systems and Device Types.

Show Simulations of the ACS Protocol and the Ubisense Service Manager.

## Preparation of your Environment

Follow the installations instructions for the combination of SmartSpace and
ACS and other Ubisense products you require as described in your installation
guide.

## Use SmartSpace Config to Set up a Site and Add Representations for your
Demonstration

Follow the instructions for configuring ACS given in [Configuration in
SmartSpace](../../../UserResources/ACS/acs-configuration.htm).

In particular, you must do the following.

### Site Setup

  1. Create a new Area.
  2. Add a Geometry Cell to your site.
  3. Add a Location Cell to your Geometry Cell.
  4. Extend your Location Cell. In the Cells task, double-click the location cell and, in the Edit the extent of Location Cell dialog, change the Top to 10.
  5. Extend your Geometry Cell and Site Cell to contain your Location Cell.

Restart the Location Management Services in the Ubisense Service Manager in
order to make sure that the services are running correctly.

## Configuration in ACS

### Add a Workspace in ACS

See Workspaces in the ACS Online Help.

  1. Choose your Area.
  2. Set a suitable name (e.g. "Battery assembly").
  3. For Height of floor [m] set "0".
  4. For Height of ceiling [m] set "2".
  5. Set a suitable geometry for your Workspace.
  6. Commit your changes.

### Configure an External System

See External Systems in the ACS Online Help.

  1. Set a suitable name.
  2. As Type choose _Tool Control._
  3. Set a suitable description.
  4. Specify the IP Address of the computer on which the External System will be run.
  5. Set a suitable Port (e.g. _4646_).
  6. As Protocol choose _ACSProtocol_.
  7. As Protocol Version choose _1.0.0_.
  8. Select Remote Station is Server.
  9. Press OK.
  10. Go to Operation > Connection status and set the desired state of this external system to _Connect_.

### Configure the Additional Parameter for the External System

See Protocols (ACSProtocol) in the ACS Online Help.

  * For parameter Alive Time-Out set value to _10_. 

![](../../../images/ex_acsprotocol.jpg)

### Add a Device

See Device Types in the ACS Online Help.

  1. Set a suitable device name (e.g. _Battery Assembly Tool_).
  2. Add a suitable description.

### Add a Device Instance

See Device Instances in the ACS Online Help.

  1. Set a suitable name (e.g. _BA Device_).
  2. As Device Type choose _BatteryAssemblyTool_ (the type you created in the previous step).
  3. As External System name choose _ACSToolController_ (the external system you last created).
  4. Set an Association ID.
  5. Commit your changes.

### Enable Static Space rules

See Device Instances (Setting Static Space Rules) in the ACS Online Help.

  1. Select your created device.
  2. Select Enable static space rules.
  3. Set Enable Device to _Yes_ for your Static Space.

### Enable Message Forwarding

See Message Forwarding in the ACS Online Help.

  * Select your configured External System for Message Forwarding.

ACS is now configured.

## Simulate the ACS Protocol

For your Demonstration there is a tool you can use to simulate the ACS
Protocol.

In order to see any output at the cmd you must set an Environment variable,
otherwise you can see the output only in the log-File  
set UABASEEVENTLOG=1.

### Simulate the ACSProtocol

With the tool ubisense_acs_protocol_clientserver.exe you can display the
product types moving along your assembly line. You can find it in the tools
directory.

How to use:

ubisense_acs_protocol_clientserver.exe server <IP-Address> <Port> 1

For example:

ubisense_acs_protocol_clientserver.exe server 192.168.178.201 4646 1

### Use the Ubisense Service Manager to Start and Stop the ACSProtocol

At the command line from ubisense_acs_protocol_clientserver.exe you will see a
telegram each time the ACSProtocol is stopped. You can also see these
telegrams in the corresponding Log-File (ubisense_acs_protocol_service*.log).

![](../../../images/ex_acsprotocol_cmd_message_forwarding.zoom55.png)

  * Example of ACS with message forwarding with the ACS Protocol
    * Preparation of your Environment 
    * Use SmartSpace Config to Set up a Site and Add Representations for your Demonstration
      * Site Setup
    * Configuration in ACS
      * Add a Workspace in ACS
      * Configure an External System 
      * Configure the Additional Parameter for the External System 
      * Add a Device
      * Add a Device Instance
      * Enable Static Space rules
      * Enable Message Forwarding
    * Simulate the ACS Protocol
      * Simulate the ACSProtocol 
      * Use the Ubisense Service Manager to Start and Stop the ACSProtocol 

![Navigate previous](../../../images/transparent.gif) ![Navigate
next](../../../images/transparent.gif) ![Expand
all](../../../images/transparent.gif) ![](../../../images/transparent.gif)
![Print](../../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

