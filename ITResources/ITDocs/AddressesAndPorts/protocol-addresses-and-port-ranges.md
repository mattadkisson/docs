

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
PDF](../../../../SmartSpaceDownloads/B7GZWZS4WX9F/UbisenseAddressesAndPorts.pdf
"link to PDF version of this content")

# Ubisense Protocol Addresses and Port Ranges

# Introduction

Ubisense uses a number of protocols to manage its sensor network, services and
clients. These protocols all use the User Datagram Protocol (UDP), either via
a unicast routing scheme or multicast.

The Ubisense system uses one well-known port for its basic protocol
configuration protocol (see section Configuration Protocol (UDP Unicast, with
Broadcast Fall Back)), but in every other case the address and port ranges are
reconfigurable via the Ubisense configuration protocol (accessed through the
command-line tool ubisense_configuration_client.exe, found in the \bin
directory of the platform installation).

This document describes the following:

  * How to view the currently defined dynamic port range in use
  * How to configure/restrict the dynamic port ranges in use
  * Details of the protocols and the configuration options available

# Port Ranges – An Overview

Ubisense utilizes three port ranges within its applications and services.
These port ranges are used as follows:

  1. A set of Ubisense primary UDP ports, in the range 49979 to 49983.  

  2. A set of dynamic ports (UDP/TCP connections) that Ubisense applications/services use to intercommunicate. These ports are allocated in response to a bind(0) call, with the range of ports that can provide being defined at the OS level.   

  3. A set of dynamic ports (UDP Multicast) used to exchange state and configuration information between Ubisense applications/services via a proprietary NAK-based reliable multicast protocol. 

The following sub-sections provide additional information of each of these
port ranges, details of how to display the current default dynamic port range
in use, and how to configure/restrict the dynamic port range, if required.

Multicast

To support the Ubisense services and sensors in multicast mode the following
UDP multicast address ranges need to be enabled on the network switches
between the Platform and the UWB sensors:  

  * 239.192.0.1 to 239.192.255.255(239.192.*.*)
  * 239.195.255.255(239.195.255.255)
  * 239.255.255.0 to 239.255.255.255(239.255.255.*)

##  Primary UDP Ports

The set of Ubisense primary ports, in the range 49979 to 49983, are as
follows:

49979 – Distributed Logging (UDP Multicast)

All Ubisense applications, services and clients report log messages to this
port (on the default multicast address 239.255.255.254). The Ubisense logging
service listens on this port and writes this information to the log files. In
addition the command-line tool ‘ubisense_monitor_receiver’ provides the same
function but displays log messages in a command window (Windows & Linux).  

49980 – Configuration Protocol (UDP Unicast, with Broadcast fallback)

Network protocol configuration for any Ubisense application or service
(including Ubisense Clients and Ubisense Sensors). This port is fixed and
cannot be changed.

49981 – Service Finder Protocol (UDP Multicast)

Used to locate services on a network. Uses the default multicast IP address
239.195.255.255, which can be changed via the command-line tool
‘ubisense_configuration_client’.

49982 – Sensor Calibration (UDP Multicast)

Enables sensors to pass calibration data to the Platform.

49983 – Site Connector (TCP)

Site Connector, consisting of separate Server & Client components, can be used
to tunnel the Ubisense protocols across a TCP/IP connection, effectively
making two disjoint networks appear to be connected to the same instance of
the Platform. It is invariably used to allow remote access to a system or to
connect clients to the Server when running in unicast mode.

Site Connector Server uses the default port 49983 to allow Site Connector
Clients to connect. The port number, though, is configurable via
‘ubisense_configuration_client’ by setting the platform parameter
‘tunnel_server_port’ as required. Additional ports that the user may wish to
set are covered in the [Introduction to Site
connector](../../../UserResources/Core/SiteConnector/site-connector-
configuration.htm), which for reference are listed below:

Parameter |  Port  
---|---  
tunnel_server_port |  Default=49983  
calibration_server_port |  <as required>  
tunnel_sensors_status_relay_port |  <as required>  
tunnel_unicast_relay_port |  <as required>  
  
### Summary of Primary UDP Ports

The following table provides a list of the ports in the range 49979 to 49983
that are utilized by the Ubisense applications and services to establish the
basic inter-service/application functionality.

