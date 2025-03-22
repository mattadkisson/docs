

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

# Ubisense Migration Guide for ACS 2.6 \+ DIMENSION4

The following changes were made with the introduction of SmartSpace:

  * Services were renamed to be clearly grouped according to the component to which they belong and to use names that more clearly identify their functionality
  * Services which were previously required from a separate Ubisense Platform release were bundled into SmartSpace, and have also been renamed for clarity

When an ACS 2.6 dataset is upgraded to version 2.7, the data files must be
migrated to the appropriate new layout so they are found by the new services.
Otherwise most data will be lost during upgrade.

To support this, a process to migrate from ACS version 2.6 to ACS version 2.7
has been implemented.

You can only migrate services for which you have SmartSpace licenses. If you
have services for functionality you have not licensed in SmartSpace, these
services will be removed automatically during migration. Make sure you have
installed SmartSpace licenses for all services you require to ensure their
continued availability.

Use the following instructions to migrate ACS 2.6 with DIMENSION4 to
SmartSpace + DIMENSION4 + ACS.

Migrating your existing system is very like installing a new SmartSpace
system. When you create a new installation, you install software onto one or
more server machines, and start the core servers and controller(s); you then
install and deploy licensed services; and, finally, download client machines
and relevant tools and documents. Additionally when you migrate to SmartSpace,
partway through the installation steps, you run the migration tool to start
migrating your installation. You leave the migration tool running and then
continue with the installation process. When all the required packages
installed and deployed, you go back to the migration tool and allow it to
complete the migration process. Finally you can complete any additional steps
required to get your client machines running.

The steps you take to migrate to your new installation are listed below in the
order they should be carried out:

  1. Back up the running dataset.
  2. Install SmartSpace licenses.
  3. Stop the core server and service controller machines.
  4. Install the SmartSpace 3.4 software for server, admin and client machines.
  5. Install the Ubisense Security Manager software.
  6. Start the server machines and the application updater.
  7. Check services are deployed and running in the expected configuration.
  8. Start the ubisense_smartspace_migration_helper tool.
  9. Install the SmartSpace packages.
  10. Install the DIMENSION4 packages.
  11. Install the ACS packages.
  12. Install the D4_ACS_Compatibility 3.4 packages.
  13. Continue with the migration using ubisense_smartspace_migration_helper.
  14. Remove empty folders from the dataset (optional).
  15. Run the ubisense_acs_monitor_spatial_relations tool.
  16. Download software to client machines.
  17. Install ACS text translations and audit translations.
  18. Run the client software.
  19. Configure Security Manager.
  20. Restrict audit messages for automated processes.
  21. If required, install SmartSpace Web for Windows or Linux.

# Migration requirements

Ubisense software is supplied in zipfiles with the name of the package
followed by numbers indicating the version of the software, for example
SmartSpace_3_4_7147.zip. Before you install the software required for the
migration, you need to unzip these files into a distribution directory
accessible to the machines on which you will be installing the software.

To migrate from ACS 2.6 to ACS 2.7 you will need to unzip software packages
for the following:

  * SmartSpace 3.4 
  * ACS 2.7.0
  * ACS_Migration
  * DIMENSION4 3.4 (not DIMENSION4 1.x)
  * DIMENSION4 Backwards Compatibility with ACS

### Fix for installations where old services have been manually removed

In certain rare scenarios, generally where a dataset has been running for many
years, files may have been removed manually from the dataset, for example to
make the backup smaller. If old service files have been manually deleted from
your installation without the removal of corresponding services in Service
Manager, the migration process will fail with a message such as:

    
    
    ...
    ...
    ...
    Services Ubisense/Unicast/Monitor Proxy needs removal
    Services Ubisense/Visualisation/Representation Store needs removal
    Total number of old services requiring removal = 48
    Undeploying old services before removal
    Starting undeploy procedure for 48 services
      waiting for all undeploy procedures to complete
      waiting for all undeploy procedures to complete
    Removing migrated services
    Failed to clean up file ubisense_objects_configuration_service (Ubisense:ACS:Object Configuration) 1.8.2
    Migration has finished with unresolvable errors.
    You might need to restore from backup and retry.

