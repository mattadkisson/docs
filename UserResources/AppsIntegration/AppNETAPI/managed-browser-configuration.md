

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
PDF](../../../../SmartSpaceDownloads/B7GZWZS4WX9F/SmartSpaceManagedBrowser.pdf
"link to PDF version of this content")

[Software
Version](../../../ComponentandFeatureOverview/FrontMatters\(Online\)/features-
and-versions.htm): 3.2

# Introduction to the Managed Browser

The ManagedBrowser is an interface to the SmartSpace User Data Model (UDM)
from .NET applications. It is a more powerful alternative to the UDMAPI
interface, but unlike the latter is not accessible through web service calls.
Instead a .NET application must reference the ManagedBrowser assembly.

The ManagedBrowser supports creating and deleting objects, querying and
setting properties, and callback when data model properties change.

# Getting Started

The ManagedBrowser is distributed as an **x86** architecture assembly, not a
MSIL or x64. Thus it can only be referenced from a product which also targets
x86.

If you are using .NET 4.0 or higher, you need to enable to legacy activation
policy.  
For example, in your app.config:

    
    
     <startup useLegacyV2RuntimeActivationPolicy="true">
        <supportedRuntime version="v4.0" sku=".NETFramework,Version=v4.5.1"/>
    </startup>
    
            

Add ManagedBrowser.dll and UbisensePlatform.dll from the distribution as
references in your project. You should now be able to construct an instance of
the Ubisense.UDMAPI.ManagedBrowser class.

    
    
    ManagedBrowser browser = new ManagedBrowser();
    

## Debugging .NET Core Applications that use ManagedBrowser with the Visual
Studio Debugger

The following work-around is required to get a .NET core application that uses
the Ubisense Managed Browser API to run within the Visual Studio debugger.
This doesn’t work out of the box with .NET Core 2.x because the Visual Studio
debugger tries to start the 64-bit dotnet.exe, rather than the 32-bit
dotnet.exe required by an x86 executable.

To override this behavior, the
[Directory.Build.targets](../../../../SmartSpaceDownloads/B7GZWZS4WX9F/Directory.Build.targets)
file needs to be dropped into a folder in or above the project file. This
ensures the correct executable is run.

![Closed](../../../images/transparent.gif)View content of
Directory.Build.targets

    
    
    <Project>
      <PropertyGroup 
          Condition="'$(OS)' == 'Windows_NT' and
                     '$(TargetFrameworkIdentifier)' == '.NETCoreApp' and
                     '$(SelfContained)' != 'true'"
                      >
        <RunCommand Condition="'$(PlatformTarget)' == 'x86'">$(MSBuildProgramFiles32)\dotnet\dotnet</RunCommand>
        <RunCommand Condition="'$(PlatformTarget)' == 'x64'">$(ProgramW6432)\dotnet\dotnet</RunCommand>
      </PropertyGroup>
    </Project>

# Objects and Names

Objects are represented in results as a string form including the object id
and type. This is intended as an opaque identifier which can be used to refer
to the object. For example:

    
    
    04007zLfF_94Wzfm000IsG0000F:UserDataModel::Product
    

Most objects will also have a name, and the name can be retrieved using the
`get_name` method.

    
    
    var n = browser.get_name(cobj);
    Console.WriteLine("{0} has name {1}", cobj, n);
    

If the object is not a known object, such as when it has been deleted, the
result will be null.

Conversely, the object can be retrieved for a given name using `get_object`.

    
    
    var cobj2 = browser.get_object("Product", n);
    

Note that if the object of that name and type is not found, this method
returns null.

# Events

To receive events when properties change, first create a callback class which
implements the `IRowEvents`.

    
    
       class MyCallback : IRowEvents
            {
                #region IRowEvents Members
    
                public void data_inserted(string prop, List<string> row)
                {
                    WriteRow("insert", prop, row);
                }
    
                public void data_removed(string prop, List<string> row)
                {
                    WriteRow("remove", prop, row);
                }
    
                public void data_updated(string prop, List<string> before, List<string> after)
                {
                    WriteRow("update from", prop, before);
                    WriteRow("update to", prop, after);
                }
    
                public void establish()
                {
                    Console.WriteLine("establish");
                }
    
                public void schema_changed()
                {
                    Console.WriteLine("schema changed");
                }
    
                #endregion
    
                private void WriteRow(string desc, string prop, List<string> row)
                {
                    Console.Write("{1} {0}:", desc, prop);
                    bool first = true;
                    foreach (var p in row)
                    {
                        if (!first) Console.Write(",");
                        Console.Write(p);
                        first = false;
                    }
                    Console.WriteLine();
                }
                
            };

