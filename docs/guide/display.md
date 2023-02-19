# Display
These are some display tweaks depending on the windowing system you are using.
## Refresh Rates

If your display supports a higher refresh rate, go for it because higher refresh rate displays make the moving content look and feel smoother and snappier.

<p align="center">
    <img src="https://i.imgur.com/NQrnAYo.png">
</p>

::: info
Sometimes this doesn't work because you display might not support the higher refresh rates and they might be showing up due to errors in your xrandr config.
:::

## Wayland

Wayland is a new protocol that enables 3D compositors to be used as primary display servers, instead of running the 3D compositor as an extension under the (2D) X.org display server. Or, in layman's terms, it assumes you're using a 3D desktop from the start, instead of bolting on 3D capabilities to an 2D framework.

X.org is the default display manager but, X.org is old and is very bloated, thus uses more resources. So in this way, Wayland can be a better option. But, Wayland is a newer display protocol and thus is incomplete in a way giving the birth yo many bugs, and one of them being **NVIDIA**. So, if you have an NVIDIA GPU, Wayland is a bad option. Also, if you don't have NVIDIA GPU, still there might be bugs, so if you have bugs/glitches, remove it.(Remove the #).

::: details
# Switch from X11 to Wayland

X11 is the most widely used display server on Linux, but it has some limitations when it comes to modern graphics and security. Wayland is a newer display server that aims to overcome these limitations and provide a better experience. In this tutorial, we'll show you how to switch from X11 to Wayland on Linux, regardless of the distribution or desktop environment you are using.

### Prerequisites

- A Linux distribution with both X11 and Wayland display servers installed
- Administrative privileges (i.e., sudo or root access)

### Step 1: Check if Wayland is available

First, we need to check if Wayland is available on your system. To do this, open a terminal and run the following command:

```sh
echo $XDG_SESSION_TYPE
```

If the output is "x11", X11 is currently in use. If the output is "wayland", Wayland is already in use. If the output is empty, neither X11 nor Wayland is in use.

### Step 2: Switch to Wayland

To switch from X11 to Wayland, you need to log out of your current session and start a new one using Wayland.

The exact steps to do this depend on your distribution and desktop environment. Here are the steps for some popular desktop environments:

#### GNOME

1. Log out of your current session.
2. Click the gear icon next to the "Sign In" button.
3. Select "GNOME on Wayland".
4. Enter your password and click "Sign In".

#### KDE Plasma

1. Log out of your current session.
2. Click the "Session" button on the login screen.
3. Select "Plasma (Wayland)".
4. Enter your password and click "Login".

#### XFCE

1. Log out of your current session.
2. Click the gear icon next to the "Sign In" button.
3. Select "XFCE with Wayland".
4. Enter your password and click "Sign In".

#### Other Desktop Environments

The process for other desktop environments may be different. Refer to the documentation for your desktop environment or distribution for more information.

### Step 3: Verify Wayland is in use

Once you've logged in using Wayland, you can verify that it's in use by running the following command:


If the output is "x11", X11 is currently in use. If the output is "wayland", Wayland is already in use. If the output is empty, neither X11 nor Wayland is in use.

### Step 2: Switch to Wayland

To switch from X11 to Wayland, you need to log out of your current session and start a new one using Wayland.

The exact steps to do this depend on your distribution and desktop environment. Here are the steps for some popular desktop environments:

#### GNOME

1. Log out of your current session.
2. Click the gear icon next to the "Sign In" button.
3. Select "GNOME on Wayland".
4. Enter your password and click "Sign In".

#### KDE Plasma

1. Log out of your current session.
2. Click the "Session" button on the login screen.
3. Select "Plasma (Wayland)".
4. Enter your password and click "Login".

#### XFCE

1. Log out of your current session.
2. Click the gear icon next to the "Sign In" button.
3. Select "XFCE with Wayland".
4. Enter your password and click "Sign In".

#### Other Desktop Environments

The process for other desktop environments may be different. Refer to the documentation for your desktop environment or distribution for more information.

### Step 3: Verify Wayland is in use

Once you've logged in using Wayland, you can verify that it's in use by running the following command:

```sh
echo $XDG_SESSION_TYPE
```

The output should be "wayland".

### Step 4: Troubleshooting

If you encounter issues when trying to switch to Wayland, here are some things to check:

- Make sure Wayland is installed on your system.
- Make sure your graphics drivers are up to date.
- Make sure your desktop environment supports Wayland.
- Try switching to a different desktop environment that supports Wayland.

### Conclusion

Switching from X11 to Wayland can provide a more modern and secure display server experience on Linux. While the process to switch can vary depending on your distribution and desktop environment, the general steps are to log out of your current session and start a new one using Wayland. If you encounter any issues, be sure to check that Wayland is installed on your system, your graphics drivers are up to date, and your desktop environment supports Wayland.


:::


## Custom Resolution <Badge type="danger" text="caution" />

::: tip
Please read all the problems & bugs with this, so that you know what problems might come & how to fix them
:::

### Steps:

###

### 1. Check `xrandr\wlr-randr`

You can know the name of your display here generally it is eDP-1 if it is hybrid it can be eDP-1-1.

::: code-group
```sh [X11]
$ xrandr  // [!code focus]
Screen 0: minimum 320 x 200, current 1600 × 900, maximum 16384 x 16384
eDP-1 connected primary 1600X900+0+0 (normal left inverted right × axis y axis) 473mm x 296mm
```
```sh [Wayland]
$ wlr-randr  // [!code focus]
Screen 0: 1920x1080 @ 0x0mm (scaled to 100.00%)
  Output eDP-1-1 [internal] (connected)
    Current mode: 1920x1080@60Hz
  Output HDMI-1-1 [external] (disconnected)
```
:::