Ubisense supply a tool, ubisense_create_missing_dataset_files, to allow you to
correct this problem. If you have removed old service files manually, you must
run ubisense_create_missing_dataset_files before you run the migration tool.
Contact Ubisense Support if you need to use this tool and run it as shown in
the example below.

You should take a backup of your dataset before you begin, so that it can be
restored should any step fail.

![Closed](../../images/transparent.gif)Running
ubisense_create_missing_dataset_files

  1. From the command line, run ubisense_create_missing_dataset_files.
    
        Create Missing Files
    --------------------
    
    This tool fixes up a dataset for which old service files have been
    manually removed, by creating a dummy file for each missing file.
    This avoids errors in migration, or Service Manager/CLEANUP SERVICES.
    Have you taken a backup? [y/n]
    

  1. Press Y followed by Enter to confirm you have taken a backup.
    
        creating (Ubisense:SmartSpace core:[Downloadables]Location import and export) 3.4.7147 i586_windows_1.3 ubisense_locations_export.exe
    creating (Ubisense:SmartSpace core:[Downloadables]Location import and export) 3.4.7147 i586_windows_1.3 ubisense_locations_import.exe
    ...
    ...
    ...							
    Attempted to create 16 missing files
    Successfully created 16 missing files
    Done
    

# Migration process

Follow the steps in each of the following sections in turn to perform the
migration.

## Back up the dataset

Take a backup of the running dataset before you begin, so that it can be
restored should any step fail.

## Install SmartSpace Licenses

### Installing SmartSpace Licenses on Windows

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

### Installing SmartSpace Licenses on Linux

License files must be placed on the server so that the platform can find them.
The default location is in the directory /etc/ubisense. If a different
location is required, then the license_search_path can be defined in
platform.conf (see Configuration Parameters for information on the location of
this file). Each program also searches for licenses in the same directory as
its executable. Licenses should be readable by both the platform user and by
the operations group.

## Stop the core server and service controllers

### Stopping the core server and service controllers on Windows

To stop the server software:

  1. From a server machine, run Platform Control.
  2. You stop the core server and service controller by:
    1. Selecting UbisenseCoreServer 2.1 and then clicking Stop.
    2. Selecting UbisenseServiceController 2.1 and then clicking Stop.

The status of the service changes to to be stopped.

  3. Click Apply. The status of the service changes to not running.

### Stopping the core server and service controllers on Linux

First stop the Ubisense services. Either:

  * Run the following command:

ubisense_service_admin stop

or

  1. Run Service Manager.
  2. Open the Services folder.
  3. Right-click Ubisense and choose Stop Service.

After that stop the scripts you use to run the ubisense_core_server and
ubisense_local_control services.

## Install the Ubisense server software

### Installing the Ubisense server software on Windows

  1. Go to the servers\windows directory of your SmartSpace distribution directory.
  2. Double-click the UbisenseServers.msi file and the Ubisense Servers Setup wizard appears.
  3. Click Next to display the Custom Setup dialog.

![screen shot of Custom Install dialog](../../images/3_5-custom-install-
dialog.png)

  4. Choose the components to install. For each server machine you can choose to install either the core server or service controller or both. If you intend to run SmartSpace on a single server, you need to install both the core server and service controller on that machine. For an installation with more than one server, you need to run the core server on one machine only and the service controller on the rest, and you can install the components accordingly.

By default, all features are selected. Choose whether to install or exclude
items using the dropdowns beside their names. Reset returns you to the default
selection.

  5. Choose the Destination Folder for the software.  
