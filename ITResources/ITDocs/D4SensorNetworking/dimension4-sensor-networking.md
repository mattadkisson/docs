

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
PDF](../../../../SmartSpaceDownloads/B7GZWZS4WX9F/D4SensorNetworking.pdf "link
to PDF version of this content")

# DIMENSION4 Sensor Networking

# Introduction

This document presents an overview of the DIMENSION4 sensors’ use of the
network and describes the interactions they have with the DIMENSION4 location
platform services.

It describes the network behavior of the sensor when it is in its running
state, and then goes on to describe the network beehive of the sensor when
booting up. Finally it gives an nmap scan of the current version of the sensor
software (using a sensor running DIMENSION4 3.2 kernel/filesystem 1004/2412).

# Running sensor protocols and ports

The diagram below gives an overview of how a UbisenseDIMENSION4 sensor
communicates with the DIMENSION4 (and SmartSpace) server software and with
other DIMENSION4 sensors.

![screen shot of overview of D4 sensors and SmartSpace
software](../../../images/Running sensor protocols and_604x353.png)

The light blue rectangles correspond to open ports on the sensor. Where the
sensor is listening, the port number is labeled (these port numbers are valid
for all DIMENSION4 1.3 releases and are subject to change in subsequent
releases); where the sensor is sending the port is just labeled SND (it is
bound using the standard bind(0) system call so the specific port will vary
depending on execution).

Arrows indicate direction of communication, and the protocols used are labeled
next to the arrows. The label UDP indicates raw UDP messages. The label REMOTE
OPS indicates the Ubisense remote operations protocol and the label EVENT
CHANNEL indicates the Ubisense event channel protocol. As described
in[Ubisense Security
Manager](../../../UserResources/Core/Securitymanager/security-manager-
configuration.htm), the remote operations and event channel protocols may be
encrypted. It is therefore possible to configure DIMENSION4 such that sensor
configuration is protected throughout the signal path from configuration tool
to each sensor.

# Sensor boot sequence

The sensor boot sequence is described in detail in the documentation that
ships with the DIMENSION4 location platform software. This document provides a
brief overview to outline the implication for sensor network behavior.

  1. Obtaining an IP address 
    1. The sensor loads the firmware from non-volatile memory. 
    2. The firmware reads the sensor’s network configuration from non-volatile memory, and decides whether to obtain its IP using DHCP or to use statically-assigned IP settings. 
    3. The firmware performs DHCP if required.
    4. The firmware sends ARP probes and announcements in accordance with RFC-5227. If the firmware detects an IP address conflict at any point (e.g. by receiving a conflicting ARP probe) then it will reboot. If a CNC is set for the sensor, it will stay in Pending validation state. 

  1. Firmware search for the Configuration Server 
    1. The firmware reads the search order from non-volatile memory. If the search order has not been configured or has been marked as invalid then a default search order is used. 
    2. For each search method, the firmware tries to contact the configuration server, performing needed DNS requests. If the firmware receives a valid response, it goes to the next step, marking the network configuration as valid. 
  2. Obtaining boot configuration and software files 
    1. The firmware reads the boot configuration server’s address from the configuration server’s response.
    2. The firmware sends a request to the boot configuration server, which replies with the version of the software to run, and the address of a boot file server to obtain the software from. If the boot configuration server has the boot trace enabled, it will report Sensor <MAC> requested configuration... Currently the boot configuration server will always send its own address in response to the configuration request, because the boot configuration server also serves as the single boot file server for the system. 
    3. If the correct version of the software is already “flashed” into non-volatile memory, the firmware loads it. 
    4. Otherwise the firmware requests the software from the boot file server. If the boot file server has the boot trace enabled, it will report messages of the form Sensor <MAC> requested … and then Sensor <MAC> completed request … if the download is successful. 
  3. Starting the software and software networking 
    1. The firmware runs the software, telling it whether to use DHCP or the existing static IP information. 
    2. The software performs DHCP if requested and if so it also sends ARP probes and ARP announcements in accordance with RFC-5227. 

If the sensor is using static IP, then no ARP probes or announcements are
needed because the IP settings have not changed.

  1. Software configuration 
    1. The software performs a search for the Configuration Server in the same way as the firmware does. It should not time out because it is repeating the task that succeeded when run from firmware 
    2. The software reads the address of the location system configuration server from the Core Server’s response, and then registers its MAC address, IP address and the location system parameters it needs to run. 
    3. The appropriate cellular location system configuration distribution server responds to the sensor with the required location system parameters, including the IP address of the cellular location sink service to send status and location information to. 

  1. Firmware/software/network configuration 
    1. The software checks if various diagnostic parameters have been written to the sensor’s non-volatile memory. If not, then the sensor calculates these, writes them to the non-volatile memory and reboots. 
    2. The software checks if there are any pending firmware upgrades. If so, the sensor requests its boot configuration from boot configuration server and verifies that the requested version of firmware is available. The sensor then downloads the firmware from the boot file server, writes it to the non-volatile memory and reboots. 
    3. The sensor performs the same checks as above with the software. 
    4. The software checks if there are any pending changes to the sensor’s network configuration. If so, the sensor writes the updated network configuration to the non-volatile memory and reboots. 
  2. Sensor hardware and timing initialization 
    1. The software starts to send periodic status updates. At this stage its status appears as Initializing.
    2. The software initializes the rest of the hardware, and waits until it gets a stable timing signal, or until it is generating a stable timing signal if it is a timing source. 
    3. The sensor’s status is now Running. If the sensor_init trace is enabled, the sensor will report Initialisation complete. 

Using this boot sequence it should be possible to ensure that there is
appropriate networking provision for the sensors and that the sensors meet the
relevant site-level standards for networked devices.

# Nmap scan report

Here is the output of an nmap scan of a sensor running software
kernel/filesystem 1004/2412 (from DIMENSION4 3.2). This demonstrates that
there are no open TCP ports, and the scanner software was unable to uncover
any identification details for the device operating system.

    
    
    $ # Scan for any open TCP ports
    $ nmap -A -p1-65535 10.42.5.50
    
    
    Starting Nmap 7.40 ( https://nmap.org ) at 2017-07-21 13:33 ope
    Nmap scan report for 10.42.5.50
    Host is up (0.0010s latency).
    All 65535 scanned ports on 10.42.5.50 are closed
    MAC Address: 00:11:CE:D4:07:95 (Ubisense Limited)
    Too many fingerprints match this host to give specific OS details
    Network Distance: 1 hop
    
    TRACEROUTE
    HOP RTT     ADDRESS
    1   1.01 ms 10.42.5.50
    
    OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
    Nmap done: 1 IP address (1 host up) scanned in 33.27 seconds     
    

  * DIMENSION4 Sensor Networking
  * Introduction
  * Running sensor protocols and ports
  * Sensor boot sequence
  * Nmap scan report

![Navigate previous](../../../images/transparent.gif) ![Navigate
next](../../../images/transparent.gif) ![Expand
all](../../../images/transparent.gif) ![](../../../images/transparent.gif)
![Print](../../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

