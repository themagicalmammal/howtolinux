# Post Installation
There are some basic things you need to do after installation.

## Update your System
*Get the latest updates via terminal or some GUI based updater or Apps stores(like Pop shop).* 
Find GUI based updater 
![update](https://i.imgur.com/NvDMCzl.png) 
For Terminal use
```bash
sudo apt update && sudo apt upgrade -y && flatpak update
```
For Forced update
```bash
sudo apt install -f && sudo apt dist-upgrade
```
## Why use apt, not apt-get?
**Ans.** Apt was made according to an end-user perspective. It mostly does everything apt-get does. So for normal users, apt-get is not useful. But, for a developer that writes scripts and does automation, like writing a Docker file to build images, they would prefer apt-get over apt.

## Difference b/w upgrade and dist-upgrade
When you run the apt upgrade, it only updates that which has a new release accessible to the platform, as defined in /etc/apt/sources.list or in /etc/apt/sources.list.d/.  

However, when you run apt dist-upgrade, it will intelligently install or remove packages as needed, to complete the upgrade. Dist-upgrade has an intelligent dispute determination method, so it will attempt to update the numerous necessary packages at the cost of those considered less valuable. But, this might be dangerous because it removes files that might eventually break the system.

## Updating your recovery (Pop Os)
If you upgrade to a newer release the recovery also needs to be upgraded, you can do it via Terminal. 
```bash
pop-upgrade recovery upgrade from-release
```

## Software Properties Common
This is a required library for apps, that use PPA's for installation. It doesn't come pre-installed with many Ubuntu-based distros like Elementary OS.
```bash
sudo apt install software-properties-common -y
```

## Proprietary Drivers
*You can get proprietary drivers directly from the Pop/Ubuntu Shop or Terminal.* 
*If you get issues with NVIDIA get the NVIDIA iso.*

## Gnome Tweaks & the ones I use
```bash
sudo apt install gnome-tweaks -y
```

## 1. Minimize Button and Button Placement
Minimize is an important button. While I think you can live without it if you use the Super key a lot. But, for me, the minimize button seems to be very useful. 
You can get the maximize button too, but it's not that useful because it can be done by double-clicking the title bar.
If you were a Mac user, you might prefer left button placement over the default right placement. 
**Note:** Left Placement glitches the gnome-tweak-tool for some reason don't worry about it just increase the size of the window.  
![gnome-minimise](https://i.imgur.com/9o78EMM.png)
## 2. Battery Percentage
Shows the amount of battery remaining in percent. Doesn't work for desktop pc. 
![batterypercent](https://i.imgur.com/6svaFEQ.png)
## 3. Optimizing Font
I use custom resolution on my PC's so the font seems small to me, so it makes it better I use 1.11x font. I have set the hinting to full because hinting makes the font appear crisper so that they are more readable. Also, I have set the anti-aliasing to full pixels instead of sub-pixels because it has more font smoothing. 
![custom-font-size](https://i.imgur.com/yjks4Of.png) 
## 4. Activity Hot Corner and Format time
The activity hot corner enables the hot corner where the button Activity is placed. So rather than clicking the button just touch the edge. 
You can format time according to what you need. I only use the time, so I got rid of the date there.  
![overlay](https://i.imgur.com/xfprNhY.png)  

## Custom Resolution with Xrandr
**Please read all the problems & bugs with this, so that you know what problems might come & how to fix them** 
If your display supports a higher refresh rate, go for it because higher refresh rate displays make the moving content look and feel smoother and snappier. 
![set-of-refreshrates](https://i.imgur.com/NQrnAYo.png)

## Steps:
**1. Check xrandr**  
You can know the name of your display here generally it is eDP-1 if is hybrid it can be eDP-1-1 
```bash
xrandr #Check your display name
```
![xrandr](https://i.imgur.com/QOM3hBH.png)
 
**2. Find resolution which will fit**  
My original maximum resolution is 1600 900, which is a 16:9 aspect ratio. So if I choose a different aspect ratio, then some parts of my display will black out. 

So, I can go for 1920x1080 or 1792x1008 
*To find out which fits you best you can do tests by adding different resolutions*
 

**3. How to add?**
### - cvt
```bash
cvt 1920 1080 #Your custom resolution
```
![cvt](https://i.imgur.com/7c6eZNt.png)
### - xrandr --newmode
Copy line after modline
```bash
xrandr --newmode "1920x1080_60.00"  173.00  1920 2048 2248 2576  1080 1083 1088 1120 -hsync +vsync
```
![newmode](https://i.imgur.com/6vKmqCP.png)
### - xrandr --addmode
Add the resolution with display name
```bash
xrandr --addmode eDP-1 "1920x1080_60.00"
```
![addmode](https://i.imgur.com/OjG2SuT.png)

## [Problem] The resolution goes away after a reboot.
**Ans.** Add all the final lines to .profile so every time a session starts, the code runs, the custom resolution gets added.
```bash
nano ~/.profile
```
![profile](https://i.imgur.com/0IZ7glD.png)

## [Problem] What about other refresh rates? 
**Ans.** You have to experiment with cvt a bit, to find which refresh rates should need. My refresh rate is from 60hz to 120hz. I did some experimentation and added these refresh rates. 

Like if your display supports 120 hertz
```bash
cvt 1920 1080 120
```
![custom120](https://i.imgur.com/XzPRUoZ.png)

Finally, I added these resolutions
```bash
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

## [Problem] How to get rid of custom resolution?
**Ans.** Simple if you have added custom resolution to your .profile, open it again, remove those lines, and reboot.

## [BUG] Problems regarding Hybrid Graphics Switching.
**Ans.** If you have a Hybrid or Multiple Graphics Card, your display name will change if you switch graphics. So, you have to change the xrandr --addmode [displayname] if you switch Graphics.