You can accept the default C:\Program Files (x86)\Ubisense 3 or change to
another destination.

  6. Click Next and click Install.
  7. When the installation is complete, click Finish to close the Ubisense Servers Setup wizard.

### Installing the Ubisense server software on Linux

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

## Install software for admin machines

### Installing the Ubisense Service Manager software on Windows

  1. Go to the clients\windows directory of your SmartSpace distribution directory.
  2. Double-click the UbisenseServiceManager.msi file and the Ubisense Service Manager Setup wizard appears.
  3. Click Next.
  4. Choose the Destination Folder for the software.  
You can accept the default C:\Program Files (x86)\Ubisense 3\ or change to
another destination.

  5. Click Next and click Install.
  6. When the installation is complete, click Finish to close the Ubisense Service Manager Setup wizard.

### Installing the administrative software on Linux

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

## Install the Ubisense Application Manager software (Windows Only)

  1. Go to the clients\windows directory of your SmartSpace distribution directory.
  2. Double-click the UbisenseApplicationManager.msi file and the Ubisense Application Manager Setup wizard appears.
  3. Click Next.
  4. Choose the Destination Folder for the software.  
You can accept the default C:\Program Files (x86)\Ubisense 3\ or change to
another destination.

  5. Click Next and click Install.
  6. When the installation is complete, click Finish to close the Ubisense Application Manager Setup wizard.

## Install the Security Manager software

  1. Go to the clients\windows directory of your SmartSpace distribution directory.
  2. Double-click the UbisenseSecurityManager.msi file and the Ubisense Security Manager Setup wizard appears.
  3. Click Next.
  4. Choose the Destination Folder for the software.  
You can accept the default C:\Program Files (x86)\Ubisense 3\ or change to
another destination.

  5. Click Next and click Install.
  6. When the installation is complete, click Finish to close the Ubisense Security Manager Setup wizard.

## Start the core server and service controllers

### Starting the core server and service controllers on Windows

To start the server software:

  1. From a server machine, run Platform Control 3.
  2. You start the core server and service controller by:
    1. Selecting UbisenseApplicationUpdater 3 and then clicking Start.

    2. Selecting UbisenseCoreServer 3 and then clicking Start.
    3. Selecting UbisenseServiceController 3 and then clicking Start.

The status of the service changes to to be started.

  3. Click Apply. The status of the service changes to running.

### Starting the core server and service controllers on Linux

Use your start up scripts to start either the ubisense_core_server or
ubisense_local_control services on each of your server machines. (Example
scripts are given in the Ubisense installation guides.)

## Check services are deployed and running

Run Service Manager 3 to check services are deployed and running in the
expected production configuration.

  1. Run Service Manager 3 and open the MANAGE SERVICES tab.
  2. Open Controllers under Cells & Controllers:

     * Ensure all registered controllers are running.
     * If you have any controllers that are no longer used, select them and click Remove.
  3. If Series 1 License Support is present, it will be flashing red, and you should use Service Manager to undeploy and remove it.

    1. Select Series 1 License Support and click Undeploy.

    2. Select Series 1 License Support again, click Remove and confirm you want to remove the service.
  4. Clean the dataset services (optional).

After the old services are migrated they can no longer be cleaned up by this
tool, so it is advisable to clean them up before proceeding.

     * In Service Manager, click on CLEANUP SERVICES and, if there are services listed, click Remove.

## Start the migration tool

The ubisense_smartspace_migration_helper is a command-line tool distributed
with SmartSpace 3.4 or higher. It does not require installation and can be run
directly from the distribution directory.

  1. Start the migration tool.

