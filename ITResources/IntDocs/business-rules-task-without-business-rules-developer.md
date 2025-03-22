

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

You are here:

# Enabling access to the BUSINESS RULES workspace for sites without a Rules
engine developer license

One SmartSpace licensing scenario is a customer site where the Business rules
license has been purchased to allow the customer to run business rules, but
Rules engine developer feature has not been purchased. This means that the
customer is not able to access the BUSINESS RULES task in SmartSpace Config.
This is intended for installations where the logic of the application is
developed and maintained by Ubisense or a partner, and the customer is not
meant to develop their own rules.

In this case import and export of business rules will still work, and is often
the preferred method if the customer is in production. However, if changes to
the rules must be made directly for support purposes, this can be done by
connecting to the customer system using a Windows machine that is licensed for
Rules engine developer. Use the following procedure:

  1. Connect the support machine to the customer’s SmartSpace system, and run SmartSpace Config. This will download the correct version of SmartSpace Config onto the support machine.
  2. In SmartSpace Config, look on the title bar for the version number. For example 3.3.6816. Exit SmartSpace Config.
  3. On the support machine, navigate to C:\Program Files (x86)\Ubisense 3\bin. You should find a file called rules_engine_developer.feature. Copy this file.
  4. Navigate to C:\ProgramData\Ubisense\SmartSpace Config\ and then open the folder with the version number from step  above.
  5. Paste a copy of the feature file, and then rename the copy to Rules engine developer.license. The case and spaces are important.
  6. Run SmartSpace Config. You should now see the BUSINESS RULES task.

This method will only work if the rules_engine_developer.feature file is valid
for the machine ID of the support machine. The same .feature file will not
work on another support machine.

![Navigate previous](../../images/transparent.gif) ![Navigate
next](../../images/transparent.gif) ![Expand
all](../../images/transparent.gif) ![](../../images/transparent.gif)
![Print](../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

