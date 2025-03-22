

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

# Ubisense Installation Guide for SmartSpace with Site connector

A SmartSpace installation comprises the core Ubisense software required to run
SmartSpace along with any further software for additional SmartSpace features
you have licensed.

Site connector connects Ubisense platforms on separate networks using TCP/IP.

These instructions guide you through installing Ubisense SmartSpace software.
They include a description of the organization and installation of Ubisense
software across server, admin and client machines; prerequisites for
installation; and the stages of the installation process.

SmartSpace installations can range in size from a single computer running all
SmartSpace software, for example for evaluation purposes, to several servers
with associated admin and client machines in a large industrial setting.
SmartSpace can be installed and run on Windows and Linux computers and an
installation may include a mix of these, for example with Linux servers and
Windows client machines, and the instructions that follow include information
for both Linux and Windows.

For Windows computers, installation files (.msi) are supplied. However,
because of the variations between Linux distributions and between package
management systems used by different Enterprise configurations, Ubisense do
not provide an automatic installation method for Linux. Instead the
instructions describe the necessary state of a Ubisense platform installation
on Linux, prerequisites for the installation, the layout and permissions
expected, and example scripts.

The next section provides an overview of the installation process and
subsequent sections take you through installing SmartSpace with Site connector
step by step.

# The Ubisense Installation Process

Ubisense requires software to be installed on three types of machine: server,
admin and client.

  * Servers run the core and controller software, and the Ubisense platform from which you can start and stop the Ubisense servers. Ubisense servers can run on either Windows or Linux (see Requirements for supported versions).
  * The software installed on an admin machine enables you to manage the installation and deployment of SmartSpace features across your entire SmartSpace installation.
  * On client machines, you will find the SmartSpace applications available to users according to the SmartSpace features you have licensed.

Depending on your requirements, you might install all three SmartSpace
machines on a single computer or you might spread the installation over a
number of machines.

The following are the steps required to set up a new installation:

Install the Ubisense Software

  1. Install the Ubisense server software onto the relevant machine(s).
  2. Start the core server and service controllers.
  3. Install licenses.
  4. Install the Ubisense admin software onto the relevant machines.
  5. Install and deploy licensed SmartSpace features.
  6. Install the Ubisense client software onto the relevant machines.
  7. Download SmartSpace software to client machines.

Depending on the features you have licensed, users may access SmartSpace via a
web interface, for example to view Web maps. In this case additional steps are
required to set up a web server. You do not need to install additional
software for end users to access the browser-based features.

Install Site connector

After you have installed the core software, you can install Site connector by
installing and deploying additional services.

  1. Install the Site Connector for Servers service.
  2. Install the Site Connector Client or the Site Connector Client for Servers services.

# Requirements

This section describes the hardware and software prerequisites for a
SmartSpace with Site connector installation.

## Server Hardware Requirements

Exact requirements for server hardware will depend on such things as the
number of sensors and tags in your installation or the number of users
querying any browser-based applications you have licensed. Contact Ubisense
for further guidance on the specific requirements for your installation.

The following is an illustration of an installation with two servers running
DIMENSION4 and SmartSpace with the Visibility component.

Feature | Server 1 (DIMENSION4 \+ SmartSpace core) | Server 2 (Windows server server running IIS)  
---|---|---  
Processor  | Quad-core Intel® Xeon® processors 3400 series  | 16-core Intel® Xeon® processors  
Memory | 8 GB | 8 GB  
Ethernet Interface | Gigabit Network Adapter | Gigabit Network Adapter  
Virtualization | For information about virtualization, contact Ubisense Support. | For information about virtualization, contact Ubisense Support.  
  
## Server Software Requirements

Ubisense supports the following operating systems:

Windows

  * Windows Server 2012 R2 (Windows Server 2012 is also supported, but customers should upgrade to R2, per Microsoft advice)
  * Windows Server 2016
  * Windows Server 2018 R2

Additionally, for client machines (and for proofs of concept, with the
agreement of Ubisense Support):

  * Windows 7.0 Professional
  * Windows 8.1 Professional (Windows 8.0 has been withdrawn by Microsoft and customers should upgrade to 8.1 or Windows 10)
  * Windows 10 Enterprise

Linux

  * SUSE Linux Enterprise Server (SLES) 11 SP4
  * SUSE Linux Enterprise Server (SLES) 12 SP2
  * Red Hat® Enterprise Linux® (RHEL) 7.0
  * Red Hat® Enterprise Linux® (RHEL) 7.3

If you are installing a web server for use with the Visibility component, see
the additional considerations discussed in Linux Requirements for SmartSpace
Web.

## Database Server for Reporting

Either of the following are required only if the Reporting component is
licensed:

  * SQL Server 2008 R2 or higher
  * Oracle 11G R2 or higher

For information on configuring servers for use with the Reporting component,
see [SmartSpace Reporting](../Reporting/reporting-developer.htm).

## Web Server Requirements

If you have also licensed any of the following SmartSpace features which
provide web-based functionality, you must also configure a web server:

  * Web mapssReal-time views of the locations of tracked assets, with role-specific searches, representations, details and alerts
  * Web formssCustomizable screens showing role-specific lists and forms based on current data objects, types and business object properties
  * HMIssCustom interfaces for displaying current business objects and properties in the SmartSpace website
  * Operations web interfacesWeb user-interfaces for the operation of applications and maintenance of tags in the Ubisense location system
  * Web reportssDeliver reports based on location and property history

Additionally, if you have licensed the feature, you must configure a separate
web server for the Application REST APIsA web API serving UDM
objects/properties.

From release 3.4, SmartSpace Web and the SmartSpace REST API can be deployed
on either Windows or Linux web servers.

Under Windows, the websites are installed using Windows Installer, and are
controlled and hosted under IIS.

For Windows installations, you will also need to download the 2.2.x ASP.NET
Core/.NET Core: Runtime & Hosting Bundle from Microsoft (described in
Installing SmartSpace Web on Windows).

On Linux, the websites are controlled by the Ubisense platform controller, as
services, and by default require a reverse proxy (such as Apache2) to make
them available to the network (see Installing SmartSpace Web on Linux).

## Supported Browsers

Supported browsers for use with SmartSpace's web-enabled features are recent
versions of:

  * Internet Explorer 11
  * Microsoft Edge
  * Chrome
  * Chrome for Android
  * iOS Safari

Additionally, recent versions of the following browsers work but are not
explicitly supported:

  * Firefox
  * Opera
  * Safari

## Additional Requirements for Windows Installations

You may need to install Microsoft® .NET Framework 4.7.1 if this was not
included in your Windows software.

## Additional Requirements for Linux Installations

The following are requirements for Linux computers onto which server or admin
machines are to be installed:

  * Platform executables require a 32-bit libstdc++ compatible with libstdc++.so.6.0.8, which means any libstdc++.so.6.0.X where X >= 8.
  * The executables also require the 32-bit (i386) /lib/ld-linux.so.2.
  * The firewall should be disabled on the server.
  * In order to work around kernel bind(0) behavior, the local dynamicport range should be changed. 
    * **Either** : place the following in an init script such as /etc/rc.d/rc.local: sysctl -w net.ipv4.ip_local_port_range=32768 49978
    * **Or** : place the following in /etc/sysctl.conf: net.ipv4.ip_local_port_range=32768 49978

After reboot or applying sysctl -p, the property net.ipv4.ip_local_port_range
can be checked with sysctl -a.

