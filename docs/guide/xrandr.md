# Xrandr

## Refresh Rates
If your display supports a higher refresh rate, go for it because higher refresh rate displays make the moving content look and feel smoother and snappier.

<p align="center">
    <img src="https://i.imgur.com/NQrnAYo.png">
</p>

::: info
Sometimes this doesn't work because you display might not support the higher refresh rates and they might be showing up due to errors in your xrandr config.
:::

## Custom Resolution <Badge type="danger" text="caution" />

::: tip
Please read all the problems & bugs with this, so that you know what problems might come & how to fix them
:::

### Steps:
###
### 1. Check xrandr
You can know the name of your display here generally it is eDP-1 if it is hybrid it can be eDP-1-1.

```sh
xrandr #Check your display name
```

##### Output:

```sh
Screen 0: minimum 320 x 200, current 1600 × 900, maximum 16384 x 16384
eDP-1 connected primary 1600X900+0+0 (normal left inverted right × axis y axis) 473mm x 296mm
```

### 2. Find resolution which will fit
My original maximum resolution was 1600x900, which is a 16:9 aspect ratio. So if I choose a different aspect ratio, then some parts of my display will black out.

So, I can go for 1920x1080 or 1792x1008. To find out which fits you best you can do tests by adding different resolutions.

### 3. How to add?
###
##### i. cvt
Using cvt you cant generate the custom resolution with parameters.

```sh
cvt 1920 1080 #Your custom resolution
```

#### Output:

```sh
# 1920X1080 59.96 Hz ( CVT 2.07M9) hsync: 67.16 kHz; pclk: 173.00 MHz
Modeline "1920x1080 _60.00" 173.00 1920 2048 2248 2576 1080 1083 1088 1120 - hsync +vsync 
```

##### ii. xrandr --newmode

Copy the line after modline

```sh
# 1920X1080 59.96 Hz ( CVT 2.07M9) hsync: 67.16 kHz; pclk: 173.00 MHz
Modeline "1920x1080 _60.00" 173.00 1920 2048 2248 2576 1080 1083 1088 1120 - hsync +vsync  // [!code focus]
```

##### And add new resolution using

```sh
xrandr --newmode "1920x1080_60.00"  173.00  1920 2048 2248 2576  1080 1083 1088 1120 -hsync +vsync
```

##### iii. xrandr --addmode

Add the resolution with display name

```sh
xrandr --addmode eDP-1 "1920x1080_60.00"
```

Congrats! You have added a new resolution now you can go to display and set it as your resolution.

## Q. The resolution goes away after a reboot.

**Ans.** Add all the final lines to .profile so every time a session starts, the code runs, the custom resolution gets added. Since, this are not default resolutions xrandr isn't generating them so it can be added to profile and it will be added automatically when a session starts.

```sh
nano ~/.profile
```

Add your custom resolution config, it should look something like this.

```sh
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

## Q. What about other refresh rates?

**Ans.** You have to experiment with cvt a bit, to find which refresh rates you need. My refresh rates are from 60hz to 120hz. I did some experimentation and added these refresh rates.

Like if your display supports 120 hertz

```sh
$ cvt 1920 1080 120   // [!code focus]
# 1920×1080 119.93 Hz (CVT) hsync: 139.12 kHz; pclk: 369.50 MHz
Modeline "1920×1080_120.00" 369.50 1920 2080 2288 2656 1080 1083 1088 1160 -hsync +vsync
$ xrandr - -newmode "1920×1080_120.00" 369.50 1920 2080 2288 2656 1080 1083 1088 1160 -hsvnc +vsvnc  // [!code focus]
$ xrandr --addmode eDP-1 "1920×1080 120.00" // [!code focus]
```

Finally, I added these resolutions

```sh
xrandr --newmode "1920x1080_120.00"  369.50  1920 2080 2288 2656  1080 1083 1088 1160 -hsync +vsync
xrandr --addmode eDP-1 "1920x1080_120.00"
xrandr --newmode "1920x1080_119.91"  369.25  1920 2080 2288 2656  1080 1083 1088 1160 -hsync +vsync
xrandr --addmode eDP-1 "1920x1080_119.91"
xrandr --newmode "1920x1080_60.00"  173.00  1920 2048 2248 2576  1080 1083 1088 1120 -hsync +vsync
xrandr --addmode eDP-1 "1920x1080_60.00"
xrandr --newmode "1920x1080_59.89"  172.75  1920 2048 2248 2576  1080 1083 1088 1120 -hsync +vsync
xrandr --addmode eDP-1 "1920x1080_59.89"
```

**Now it should look like this**
<p align="center">
    <img src="https://i.imgur.com/8xftL67.png)">
</p>

## Q. How to get rid of custom resolution?

**Ans.** Simple if you have added custom resolution to your .profile, open it again, remove those lines, and reboot.

## Q. Problems regarding Hybrid Graphics Switching.

**Ans.** If you have a Hybrid or Multiple Graphics Card, your display name will change if you switch graphics. So, you have to change the xrandr --addmode [displayname] if you switch Graphics. It's better to add commands including both of your displays so switching would be fluent.