From the command line, run ubisense_smartspace_migration_helper.

    
        SmartSpace Migration Helper
    ---------------------------
    
    IMPORTANT INFORMATION.
    
    This tool supports reorganization and migration of Ubisense datasets by
    copying data for discontinued services to new services that manage the
    same schemas.
    
    This is done by undeploying old services (which copies their data to a
    folder called 'migration' at the root of the dataset), installing new
    services (which replace the old services), deploying the new services
    with the data retrieved from the 'migration' folder, and then removing
    the old services.
    
    This procedure will only work if all services are deployed and running
    in their expected production configuration before migration starts. If
    this is not the case, or if anything fails during the migration process,
    the dataset may be left in an invalid state, so you must take a backup
    of the dataset and store it in a separate location before proceeding.
    
    Have you taken a backup? [y/n]
    y
    					
    Are all services deployed and running in their expected production configuration? [y/n]
    y

  2. Press Y followed by Enter to confirm you have taken a backup.

  3. Press Y followed by Enter to confirm you are happy with your setup and wait until you are prompted to install new services.
    
        Setting core and controller to start migration mode
      waiting for core and controller to be in correct state
      waiting for controller <controllername>
    Undeploying all migratable services -- this will store data files ready for migration
    Starting undeploy procedure for 64 services
      waiting for all undeploy procedures to complete
      waiting for all undeploy procedures to complete
      waiting for all undeploy procedures to complete
      waiting for all undeploy procedures to complete
    Ready for installation of new services
    Please use the Ubisense Service Manager to install and deploy new services.
      NOTE: installed services will not start yet - this is normal
    Have you finished using Ubisense Service Manager to install services? [y/n]

Do not press Y at this stage. Leave the Command window open and go onto the
next steps. (You will return to the prompt later.)

## Install new services

You are now ready to install the services for the features you have licensed.

At this point in the migration process, you might see services in unexpected
states in the MANAGE SERVICES tab of Ubisense Service Manager. However, all
services are currently controlled by the migration helper and it will ensure
the correct services are deployed.

  1. From an admin machine, run Ubisense Service Manager 3.
  2. Click on INSTALL SERVICES.
  3. Specify the directory from which to install.

This is generally the packages folder in each of your distribution
directories.

  4. Select the features you want to install.

For SmartSpace, which features are available depends on the licenses you have
installed. Select the features you require from the list.

For DIMENSION4, select the DIMENSION4 location software feature.

**NOTE:** You must install version 3.x software for compatibility with
SmartSpace. Do not install DIMENSION4 version 1.x software.

For SmartSpace + DIMENSION4 + ACS, select the DIMENSION4 backwards
compatibility with ACS feature.

For ACS there are four features:

     * ACS (required: installs ACS and legacy platform services)
     * ACS Protocol (optional: installs a protocol service implementing the simple ACS protocol)
     * ACS Support (optional: installs a service for transferring external object information between installations)
     * Atlas Copco Open Protocol (optional: installs a protocol service implementing the Atlas Copco Open Protocol)
  5. Click Install.
  6. When installation is complete, click Close to close the Installing Services dialog.

You have now installed your SmartSpace features and you can continue with the
migration process. Right now you do not need to take any further action in
Ubisense Service Manager.

## Continue with the migration

  1. Go back to the Command window where you started ubisense_smartspace_migration_helper to continue with the migration.
  2. Press Y followed by Enter to confirm you have installed the services you require.

The migration tool will proceed to copy service state into the correct new
service locations and remove services that have been superseded by newly
installed services.

    
        ...
    Have you finished using Ubisense Service Manager to install services? [y/n]
    y
    Working out which old services should be removed
    Services Ubisense/ACS/Association needs removal
    Services Ubisense/ACS/External Object Information needs removal
    Services Ubisense/ACS/Factory Layout needs removal
    ...
    ...
    ...
    Services Ubisense/UTCP/External Systems needs removal
    Services Ubisense/Unicast/Monitor Proxy needs removal
    Services Ubisense/Visualisation/Representation Store needs removal
    Total number of old services requiring removal = 48
    Undeploying old services before removal
    Starting undeploy procedure for 48 services
      waiting for all undeploy procedures to complete
      waiting for all undeploy procedures to complete
    Removing migrated services
    Setting core and controller to finish migration mode
      waiting for core and controller to be in correct state
      waiting for controller <controllername>
      waiting for controller <controllername>
    Saving all service state back to core
      waiting for services to finish backup
      waiting for services to finish backup
      waiting for services to finish backup
    Setting core and controller back to non-migration mode
      waiting for core and controller to be in correct state
      waiting for controller <controllername>
    Done