Function |  Port |  Default Multicast Addr  
---|---|---  
Distributed logging |  49979 (configurable) |  239.255.255.254  
Configuration Protocol |  49980 (fixed) |  n/a  
Service Finder |  49981 (configurable) |  239.255.255.255  
Sensor Calibration |  49982 (configurable) |  239.255.255.253  
Site Connector |  49983 (configurable) |  n/a  
  
## Dynamic Ports (UDP/TCP connections)

The set of dynamic ports (UDP/TCP connections) that Ubisense
applications/services use to intercommunicate are allocated in response to a
bind(0) call, with the range of ports that can be utilized being defined at
the OS level.

When restricting the dynamic ports to use the following should be noted:  
  
All Ubisense (and third-party) applications and services that use the bind(0)
method of requesting UDP/TCP ports will be affected by any change. When
setting (especially restricting) the port range it is important to consider
ALL port requirements and set the range accordingly. Failure to provide
sufficient dynamic ports will result in Ubisense applications and/or services
failing to start-up correctly, resulting in reduced functionality.

### Display the Default Dynamic Port Range (Windows)

For Windows based servers the default dynamic port range (for both UDP and TCP
connections) can be displayed using the following command (via a command-
prompt):  

    
    
    netsh interface ipv4 show dynamicportrange udp  
    netsh interface ipv4 show dynamicportrange tcp

This outputs the following:

Protocol udp Dynamic Port Range \------------------------------- Start Port : 49152 Number of Ports : 16384 |  Protocol tcp Dynamic Port Range \------------------------------- Start Port : 49152 Number of Ports : 16384  
---|---  
  
Which results in the port range 49152 to 65535 being available to both UDP and
TCP bind(0) requests.

### Setting the Default Dynamic Port Range (Windows)

To restrict the port range that bind(0) provides, the following commands can
be used (from a command-line, run as Administrator):  

    
    
    netsh interface ipv4 set dynamicportrange protocol=udpstartport=&lt;#&gt; numberofports=&lt;#&gt;
     
    netsh interface ipv4 set dynamicportrange protocol=tcp 
    startport=&lt;#&gt; numberofports=&lt;#&gt;  
    

To set the dynamic ports for both UDP and TCP connections to 60000 to 61999
(for example) would be as follows (the Ubisense Core and Local Controllers
would require restarting):

    
    
    netsh interface ipv4 set dynamicportrange protocol=udp startport=60000 numberofports=2000
     
    netsh interface ipv4 set dynamicportrange protocol=tcp startport=60000 numberofports=2000  
    

### Display the Default Dynamic Port Range (Linux)

For Linux-based servers the default dynamic port range (for both UDP and TCP
connections) can be displayed using the following command (via a command-
prompt, must be logged in as ‘root’):

    
    
    sysctl net.ipv4.ip_local_port_range

This would output (for example):  

    
    
    net.ipv4.ip_local_port_range = 3276861000

Resulting in the port range 32768 to 61000 being available to both UDP and TCP
bind(0) requests.

### Setting the Default Dynamic Port Range (Linux)

To set a port range use (must be logged in as ‘root’):

    
    
    echo 17210 32768 > /proc/sys/net/ipv4/ip_local_port_range

or

    
    
    sudo sysctl –w net.ipv4.ip_local_port_range=”32768 49978”

Finally, to make the changes permanent you can either append the following
line to your /etc/sysctl.conf file:

    
    
    # increase system IP port limits
    net.ipv4.ip_local_port_range = “32768 49978”

or place the following in an init script, such as: /etc/rc.d/rc.local

    
    
    sysctl –w net.ipv4.ip_local_port_range=”32768 49978”Dynamic Ports (UDP Multicast) 

A set of Dynamic UDP Multicast ports used to exchange state and configuration
information between Ubisense applications/services via a proprietary NAK-based
reliable multicast protocol.

The multicast IP addresses and port usage are configurable via the Ubisense
command line tool ‘ubisense_configuration_client’ by setting the following
configuration parameters ‘multicast_min’, ‘multicast_max’ &
‘multicast_base_port’.

The default values for these three parameters are as follows:

    
    
    multicast_min 239.192.0.1
    multicast_max 239.192.255.255
    multicast_base_port 55000
    

The range of available UDP multicast ports will be 55000 up to 65535.

### Display the Default Dynamic UDP Multicast Port Range

To view the currently used UDP multicast ports the Ubisense tool
‘UbisenseMulticastAdmin.exe’ (Windows only) can be used (which is installed by
default in the C:\Program Files (x86)\Ubisense 2.1\bin folder).