### Platform user

A user should be configured to execute platform services. We will refer to
this as the platform user.

### Operations group

A group should be configured for operations. Users in this group should be
able to perform production operations, including starting and stopping the
platform services, making and restoring backups, and performing other
diagnostic and support roles, such as license management and platform service
upgrades. The platform user might be in the operations group.

### Windows client machine

In order to run the SmartSpace Config software, you will need access to a
Windows computer to install a client machine.

# Unzipping Software to a Distribution Directory

The SmartSpace software is supplied as a zipfile with the name SmartSpace
followed by numbers indicating the version of the software, for example
SmartSpace_3_3_669.zip. Before you install SmartSpace, you need to unzip this
file into a distribution directory accessible to the machines on which you
will be installing the software.

# Installing the Server Software on Windows

## Installing the Server Software

On each machine you want to use as a server, you must install the Ubisense
server software.

During the installation process, for each server machine you can choose to
install either the core server or service controller or both. If you intend to
run SmartSpace on a single server, you need to install both the core server
and service controller on that machine. For an installation with more than one
server, you need to run the core server on one machine only and the service
controller on the rest, and you can install the components accordingly.

To install the server software:

  1. Go to the servers\windows directory of your SmartSpace distribution directory.
  2. Double-click the UbisenseServers.msi file and the Ubisense Servers Setup wizard appears.
  3. Click Next to display the Custom Setup dialog.

![screen shot of Custom Install dialog](../../images/3_5-custom-install-
dialog.png)

  4. Choose the components to install.

By default, all features are selected. Choose whether to install or exclude
items using the dropdowns beside their names. Reset returns you to the default
selection.

  5. Choose the location for the software.

You can accept the default C:\Program Files (x86)\Ubisense 3 or click Browse
to select another destination.

  6. Click Next and click Install.
  7. When the installation is complete, click Finish to close the Ubisense Servers Setup wizard.

You have now installed Ubisense Platform Control and the Ubisense server
software onto your computer. Using Platform Control to start the server
software is described in the next section.

## Starting the Server Software

After you have installed the server software, you need to start the core
server and service controller(s).

To start the server software:

  1. From a SmartSpace server, run Platform Control.
  2. For a new installation, you need to choose a location for your dataset:

In the Properties section, browse to the required location (creating a new
folder, if needed) and click OK (new).

  3. Start the core server and service controller by:
    1. Selecting UbisenseCoreServer 3 and then clicking Start.

    2. Selecting UbisenseServiceController 3 and then clicking Start.

See the information below for information on starting services with a single
server or multiple servers.

You are offered only the server components installed on the machine (see
Installing the Server Software).

The status of each service changes to to be started.

  4. Click Apply. The status of each service changes to running.

![Closed](../../images/transparent.gif)Running SmartSpace on a Single Server

If you want to configure SmartSpace to run on a single server, run Platform
Control on the server and:

  * In Services, ensure you have started both the core server and the service controller.

![Closed](../../images/transparent.gif)Running SmartSpace on Multiple Servers

If you want to configure SmartSpace to run on more than one server, you must:

  * Assign one server to be the core server and on this machine only run Platform Control and in Services start the core server.
  * On all other server machines, run Platform Control and in Services start the service controller.

![Closed](../../images/transparent.gif)Backing up your Dataset

After you have set up your SmartSpace installation, ensure that you back up
your dataset occasionally, so that you can recover your data. To take a
backup, use the Backup Dataset option, and then compress the folder.

You can also use the ubisense_backup.exe command-line tool from the
tools\windows folder of your distribution directorysThe distribution directory
is the directory into which you unzipped your Ubisense software. to backup
your dataset.

# Installing the Server Software on Linux

## Installing the Server Software

For Linux servers, there are two executables: ubisense_core_server and
ubisense_local_control. You can find them in the following locations in the
distribution directory:

    
    
        servers/linux/ubisense_core_server
        servers/linux/ubisense_local_control

If you want to run SmartSpace on a single server, copy both of these files to
that machine.

If you want to run SmartSpace on several servers, copy ubisense_core_server
onto one server machine only and ubisense_local_control onto the remainder of
the machines.

## Starting the Server Software

On each server machine, one or both of the ubisense_core_server and
ubisense_local_control services should be executed on startup, depending on
whether the machine is to act as a core server, a service controller, or both.
These services should be executable by the platform user, and no other user,
to avoid accidental execution. Because of the variations between Linux
distributions, Ubisense do not ship standard startup scripts for these
executables, but examples are provided:

![Closed](../../images/transparent.gif)Sample init.d scripts for core server
and service controller

Core Server

    
    
    #!/bin/bash
    #
    # Init file for Ubisense core platform server
    #
    # chkconfig: 345 98 02
    # description: Ubisense core platform for linux
    # processname: ubisense_core_server
    # config: /etc/ubisense.conf
    
    # source function library
    
    
    
    if [ -e /etc/rc.d/init.d/functions ] 
    then
       . /etc/rc.d/init.d/functions
    else
     # steal status() from /etc/rc.d/init.d/functions on a RH box
     status() {
    	local base=${1##*/}
    	local pid
    
    	# Test syntax.
    	if [ "$#" = 0 ] ; then
    		echo $"Usage: status {program}"
    		return 1
    	fi
    
    	# First try "pidof"
    	pid=`pidof -o $$ -o $PPID -o %PPID -x $1 || \
    	     pidof -o $$ -o $PPID -o %PPID -x ${base}`
    	if [ -n "$pid" ]; then
    	        echo $"${base} (pid $pid) is running..."
    	        return 0
    	fi
    
    	# Next try "/var/run/*.pid" files
    	if [ -f /var/run/${base}.pid ] ; then
    	        read pid < /var/run/${base}.pid
    	        if [ -n "$pid" ]; then
    	                echo $"${base} dead but pid file exists"
    	                return 1
    	        fi
    	fi
    	# See if /var/lock/subsys/${base} exists
    	if [ -f /var/lock/subsys/${base} ]; then
    		echo $"${base} dead but subsys locked"
    		return 2
    	fi
    	echo $"${base} is stopped"
    	return 3
     }
    fi
    
    
    
    # pull in sysconfig settings
    [ -f /etc/ubisense.conf ] && . /etc/ubisense.conf
    
    PLATFORM_USER=${PLATFORM_USER:-platform}
    UBISENSE_CORE_SERVER=/home/platform/bin/i586_linux_2.6/ubisense_core_server
    export UCONFIG=/etc/ubisense/platform.conf
    
    RETVAL=0
    prog="ubisense"
    
    start()
    {
    	echo -n $"Starting ubisense_core_server:"
    	if [ -e /etc/rc.d/init.d/functions ] 
    	then
    	   daemon --check ubisense_core_server --user=platform ${UBISENSE_CORE_SERVER} -d
    	else
    	   startproc -u platform ${UBISENSE_CORE_SERVER} -d
    	fi
            touch /var/lock/subsys/ubisense_core_server
    	echo
    }
    
    stop()
    {
    	echo -n $"Stopping ubisense_core_server:"
            if [ -e /etc/rc.d/init.d/functions ] 
    	then
    	    killproc ubisense_core_server
    	else
    	    killproc ${UBISENSE_CORE_SERVER}
    	fi
            rm -f /var/lock/subsys/ubisense_core_server
    	echo
    }
    
    
    case "$1" in
    	start)
    		start
    		;;
    	stop)
    		stop
    		;;
    	restart)
                    stop
    		start
    		;;
    	status)
                    status ubisense_core_server
    		;;
    	*)
    		echo $"Usage: $0 {start|stop|restart|status}"
    		RETVAL=1
    esac
    exit $RETVAL