## Remove empty folders from the dataset

When the migration process is complete, you can remove any empty folders from
the dataset.

  * If you have the Linux or Cygwin find tool you can use:
    
        cd <datasetfolder>
    find . -type d -empty -delete

  * If you have PowerShell you can use:
    
        Get-ChildItem -recurse | Where {$_.PSIsContainer -and `
    @(Get-ChildItem -Lit $_.Fullname -r | Where {!$_.PSIsContainer}).Length -eq 0} |
    Remove-Item -recurse

## Run the ubisense_acs_monitor_spatial_relations tool

To ensure that the spatial relations monitored in your ACS 2.6 installation
continue to be monitored after migration to SmartSpace, you must run the
ubisense_acs_monitor_spatial_relations tool. (You can run this tool at any
time to ensure all spatial relations required by ACS are monitored.)

You can find ubisense_acs_monitor_spatial_relations in the linux or windows
folder in the ACS_Migration distribution directory. To use the tool, from the
command line, run ubisense_acs_monitor_spatial_relations. (Note: The tool does
not display a message on completion.)

## Downloading ACS programs to client machines (Windows)

### Managing applications

To create shortcuts to ACS applications:

  1. Run the Ubisense Application Manager and click on APPLICATIONS.
  2. Available applications are listed, with their version numbers and, where applicable, location on the Start menu. 

Choose the applications you want to install.

     * Double-click a single application
     * Select several applications and press Enter

The following SmartSpace client program is available:

     * SmartSpace Config (the main SmartSpace configuration GUI)

The following ACS client programs are available:

     * ACS Main GUI (main ACS configuration GUI)
     * Product Tag Association GUI (standalone GUI for associating Ubisense tags to products)
     * Pulsed Line Product Feeder GUI (standalone GUI for feeding pulsed assembly lines with products)
  3. Click Create shortcuts for selected applications.

Shortcuts are created in the Start menu in the locations indicated.

### Managing tools and documents

To download ACS command-line tools and documents to a selected directory:

  1. Run the Ubisense Application Manager and click on DOWNLOADABLES.  
Command-line tools and documents are listed in different categories.

  2. Choose the tools or documents you want to download:  

     * Double-click a single file name
     * Select several files and press Enter
  3. For SmartSpace, the tools and documents available to you depend on the features you have installed.
  4. Under Ubisense Generation 2.X>ACS>Tools, the ACS command-line tools are available.

![Closed](../../images/transparent.gif)ACS tools

     * ubisense_device_tag_simulator (simulate tag location updates in assembly line stations)
     * ubisense_product_data_dumper (write current product instance data to a file)
     * ubisense_product_data_loader (load product instance data from a file)
     * ubisense_product_instance_cleanup (remove product instances that have no tag association)
     * ubisense_product_tag_simulator (simulate product tags moving along assembly lines)
     * ubisense_text_translation_reader (read .utf translation files and store them in the dataset)
     * ubisense_acs_protocol_clientserver (simulate a tool controller using the simple ACS protocol)
     * ubisense_open_protocol_clientserver (simulate a PF controller using the Atlas Copco Open Protocol)
     * ubisense_create_config_translation_template (write a template for configuration translations)

  5. Specify the directory to install the files in and click Start download.

The files are downloaded to the specified directory.

Whenever you upgrade your ACS installation, you must follow the process
described above to replace your existing tools and documents with upgraded
versions.

## Adding Text Translations to the Dataset

ACS requires server side text translation to be loaded into the dataset. This
step requires the ubisense_text_translation_reader which you can download
using the Ubisense Application Manager (in DOWNLOADABLES > Ubisense Generation
2.X > ACS > Tools). Ensure you have downloaded the tool and that it is on your
path.

To load the text translations:

  1. Open a Command Prompt window.
  2. Change to the ACS-2.7.0 distribution directory (where you unzipped the ACS software).

  3. Run the following command:

ubisense_text_translation_reader.exe translations

### Customized Labels in the Product Tag Association Tool

You can configure the Product Tag Association GUI to display additional text
for Product ID and Tag ID. You add the configurable text to the relevant text
translation file(s), and then add the file(s) to the dataset by following the
steps described above.

See Example: Configuring Labels in the Product Tag Association GUI in the ACS
Help for an example.

## Adding Audit Translations to the Dataset

ACS requires server side translation for the Audit UI to be loaded into the
dataset. This step requires the ubisense_translation_tool which you can
download using the Ubisense Application Manager (in DOWNLOADABLES > Platform >
Translation tool). Ensure you have downloaded the tool and the DLLs that
accompany it and that it is on your path.

  1. Open a Command Prompt window.
  2. Change to the ACS-2.7.0 distribution directory (where you unzipped the ACS software).
  3. Run the following command:

ubisense_translation_tool import
translations\for_ubisense_translation_tool\acs_2_7_0_en_de.xliff

## Running the Client Software (Windows Only)

To run the client software, use the Windows shortcuts you downloaded with the
Ubisense Application Manager:

  * Start > Ubisense 3 > ACS Main GUI
  * Start > Ubisense 3 > Product Tag Association GUI
  * Start > Ubisense 3 > Pulsed Line Product Feeder GUI
  * Start > Ubisense 3 > SmartSpace Config

These shortcuts run the UbisenseApplicationUpdater program installed as part
of Ubisense SmartSpace which will download and start the correct version of a
selected program.

## Settings in Ubisense Security Manager

If required, use Security Manager to restrict users from performing certain
actions in clients such as ACS Main GUI.

## Audit Messages for Automated Processes

Because ACS logs audit messages for various automated processes, a large
number of audit messages can be generated. As a result, ACS can eventually
become unusable and possibly fill the disk. To avoid this, you can set a
configuration parameter—audit_ignore_user_substring—to prevent the generation
of certain audit messages by one or more authenticated users.

By default, services that are authenticated with a user name containing the
text string [Automated] do not produce audit messages. By specifying a
different text string you can "ignore" audit messages from processes that are
authenticated with user names containing that string of text.

Use the following command to exclude audit messages for a set of users:

ubisense_configuration_client set audit_ignore_user_substring
<username_to_be_ignored>

where any user name that contains <username_to_be_ignored> will be ignored.

For example,

ubisense_configuration_client set audit_ignore_user_substring notaudited

would prevent the generation of audit messages by services authenticated by
the notaudited user and any other user whose name contains the string
notaudited.

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

  * Ubisense Migration Guide for ACS 2.6 + DIMENSION4
  * Migration requirements
  * Migration process
    * Back up the dataset
    * Install SmartSpace Licenses
    * Stop the core server and service controllers
    * Install the Ubisense server software
    * Install software for admin machines
    * Install the Ubisense Application Manager software (Windows Only)
    * Install the Security Manager software
    * Start the core server and service controllers
    * Check services are deployed and running
    * Start the migration tool
    * Install new services
    * Continue with the migration
    * Remove empty folders from the dataset
    * Run the ubisense_acs_monitor_spatial_relations tool
    * Downloading ACS programs to client machines (Windows)
    * Adding Text Translations to the Dataset
    * Adding Audit Translations to the Dataset
    * Running the Client Software (Windows Only)
    * Settings in Ubisense Security Manager
    * Audit Messages for Automated Processes
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

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

