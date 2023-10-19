# Memory & Performance Tweaks

Zswap, Zram, and Profile-sync-daemon are Linux utilities designed to collectively enhance your system's performance, especially in cases of limited physical RAM and for optimizing web browser performance. These tools help manage memory efficiently, reduce the need for slow disk swaps, and enhance the overall responsiveness of your system.

## Zram

Zram is a kernel module that compresses data stored in memory, serving as a swap space in RAM. This significantly improves system performance by reducing reliance on slower disk-based swap.

::: details Arch

1. Install the `zram` package:

```sh
sudo pacman -S zram
```

2. Enable and start the Zram service using systemd:

```sh
sudo systemctl enable --now zram-swap.service
```

:::

::: details Debian

1. Edit the `/etc/rc.local` file to configure Zram:

```sh
sudo nano /etc/rc.local
```

2. Add the following lines before the "exit 0" line:

```sh
# Enable Zram
zramctl --find
mkswap /dev/zramX
swapon -p 100 /dev/zramX
```

3. Save the file and exit the text editor.

:::

::: details Fedora

1. Install the `zram-generator` package:

```sh
sudo dnf install zram-generator
```

2. Enable and start the Zram service:

```sh
sudo systemctl enable --now zram-generator-swap.service
```

:::

::: details Ubuntu

1. Install the `zram-config` package:

```sh
sudo apt-get install zram-config
```

2. Enable and start the Zram service:

```sh
sudo systemctl enable --now zram-config.service
```

:::

::: details Void

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

Zswap, integrated into the Linux kernel, caches compressed swap pages, reducing disk I/O and enhancing system responsiveness.

## Profile Sync Daemon (PSD)

Profile Sync Daemon (PSD) manages browser profiles (e.g., Chromium, Firefox) by storing them in RAM disks, similar to Zram. This boosts browser performance and extends SSD lifespan by reducing write cycles.