Local Controller

    
    
    #!/bin/bash
    #
    # Init file for Ubisense local controller
    #
    # chkconfig: 345 99 01
    # description: Ubisense local controller for linux
    # processname: ubisense_local_control
    # config: /etc/ubisense.conf
    
    # source function library
    if [ -e /etc/rc.d/init.d/functions ] 
    then
       . /etc/rc.d/init.d/functions
    else
     # steal status() from /etc/rc.d/init.d/functions on a RH box
     status() {
    	local base=${1##*/}
    	local pid
    
    	# Test syntax.
    	if [ "$#" = 0 ] ; then
    		echo $"Usage: status {program}"
    		return 1
    	fi
    
    	# First try "pidof"
    	pid=`pidof -o $$ -o $PPID -o %PPID -x $1 || \
    	     pidof -o $$ -o $PPID -o %PPID -x ${base}`
    	if [ -n "$pid" ]; then
    	        echo $"${base} (pid $pid) is running..."
    	        return 0
    	fi
    
    	# Next try "/var/run/*.pid" files
    	if [ -f /var/run/${base}.pid ] ; then
    	        read pid < /var/run/${base}.pid
    	        if [ -n "$pid" ]; then
    	                echo $"${base} dead but pid file exists"
    	                return 1
    	        fi
    	fi
    	# See if /var/lock/subsys/${base} exists
    	if [ -f /var/lock/subsys/${base} ]; then
    		echo $"${base} dead but subsys locked"
    		return 2
    	fi
    	echo $"${base} is stopped"
    	return 3
     }
    fi
    
    # pull in sysconfig settings
    [ -f /etc/ubisense.conf ] && . /etc/ubisense.conf
    
    
    
    PLATFORM_USER=${PLATFORM_USER:-platform}
    UBISENSE_LOCAL_CONTROL=/home/platform/bin/i586_linux_2.6/ubisense_local_control
    export UCONFIG=/etc/ubisense/platform.conf
    
    RETVAL=0
    prog="ubisense"
    
    start()
    {
    	echo -n $"Starting ubisense_local_control:"
    	if [ -e /etc/rc.d/init.d/functions ] 
    	then
    	      daemon --check ubisense_local_control --user=platform ${UBISENSE_LOCAL_CONTROL} -d
            else
    	      startproc -u platform ${UBISENSE_LOCAL_CONTROL} -d
    	fi
    	touch /var/lock/subsys/ubisense_local_control
    	echo
    }
    
    stop()
    {
    	echo -n $"Stopping ubisense_local_control:"
    	if [ -e /etc/rc.d/init.d/functions ] 
    	then
              killproc ubisense_local_control
    	else
    	  killproc ${UBISENSE_LOCAL_CONTROL}
    	fi
            rm -f /var/lock/subsys/ubisense_local_control
    	echo
    }
    
    
    case "$1" in
    	start)
    		start
    		;;
    	stop)
    		stop
    		;;
    	restart)
                    stop
    		start
    		;;
    	status)
                    status ubisense_local_control
    		;;
    	*)
    		echo $"Usage: $0 {start|stop|restart|status}"
    		RETVAL=1
    esac
    exit $RETVAL  
    

![Closed](../../images/transparent.gif)Sample systemd scripts for a RedHat
Linux machine

The following example illustrates the use of sysemd scripts for SmartSpace
with the core and controller executables on a single Red Hat® Linux machine.

The instructions assume the core server and local controller executables
(ubisense_core_server and ubisense_local_control) are in
/home/platform/bin/i586_linux. If this is not the case, the service files
(ubisense_core_server.service and ubisense_local_control.service) will have to
be updated to reflect the location of the executable.

  1. Add a target file ubisense_service.target in /etc/systemd/system containing the following:
    
        [Unit]
    Description=ubisense_service Target
    Requires=multi-user.target
    After=multi-user.target
    AllowIsolate=yes
    

  2. Run the following commands:
    
        systemctl list-units --type service
    systemctl daemon-reload
    systemctl enable ubisense_service.target
    systemctl isolate ubisense_service.target
    ln -sf /etc/systemd/system/ubisense_service.target /etc/systemd/system/default.target.wants/
    

  3. Reboot the machine.
  4. Check the status of the target using the command below to make sure the target is active and running:
    
        systemctl list-units --type target

  5. Add a service file ubisense_core_server.service in /etc/systemd/system containing the following:
    
        [Unit]
    Description=ubisense_core_server daemon
    After=multi-user.target
    
    [Service]
    Type=forking
    ExecStart=/home/platform/bin/i586_linux_2.6/ubisense_core_server -d
    
    [Install]
    WantedBy=ubisense_service.target
    

  6. Add a service file ubisense_local_control.service in /etc/systemd/system containing the following:
    
        [Unit]
    Description=ubisense_local_control Daemon
    After=multi-user.target
    
    [Service]
    Type=forking
    ExecStart=/home/platform/bin/i586_linux_2.6/ubisense_local_control -d
    
    [Install]
    WantedBy=ubisense_service.target
    

  7. Run the following commands:
    
        systemctl daemon-reload
    systemctl enable ubisense_local_control.service 
    systemctl enable ubisense_core_server.service
    
    

  8. Reboot the machine.
  9. To list the status of the services run the following command:
    
        systemctl list-units --type service

###  Service security and Authentication using Cached Service Credentials on
Linux

If you are running on a Linux server and configure a security policy in
Service Manager that requires services to authenticate as a user, using
ubisense_cache_service_credentials, then you must run the core and controller
software with the -d flag (as shown in the examples above). Otherwise all
services will still have a connected stdin/stdout and will attempt to prompt
for credentials rather than reading the cached service credentials.

## Configuration Parameters

On Linux, the local configuration parameters for each core or controller
machine are set, by default, in a configuration file. This file contains
configuration parameters for the local platform processes, such as the
location of the dataset and the networking mode. The default location expected
by all platform executables is /etc/ubisense/platform.conf. If another
location is to be used, then the environment variable UCONFIG should be
defined: it is recommended this be set in startup scripts for all users on the
server, but it certainly is required for the platform user and all users in
the operations group. UCONFIG should be the full path of platform.conf in its
desired location.

Configuration parameters are each on a single line in the file, with a colon
and white-space separating the name of the parameter from the value. For
example:

    
    
    platform_dataset: /mnt/syn013/ubisense/production/dataset
    no_multicast_mode: 1
    server_unicast_addresses: 10.1.5.207,10.1.16.73

## Warnings and Errors

Immediate warnings and errors when starting the two platform service
executables are logged to the Linux syslog. On a typical Linux distribution
they will either in /var/log/messages or /var/log/warn. If the services will
not run, check these locations for more information.

## Platform Dataset

The platform dataset is the directory where both the ubisense_core_server and
ubisense_local_control services store platform state. Files in this directory
comprise the configuration and ongoing operational state of the platform core,
and of all the services configured to run on the local controller.

This directory should be owned by the platform user with full control. The
operations group should also have read permission, to allow backup. Restore
requires that the backup be copied here and all files set to have platform
ownership. See Configuring Operations Permissions.

