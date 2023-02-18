# Other Apps

## Wine

Wine (originally an acronym for "Wine Is Not an Emulator") is a compatibility layer capable of running Windows applications.
**Remove Wine if you have it installed**

1. If you have a 64-bit system this command will enable 32-bit support

```sh
sudo dpkg --add-architecture i386
```

2. Then follow these **Steps:**

```sh
wget https://dl.winehq.org/wine-builds/winehq.key && sudo apt-key add winehq.key
sudo apt-add-repository deb\ https://dl.winehq.org/wine-builds/ubuntu/\ $(lsb_release -c | sed 's/Codename:\t/''/g')\ main && sudo apt update && sudo apt install --install-recommends winehq-stable -y
```

3. Then open wine configuration, add download the additional wine files

```sh
winecfg
```

**Saftey with Wine** - Never use wine with sudo. Windows apps always run with admin rights in wine. No sudo needed sometimes, You need to tell wine to start an app as a "normal user" but, you never need to run it with admin rights because it already does. So from this, you could be thinking can't hurt to run wine with sudo, Right? Yes, it can hurt, or do you believe that a potential Virus wouldn't be happy to be run with root rights? Viruses work through wine like they would on Windows. sudo gives them even more privileges.

## uGet

uGet is a lightweight yet powerful open Source download manager for Linux. Basic features include a download queue, a clipboard monitor, and the ability to process downloads in a batch format.

::: code-group

```sh [Arch]
sudo pacman -S uget
```

```sh [Debian]
sudo apt install uget
```

```sh [Fedora]
sudo dnf install uget
```

```sh [Ubuntu]
sudo apt install uget
```

```sh [Void]
sudo xbps-install -S uget
```

:::


## Synaptic Package manager

Synaptic serves as a graphical front-end to APT which makes the process of software management easier.

::: code-group

```sh [Arch]
sudo pacman -S synaptic
```

```sh [Debian]
sudo apt install synaptic
```

```sh [Fedora]
sudo dnf install synaptic
```

```sh [Ubuntu]
sudo apt install synaptic
```

```sh [Void]
sudo xbps-install -S synaptic
```

:::

## Timeshift

Timeshift is a system restore tool for Linux. Creates a file system snapshot using rsync+hard links or BTRFS snapshots.

::: code-group

```sh [Arch]
sudo pacman -S timeshift
```

```sh [Debian]
sudo apt install timeshift
```

```sh [Fedora]
sudo dnf install timeshift
```

```sh [Ubuntu]
sudo apt install timeshift
```

```sh [Void]
sudo xbps-install -S timeshift
```

:::

## Resource Monitor

## Htop

A utility to see which process is taking how much CPU or memory.

::: code-group

```sh [Arch]
sudo pacman -S htop
```

```sh [Debian]
sudo apt install htop
```

```sh [Fedora]
sudo dnf install htop
```

```sh [Ubuntu]
sudo apt install htop
```

```sh [Void]
sudo xbps-install -S htop
```

:::

![htop](https://imgur.com/q6j85Hk.gif)

## Bashtop

An advanced utility that shows usage and stats for processor, memory, disks, network, and processes.
**Repo already exists in Pop 20.10**

::: code-group

```sh [Arch]
sudo pacman -S bashtop
```

```sh [Debian]
sudo apt install bashtop
```

```sh [Fedora]
sudo dnf install bashtop
```

```sh [Ubuntu]
sudo add-apt-repository ppa:bashtop-monitor/bashtop && sudo apt update && sudo apt install bashtop -y
```

```sh [Void]
sudo xbps-install -S bashtop
```

:::

![bashtop](https://imgur.com/mvpMdQ1.gif)

## Firewall

## Gufw

GUFW is a graphical utility for managing Uncomplicated Firewall (UFW). This is pretty easy to use application with a bunch of settings which you can set according to your preference.

::: code-group

```sh [Arch]
sudo pacman -S gufw
```

```sh [Debian]
sudo apt install gufw
```

```sh [Fedora]
sudo dnf install gufw
```

```sh [Ubuntu]
sudo apt install gufw
```

```sh [Void]
sudo xbps-install -S gufw
```

:::
## Opensnitch

Helps you to review which services connect to the internet. Also, stopping some services might help save some internet, and give you more control over it.

::: code-group

```sh [Arch]
sudo pacman -S opensnitch
```

```sh [Debian]
sudo apt install opensnitch
```

```sh [Fedora]
sudo dnf install opensnitch
```

```sh [Ubuntu]
sudo apt install opensnitch
```

```sh [Void]
sudo xbps-install -S opensnitch
```

:::
