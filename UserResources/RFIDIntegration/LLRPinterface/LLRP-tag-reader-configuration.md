

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

[Download as
PDF](../../../../SmartSpaceDownloads/B7GZWZS4WX9F/LLRPInterface.pdf "link to
PDF version of this content")

[Software
Version](../../../ComponentandFeatureOverview/FrontMatters\(Online\)/features-
and-versions.htm): 3.2

# Introduction to the LLRP Tag Reader service

This document outlines the use of the LLRP Tag Reader service which reads tag
data from LLRP supporting RFID readers, adding the information to the
assertion store.

# LLRP Tag Reader Configuration

The service is configured in SmartSpace using the UDM and application
parameters. The configuration service adds an LLRP Reader type to the UDM. You
should derive a type from this type (the base type has no unique name field)
and create an object of your derived type for each LLRP reader you want to
connect to. The service may override any existing LLRP configuration of
readers it connects to, see the parameters below for how to disable this.

The parameters for each reader connection are configured in the Service
parameters tab in SmartSpace Config.

LLRP Reader objects have the following parameters:

reader address |  The IP address or hostname of the reader’s LLRP interface.  
---|---  
reader port |  The port number of the reader’s LLRP interface.  
reader enabled |  Whether the Tag Reader service should read tags from this reader. Readers with an enabled value of false will be ignored by the service.  
skip RO spec initialisation |  Skip initializing the reader config and RO spec. Set to true to prevent the server overriding a custom configuration on the reader. This custom configuration should have a keepalive interval of at most ten seconds.   
  
# ReadData

Read tags are added to the assertion store as object, tag pairs where the
object is the LLRP reader that read the tag and the tag is an EPC identifier
as a string. These assertions persist for a short duration (five seconds)
before being removed from the store. Assertions are added as site level
assertions but there are plans to implement a Site/Cell level mix based on
where the reader is placed.

# TestingTools

The tools ubisense_llrp_connection_test and ubisense_tag_report_generator can
be used to test your LLRP setup and help with configuration. The monitor
streams llrp_protocol and llrp_tag_report_server can be enabled to help with
debugging of issues.

# ConnectionTest

The ubisense_llrp_connection_test tool imitates the configuration process
performed by the service. It can be used to test if an LLRP reader is
reachable and compatible with this configuration process.

Simply run the program with the reader address/hostname (and optionally port)
as arguments. It will then attempt to connect to the reader, configure it and
read tag reports momentarily, reporting the success/failure of these steps.

# TagReportGenerator

The ubisense_tag_report_generator tool acts as a pseudo LLRP reader for
simulating tag read reports. Use this in combination with the LLRP service to
generate entries in the assertion store without needing to connect to a
physical LLRP reader.

The service connects to localhost:5084 and sends tag reports to all connected
clients which have setup an ROSpec. The frequency of tag reports is configured
in a text file consisting of lines of 96-bit EPC, report period (in seconds)
pairs.

    
    
    e28011606000020727e39c1d 0.5
    e28011606000020727e39c1f 1

This tool is a lightweight simulator for the purposes of testing the service
and not a true LLRP reader simulator. It does not implement keepalives; at
least one tag should have a report period of less than ten seconds.

  * Introduction to the LLRP Tag Reader service
  * LLRP Tag Reader Configuration
  * ReadData
  * TestingTools
  * ConnectionTest
  * TagReportGenerator

![Navigate previous](../../../images/transparent.gif) ![Navigate
next](../../../images/transparent.gif) ![Expand
all](../../../images/transparent.gif) ![](../../../images/transparent.gif)
![Print](../../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