The default platform dataset location is /home/platform/dataset. To set a
different location, set platform_dataset in the platform.conf file.

## Configuring Operations Permissions

If your Linux distribution supports sudo, then the operations group can be
assigned permission to start and stop the platform services, and to change
ownership of files to the platform user. For example, the following lines
might be added to the end of the /etc/sudoers file using visudo.

    
    
    %operations ALL = (root) NOPASSWD: /sbin/service ubisense_core_server *, \
    /sbin/service ubisense_local_control *, \
    /bin/chown -R platform *, /bin/chown platform *

With this configuration, any user who is in the operations group will be able
to run sudo /sbin/service ... to stop, start and get the status of just the
platform services. They will also be able to restore platform dataset backups
and set the ownership of the restored files back to the platform user.

## Backing up your Dataset

After you have set up your SmartSpace installation, ensure that you back up
your dataset occasionally, so that you can recover your data. Use the
ubisense_backup command-line tool from the tools\linux folder of your
distribution directorysThe distribution directory is the directory into which
you unzipped your Ubisense software. to backup your dataset.

# Installing Licenses on Windows

SmartSpace feature licenses are supplied as a zipfile with the name
FeatureSetup.zip. Before you install the licenses, you need to unzip this file
into a directory accessible to a server machine from which
ubisense_core_server will be executed.

To install SmartSpace licenses:

  1. Go to the directory where you unzipped the licenses.
  2. Double-click the FeatureSetup.msi file and the Ubisense Feature Licenses Setup Wizard appears.
  3. Click Next and the Ubisense Feature Licenses Setup wizard appears.
  4. By default all licenses are selected for installation to the default location C:\Program Files (x86)\Ubisense 3\bin.
     * Click on the directory tree of licenses, click on individual features and choose whether or not they are to be installed  

     * Click Reset to return the licenses selection to its default setting
     * Click Browse to navigate to a different directory to install the licenses in  

  5. When you have selected the files and location you require, click Next and then click Install.
  6. When installation is complete, click Finish to close the wizard.

# Installing Licenses on Linux

License files must be placed on the server so that the platform can find them.
The default location is in the directory /etc/ubisense. If a different
location is required, then the license_search_path can be defined in
platform.conf (see Configuration Parameters for information on the location of
this file). Each program also searches for licenses in the same directory as
its executable. Licenses should be readable by both the platform user and by
the operations group.

# Installing Admin Machines on Windows

To install the Ubisense software for an admin machine:

  1. Go to the clients\windows directory of your SmartSpace distribution directory.
  2. Double-click the UbisenseServiceManager.msi file and the Ubisense Service Manager Setup wizard appears.
  3. Click Next.
  4. Choose the Destination Folder for the software.  
You can accept the default C:\Program Files (x86)\Ubisense 3 or change to
another destination.

  5. Click Next and click Install.
  6. When the installation is complete, click Finish to close the Ubisense Service Manager Setup wizard.

You have now installed Ubisense Service Manager onto your computer and you can
now install and deploy SmartSpace features.

Before you can install and deploy features, you must install their licenses.

  1. From an admin machine, run Service Manager 3.
  2. Click on INSTALL SERVICES.
  3. Specify the directory from which to install.

This is generally the packages folder in your SmartSpace distribution
directory. Click <Recently used directories> to select previous locations of
features.

  4. Select the features you want to install.

Use Select all or Clear all or click on individual features to indicate which
items you want to install.

     * All SmartSpace features are listed.
     * All licensed features are selected by default.
     * Unlicensed features are shown preceded by [Unlicensed]. You cannot select these features.
  5. Click Install.
  6. When installation is complete, click Close to close the Installing Services dialog.

You have now installed your SmartSpace features. In Ubisense Service Manager
you can see which services have been deployed by the installed features. Click
on MANAGE SERVICES to display the status of installed services and manage
their deployment.

# Installing Admin Machines on Linux

Administrative executables, used to configure and maintain the running state
of the Ubisense platform, should be executable by the operations group.

Your distribution directory contains the following admin executables:

    
    
        tools/linux/ubisense_backup
        tools/linux/ubisense_cache_service_credentials
        tools/linux/ubisense_configuration_client
        tools/linux/ubisense_file_downloader
        tools/linux/ubisense_installer
        tools/linux/ubisense_machine_id
        tools/linux/ubisense_multicast_test
        tools/linux/ubisense_proxyconfig_admin
        tools/linux/ubisense_restore_dataset
        tools/linux/ubisense_save_dataset
        tools/linux/ubisense_service_admin
        tools/linux/ubisense_service_ping
        tools/linux/ubisense_trace_receiver
        tools/linux/ubisense_transfer_config

# Installing Client Machines on Windows

In Windows, the Ubisense Application Manager allows you to perform the
following configuration activities on a client machine:

  * Set up Start menu shortcuts for client applications
  * Download various command-line tools and SmartSpace documents to a specified location on a client machine

To install the Ubisense software for a client machine:

  1. Go to the clients\windows directory of your SmartSpace distribution directory.
  2. Double-click the UbisenseApplicationManager.msi file and the Ubisense Application Manager Setup wizard appears.
  3. Click Next.
  4. Choose the Destination Folder for the software.  
You can accept the default C:\Program Files (x86)\Ubisense 3 or change to
another destination.

  5. Click Next and click Install.
  6. When the installation is complete, click Finish to close the Ubisense Application Manager Updater Setup wizard.

You have now installed the Ubisense Application Manager and can now configure
shortcuts to client applications and download documents and other files to
your client machine.

### Managing applications

To create shortcuts to SmartSpace applications:

  1. Run the Ubisense Application Manager and click on APPLICATIONS.
  2. Available applications are listed, with their version numbers and, where applicable, location on the Start menu. 

Choose the applications you want to install.

     * Double-click a single application
     * Select several applications and press Enter

The following SmartSpace client program is available:

     * SmartSpace Config (the main SmartSpace configuration GUI)
  3. Click Create shortcuts for selected applications.

Shortcuts are created in the Start menu in the locations indicated.

### Managing tools and documents

To download SmartSpace command-line tools and documents to a selected
directory:

  1. Run the Ubisense Application Manager and click on DOWNLOADABLES.  
Command-line tools and documents are listed in different categories. The tools
and documents available to you depend on the features you have installed.

  2. Choose the tools or documents you want to download.

  3. Specify the directory to install the files in and click Start download.

The files are downloaded to the specified directory.

Whenever you upgrade your SmartSpace installation, you must follow the process
described above to replace your existing tools and documents with upgraded
versions.

# Installing Client Machines on Linux

In order to avoid the use of incompatible versions of SmartSpace
administrative and configuration tools, these tools are installed into the
platform along with service upgrades. You can then download the current
version of each tool onto your Linux client machine using the
ubisense_file_downloader.

Run the tool with no arguments for help.

For example, to download all Linux tools currently available to the current
directory, run:

> ubisense_file_downloader download --linux-only .

To force the overwriting of existing downloads, add \--force.

# Installing SmartSpace Web on Windows

If you have licensed SmartSpace features that are accessed in a browser, such
as Web maps or Web forms, you need to set up a web server before installing
these features.

To install and configure the Web Server:

  1. Enable Internet Information Services.
  2. Install the Windows .NET Core Runtime and Hosting Bundle.
  3. Install the websites required.
  4. Modify the website configuration files, if required.

