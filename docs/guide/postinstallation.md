# Post Installation

There are some basic things you need to do after installation.

## Update your System

Get the latest updates via terminal or some GUI based updater or a App store.

<p align="center">
    <img src='https://i.imgur.com/NvDMCzl.png'>
</p>

Via Terminal:

```sh
sudo apt update && sudo apt upgrade -y && flatpak update
```


## Why use apt, not apt-get?

**Ans.** Apt was made according to an end-user perspective. It mostly does everything apt-get does. So for normal users, apt-get is not useful. But, for a developer that writes scripts and does automation, like writing a Docker file to build images, they would prefer apt-get over apt.

## Difference b/w upgrade and dist-upgrade

When you run the apt upgrade, it only updates that which has a new release accessible to the platform, as defined in /etc/apt/sources.list or in /etc/apt/sources.list.d/.

However, when you run apt dist-upgrade, it will intelligently install or remove packages as needed, to complete the upgrade. Dist-upgrade has an intelligent dispute determination method, so it will attempt to update the numerous necessary packages at the cost of those considered less valuable. But, this might be dangerous because it removes files that might eventually break the system.

## Updating your recovery

If you upgrade to a newer release the recovery also needs to be upgraded, you can do it via Terminal.

```sh
pop-upgrade recovery upgrade from-release
```

## Software Properties Common

This is a required library for apps, that use PPA's for installation. It doesn't come pre-installed with many Ubuntu-based distros like Elementary OS.

```sh
sudo apt install software-properties-common -y
```

## Proprietary Drivers

_You can get proprietary drivers directly from the Pop/Ubuntu Shop or Terminal._
_If you get issues with NVIDIA get the NVIDIA iso._

