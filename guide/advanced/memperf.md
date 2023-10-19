# Memory & Performance Tweaks

Zswap, Zram, and Profile-sync-daemon are Linux utilities designed to collectively enhance your system's performance, especially in cases of limited physical RAM and for optimizing web browser performance. These tools help manage memory efficiently, reduce the need for slow disk swaps, and enhance the overall responsiveness of your system.

## Zram

Zram, formerly known as compcache, offers a straightforward RAM compression solution in Linux. It adds an additional compressed swap volume within the RAM hierarchy, optimizing data storage and management. When RAM capacity is reached, it efficiently shifts excess data to the compressed swap, minimizing reliance on slower storage drives for improved system performance.

1. Install the `zram` package:

::: code-group

```sh [Arch]
sudo pacman -S zram
```

```sh [Debian]
sudo apt-get install zram-tools
```

```sh [Fedora]
sudo dnf install zram-generator
```

```sh [Ubuntu]
sudo apt-get install zram-config
```

:::

2. Enable and start the Zram service:

::: code-group

```sh [Arch]
sudo systemctl enable --now zram-swap.service
```

```sh [Debian]
sudo systemctl enable --now zram-swap.service
```

```sh [Fedora]
sudo systemctl enable --now zram-generator-swap.service
```

```sh [Ubuntu]
sudo systemctl enable --now zram-swap.service
```

:::

::: details Void (Runit)

1. Create a new runit service for Zram by creating a file (e.g., `/etc/sv/zram`) and adding the following content:

```sh
#!/bin/sh
exec 2>&1
exec zramctl --find
exec mkswap /dev/zramX
exec swapon -p 100 /dev/zramX
```

2. Make the service file executable:

```sh
chmod +x /etc/sv/zram
```

3. Link the service to the default runlevel:

```sh
ln -s /etc/sv/zram /var/service/
```

:::

## Zswap

Zswap, like Zram, enhances system performance by using compressed swap space in RAM. However, it differs by focusing on compressed cache for swap pages within the kernel, minimizing write operations to slow storage devices. Zswap is an integral part of the kernel, while Zram typically requires user-level setup. This approach reduces I/O and speeds up data access, resulting in an optimized and more responsive system.

1. Check if Zswap is already active by examining the kernel parameters:

```sh
cat /sys/module/zswap/parameters/enabled
```

- If Zswap is active, you don't need to make any changes.
- If it's not active or you want to enable it explicitly, proceed with the following steps.

2. Edit the kernel boot parameters (usually in the GRUB configuration) to enable Zswap:

Edit the /etc/default/grub file and add zswap.enabled=1 to the GRUB_CMDLINE_LINUX line. Then, update the GRUB configuration:

::: code-group

```sh [Arch]
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

```sh [Debian]
sudo update-grub
```

```sh [Fedora]
sudo grub2-mkconfig -o /boot/grub2/grub.cfg
```

```sh [Ubuntu]
sudo update-grub
```

```sh [Void]
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

:::

## Profile Sync Daemon (PSD)

Profile Sync Daemon (PSD) manages browser profiles (e.g., Chromium, Firefox) by storing them in RAM disks, similar to Zram. This boosts browser performance and extends SSD lifespan by reducing write cycles.

1. Install Profile Sync Daemon:

::: code-group

```sh [Arch]
git clone https://aur.archlinux.org/profile-sync-daemon.git
cd profile-sync-daemon && makepkg -si
sudo systemctl enable psd.service
sudo systemctl start psd.service
```

```sh [Debian]
sudo apt-get install profile-sync-daemon
sudo systemctl enable psd.service
sudo systemctl start psd.service
```

```sh [Fedora]
sudo dnf install profile-sync-daemon
sudo systemctl enable psd.service
sudo systemctl start psd.service
```

```sh [Ubuntu]
sudo apt-get install profile-sync-daemon
sudo systemctl enable psd.service
sudo systemctl start psd.service
```

```sh [Void]
git clone https://github.com/graysky2/profile-sync-daemon
cd profile-sync-daemon && make && sudo make install
sudo rm -rf /usr/lib/systemd/
cd && git clone https://github.com/madand/runit-services
cd runit-services && sudo mv psd /etc/sv/
sudo ln -s /etc/sv/psd /var/service/
```

:::

2. Customize browser-specific settings:

Edit the PSD configuration file (`~/.config/profile-sync-daemon/sync.conf`) to set the appropriate paths and browser-specific settings. You can configure the browsers you use in this file.