## Enable Internet Information Services (IIS) on Windows 2016

  1. Open the Server Manager, click Add roles and features.
  2. Click through to Server Roles, and select Web Server (IIS).
  3. Click through to Web Server Role (IIS) and under Role Services, ensure that, in addition to the default features, you have enabled Security/Windows Authentication.
  4. Click through to Confirm the installation.

## Install the Windows .NET Core Runtime and Hosting Bundle

  1. Download the 2.2.x ASP.NET Core/.NET Core: Runtime & Hosting Bundle from Microsoft: [https://dotnet.microsoft.com/download/dotnet-core/2.2](https://dotnet.microsoft.com/download/dotnet-core/2.2)
  2. Run the installer.
  3. If .NET Core was not previously installed on the server, then a reboot is required for IIS to pick up the path to the .NET Core Runtime.

## Install the Website and/or REST API

Follow these instructions to install the SmartSpace Web application.

When you install the SmartSpace Web application, the following components are
created as part of the installation process:

Component |  Description  
---|---  
**Application Pool:** | SmartSpace has its own application pool.  
**Website:** | The entry point to SmartSpace via a browser.  
  
To install the SmartSpace Web application:

  1. Go to the web\windows directory of your SmartSpace distribution directory.
  2. Double-click the SmartSpaceWeb.msi.
  3. Enter a Website Name: this name will form part of the URL when accessing SmartSpace in a browser.
  4. Choose the location for the software.

You can accept the default C:\Program Files (x86)\Ubisense 3\SmartSpace\ or
click Change to select another destination.

  5. Enter an Application Pool name.
  6. Click Next and Install.

To install the SmartSpace Web API:

  1. Go to the web\windows directory of your SmartSpace distribution directory.
  2. Double-click the SmartSpaceWebApi.msi.
  3. Enter a Website Name: this name will form part of the URL when accessing SmartSpace in a browser.
  4. Choose the location for the software.

You can accept the default C:\Program Files (x86)\Ubisense 3\WebApiCore\ or
click Change to select another destination.

  5. Enter an Application Pool name.
  6. Click Next and Install.

By default, the SmartSpace website can be accessed by navigating to
http://localhost/smartspace and the REST API can be accessed by navigating to
http://localhost/smartspaceapi.

## Modify the website configuration files if required

Advanced configuration of the websites is done by creating and editing
configuration files in the installation folders. By default, on Windows, these
files are in:

  * SmartSpace website: C:\Program Files (x86)\Ubisense 3\SmartSpace\Web\localsettings.json
  * REST API website: C:\Program Files (x86)\Ubisense 3\WebApiCore\Web\localsettings.json

These files should be created if you wish to make advanced configurations,
rather than modifying the installed defaults in appsettings.json. This is
because appsettings.json can be overwritten on a software upgrade.

Header Authentication (SiteMinder)

The websites can read the authenticated user from a header passed to them by a
proxy server, such as SiteMinder. To configure this, set
"AuthOptions/UserHeader" to be the name of the header from which the logged in
user is to be extracted.

    
    
    {
        "AuthOptions": {
           "UserHeader": "SITEMINDER_USER"
       }
    }
    

If you configure this option, it is vital that users cannot access the website
except through the proxy server, because otherwise they could add their own
header as part of the request and gain unauthorized access. Typically in this
case you would configure IIS bindings to only listen on the loopback
interface, or configure IP Address and Domain Restrictions. See Microsoft IIS
documentation for details.

Switching to Forms Authentication

By default the Windows website installation uses Windows authentication for
login. You can switch to forms authentication by configuring LDAP parameters
and setting up "AuthOptions/UseCookiesOnWindows". For production or
integration deployment, you will need an SSL certificate signed by a suitable
root authority for your users. For development or test deployment, a test
certificate can be used instead (e.g. generated locally using OpenSSL). If you
configure forms authenticatication without SSL, it will not work.

In the following examples, the first example shows the configuration for an
Active Directory server, whilst the second shows the configuration for an LDAP
server that does not require a login for searching.

![Closed](../../images/transparent.gif)LDAP authentication with an Active
Directory server

    
    
    "LDAPAuth": {
          "Server": "adserver.company.com",
          "Port": "389",
          "User": "",
          "Password": "",
          "SearchStart": "dc=company,dc=com",
          "AccountId": "sAMAccountName"
       },
    
       "AuthOptions": {
          "UseCookiesOnWindows" : true,
          "ExpiryTimeSpan": "00:30",
          "SlidingExpiry":  true
       }
    }
    

![Closed](../../images/transparent.gif)LDAP authentication with no login for
searching

    
    
    "LDAPAuth": {
          "Server": "ldap.company.com",
          "Port": "389",
          "User": "",
          "Password": "",
          "SearchStart": "ou=people,dc=company,dc=com",
          "AccountId": "uid",
          "ObjectClass": "nsAccount"
       },
    
       "AuthOptions": {
          "UseCookiesOnWindows" : true,
          "ExpiryTimeSpan": "00:30",
          "SlidingExpiry":  true
       }
    }
    

![Closed](../../images/transparent.gif)How the LDAP validator behaves

The LDAP validator does the following:

  1. If User option set, bind using this user/password.
  2. If SearchStart is set, use the SearchStart, AccountId and ObjectClass to search for the DN of the entered user name. 
  3. Bind using the DN, if the search succeeded, or the entered user name. Use the entered password. If this bind succeeds, the user is authenticated successfully.

The validator reports what it is doing on the website trace (always on). for
example:

    
    
    [Tue Sep 24 14:23:03 2019, 127.0.0.1:42943] website: LDAPValidator: Is user valid marcin
    [Tue Sep 24 14:23:03 2019, 127.0.0.1:42943] website: LDAPValidator: searching (&(objectclass=nsAccount)(uid=marcin)) at base ou=people,dc=ubisense,dc=aws
    [Tue Sep 24 14:23:03 2019, 127.0.0.1:42943] website: LDAPValidator: binding as user uid=marcin,ou=People,dc=ubisense,dc=aws 

Configuring the Authentication Timespan

The cookies authentication uses an expiry time of 30 minutes and a sliding
timespan. This means that the authentication will expire 30 minutes after the
user closes the website, but will continue to be refreshed while the user is
still visiting the website.

You can disable this sliding expiry and set an absolute time after which login
will need to be repeated. For example, to log out after three hours:

    
    
    {
       "AuthOptions": {
          "ExpiryTimeSpan": "03:00",
          "SlidingExpiry":  false
       }
    }
    

Disable Hardened Headers

By default the website injects headers in each response for penetration
security. These disable cross-site/cross-frame scripting, prevent content type
sniffing, etc. If necessary, these headers can be disabled, and IIS configured
manually to add appropriate headers instead.

    
    
    {
        "SecurityOptions": {
           "HardenHeaders": false
        }
    }
    

Enable Cross Origin Scripting

By default, no CORS headers are sent, so browsers will refuse to execute the
API web methods from a page served from a different web server.

The option AllowOrigins in the appsettings.json file which overrides settings
in localsettings.json enables cross origin scripting:

    
    
    {
    ...
       "SecurityOptions": {
       "HardenHeaders": true,
       "AllowOrigins": [ "http://example.com", "https://*.mydomain.com" ]
       }
    ...
    }

If AllowOrigins is set, and matches the origin of a request, the API will
respond with suitable headers, for example:

    
    
    Access-Control-Allow-Credentials: true
    Access-Control-Allow-Headers: X-Requested-With
    Access-Control-Allow-Methods: PUT
    Access-Control-Allow-Origin: https://server.mydomain.com
    Access-Control-Max-Age: 3600