### 2. Find resolution which will fit

My original maximum resolution was 1600x900, which is a 16:9 aspect ratio. So if I choose a different aspect ratio, then some parts of my display will black out.

So, I can go for 1920x1080 or 1792x1008. To find out which fits you best you can do tests by adding different resolutions.

### 3. How to add?

###

##### i. Check the custom resolution

Using cvt you cant generate the custom resolution with parameters.

```sh{3}
$ cvt 1920 1080  // [!code focus] 
# 1920X1080 59.96 Hz ( CVT 2.07M9) hsync: 67.16 kHz; pclk: 173.00 MHz
Modeline "1920x1080 _60.00" 173.00 1920 2048 2248 2576 1080 1083 1088 1120 - hsync +vsync
```

##### ii. Add the custom resolution

Copy the text after modeline and use this command to create a new resolution.

::: code-group
```sh [X11]
xrandr --newmode "1920x1080_60.00"  173.00  1920 2048 2248 2576  1080 1083 1088 1120 -hsync +vsync
xrandr --addmode eDP-1 "1920x1080_60.00"
```
```sh [Wayland]
wlr-randr --output eDP-1 --mode "1920x1080_60.00"
```
:::

Congrats! You have added a new resolution now you can go to display and set it as your resolution.


## Q. The resolution goes away after a reboot.

**Ans.** Add all the final lines to .profile so every time a session starts, the code runs, the custom resolution gets added. Since, this are not default resolutions xrandr isn't generating them so it can be added to profile and it will be added automatically when a session starts.

```sh
nano ~/.profile
```

Add your custom resolution config, it should look something like this.

::: code-group
```sh [X11]
// All of the .profile code
xrandr --newmode "1920×1080 120.00" 369.50 1920 2080 2288 2656 1080 1083 1088 1160 -hsync +vsync  // [!code focus]
xrandr --addmode eDP-1 "1920×1080 120.00"  // [!code focus]
```
```sh [Wayland]
// All of the .profile code
wlr-randr --output eDP-1 --mode "1920x1080_60.00"  // [!code focus]
```
:::

## Q. What about other refresh rates?

**Ans.** You have to experiment with cvt a bit, to find which refresh rates you need. My refresh rates are from 60hz to 120hz. I did some experimentation and added these refresh rates.

Like if your display supports 120 hertz

::: code-group
```sh [X11]
$ cvt 1920 1080 120   // [!code focus]
# 1920×1080 119.93 Hz (CVT) hsync: 139.12 kHz; pclk: 369.50 MHz
Modeline "1920×1080_120.00" 369.50 1920 2080 2288 2656 1080 1083 1088 1160 -hsync +vsync
$ xrandr - -newmode "1920×1080_120.00" 369.50 1920 2080 2288 2656 1080 1083 1088 1160 -hsvnc +vsvnc  // [!code focus]
$ xrandr --addmode eDP-1 "1920×1080 120.00" // [!code focus]
```
```sh [Wayland]
$ cvt 1920 1080 120   // [!code focus]
# 1920×1080 119.93 Hz (CVT) hsync: 139.12 kHz; pclk: 369.50 MHz
Modeline "1920×1080_120.00" 369.50 1920 2080 2288 2656 1080 1083 1088 1160 -hsync +vsync
$ wlr-randr --output eDP-1 --mode "1920×1080 120.00" // [!code focus]
```
:::

Finally, I added these resolutions

::: code-group
```sh [X11]
// All of the .profile code
xrandr --newmode "1920×1080 120.00" 369.50 1920 2080 2288 2656 1080 1083 1088 1160 -hsync +vsync  // [!code focus]
xrandr --addmode eDP-1 "1920×1080 120.00"  // [!code focus]
xrandr --newmode "1920×1080 119.91" 369.25 1920 2080 2288 2656 1080 1083 1088 1160 -hsync +vsync  // [!code focus]
xrandr --addmode eDP-1 "1920×1080 119.91"  // [!code focus]
xrandr --newmode "1920×1080 60.00" 173.00 1920 2048 2248 2576 1080 1083 1088 1120 -hsync +vsync  // [!code focus]
xrandr --addmode eDP-1 "1920×1080 60.00"  // [!code focus]
xrandr --newmode "1920×1080 59.89" 172.75 1920 2048 2248 2576 1080 1083 1088 1120 -hsync +vsync  // [!code focus]
xrandr --addmode eDP-1 "1920x1080 59.89"  // [!code focus]
```
```sh [Wayland]
// All of the .profile code
wlr-randr --output eDP-1 --mode "1920×1080 120.00"  // [!code focus]
wlr-randr --output eDP-1 --mode "1920×1080 119.91"  // [!code focus]
wlr-randr --output eDP-1 --mode "1920×1080 60.00"  // [!code focus]
wlr-randr --output eDP-1 --mode "1920x1080 59.89"  // [!code focus]
```
:::

**Now it should look like this**

<p align="center">
    <img src="https://i.imgur.com/8xftL67.png)">
</p>

## Q. How to get rid of custom resolution?

**Ans.** Simple if you have added custom resolution to your .profile, open it again, remove those lines, and reboot.

## Q. Problems regarding Hybrid Graphics Switching.

**Ans.** If you have a Hybrid or Multiple Graphics Card, your display name will change if you switch graphics. So, you have to change the `xrandr --addmode [displayname]` or  `wlr-randr --output [displayname]` if you switch Graphics. It's better to add commands for both of your displays so switching would be fluent.
