

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

## Test traces

### Test 1: Multiple failed attempts to ack a tag (due to misconfiguration)

This test shows the tag being processed by 07:95. Both sensors 'see' the tag
UWB and there is a random choice between them to determine the ack-ing sensor.
This comes out for 07:95 three times. Each of these ack attempts (msg count =
40, 43, 46) causes a warning message to be generated because the 07:95 radio
has not been configured (and the attempt fails). The fourth time the other
sensor 06:F0 is selected and this sends an ack to the tag at msg count 49, but
this doesn't get transmitted until too late and the tag has not received the
acknowledgement at msg count = 50 and therefore the status 50 gets sent to the
tag status service.

Tag 1 powered up, button pressed, tracked, acknowledged, but ack not received

    
    
    [15/06/2018 16:19:29] tag_countdown: 00:11:CE:D4:06:F0: 00:11:CE:D4:06:F0 countdown ack threshold = 40
    [15/06/2018 16:19:40] tag_countdown: 00:11:CE:D4:07:95: 00:11:CE:D4:07:95 countdown ack threshold = 40
    [15/06/2018 16:21:05] tag_countdown: 00:11:CE:D4:07:95: 00:11:CE:D4:07:95 initializes new tag countdown state for 00:11:CE:00:00:00:00:01
    [15/06/2018 16:21:05] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:01 countdown_armed_flag
    [15/06/2018 16:21:11] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:01 countdown_value = 10
    [15/06/2018 16:21:12] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:01 countdown_value = 20
    [15/06/2018 16:21:13] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:01 countdown_value = 30
    [15/06/2018 16:21:14] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:01 countdown_value = 40
    [15/06/2018 16:21:14] tag_countdown: 00:11:CE:D4:07:95: 00:11:CE:D4:07:95 sends countdown ack to 00:11:CE:00:00:00:00:01
    [15/06/2018 16:21:14] sensor_warning: 00:11:CE:D4:07:95: attempt to send radio ack message with power/duty cycle unset
    [15/06/2018 16:21:14] tag_countdown: 00:11:CE:D4:07:95: 00:11:CE:D4:07:95 sends countdown ack to 00:11:CE:00:00:00:00:01
    [15/06/2018 16:21:14] sensor_warning: 00:11:CE:D4:07:95: attempt to send radio ack message with power/duty cycle unset
    [15/06/2018 16:21:15] tag_countdown: 00:11:CE:D4:07:95: 00:11:CE:D4:07:95 sends countdown ack to 00:11:CE:00:00:00:00:01
    [15/06/2018 16:21:15] sensor_warning: 00:11:CE:D4:07:95: attempt to send radio ack message with power/duty cycle unset
    [15/06/2018 16:21:15] tag_countdown: 00:11:CE:D4:07:95: 00:11:CE:D4:07:95 forwards acknowledgement request for 00:11:CE:00:00:00:00:01 to 00:11:CE:D4:06:F0 at 10.42.5.112:53536
    [15/06/2018 16:21:15] tag_countdown: 00:11:CE:D4:06:F0: 00:11:CE:D4:06:F0 sends countdown ack to 00:11:CE:00:00:00:00:01
    [15/06/2018 16:21:15] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:01 countdown_value = 50
    [15/06/2018 16:21:26] tag_countdown: 00:11:CE:D4:07:95: 00:11:CE:D4:07:95 ages out old tag countdown state for 00:11:CE:00:00:00:00:01
    [15/06/2018 16:27:36] tag_countdown: tag status server ages out old entry for 00:11:CE:00:00:00:00:01 countdown_armed_flag
    [15/06/2018 16:27:36] tag_countdown: tag status server ages out old entry for 00:11:CE:00:00:00:00:01 countdown_value
    
            

### Test 2: Successful ack of the tag

This is the same configuration as (1) but in this case the sensor 06:F0 is
selected for the first ack attempt and the tag is successfully ack-ed.

Tag 1 powered up, button pressed, tracked, acknowledged, ack received

    
    
    [15/06/2018 16:44:24] tag_countdown: 00:11:CE:D4:07:95: 00:11:CE:D4:07:95 initializes new tag countdown state for 00:11:CE:00:00:00:00:01
    [15/06/2018 16:44:24] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:01 countdown_armed_flag
    [15/06/2018 16:44:29] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:01 countdown_value = 10
    [15/06/2018 16:44:30] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:01 countdown_value = 20
    [15/06/2018 16:44:31] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:01 countdown_value = 30
    [15/06/2018 16:44:32] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:01 countdown_value = 40
    [15/06/2018 16:44:32] tag_countdown: 00:11:CE:D4:07:95: 00:11:CE:D4:07:95 forwards acknowledgement request for 00:11:CE:00:00:00:00:01 to 00:11:CE:D4:06:F0 at 10.42.5.112:53536
    [15/06/2018 16:44:32] tag_countdown: 00:11:CE:D4:06:F0: 00:11:CE:D4:06:F0 sends countdown ack to 00:11:CE:00:00:00:00:01
    [15/06/2018 16:44:32] tag_countdown: 00:11:CE:D4:07:95: 00:11:CE:D4:07:95 receives 00:11:CE:00:00:00:00:01 confirmation that it has received an ack message
    [15/06/2018 16:44:33] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:01 countdown_value = 306
    [15/06/2018 16:44:48] tag_countdown: 00:11:CE:D4:07:95: 00:11:CE:D4:07:95 ages out old tag countdown state for 00:11:CE:00:00:00:00:01
    