The browser will now allow the request. Note that this allows the browser to
cache the pre-flight OPTIONS responses for up to an hour, to reduce load on
the API server. Thus changes to the allowed origins may not be picked up by
browsers for an hour.

## Errors

When the website is loaded, you may see 502.5 “ANCM Out-of-Process Startup
Failure”.

This is normally because the .NET Runtime could not be found. Make sure you
restarted the server after installing the .NET Core Windows Server Hosting
Bundle.

Also, make sure that you included the Security/Windows Authentication feature
when deploying IIS, as this is required by the websites on Windows unless
forms or header authentication is configured.

## Security Configuration for SmartSpace Web with Security Manager

If you are using a non-trivial security manager configuration to force
authentication for services (as is the case for ACS installations) then you
must you must run the ubisense_cache_service_credentials tool on the web
server host. This is because the credentials.dat file created by the tool (in
the latest version) allows IIS_IUSRS as a reader. Without this, the web site
code cannot read the credentials, and therefore cannot connect to the platform
services it needs.

For a Windows server, you must use the version of the
ubisense_cache_service_credentials tool from the 3.4 sp1 distribution or
above.

# Installing SmartSpace Web on Linux

If you have licensed SmartSpace features that are accessed in a browser, such
as Web maps or Web forms, you need to set up a web server before installing
these features.

In this section, we will describe configuring the websites using Apache2 as a
reverse proxy. Advanced configuration options will then be covered later.

## Linux Requirements for SmartSpace Web

We support recent enterprise Linux distributions, such as SUSE Linux
Enterprise Server 11+ or Red Hat® Enterprise Linux® v7+.

The following instructions assume you are configuring a reverse proxy in
Apache 2.4.23 or above. For Red Hat® Enterprise Linux® Apache 2.4.23 is only
available for version 8+. Whilst configuring a reverse proxy on earlier
versions of Red Hat® Enterprise Linux® is possible, instructions for this are
beyond the scope of this guide.

The following packages must be installed on the server.

  * ldap 2.4 libraries

For production or integration deployment, you will need an SSL certificate
signed by a suitable root authority for your users. This certificate will be
installed for Apache2. SSL (TLS) is required for Linux installation because
the website uses forms-based authentication, and so must have transport level
security configured. For development or test deployment, a test certificate
can be used instead (e.g. generated locally using OpenSSL).

## Server Configuration

Ensure the web server is connected to the platform, using multicast, unicast
cluster (see [Smart Space Using Unicast Cluster Setup
Guide](../../ITResources/ITDocs/UnicastCluster/unicast-cluster-
configuration.htm)), or a site connector.

If you have not already done so, on the web server install the platform
servers for Linux, configure a dataset directory, and start a local
controller. The website will be deployed on this controller. See Installing
the Ubisense SmartSpace software on Linux.

If Microsoft .NET Core 2.2 is already installed on the server, the websites
will use that runtime (follow the instructions for Linux on
[https://dotnet.microsoft.com/](https://dotnet.microsoft.com/)). If a server-
wide installation of .NET Core is not provided, then an isolated local runtime
will be used, shared only by the platform services that use it.

## Authentication Options

There are two authentication methods supported in the web sites when deployed
on Linux: Forms authentication, and Header authentication.

Forms authentication directs the user to a login page when they attempt to
access a part of the web sites that requires authentication. This login page
gathers the user and password, which are then validated using a configured
LDAP server. If this succeeds, a cookie is returned to the user’s browser,
which is used to authenticate in subsequent requests. Forms authentication
requires the web site to be accessed via HTTPS for all authenticated or login
traffic, to protect the credentials and cookies. This is configured in the
reverse proxy that handles the HTTPS protocol.

Header authentication relies on another system, such as SiteMinder, doing
authentication before passing the request to the website. A special header is
set by this up-stream system on each request that reaches the web site,
indicating the authenticated user. The web site simply assumes that the given
header is authoritative. This is a commonly used method in enterprise
environments.

Either method can be used for the SmartSpace website, but the Rest API only
supports Header authentication (or no authentication).

## Configuration Files

Set up the configuration files for the SmartSpace website and REST API. On
Linux these are placed in /etc/ubisense. The files should all be readable only
by the user that runs the platform controller. The following configuration
files are used:

web.json

This contains configuration specific to the website. In the following
examples, we will set up the parameters to access the LDAP server used to
validate the user’s credentials. We also set a proxy base path matching the
reverse proxy path we will configure in Apache2 for the website. The first
example shows the configuration for an Active Directory server, whilst the
second shows the configuration for an LDAP server that does not require a
login for searching.

![Closed](../../images/transparent.gif)LDAP authentication with an Active
Directory server

    
    
    {
        "LDAPAuth": {
          "Server": "adserver.company.com",
          "Port": "389",
          "User": "",
          "Password": "",
          "SearchStart": "dc=company,dc=com",
          "AccountId": "sAMAccountName"
       },
    
         "ProxyOptions": {
            "Base": "/SmartSpace"
        }
     }
    

![Closed](../../images/transparent.gif)LDAP authentication with no login for
searching

    
    
    {
        "LDAPAuth": {
          "Server": "ldap.company.com",
          "Port": "389",
          "User": "",
          "Password": "",
          "SearchStart": "ou=people,dc=company,dc=com",
          "AccountId": "uid",
          "ObjectClass": "nsAccount"
       },
    
    
         "ProxyOptions": {
            "Base": "/SmartSpace"
        }
     }
    

![Closed](../../images/transparent.gif)How the LDAP validator behaves

The LDAP validator does the following:

  1. If User option set, bind using this user/password.
  2. If SearchStart is set, use the SearchStart, AccountId and ObjectClass to search for the DN of the entered user name. 
  3. Bind using the DN, if the search succeeded, or the entered user name. Use the entered password. If this bind succeeds, the user is authenticated successfully.

The validator reports what it is doing on the website trace (always on). for
example:

    
    
    [Tue Sep 24 14:23:03 2019, 127.0.0.1:42943] website: LDAPValidator: Is user valid marcin
    [Tue Sep 24 14:23:03 2019, 127.0.0.1:42943] website: LDAPValidator: searching (&(objectclass=nsAccount)(uid=marcin)) at base ou=people,dc=ubisense,dc=aws
    [Tue Sep 24 14:23:03 2019, 127.0.0.1:42943] website: LDAPValidator: binding as user uid=marcin,ou=People,dc=ubisense,dc=aws 

restapi.json

This contains configuration specific to the REST API. In this example, we will
set up a proxy base path matching the reverse proxy path we will configure in
Apache2 for the API:

    
    
    {
        "ProxyOptions": {
            "Base": "/SmartSpaceApi"
       }
    }
    

Here we are allowing anonymous access to the API. For header authentication
see the advanced configuration.

shared.json

shared.json is a configuration file that is loaded by both web sites, where
options shared by the two can be set up. This is not used in our example
configuration.

## Deploy the Platform Services

The platform services should be deployed using the Ubisense Service Manager
client or the ubisense_installer command-line tool.

To deploy the services using Ubisense Service Manager:

  1. Run Service Manager 3 on a Windows client connected to the platform.
  2. Select the INSTALL SERVICES task, click Browse and navigate to the extracted SmartSpace release, then go to folder web\linux\packages. 
  3. If you already have a .NET Core Runtime installed on the web server, unselect Shared runtime in the list of features to install.
  4. Click Install and wait for the dialog to finish.
  5. If you have multiple Linux controllers, deploy the website services onto the prepared Linux server:

    1. Select the MANAGE SERVICES task.
    2. Expand the Controllers entry under CELLS & CONTROLLERS, so you can see the web server controller.
    3. Under SERVICES, find the “Ubisense/Visibility/Web site” service. Drag this service and drop it onto the web server controller. It should deploy onto that controller.
    4. Repeat the above for the service “Ubisense/Application integration/RestAPI site”.
  6. The Web site and Rest API site services should now be running on the Linux web server, but will not be visible from the wider network.

To deploy the services using the ubisense_installer command-line tool:

  1. Go to the web\linux\packages directory of your SmartSpace distribution directory.
  2. Run the following commands to install and deploy the Web site and REST API site:

ubisense_installer -ud SmartSpaceWeb.xml

ubisense_installer -ud SmartSpaceRestApi.xml

  3. If you do not have a .NET Core Runtime installed on the web server, you must also run the following command:

ubisense_installer -ud SharedRuntime.xml

## Configure Apache2 Reverse Proxy

Now install and configure Apache2 as a reverse proxy. The instructions below
are targeted at SLES, and will need to be adapted for other Linux
distributions.

Install Apache2

Use the package management software for your Linux distribution to install
Apache2. For example:

sudo zypper in apache2

You will also need to ensure all required Apache modules are enabled using the
following command:

sudo a2enmod <module name>

The required modules include:

mod_proxy  
mod_proxy_http  
mod_ssl  
mod_headers  
mod_rewrite

On some variants of Linux, drop the “mod_” prefix when enabling a module for
Apache. You can see the list of enabled modules with the command:

sudo apache2ctl –M

Modules may be displayed with slightly different names in the output generated
by this command, with a _module suffix instead of a mod_ prefix.

Install the SSL certificates

Place the SSL certificate and key in a suitable location:

/etc/apache2/ssl.crt/localhost.crt  
/etc/apache2/ssl.key/localhost.key

Creating the service configuration file

Apache is configured by .conf files located in /etc/apache2/vhosts.d/.

Create a file smartspace.conf. The example below matches the proxy paths
configured in the web.json and restapi.json example files above.

    
    
    <VirtualHost *:*>
            RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}
    </VirtualHost>
    
    <VirtualHost *:80>
        # Rewrite http to https
        RewriteEngine On
        RewriteCond %{HTTPS} !=on
        RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
    </VirtualHost>
    
    <VirtualHost *:443>
            SSLProxyEngine on
            ProxyPreserveHost On
            
            # We proxy SmartSpaceApi to the REST api http port
            ProxyPass /SmartSpaceApi http://127.0.0.1:5002/SmartSpaceApi
            ProxyPassReverse /SmartSpaceApi http://127.0.0.1:5002/SmartSpaceApi
            
            # We proxy SmartSpace to the web site http port
            ProxyPass /SmartSpace http://127.0.0.1:5000/SmartSpace
            ProxyPassReverse /SmartSpace http://127.0.0.1:5000/SmartSpace
            
            # Add the forwarded protocol header 
            RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}
    		
    	# Using localhost as server hostname
            ServerName mywebserverhost.domain.com
            ServerAlias mywebserverhost
            
            # Set logging_dir the a suitable logging directory
            ErrorLog /var/log/apache2/smartspace_error.log
            CustomLog /var/log/apache2/smartspace_custom.log common
            
            # Give away as little as possible on 404.
            ErrorDocument 404 "Not found"
            
            # Redirect top level to the SmartSpace web site
            RedirectMatch ^/$ /SmartSpace
            
            # Configure the https options to be suitably secure
            SSLEngine on
            SSLProtocol all -SSLv2
            SSLCipherSuite ALL:!ADH:!EXPORT:!SSLv2:!RC4+RSA:+HIGH:+MEDIUM:!LOW:!RC4
            SSLCertificateFile /etc/apache2/ssl.crt/localhost.crt
            SSLCertificateKeyFile /etc/apache2/ssl.key/localhost.key
    </VirtualHost>
    

