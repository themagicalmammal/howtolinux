# Optimize Boot time & Ram Usage

Original boot time before optimisation:

```sh
$ systemd-analyze // [!code focus]
Startup finished in 8.540s (firmware) + 775ms (loader) + 4.861s (kernel) + 43.83
7s (userspace) = 58.015s
graphical.target reached after 42.165s in userspace
```

## Disabling Plymouth

This Plymouth boot screen is that boot screen you see when you are booting.

### EFI stub

```sh
sudo kernelstub --delete-options "quiet systemd.show_status=false splash"
```

### GRUB

1. Edit grub config

```sh
sudo nano /etc/default/grub
```

Find the `GRUB_CMDLINE_LINUX_DEFAULT` line, and you will see:

```sh
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"
```

2. To disable the boot screen, simply remove the word splash from this line, like so:

```sh
GRUB_CMDLINE_LINUX_DEFAULT="quiet"
```

3. In order to apply the config changes to the grub bootloader, run this command:

```sh
sudo update-grub
```

4. Now reboot your system!

5. Finally, uninstall the plymouth package from your system:

::: code-group

```sh [Arch]
sudo pacman -Rns plymouth
```

```sh [Debian]
sudo apt purge plymouth && sudo apt autoremove
```

```sh [Fedora]
sudo dnf remove plymouth
```

```sh [Ubuntu]
sudo apt purge plymouth && sudo apt autoremove
```

```sh [Void]
sudo xbps-remove plymouth
```

:::

6. Remove lingering config directories

```sh
sudo rm -rf /usr/share/plymouth
```

## Adjusting the Swappiness Property

This is required to adjust swap usage. If you have huge rams like 16GB ram then you can reduce this value to as low as 0. But if you have low ram devices like 1GB you should make this 90 or higher. Interactions with the swap file are costlier since swaps are slower than RAMs, and they can cause a reduction in performance.

Values according to me for Ram: Ratio should be as follows, 32:0, 16:10, 8:20, 4:50, 2:70
**20 is just an example value, don't mindlessly use it**

```sh
sudo sysctl vm.swappiness=20
```

**These values do not stick. To add them permanently. Add the above line to sysctl.conf.**

```sh
sudo nano /etc/sysctl.conf
```

## Adjusting the Cache Pressure Setting

Another issue, the system stores cache about stuff that you frequently open & this makes the system faster, as if it opens again, rather than reloading the data it will use the cache. But, on a lower ram device, this is a bad option since this will seriously slow your system down.
Adjust this like you adjusted swappiness property, values for RAM: Pressure should be as follows, 1:100, 2:90, 4:80, 8:60, 16:50.

```sh
sudo sysctl vm.vfs_cache_pressure=50
```

**Add the above line to sysctl.conf.**

```sh
sudo nano /etc/sysctl.conf
```

## EarlyOOM

It is a cool new feature enabled in Fedora 33. What is it, you ask? In Layman terms, It frees memory when the ram or the swap gets close to full (over 90%). Making this a beneficial feature for heavy usage. This is a very important feature for old hardware. It only consumes 0.5 to 2 MB in the background.

To install it

```sh
sudo apt install earlyoom
```

To check its status

```sh
systemctl status earlyoom
```

## Clearing buff/cache

The computer accumulates high buff/cache over time and makes the user force reboot. To clear buff cache, you can use this.

```sh
free -h && sudo sysctl -w vm.drop_caches=3 && sudo sync && echo 3 | sudo tee /proc/sys/vm/drop_caches && free -h
```

## Optimizing the boot

::: danger

PLEASE DO THIS AT YOUR OWN RISK. WHILE THIS IS SAFE TO DO YOU CAN STILL MESS UP YOUR SYSTEM SO, PLEASE READ THIS CAREFULLY AND UNDERSTAND EVERYTHING BEFORE YOU PROCEED.

:::

- **Network-dispatcher** is a dispatcher daemon for systemd-networkd connection status changes.

```sh
sudo apt remove --purge networkd-dispatcher
```

- **ModemManager** is a DBus-activated daemon that controls mobile broadband (2G/3G/4G) interfaces. If you do not have a mobile broadband interface, you do not need this.

```sh
sudo systemctl disable ModemManager.service
sudo systemctl mask ModemManager.service
```

- **fwupd** is a simple daemon allowing you to update some devices' firmware, including UEFI for several machines
  Disable thunderbolt_power

```sh
sudo nano /etc/fwupd/daemon.conf
```

&emsp; Edit the `BlacklistPlugins` line to

```sh
BlacklistPlugins=test;invalid;thunderbolt_power
```

&emsp; Remove fwupd from boot

```sh
sudo systemctl disable fwupd.service
sudo systemctl mask fwupd.service
```

- **Avahi-daemon** is supposed to provide zero-configuration network discovery and make it super-easy to find printers and other hosts on your network. I always disable it and do not miss it.

```sh
sudo systemctl disable avahi-daemon.service
sudo systemctl mask avahi-daemon.service
```

- **Apport** collects potentially sensitive data, such as core dumps, stack traces, and log files. They can contain passwords, credit card numbers, serial numbers, and other private material.

```sh
sudo systemctl disable apport.service
sudo systemctl mask apport.service
```

- **Saned** is the SANE (Scanner Access Now Easy) daemon that allows remote
  clients to access image acquisition devices available on the localhost.

```sh
sudo systemctl disable saned.service
sudo systemctl mask saned.service
```

- **GPU-Manager** is software that creates a xorg.conf for you. So running this in every boot is just overkill. You only need to run this if you change your GPU.

```sh
sudo systemctl disable gpu-manager.service
sudo systemctl mask gpu-manager.service
```

