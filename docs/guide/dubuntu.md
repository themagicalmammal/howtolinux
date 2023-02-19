# Ubuntu Based Systems

## Forced Software Update

```sh
sudo apt install -f && sudo apt dist-upgrade
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
sudo apt install software-properties-common
```

## Disable annoying Keyring

#### This provides security for browsers on an autologin-based system. (Easy way to understand it)

If you have an autologin system, whenever you open a browser (except firefox) or Github-desktop, the system asks for a key.  
**Steps to Disable it:**

```
App password & keys > Login > Change Password > Type your Current Pass > Continue > Continue with Empty Pass > Make unencrypted
```

![disable-keyring1](https://i.imgur.com/vvbqR7b.png)
![disable-keyring2](https://i.imgur.com/lzxb68t.png)

## Disabling Pop Shop on Boot (Pop OS)

Pop Shop always opens on the startup of the system there is a way to stop that. This also helps in saving some ram.  
**Steps:**

1. Edit App center daemon from opening it at start

```sh
sudo nano /usr/share/applications/io.elementary.appcenter-daemon.desktop
```

2. Put # here before this line

```sh
Exec=io.elemantry.appcenter -s
```

## Disabling Startup Application Preferences

![application-pref](https://i.imgur.com/Raz4w8j.png)
