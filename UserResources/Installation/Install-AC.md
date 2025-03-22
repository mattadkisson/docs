

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

# Migrating a Series 7000/Series 9000 sensor system to SmartSpace

The following changes were made with the introduction of SmartSpace:

  * Services were renamed to be clearly grouped according to the component to which they belong and to use names that more clearly identify their functionality
  * Services which were previously required from a separate Ubisense Platform release were bundled into SmartSpace, and have also been renamed for clarity

When a Series 7000 or Series 9000 dataset is upgraded to SmartSpace, the data
files must be migrated to the appropriate new layout so they are found by the
new services. Otherwise most data will be lost during upgrade.

To support this, a process to migrate to a SmartSpace dataset version 3.4 or
higher with a Series 7000 or Series 9000 sensor system and SmartSpaceSupport
has been implemented.

You can only migrate services for which you have SmartSpace licenses. If you
have Series 7000 or Series 9000 services for functionality you have not
licensed in SmartSpace, these services will be removed automatically during
migration. Make sure you have installed SmartSpace licenses for all Series
7000 or Series 9000 services you require to ensure their continued
availability.

# Migration requirements

Before you begin the migration process, ensure you have installed the
necessary upgraded software and SmartSpace licenses, and have met the
conditions described below.

The migration process requires the following:

  1. The core and controller must be upgraded to the versions distributed with SmartSpace 3.4 or higher, as these have new features required for the migration process. See [SmartSpace Installation](InstallationWiz.htm) for information on installing the core and controller.

  2. The ubisense_smartspace_migration_helper is a command-line tool distributed with SmartSpace 3.4 or higher. It does not require installation and can be run directly from the distribution directory.

  3. The Ubisense Service Manager tool distributed with SmartSpace 3.4 or higher should be installed. This is used for cleaning the dataset and installing the new SmartSpace services. See your installation guide for information on installing the Ubisense Service Manager tool.

  4. The dataset must be running version 2.1.11 services or later.
  5. Licenses for SmartSpace are required during the migration process. Before you proceed with the migration process, ensure you have obtained all necessary licenses from Ubisense and have installed them on the server. These licenses will determine which SmartSpace features are offered for installation. See for information on installing licenses.

If the dataset to be upgraded has ACS installed (in which case it will include
“Ubisense / ACS / Factory Layout” for example), do not use these migration
instructions as they will fail to run. Instead use the migration instructions
for upgrading an installation that includes ACS provided elsewhere.

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

### Prepare to migrate

After you have fulfilled the requirements for migration, follow these steps to
migrate to SmartSpace.

  1. Back up the dataset.

Take a backup of the dataset before you begin, so that it can be restored
should any step fail.

  2. Clean the dataset services (optional).

After the old services are migrated they can no longer be cleaned up by this
tool, so it is advisable to clean them up before proceeding.

     * In Ubisense Service Manager, click on CLEANUP SERVICES and, if there are services listed, click Remove.
  3. Check the status of the controllers in your dataset.
     * In Ubisense Service Manager, click MANAGE SERVICES and open Controllers under Cells & Controllers:

       * Ensure all registered controllers are running.
       * If you have any controllers that are no longer used, select them and click Remove.

### Start the migration tool

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

### Install new services

  1. If the dataset has the Presence Services installed (specifically Tag Operation Interface), go to <dataset directory>/migration and delete the file UTagOperations%Management.udata.

  2. Install the new SmartSpace services.
    1. In Ubisense Service Manager, click INSTALL SERVICES and browse to the packages folder containing the SmartSpace distribution.

Normally you will be offered all the components that you have licensed.

    2. Select the components to deploy and click Install.
    3. Wait for the installation dialog to finish.
  3. Install the new SmartSpaceSupport services.
    1. In Ubisense Service Manager, click INSTALL SERVICES and browse to the packages folder containing the SmartSpaceSupport distribution.

Normally you will be offered all the components that you have licensed.

    2. Select the components to deploy and click Install.
    3. Wait for the installation dialog to finish.
  4. Stop the Logging Configuration Server.

    1. In Ubisense Service Manager, click MANAGE SERVICES and open Logging in the Services hierarchy.
    2. Select the Configuration Server row and click Stop.

### Complete the migration

  1. Proceed with the migration.
     * Go back to the migration tool, and press Y followed by Enter to confirm that the services have been installed.

The migration tool will proceed to copy service state into the correct new
service locations and remove services that have been superseded by newly
installed services and will stop with the repeated message waiting for
services to finish backup.

When you see this message go to the next step.

    
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

  1. Start the Logging Configuration Server.

    1. In Ubisense Service Manager, click MANAGE SERVICES and open Logging in the Services hierarchy.
    2. Select the Configuration Server row and click Start and the server starts and performs a backup.

When the backup is complete, the installation tool completes the migration.

### Remove empty folders from the dataset (optional)

When the migration process is complete, you can remove any empty folders from
the dataset.

  * If you have the Linux or Cygwin find tool you can use:
    
        cd <datasetfolder>
    find . -type d -empty -delete

  * If you have PowerShell you can use:
    
        Get-ChildItem -recurse | Where {$_.PSIsContainer -and `
    @(Get-ChildItem -Lit $_.Fullname -r | Where {!$_.PSIsContainer}).Length -eq 0} |
    Remove-Item -recurse

  * Migrating a Series 7000/Series 9000 sensor system to SmartSpace
  * Migration requirements
  * Migration process

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