In this example, SSLCertificateFile should be the primary certificate file for
the domain name. SSLCertificateKeyFile should be the key file generated when
CSR is created. SSLCertificateChainFile should be the intermediate certificate
file (if any) that was supplied by the certificate authority.

Enable SSL for Apache

Additionally SSL must be enabled for Apache by adding the SSL flag to
APACHE_SERVER_FLAGS in /etc/sysconfig/apache2:

APACHE_SERVER_FLAGS="SSL"

You will need to restart Apache to reload any new or changed configuration
files, using the following commands:

sudo systemctl restart apache2  
sudo systemctl enable apache2  

Check the status of apache with the command:

sudo systemctl status apache2

Test the website

Visit the website in a browser. You should be redirected to the top level
SmartSpace website page.

## Advanced Configuration

Header Authentication (SiteMinder)

The websites can read the authenticated user from a header passed to them by a
proxy server, such as SiteMinder. To configure this, in shared.json, web.json
or restapi.json, set AuthOptions/UserHeader to be the name of the header from
which the logged in user is to be extracted. If this option is configured,
then the LDAPAuth options do not need to be set.

    
    
    {
        "AuthOptions": {
           "UserHeader": "SITEMINDER_USER"
           "RequireAuth": true
       }
    }
    

If UserHeader has been configured, it would be normal to also require
authentication for all pages. This is what the RequireAuth configuration
setting does. Since the UserHeader assumes that the header passed in the
request has been checked, it is important that the user should not be able to
bypass the proxy server and pass their own user header directly to the web
sites.

Configuring the Authentication Timespan

The default authentication on Linux uses an expiry time of 30 minutes and a
sliding timespan. This means that the authentication will expire 30 minutes
after the user closes the website, but will continue to be refreshed while the
user is still visiting the website.

You can disable this sliding expiry and set an absolute time after which login
will need to be repeated. For example, to log out after three hours:

    
    
    {
       "AuthOptions": {
          "ExpiryTimeSpan": "03:00",
          "SlidingExpiry":  false
       }
    }
    

Disable Hardened Headers

By default the website injects headers in each response for penetration
security. These disable cross-site/cross-frame scripting, prevent content type
sniffing, etc. If necessary, these headers can be disabled, and the reverse
proxy configured manually to add appropriate headers instead.

    
    
    {
        "SecurityOptions": {
           "HardenHeaders": false
        }
    }
    

Enable Cross Origin Scripting

By default, no CORS headers are sent, so browsers will refuse to execute the
API web methods from a page served from a different web server.

The option AllowOrigins in the appsettings.json file which overrides settings
in localsettings.json enables cross origin scripting:

    
    
    {
    ...
       "SecurityOptions": {
       "HardenHeaders": true,
       "AllowOrigins": [ "http://example.com", "https://*.mydomain.com" ]
       }
    ...
    }

If AllowOrigins is set, and matches the origin of a request, the API will
respond with suitable headers, for example:

    
    
    Access-Control-Allow-Credentials: true
    Access-Control-Allow-Headers: X-Requested-With
    Access-Control-Allow-Methods: PUT
    Access-Control-Allow-Origin: https://server.mydomain.com
    Access-Control-Max-Age: 3600

