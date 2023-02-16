# Post Installation

There are some basic things you need to do after installation.

## Update your System

Get the latest updates via terminal or some GUI based updater or a App store.

<p align="center">
    <img src='https://i.imgur.com/NvDMCzl.png'>
</p>

Via Terminal:
::: code-group

```sh [Arch]
sudo pacman -Syu && flatpak update
```

```sh [Debian]
sudo apt update && sudo apt upgrade -y && flatpak update
```

```sh [Fedora]
sudo dnf upgrade --refresh && flatpak update
```

```sh [Ubuntu]
sudo apt update && sudo apt upgrade -y && flatpak update
```

```sh [Void]
sudo xbps-install -Su && flatpak update
```

:::

## NVIDIA Proprietary Drivers

Generally it is recommended to get the nvidia iso if there exists one, but you can install nvidia drivers using these commands.

::: code-group

```sh [Arch]
sudo pacman -S nvidia nvidia-utils
```

```sh [Debian]
sudo apt update && sudo apt install nvidia-driver
```

```sh [Fedora]
sudo dnf update && sudo dnf install akmod-nvidia && sudo reboot
```

```sh [Ubuntu]
sudo apt update && sudo ubuntu-drivers autoinstall
```

```sh [Void]
sudo xbps-install -S nvidia
```

:::
