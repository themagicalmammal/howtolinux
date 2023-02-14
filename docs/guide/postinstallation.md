# Post Installation

There are some basic things you need to do after installation.

## Update your System

_Get the latest updates via terminal or some GUI based updater or Apps stores(like Pop shop)._
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

## Updating your recovery

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

_You can get proprietary drivers directly from the Pop/Ubuntu Shop or Terminal._
_If you get issues with NVIDIA get the NVIDIA iso._

## Gnome Tweaks & the ones I use

```bash
sudo apt install gnome-tweaks -y
```

### 1. Minimize Button and Button Placement

Minimize is an important button. While I think you can live without it if you use the Super key a lot. But, for me, the minimize button seems to be very useful.
You can get the maximize button too, but it's not that useful because it can be done by double-clicking the title bar.
If you were a Mac user, you might prefer left button placement over the default right placement.
**Note:** Left Placement glitches the gnome-tweak-tool for some reason don't worry about it just increase the size of the window.

![gnome-minimise](https://i.imgur.com/9o78EMM.png)

### 2. Battery Percentage

Shows the amount of battery remaining in percent. Doesn't work for desktop pc.

![batterypercent](https://i.imgur.com/6svaFEQ.png)

### 3. Optimizing Font

I use custom resolution on my PC's so the font seems small to me, so it makes it better I use 1.11x font. I have set the hinting to full because hinting makes the font appear crisper so that they are more readable. Also, I have set the anti-aliasing to full pixels instead of sub-pixels because it has more font smoothing.

![custom-font-size](https://i.imgur.com/yjks4Of.png)

### 4. Activity Hot Corner and Format time

The activity hot corner enables the hot corner where the button Activity is placed. So rather than clicking the button just touch the edge.
You can format time according to what you need. I only use the time, so I got rid of the date there.

![overlay](https://i.imgur.com/xfprNhY.png)
