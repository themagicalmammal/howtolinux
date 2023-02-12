# Optimize Boot-time & Ram Usage
My original boot-time was 1min 4sec after removing apps it is now 58sec. 
![originalboottime](https://i.imgur.com/xkD7ety.png)

## Disabling Plymouth
**For Pop OS** 
```bash
sudo kernelstub --delete-options "quiet systemd.show_status=false splash"
```
**For Ubuntu** 
Go through [this](https://www.kevin-custer.com/blog/disabling-the-plymouth-boot-screen-in-ubuntu-20-04/) guide. 

**This reduces my boot-time to 35sec** 

## Adjusting the Swappiness Property
This is required to adjust swap usage. If you have huge rams like 16GB ram then you can reduce this value to as low as 0. But if you have low ram devices like 1GB you should make this 90 or higher. Interactions with the swap file are costlier since swaps are slower than RAMs and they can cause a reduction in performance. 

Values according to me for Ram: Ratio should be as follows, 32:0, 16:10, 8:20, 4:50, 2:70 
**20 is just an example value, don't mindlessly use it** 
```bash
sudo sysctl vm.swappiness=20
```
**These values do not stick. To add them permanently. Add the above line to sysctl.conf.** 
```bash
sudo nano /etc/sysctl.conf
```

## Adjusting  the Cache Pressure Setting
Another issue, the system stores cache about stuff that you frequently open & this makes the system faster, as if it opens again, rather than reloading the data it will use the cache. But, on a lower ram device, this is a bad option since this will seriously slow your system down. 
Adjust this like you adjusted swappiness property, values for RAM: Pressure should be as follows, 1:100, 2:90, 4:80, 8:60, 16:50.
```bash
sudo sysctl vm.vfs_cache_pressure=50
```
**Add the above line to sysctl.conf.** 
```bash
sudo nano /etc/sysctl.conf
```

## EarlyOOM
It is a cool new feature enabled in Fedora 33. What is it, you ask? In Layman terms, It frees memory when the ram or the swap gets close to full (over 90%). Making this a beneficial feature for heavy usage. This is a very important feature for old hardware. It only consumes 0.5 to 2 MB in the background. 
 

To install it
```bash
sudo apt install earlyoom -y
```
To check it's status
```bash
systemctl status earlyoom
```


## Wayland
Wayland is a new protocol that enables 3D compositors to be used as primary display servers, instead of running the 3D compositor as an extension under the (2D) X.org display server. Or, in layman's terms, it assumes you're using a 3D desktop from the start, instead of bolting on 3D capabilities to an 2D framework. 

X.org is the default display manager but, X.org is old and is very bloated, thus uses more resources. So in this way, Wayland can be a better option. But, Wayland is a newer display protocol and thus is incomplete in a way giving the birth yo many bugs, and one of them being **NVIDIA**. So, if you have an NVIDIA GPU, Wayland is a bad option. Also, if you don't have NVIDIA GPU, still there might be bugs, so if you have bugs/glitches, remove it.(Remove the #).

1. Edit the /etc/gdm3/custom.conf to either disable or enable Wayland.
```bash
sudo nano /etc/gdm3/custom.conf
```

2. Add # before this line
```nano
WaylandEnable=false
```

3. Then
```bash
sudo systemctl restart gdm3
```

4. Then select it in the login 
![wayland](https://i.imgur.com/R26e6rN.png)

5. To confirm
```bash
echo $XDG_SESSION_TYPE
``` 
Output should be Wayland

## Disabling Unnecessary Extensions
Pop OS comes with a lot of Extensions which generally is not used by everyone so you can prefer to disable them you can. 
The built-in extensions I use are -  
![gnomeextensions](https://i.imgur.com/F7y1nMQ.png)

## I have disabled these
1. **Alt-Tab** -  By default, Alt+Tab will raise all windows of an application. This extension still groups windows by application.
2. **Always show workspaces** - Always show workspaces in the overview.
3. **Desktop Icons** - Add icons to the desktop.
4. **Pop Battery Icon Fix** - Fixes the battery icon to match the current battery level. (Useless for desktop pc)
5. **Pop Shop Details** - Adds a Show Details item to applications if Pop Shop is installed.
6. **System76 Power** - system76-power is a utility for managing graphics and power profiles. Options show up under battery menu. (Useful for hybrid and NVIDIA GPU)

## Disabling Pop Shop on Boot
Pop Shop always opens on the startup of the system there is a way to stop that. This also helps in saving some ram.  
**Steps:**
1. Edit App center daemon from opening it at start
```bash
sudo nano /usr/share/applications/io.elementary.appcenter-daemon.desktop
```
2. Put # here before this line
```bash
Exec=io.elemantry.appcenter -s
```
## Clearing buff/cache
The computer accumulates high buff/cache over time and makes the user force reboot. To clear buff cache, you can use this. 
```bash
free -h && sudo sysctl -w vm.drop_caches=3 && sudo sync && echo 3 | sudo tee /proc/sys/vm/drop_caches && free -h
```

## Optimizing the boot
### DISCLAIMER
#### PLEASE DO THIS AT YOUR OWN RISK. WHILE THIS IS SAFE TO DO YOU CAN STILL MESS UP YOUR SYSTEM SO, PLEASE READ THIS CAREFULLY AND UNDERSTAND EVERYTHING BEFORE YOU PROCEED.
- **Network-dispatcher** is a dispatcher daemon for systemd-networkd connection status changes.
```bash
sudo apt remove --purge networkd-dispatcher -y
```
- **ModemManager** is a DBus-activated daemon that controls mobile broadband (2G/3G/4G) interfaces. If you do not have a mobile broadband interface, you do not need this.
```bash
sudo systemctl disable ModemManager.service
sudo systemctl mask ModemManager.service
```
**Note:** - If you are not using this and don't want Wi-Fi to disable wpa_supplicant.service.
- **fwupd** is a simple daemon allowing you to update some devices' firmware, including UEFI for several machines
Disable thunderbolt_power 
```bash
sudo nano /etc/fwupd/daemon.conf
```
Make it
```bash
BlacklistPlugins=test;invalid;thunderbolt_power
```
![blacklist_thunderbold](https://i.imgur.com/pf0WSGt.png)
Remove fwupd from boot
```bash
sudo systemctl disable fwupd.service
sudo systemctl mask fwupd.service
```
- **Avahi-daemon** is supposed to provide zero-configuration network discovery and make it super-easy to find printers and other hosts on your network. I always disable it and do not miss it.
```bash
sudo systemctl disable avahi-daemon.service
sudo systemctl mask avahi-daemon.service
```
- **Apport** collects potentially sensitive data, such as core dumps, stack traces, and log files. They can contain passwords, credit card numbers, serial numbers, and other private material.
```bash
sudo systemctl disable apport.service
sudo systemctl mask apport.service
```
- **Saned** is the SANE (Scanner Access Now Easy) daemon that allows remote
clients to access image acquisition devices available on the localhost.
```bash
sudo systemctl disable saned.service
sudo systemctl mask saned.service
```
- **GPU-Manager** is software that creates a xorg.conf for you. So running this in every boot is just overkill. You only need to run this if you change your GPU.
```bash
sudo systemctl disable gpu-manager.service
sudo systemctl mask gpu-manager.service
```
- **Apt-daily-upgrade** solves long boot up time with apt-daily-upgrade.
```bash
sudo systemctl disable apt-daily.service
sudo systemctl disable apt-daily.timer
sudo systemctl disable apt-daily-upgrade.timer
sudo systemctl disable apt-daily-upgrade.service
```
- **lvm2-monitor** Only useful if you are using lvm.
```bash
sudo systemctl disable lvm2-monitor.service
sudo systemctl mask lvm2-monitor.service
```
- **Systemd-resolved** [Restart Required]  is a system service that provides network name resolution to local applications. It implements a caching and validating DNS/DNSSEC stub resolver.
1. Disable & Mask the systemd-resolved service
```bash
sudo systemctl stop systemd-resolved.service
sudo systemctl disable systemd-resolved.service
sudo systemctl mask systemd-resolved.service
```
2. Then put dns=default in the [main] section of
```bash
sudo nano /etc/NetworkManager/NetworkManager.conf
```
3. Delete the symlink /etc/resolv.conf
```bash
sudo rm /etc/resolv.conf
```
4. Restart  

**Might be UnSafe** 
- **Switcheroo-control** [Required on Dual-GPU systems] is a D-Bus service to check the availability of dual-GPU. Keep this only if you have 2 GPUs.
```bash
sudo systemctl disable switcheroo-control.service
sudo systemctl mask switcheroo-control.service
```
- **System76-power** [Required on laptops] Power Controls for lappy not required on a desktop PC.
```bash
sudo systemctl disable system76-power.service
sudo systemctl mask system76-power.service
```
- **Thermald** [Might heatup system] daemon prevents machines from overheating and was introduced in the 14.04 Ubuntu Trusty LTS release. It monitors thermal sensors and will modify cooling controls to keep the hardware cool.
**If your system heats after removing this even a bit, add it back**
```bash
sudo systemctl disable thermald.service
sudo systemctl mask thermald.service
```

**Enable them back** 
Let the service name be xyz.service
```bash
sudo systemctl unmask xyz.service
sudo systemctl enable xyz.service
```

- Disabling **Startup Application Preferences** 

![application-pref](https://i.imgur.com/Raz4w8j.png)

## Boot-time after disabling those stuff
![prekernelbootime](https://i.imgur.com/yFgVXs3.png)

## Custom kernel
Custom Kernels are known and used by fewer people, but these kernels add a significant boost to performance and battery.
1. **Xanmod** is the more popular choice among intel based hardware. It provides a stable, responsive, and smooth desktop experience. 
To get Xanmod, go [here](https://xanmod.org/)  
While installing this don't forget to add, **Setting the FQ-PIE Queuing Discipline**. 

2. **Liquorix** is a distro kernel replacement built using the best configuration and kernel sources for desktop, multimedia, and gaming workloads. Works better with AMD hardware. 
To get Liquorix, go [here](https://liquorix.net/)  

Initial benchmarks on intel make Xanmod a winner whereas, AMD hardware generally goes better with Liquorix. Also, if you are having heating issues go for Liquorix for a better thermal response. I use Xanmod normal because long term release felt slow for me on both my PC & lappy. 

[Reference of Xanmod being compared to Clear Linux](https://www.phoronix.com/scan.php?page=article&item=ubuntu-xanmod-clear&num=1) 
[Reference of Liquorix Kernel Benchmarks For AMD Ryzen](https://www.phoronix.com/scan.php?page=article&item=radeon-gaming-liquorix54&num=1) 
[Linux Generic vs Xanmod vs Liquorix](https://www.youtube.com/watch?v=EAe95sWrv0U) (Not English but you can see the benchmark scores.) 

**Note:** At this point, boot is the fastest.

## Getting rid of Custom Kernel
**IF YOU ARE A NEW USER AND DON'T KNOW WHAT YOU ARE DOING, PLEASE SEARCH SOME THREADS OR ASK SOMEONE BEFORE TAKING ANY ACTION. BECAUSE THIS IS A VERY RISKY STEP AND CAN POTENTIALLY KILL YOUR SYSTEM.**
1. Removing the Kernel apt modules 

For XanMod
```bash
sudo apt autoremove --purge linux-xanmod -y
```

For Liquorix
```bash
sudo apt autoremove --purge linux-image-liquorix-amd64 linux-headers-liquorix-amd64 -y
```
2. [XanMod Only] Remove FQ-PIE Queue Discipline for systemd
```bash
sudo rm /etc/sysctl.d/90-override.conf
```
4. Removing  the Kernel Repos 

For XanMod 
Download this [deb](https://dl.xanmod.org/xanmod-repository.deb) and uninstall it. 

For Liquorix 
```bash
sudo add-apt-repository -r ppa:damentz/liquorix
```
**Tip: -r can be after or before the repo, so you can also write,**
```bash
sudo add-apt-repository ppa:damentz/liquorix -r
```

5. Getting, name of the Kernel
```bash
uname -r
```
6. Removing the Kernel
```bash
sudo apt remove <kernel name> -y
```
7. Getting, remaining Kernel files
```bash
apt list --installed *xanmod* *liquorix*
```
8. Removing the remaining Kernel files
```bash
sudo apt remove <name of kernel files> -y
```

[Reference of installing and removing XanMod](https://www.reddit.com/r/pop_os/comments/jlrney/psa_installing_and_removing_the_xanmod_kernel_in/) 

## Final Boot-Time
![final-boottime](https://i.imgur.com/sXc3RDt.png)