### Restricting the Default Dynamic UDP Multicast Port Range

To restrict the multicast port range to (for example) 62000 to 65535 the
following commands can be used via the Ubisense command-line tool
ubisense_configuration_client (Windows):

    
    
    ubisense_conifguration_client set multicast_min 239.192.0.1
    ubisense_configuration_client set multicast_max 239.192.255.255
    ubisense_configuration_client set multicast_base_port 62000

On Linux-based servers add the above lines to the platform.conf file.

**Note:** If you do change the multicast port range, the Ubisense Core and
Local Controllers should be stopped, the file UMulticast%Assigned.udata (in
the top level folder of your Dataset) should be deleted and the Core and Local
Controller restarted. This process ensures the multicast ports being used are
re-established, ensuring the new port range is adopted—a new
UMulticast%Assigned.udata file will be created in the Dataset folder.

# Protocol Address Ranges: Defaults and Configuration Options

The following sub-sections detail the default protocol address ranges and the
available configuration options for each of the following:

  * Configuration Protocol (UDP Unicast, with Broadcast Fall Back)
  * Distributed Logging (UDP Multicast or UDP Unicast)
  * Service Finder Protocol (UDP Multicast)
  * Event Channel Protocol (UDP Multicast)
  * Remote Operations Protocol (UDP Unicast)

In addition, information is provided on the following:

  * Multi-networked Machine Configuration
  * Limiting the Port Range of Hashed Ports

## Configuration Protocol (UDP Unicast, with Broadcast Fall Back)

### Purpose

To set up the network protocol configuration for any Ubisense program (i.e.
every Ubisense client or service; every Ubisense sensor).

### Implementation

The Ubisense core server listens on a well-known port for a configuration
request in a single UDP packet. When a request is received it returns
configuration data in a single unicast UDP packet addressed to the sender of
the configuration request.

### Parameters

The core server listens on the well-known port 49980. Ubisense programs
contact the configuration server using one of three methods to determine the
IP address of the core server machine:

  1. For sensors, the address can be written to flash memory on the sensor
  2. Failing this the program uses the DNS entry ‘ubisenseconfig’
  3. Failing this the program sends the configuration request as a broadcast message

### Provision

Unicast UDP must be routed between the Ubisense core server and all network
devices running Ubisense software. If the DNS method is not used to identify
the Ubisense core server, and you wish to run Ubisense programs on non-sensor
hardware, you must route broadcast traffic for port 49980 so that all Ubisense
programs can contact the core server. If the DNS method is used, the
configuration protocol will only use unicast traffic.

## Distributed Logging (UDP Multicast or UDP Unicast)

### Purpose

To gather tracing (e.g. logging messages, warnings) from Ubisense programs and
sensors and store it in a central location.

### Implementation

Programs send text in UDP multicast messages to the channel
‘monitor_mcast_addr:monitor_mcast_port’.

### Parameters

The parameters are sent to programs via the configuration protocol and can be
specified using the ubisense_configuration_client.

The pairs of {parameter name, default value} are given below:

{ "monitor_mcast_addr", "239.255.255.254" }

{ "monitor_mcast_port", 49979 }

If unicast monitoring is preferred, then these parameters must be set (again,
parameter name and default value are given):

{ "unicast_monitor_address", "" }

{ "unicast_monitor_port", 0 }

unicast_monitor_port defaults to 0, but should be set to a port outside the
reserved and dynamic ranges on your server. For example, on Windows, use a
unassigned port in the range 1024 to 49151.

If these parameters are set, then multicast will not be used. That is, unicast
monitoring will override multicast.

### Provision

If multicast monitoring is chosen, the network must route multicast traffic
for the specified channel.

## Service Finder Protocol (UDP Multicast)

### Purpose

To locate Ubisense services on the network.

### Implementation

Each Ubisense service listens on the multicast channel
finder_group:finder_port. To locate a service, a program multicasts a service
request for that service to the channel. The identified service replies by
multicasting a service response to the same channel.

### Parameters

The parameters are sent to programs via the configuration protocol and can be
specified using ubisense_configuration_client.

The pairs of {parameter name, default value} are given below:

{ "finder_group", "239.195.255.255" }

{ "finder_port", 49981 }

### Provision

If Ubisense services or thick clients are to run across multiple machines on a
network, the network must route multicast traffic for the specified channel.

## Event Channel Protocol (UDP Multicast)

