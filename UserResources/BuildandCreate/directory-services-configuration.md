

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

[Software
Version](../../ComponentandFeatureOverview/FrontMatters\(Online\)/features-
and-versions.htm): 3.2

# Directory services

Use the Directory services workspace to configure the connection to a third-
party directory service that supports OpenLDAP, such as Microsoft Active
Directory or Apache Directory Server for use when configuring user access in
the Users and roles workspace (or the Roles screen in SmartSpace Web).

Connecting SmartSpace to a third-party directory service involves:

  1. Configuring the connection parameters.
  2. Making sure that the LDAP server interface service is running.

The first time that you search for a user or user group in the Users and roles
workspace, SmartSpace will query the third-party directory service and then
cache the results:

  * Changes to the third-party directory service are automatically detected.
  * Cached results for a particular query are deleted if they are not accessed for a given period (for example 24 hours).
  * Cached results are cleared if the LDAP server interface service is restarted. 
  * When you change the way the connection is configured, the service is restarted to connect with the new configuration parameters.

This section assumes you have some knowledge of OpenLDAP or that there is an
LDAP administrator who can assist you.

## The Directory services workspace

Click on DIRECTORY SERVICES to display the Directory servicesworkspace.

![Screenshot of the Directory services
screen](../../images/DirectoryServices.png)

![Closed](../../images/transparent.gif)Directory service parameters

Directory Service host service name/ IP address

The name or IP address of the directory service host, for example the Active
Directory server.

Directory Service host port number

The port number on the server which accepts LDAP connections. Typically 389.

Authentication method

The authentication method used by the server. Either Username and Password or
integrated Windows Authentication.

Username, Password

Username and password for server login (if not using Windows Authentication).

Distinguished name where directory searches start

The distinguished name of the root of all searches, for example:
dc=example,dc=com

Contact the server administrator for this information.

All groups search filter

The search filter which will return a list of all groups, for example
(objectClass=group). This will vary depending on the server.

Common name attribute

The attribute which specifies the common name of a group. When the names of
all groups are retrieved, it is this name which is returned. When the members
of a group are requested, it is this attribute which is supplied. Typically it
is ‘cn’.

Distinguished name attribute

The attribute which is used in the members list of a group. i.e. there will be
an attribute of a group which lists all members, this is a comma-separated
list containing this attribute for each user. If there is no attribute of the
user which matches the names in the members list then choose an attribute
which is suffixed with the Root Distinguished Name matching the name in the
members list.

Group member attribute

The attribute of a group which contains the list of members, might be ‘member’
or ‘uniqueMember’.

Email address attribute

The attribute of a user which contains their email address.

Unique identifier attribute

The attribute of a user which matches the login name used by the web browser.
For example, if the login name is UBISENSE\kevin.white, this attribute should
match the bold part.

Send emails to

Whether emails should be sent to users, to groups or to both.

Note that selecting both may result in some users receiving two emails. For
example, if there is a group called Support with an email address
support@ubisense.net and members Joe and John. If emails to support are
forwarded to Joe and John and they both also have email addresses in the
directory then selecting ‘both’ will cause emails to be sent to all three
addresses and Joe and John will receive two copies.

The common name of a group (as displayed by SmartSpace) might differ from the
name seen in a mail client if there is a displayName which is different.

## Configuring OpenLDAP

  1. Open the Directory servicesworkspace.
  2. Click Edit to configure OpenLDAP settings for your SmartSpace installation.
  3. Click Save when you have finished entering the details.

  * Directory services
    * The Directory services workspace
    * Configuring OpenLDAP

![Navigate previous](../../images/transparent.gif) ![Navigate
next](../../images/transparent.gif) ![Expand
all](../../images/transparent.gif) ![](../../images/transparent.gif)
![Print](../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