Now set an instance of the class as the callback for the browser.

    
    
       ManagedBrowser browser = new ManagedBrowser();
        var cb = new MyCallback();
        browser.set_event_callback(cb);
    

Now use add_property to specify which property change events to receive.

    
    
       browser.add_property("name<Product>");
        browser.add_property("[Custom]test_bool<Product>");
    

**NOTE:** If you expect the data model schema to change (specifically
properties or named types to be removed) then you should also periodically
call `update_definitions`. Otherwise the browser only checks for updated data
model schema when queries are performed, so if your application only responds
to events, it would stop receiving any when the data model schema changes.

# Queries

The browser supports a number of queries of the data model.

## Getting Objects

The set of objects of a given type can be retrieved using `get_named_objects`
or `get_named_objects_with_descendants`. The first returns only objects
exactly matching the given type. The second returns objects which are of the
given type or inherited from that type. In either case the output is a
dictionary mapping from object to name.

## Finding Types and Properties

To see the names of properties and types currently defined in the data model,
use the `all_properties` and `all_types` methods. Note that types and
properties include the namespace to which they belong, such as `[Offline]` or
`[Custom]`.

Each property row maps from a key to a value, where the key can be one or more
columns, and the value is a single column. Simple properties have a single
column in the key (the object on which the property is defined).

The types of a property can be queried:

  * To get the types of each key column use `get_property_key_types`
  * To get the type of the value column use `get_property_value_type`

## Getting and Setting Property Values

Individual rows of a property can be retrieved using `get_property_value`,
which takes the name of the property and a list of strings as the key.

    
    
    var cobj = browser.get_object("Product", n);
    string val;
    if (browser.get_property_value("[Custom]test_bool<Product>", new List<string> { cobj }, out val))
    {
        Console.WriteLine("{0} -> {1}", cobj, val);
    }
    

This method returns true on success, or false on failure. Failure can be
because the property is not known, or the types or length of the key parameter
do not agree with the property definition.

The complete set of rows in a property can be retrieved using
`get_property_values`, which returns a dictionary mapping from key to value.

    
    
        Dictionary<List<string>, string> rows;
        browser.get_property_values("[Offline]entry_time<Product>", out rows);
        foreach (var r in rows)
        {
            StringBuilder kb = new StringBuilder();
            bool first = true;
            foreach (var k in r.Key)
            {
                if (!first) kb.Append(",");
                kb.Append(k);
                first = false;
            }
            var s = r.Value;
            var d = browser.convert_datetime(s);
            Console.WriteLine("{0}: {1} = {2}", kb, r.Value, d.ToLocalTime());
        }
    

This method returns false if the property is unknown.

## Setting Properties

The value of a property can be set using `set_property_value`, and can be
removed using `delete_property_value`.

    
    
    var cobj = browser.get_object("Product", n);
    browser.set_property_value("[Custom]test_bool<Product>", new List<string> { cobj }, "true");
    
    ...
    
    browser.delete_property_value("[Custom]test_bool<Product>", new List<string> { cobj });
    

Unlike the UDMAPI, setting a property value to the empty string does not
delete the property. This allows empty string-valued properties to be set, if
necessary. Instead always use `delete_property_value` if you intend to remove
a row.

The methods both return a bool, which is true on success, false on failure.
Reasons for failure could include: the property named does not exist, or the
passed parameters do not match the types in the property, or insufficient
columns were passed for the key.

## Converting Between Columns and Strings

Columns of type Object and Time are returned in a special string form, which
can be converted to types compatible with the rest of the platform .NET API
using the convert methods of the browser.

  * `convert_object`: turns an object column into a Ubisense.UBase.UObject
  * `convert_datetime`: turns a date column into a UTC System.DateTime
  * `convert_string`: takes either a Ubisense.UBase.UObject or a System.DateTime and returns the column string equivalent

  * Introduction to the Managed Browser
  * Getting Started
    * Debugging .NET Core Applications that use ManagedBrowser with the Visual Studio Debugger
  * Objects and Names
  * Events
  * Queries
    * Getting Objects
    * Finding Types and Properties
    * Getting and Setting Property Values
    * Setting Properties
    * Converting Between Columns and Strings

![Navigate previous](../../../images/transparent.gif) ![Navigate
next](../../../images/transparent.gif) ![Expand
all](../../../images/transparent.gif) ![](../../../images/transparent.gif)
![Print](../../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