### Purpose

To propagate Ubisense configuration and application state reliably between
Ubisense programs.

### Implementation

For each Ubisense service, a proprietary NAK-based reliable multicast protocol
is implemented by sending messages over a single multicast channel. Services
will choose one of a set of available channels as specified below. If very few
channels are available then multiple services can share a single multicast
channel, but this is generally less efficient than having a single channel
available for each service.

### Parameters

The parameters are sent to programs via the configuration protocol and can be
specified using ubisense_configuration_client.

The pairs of {parameter name, default value} are given below:

{ “multicast_min”, “239.192.0.1” }

{ "multicast_max", "239.192.255.255" }

{ "multicast_base_port", 55000 }

(multicast ports are used from multicast_base_port to up to 65535).

The (Windows only) application UbisenseMulticastAdmin.exe (in the Ubisense
‘\bin’ directory) can be used to inspect the actual multicast channels in use
by services. This can be used to check how many channels you need.

### Provision

The network must route multicast traffic for the range of channels specified
by the configuration parameters.

## Remote Operations Protocol (UDP Unicast)

### Purpose

To perform invocations of procedures on Ubisense services.

### Implementation

Ubisense services bind to a port on their host machine using bind(0) so that
the machine will allocate an available port. They listen for UDP requests on
this port and respond with UDP unicast datagrams sent to the sender address of
the request.

### Parameters

There are no specific parameters at the Ubisense level because the port used
is allocated by the host machine as a result of the bind(0) request.

### Provision

The network must route UDP unicast traffic to/from any port that may be
allocated via bind(0) for any machine running Ubisense programs.

## Multi-networked Machine Configuration

### Purpose

In some machines which contain multiple network interfaces it can be desirable
to specify that the Ubisense programs use one specific network interface.

### Parameters

The network interface can be specified using the Windows registry (or using
the platform.conf file on Linux machines).

{ “platform_interface”, (no default value) }

##  Limiting the Port Range of Hashed Ports

### Purpose

In some cases, cellular services which publish sink address endpoints use a
hash of their cell ID to calculate which port to use in the sink endpoint. In
version 3.5, two new configuration parameters are available to define a range
of permitted ports in this situation.

### Parameters

The pairs of {parameter name, default value} given below can be specified
using the Windows registry (or using the platform.conf file on Linux
machines):

{ "id_hash_min_port", 32768 }

{ "id_hash_max_port", 40960 }

These specify the lower and upper limits on the ports that can be assigned in
this way, such that a sink address port will always be >= id_hash_min_port and
< id_hash_max_port, and if the specification is in any way unworkable (limit
values not in a legal port range, or the upper limit is not greater than the
lower limit) then bind(0) will be used instead.

  * Ubisense Protocol Addresses and Port Ranges
  * Introduction
  * Port Ranges – An Overview
    * Primary UDP Ports
      * Summary of Primary UDP Ports 
    * Dynamic Ports (UDP/TCP connections)
      * Display the Default Dynamic Port Range (Windows)
      * Setting the Default Dynamic Port Range (Windows)
      * Display the Default Dynamic Port Range (Linux)
      * Setting the Default Dynamic Port Range (Linux)
      * Display the Default Dynamic UDP Multicast Port Range
      * Restricting the Default Dynamic UDP Multicast Port Range
  * Protocol Address Ranges: Defaults and Configuration Options
    * Configuration Protocol (UDP Unicast, with Broadcast Fall Back)
      * Purpose
      * Implementation
      * Parameters 
      * Provision
    * Distributed Logging (UDP Multicast or UDP Unicast)
      * Purpose 
      * Implementation 
      * Parameters
      * Provision 
    * Service Finder Protocol (UDP Multicast)
      * Purpose 
      * Implementation 
      * Parameters 
      * Provision 
    * Event Channel Protocol (UDP Multicast)
      * Purpose 
      * Implementation 
      * Parameters 
      * Provision 
    * Remote Operations Protocol (UDP Unicast)
      * Purpose 
      * Implementation 
      * Parameters 
      * Provision 
    * Multi-networked Machine Configuration
      * Purpose 
      * Parameters 
    * Limiting the Port Range of Hashed Ports
      * Purpose
      * Parameters

![Navigate previous](../../../images/transparent.gif) ![Navigate
next](../../../images/transparent.gif) ![Expand
all](../../../images/transparent.gif) ![](../../../images/transparent.gif)
![Print](../../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