- **Apt-daily-upgrade** solves long boot uptime with apt-daily-upgrade.

```sh
sudo systemctl disable apt-daily.service
sudo systemctl disable apt-daily.timer
sudo systemctl disable apt-daily-upgrade.timer
sudo systemctl disable apt-daily-upgrade.service
```

- **lvm2-monitor** Only useful if you are using lvm.

```sh
sudo systemctl disable lvm2-monitor.service
sudo systemctl mask lvm2-monitor.service
```

- **Systemd-resolved** [Restart Required] is a system service that provides network name resolution to local applications. It implements a caching and validating DNS/DNSSEC stub resolver.

&emsp; Disable & Mask the systemd-resolved service

```sh
sudo systemctl stop systemd-resolved.service
sudo systemctl disable systemd-resolved.service
sudo systemctl mask systemd-resolved.service
```

&emsp; Then put dns=default in the [main] section of

```sh
sudo nano /etc/NetworkManager/NetworkManager.conf
```

&emsp; Delete the symlink /etc/resolv.conf

```sh
sudo rm /etc/resolv.conf
```

&emsp; Now, **Restart**

::: danger
This might be extremely unsafe!
:::

- **Switcheroo-control** [Required on Dual-GPU systems] is a D-Bus service to check the availability of dual-GPU. Keep this only if you have 2 GPUs.

```sh
sudo systemctl disable switcheroo-control.service
sudo systemctl mask switcheroo-control.service
```

- **System76-power** [Required on laptops] Power Controls for lappy not required on a desktop PC.

```sh
sudo systemctl disable system76-power.service
sudo systemctl mask system76-power.service
```

- **Thermald** [Might heatup system] daemon prevents machines from overheating and was introduced in the 14.04 Ubuntu Trusty LTS release. It monitors thermal sensors and will modify cooling controls to keep the hardware cool.
  **If your system heats after removing this even a bit, add it back**

```sh
sudo systemctl disable thermald.service
sudo systemctl mask thermald.service
```

## Q. How to enable this services?

Let's say the service name be xyz.service then to enable it -

```sh
sudo systemctl unmask xyz.service
sudo systemctl enable xyz.service
```

## Boot-time after disabling those stuff

```sh
$ systemd-analyze // [!code focus]
Startup finished in 3.862s (firmware) + 808ms (loader) + 5.171s (kernel) + 15.52
Os (userspace) = 25.363s
graphical.target reached after 15.507s in userspace
```

## Custom kernel

Custom Kernels are known and used by fewer people, but these kernels add a significant boost to performance and battery.

1. **Xanmod** is the more popular choice among intel based hardware. It provides a stable, responsive, and smooth desktop experience.
   To get Xanmod, go [here](https://xanmod.org/)  
   While installing this don't forget to add, **Setting the FQ-PIE Queuing Discipline**.

2. **Liquorix** is a distro kernel replacement built using the best configuration and kernel sources for desktop, multimedia, and gaming workloads. Works better with AMD hardware.
   To get Liquorix, go [here](https://liquorix.net/)

Initial benchmarks on intel make Xanmod a winner whereas, AMD hardware generally goes better with Liquorix. Also, if you are having heating issues go for Liquorix for a better thermal response. I use Xanmod normal because long term release felt slow for me on both my PC & lappy.

- [Reference of Xanmod being compared to Clear Linux](https://www.phoronix.com/scan.php?page=article&item=ubuntu-xanmod-clear&num=1)
- [Reference of Liquorix Kernel Benchmarks For AMD Ryzen](https://www.phoronix.com/scan.php?page=article&item=radeon-gaming-liquorix54&num=1)

## Final Boot time

```sh
$ systemd-analyze // [!code focus]
Startup finished in 3.910s (firmware) + 863ms (loader) + 4.456s (kernel) + 11.81
6§ (userspace) = 21.046s
graphical.target reached after 11.805s in userspace
```

## Q. How to remove a kernel?

**Ans.** These are the general steps to follow:

1. Getting, name of the Kernel

```sh
uname -r
```

2. Removing the Kernel

```sh
sudo apt remove <kernel name>
```

3. Getting, remaining Kernel files

```sh
apt list --installed *kernel-name*
```

4. Removing the remaining Kernel files

```sh
sudo apt remove <name of kernel files>
```

## Q. How to I uninstall custom Kernel?

::: danger
IF YOU ARE A NEW USER AND DON'T KNOW WHAT YOU ARE DOING, PLEASE SEARCH SOME THREADS OR ASK SOMEONE BEFORE TAKING ANY ACTION. BECAUSE THIS IS A VERY RISKY STEP AND CAN POTENTIALLY KILL YOUR SYSTEM.
:::

1. Removing the Kernel apt modules

::: code-group

```sh [XanMod]
sudo apt autoremove --purge linux-xanmod
```

```sh [Liquorix]
sudo apt autoremove --purge linux-image-liquorix-amd64 linux-headers-liquorix-amd64
```

:::

2. Remove FQ-PIE Queue Discipline for systemd

::: code-group

```sh [Xanmod]
sudo rm /etc/sysctl.d/90-override.conf
```

```sh [Liquorix]
# Not required for Liquorix.
```

:::

3. Removing the Kernel Repos

::: code-group

```sh [Xanmod]
sudo apt-key --keyring /etc/apt/trusted.gpg.d/xanmod-kernel.gpg del "Xanmod Kernel Signing Key"
sudo rm /etc/apt/sources.list.d/xanmod-kernel.list
```

```sh [Liquorix]
sudo add-apt-repository ppa:damentz/liquorix -r
```

:::