The browser will now allow the request. Note that this allows the browser to
cache the pre-flight OPTIONS responses for up to an hour, to reduce load on
the API server. Thus changes to the allowed origins may not be picked up by
browsers for an hour.

Removing the Shared Runtime after Undeploying the Websites

If you deployed the website and/or REST API without installing the .NET Core
Runtime on the server, and subsequently move these website services to another
controller, the Shared runtime will be left in the dataset. You can simply
delete this directory when it is no longer needed by any locally deployed
services. The folder is:

<dataset path>/Ubisense/Platform/Shared\ runtime/2.2.2/

## Security Configuration for SmartSpace Web with Security Manager

If you are using a non-trivial security manager configuration to force
authentication for services (as is the case for ACS installations) then you
must you must run the ubisense_cache_service_credentials tool on the web
server host. This is because the credentials.dat file created by the tool (in
the latest version) allows IIS_IUSRS as a reader. Without this, the web site
code cannot read the credentials, and therefore cannot connect to the platform
services it needs.

# Installing Site connector

The Site connector consists of a server application and a set of client
applications. There are two Site connector clients: which one you install
depends on the configuration of your installation.

Site connector requires both the Site connector server and at least one client
to be installed. The steps you follow to install the server and the client
software are described below. Additional configuration steps might be
required.

For an overview of different uses for Site connector and detailed information
on configuration, see the [Ubisense Site Connector
Guide](../Core/SiteConnector/site-connector-configuration.htm).

The Site connector software is supplied as a zipfile with the name
SiteConnector followed by numbers indicating the version of the software, for
example SiteConnector_2_1_11_7160.zip. Before you install Site connector, you
need to unzip this file into a distribution directory accessible to the
machines on which you will be installing the software.

## Installing Site connector server

The Site connector server is an independent service rather than a package
deployed via the Ubisense platform. On Windows, this is installed as a Windows
Service. On Linux, it should be started in the same way as core and
controller, via a startup script or systemd, depending on the Linux
distribution.

### Installing Site connector server on Windows

  1. Go to the UbisenseSiteConnectorForServers directory of your Site connector distribution directory.
  2. Double-click the UbisenseSiteConnectorForServers.msi file and the Ubisense Site Connector Service Setup wizard appears.
  3. Click Next.
  4. Choose the Destination Folder for the software.  
You can accept the default C:\Program Files (x86)\Ubisense 2.1\ or change to
another destination.

  5. Click Next and click Install.
  6. When the installation is complete, click Finish to close the Ubisense Site Connector Service Setup wizard.

After installation is complete, start the service using Windows Services
manager:

  1. Open Services by typing View local services in the Start menu.
  2. Start the service UbisenseSiteConnectorServer 2.1.

The service is configured to start automatically on reboot.

You can also stop and start the site connector service from the command prompt
(as an administrator):

net stop "UbisenseSiteConnectorServer 2.1"

net start "UbisenseSiteConnectorServer 2.1"

### Installing Site connector server on Linux

For Linux, you can find the Site connector server executable in your
distribution directory under linux/server. To install the executable:

  1. Copy ubisense_site_connector_server onto your server
  2. Create a startup script or systemd configuration to run the executable on startup.

## Installing Site connector clients

Which client software you install depends on how you are using Site connector.
See the [Introduction to Site connector](../Core/SiteConnector/site-connector-
configuration.htm) for information on intended uses for Site connector and
their configuration.

### Installing the Site connector Client on Windows

  1. Go to the UbisenseSiteConnectorClient directory of your Site connector distribution directory.
  2. Double-click the UbisenseSiteConnectorClient.msi file and the Ubisense Site Connector Client Setup wizard appears.
  3. Click Next.
  4. Choose the Destination Folder for the software.  
You can accept the default C:\Program Files (x86)\Ubisense 2.1\ or change to
another destination.

  5. Click Next.
  6. Input the server IPaddress and site connector port number (these can be changed after installation). 49983 is the default port number which will be used in most installations. By default Run in standalone mode is selected. In standalone mode the client will only connect to the network of the Site Connector server it connects to. When not in standalone mode Site Connector will connect the networks of the client and server together. This should only be done if the effects are fully understood. After installation the standalone mode setting can only be changed with Platform Control (providing you have access to it).
  7. Click Next and click Install.
  8. When the installation is complete, click Finish to close the Ubisense Site Connector Client Setup wizard.

### Installing the Site connector Client for Servers on Windows

  1. Go to the UbisenseSiteConnectorClientForServers directory of your Site connector distribution directory.
  2. Double-click the UbisenseSiteConnectorClientForServers.msi file and the Ubisense Site Connector Client for Servers Setup wizard appears.
  3. Click Next.
  4. Choose the Destination Folder for the software.  
You can accept the default C:\Program Files (x86)\Ubisense 2.1\ or change to
another destination.

  5. Click Next.
  6. Input the server IPaddress and site connector port number (these can be changed after installation). 49983 is the default port number which will be used in most installations. By default Run in standalone mode is selected. In standalone mode the client will only connect to the network of the Site Connector server it connects to. When not in standalone mode Site Connector will connect the networks of the client and server together. This should only be done if the effects are fully understood. After installation the standalone mode setting can only be changed with Platform Control (providing you have access to it).
  7. Click Next and click Install.
  8. When the installation is complete, click Finish to close the Ubisense Site Connector Client for Servers Setup wizard.

### Installing the Site connector Client on Linux

There is no particular step to install the client. Launch the application
ubisense_site_connector_client. To ensure that the daemon will restart in the
event of a fatal failure, you can write a cron script such as this one:

    
    
    #!/bin/bash
    if [[ ! `pidof -s ubisense_site_connector_client ` ]]; then
        invoke-rc.d ubisense_site_connector_client start
    fi

  * Ubisense Installation Guide for SmartSpace with Site connector
  * The Ubisense Installation Process
  * Requirements
    * Server Hardware Requirements
    * Server Software Requirements
    * Database Server for Reporting
    * Web Server Requirements
    * Supported Browsers
    * Additional Requirements for Windows Installations
    * Additional Requirements for Linux Installations
  * Unzipping Software to a Distribution Directory
  * Installing the Server Software on Windows
    * Installing the Server Software
    * Starting the Server Software
  * Installing the Server Software on Linux
    * Installing the Server Software
    * Starting the Server Software
    * Configuration Parameters
    * Warnings and Errors
    * Platform Dataset
    * Configuring Operations Permissions
    * Backing up your Dataset
  * Installing Licenses on Windows
  * Installing Licenses on Linux
  * Installing Admin Machines on Windows
  * Installing Admin Machines on Linux
  * Installing Client Machines on Windows
  * Installing Client Machines on Linux
  * Installing SmartSpace Web on Windows
    * Enable Internet Information Services (IIS) on Windows 2016
    * Install the Windows .NET Core Runtime and Hosting Bundle
    * Install the Website and/or REST API
    * Modify the website configuration files if required
    * Errors
    * Security Configuration for SmartSpace Web with Security Manager
  * Installing SmartSpace Web on Linux
    * Linux Requirements for SmartSpace Web
    * Server Configuration
    * Authentication Options
    * Configuration Files
    * Deploy the Platform Services
    * Configure Apache2 Reverse Proxy
    * Advanced Configuration
    * Security Configuration for SmartSpace Web with Security Manager
  * Installing Site connector
    * Installing Site connector server
    * Installing Site connector clients

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

