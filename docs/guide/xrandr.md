# Custom Resolution with Xrandr

::: tip
Please read all the problems & bugs with this, so that you know what problems might come & how to fix them
:::
If your display supports a higher refresh rate, go for it because higher refresh rate displays make the moving content look and feel smoother and snappier.

![set-of-refreshrates](https://i.imgur.com/NQrnAYo.png)

#### Steps:

**1. Check xrandr**  
You can know the name of your display here generally it is eDP-1 if is hybrid it can be eDP-1-1

```sh
xrandr #Check your display name
```

![xrandr](https://i.imgur.com/QOM3hBH.png)

**2. Find resolution which will fit**  
My original maximum resolution is 1600 900, which is a 16:9 aspect ratio. So if I choose a different aspect ratio, then some parts of my display will black out.

So, I can go for 1920x1080 or 1792x1008
_To find out which fits you best you can do tests by adding different resolutions_

**3. How to add?**

### - cvt

```sh
cvt 1920 1080 #Your custom resolution
```

![cvt](https://i.imgur.com/7c6eZNt.png)

### - xrandr --newmode

Copy line after modline

```sh
xrandr --newmode "1920x1080_60.00"  173.00  1920 2048 2248 2576  1080 1083 1088 1120 -hsync +vsync
```

![newmode](https://i.imgur.com/6vKmqCP.png)

### - xrandr --addmode

Add the resolution with display name

```sh
xrandr --addmode eDP-1 "1920x1080_60.00"
```

![addmode](https://i.imgur.com/OjG2SuT.png)

## Q. The resolution goes away after a reboot.

**Ans.** Add all the final lines to .profile so every time a session starts, the code runs, the custom resolution gets added.

```sh
nano ~/.profile
```

![profile](https://i.imgur.com/0IZ7glD.png)

## Q. What about other refresh rates?

**Ans.** You have to experiment with cvt a bit, to find which refresh rates should need. My refresh rate is from 60hz to 120hz. I did some experimentation and added these refresh rates.

Like if your display supports 120 hertz

```sh
cvt 1920 1080 120
```

![custom120](https://i.imgur.com/XzPRUoZ.png)

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

![custom-resolution-final](https://i.imgur.com/8xftL67.png)

## Q. How to get rid of custom resolution?

**Ans.** Simple if you have added custom resolution to your .profile, open it again, remove those lines, and reboot.

## Q. Problems regarding Hybrid Graphics Switching.

**Ans.** If you have a Hybrid or Multiple Graphics Card, your display name will change if you switch graphics. So, you have to change the xrandr --addmode [displayname] if you switch Graphics.