### Test 3: Successful ack of two tags simultaneously

Using the correct radio configuration for both sensors (to improve radio
reliability) we show two tags being ack-ed simultaneously. Note that both
final values are 306 which is 1 ack + 50 messages, demonstrating that each tag
only heard one ack message (the one destined for it).

Tag 1 and 2 powered up, button pressed, tracked, acknowledged, but ack not
received

    
    
    [15/06/2018 18:04:46] tag_countdown: 00:11:CE:D4:07:95: 00:11:CE:D4:07:95 initializes new tag countdown state for 00:11:CE:00:00:00:00:01
    [15/06/2018 18:04:46] tag_countdown: 00:11:CE:D4:06:F0: 00:11:CE:D4:06:F0 initializes new tag countdown state for 00:11:CE:00:00:00:00:02
    [15/06/2018 18:04:46] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:02 countdown_armed_flag
    [15/06/2018 18:04:46] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:01 countdown_armed_flag
    [15/06/2018 18:04:54] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:02 countdown_armed_flag
    [15/06/2018 18:04:55] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:01 countdown_armed_flag
    [15/06/2018 18:04:56] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:01 countdown_value = 10
    [15/06/2018 18:04:57] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:02 countdown_value = 10
    [15/06/2018 18:04:57] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:01 countdown_value = 20
    [15/06/2018 18:04:57] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:02 countdown_value = 20
    [15/06/2018 18:04:58] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:01 countdown_value = 30
    [15/06/2018 18:04:58] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:02 countdown_value = 30
    [15/06/2018 18:04:59] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:01 countdown_value = 40
    [15/06/2018 18:04:59] tag_countdown: 00:11:CE:D4:07:95: 00:11:CE:D4:07:95 forwards acknowledgement request for 00:11:CE:00:00:00:00:01 to 00:11:CE:D4:06:F0 at 10.42.5.112:53536
    [15/06/2018 18:04:59] tag_countdown: 00:11:CE:D4:06:F0: 00:11:CE:D4:06:F0 sends countdown ack to 00:11:CE:00:00:00:00:01
    [15/06/2018 18:04:59] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:02 countdown_value = 40
    [15/06/2018 18:04:59] tag_countdown: 00:11:CE:D4:06:F0: 00:11:CE:D4:06:F0 sends countdown ack to 00:11:CE:00:00:00:00:02
    [15/06/2018 18:05:00] tag_countdown: 00:11:CE:D4:06:F0: 00:11:CE:D4:06:F0 receives 00:11:CE:00:00:00:00:02 confirmation that it has received an ack message
    [15/06/2018 18:05:00] tag_countdown: 00:11:CE:D4:07:95: 00:11:CE:D4:07:95 sends countdown ack to 00:11:CE:00:00:00:00:01
    [15/06/2018 18:05:00] tag_countdown: 00:11:CE:D4:07:95: 00:11:CE:D4:07:95 receives 00:11:CE:00:00:00:00:01 confirmation that it has received an ack message
    [15/06/2018 18:05:00] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:01 countdown_value = 306
    [15/06/2018 18:05:00] tag_countdown: tag status server asserts 00:11:CE:00:00:00:00:02 countdown_value = 306
    [15/06/2018 18:05:18] tag_countdown: 00:11:CE:D4:06:F0: 00:11:CE:D4:06:F0 ages out old tag countdown state for 00:11:CE:00:00:00:00:02
    [15/06/2018 18:05:19] tag_countdown: 00:11:CE:D4:07:95: 00:11:CE:D4:07:95 ages out old tag countdown state for 00:11:CE:00:00:00:00:01
    [15/06/2018 18:08:22] tag_countdown: tag status server ages out old entry for 00:11:CE:00:00:00:00:01 countdown_armed_flag
    [15/06/2018 18:08:22] tag_countdown: tag status server ages out old entry for 00:11:CE:00:00:00:00:01 countdown_value
    [15/06/2018 18:08:22] tag_countdown: tag status server ages out old entry for 00:11:CE:00:00:00:00:02 countdown_armed_flag
    [15/06/2018 18:08:22] tag_countdown: tag status server ages out old entry for 00:11:CE:00:00:00:00:02 countdown_value
    

  * Test traces
    * Test 1: Multiple failed attempts to ack a tag (due to misconfiguration)
    * Test 2: Successful ack of the tag
    * Test 3: Successful ack of two tags simultaneously

![Navigate previous](../../../images/transparent.gif) ![Navigate
next](../../../images/transparent.gif) ![Expand
all](../../../images/transparent.gif) ![](../../../images/transparent.gif)
![Print](../../../images/transparent.gif)

* * *

[www.ubisense.net](http://www.ubisense.net/)  
Copyright © 2020, Ubisense Limited 2014 - 2020. All Rights Reserved.

