# Gnome Tweaks

::: code-group

```sh [Arch]
sudo pacman -S gnome-tweaks
```

```sh [Debian]
sudo apt install gnome-tweaks
```

```sh [Fedora]
sudo dnf install gnome-tweaks
```

```sh [Ubuntu]
sudo apt install gnome-tweaks
```

```sh [Void]
sudo xbps-install -S gnome-tweaks
```

:::

## Minimize Button and Button Placement

Minimize is an important button. While I think you can live without it if you use the Super key a lot. But, for me, the minimize button seems to be very useful.
You can get the maximize button too, but it's not that useful because it can be done by double-clicking the title bar.
If you were a Mac user, you might prefer left button placement over the default right placement.
**Note:** Left Placement glitches the gnome-tweak-tool for some reason don't worry about it just increase the size of the window.

![gnome-minimise](https://i.imgur.com/9o78EMM.png)

## Battery Percentage

Shows the amount of battery remaining in percent. Doesn't work for desktop pc.

![batterypercent](https://i.imgur.com/6svaFEQ.png)

## Optimizing Font

I use custom resolution on my PC's so the font seems small to me, so it makes it better I use 1.11x font. I have set the hinting to full because hinting makes the font appear crisper so that they are more readable. Also, I have set the anti-aliasing to full pixels instead of sub-pixels because it has more font smoothing.

![custom-font-size](https://i.imgur.com/yjks4Of.png)

## Activity Hot Corner and Format time

The activity hot corner enables the hot corner where the button Activity is placed. So rather than clicking the button just touch the edge.
You can format time according to what you need. I only use the time, so I got rid of the date there.

![overlay](https://i.imgur.com/xfprNhY.png)

## Nautilus (admin mode)

Adds right-click property Open as Administrator.

::: code-group

```sh [Arch]
sudo pacman -S nautilus-admin && nautilus -q
```

```sh [Debian]
sudo apt install nautilus-admin && nautilus -q
```

```sh [Fedora]
sudo dnf install nautilus-admin && nautilus -q
```

```sh [Ubuntu]
sudo apt install nautilus-admin && nautilus -q
```

```sh [Void]
sudo xbps-install -S nautilus-admin && nautilus -q
```

:::

## Disabling Unnecessary Extensions

The built-in extensions I use are -

<p align="center">
    <img src='https://i.imgur.com/F7y1nMQ.png'>
</p>

## I have disabled these

1. **Alt-Tab** - By default, Alt+Tab will raise all windows of an application. This extension still groups windows by application.
2. **Always show workspaces** - Always show workspaces in the overview.
3. **Desktop Icons** - Add icons to the desktop.
4. **Pop Battery Icon Fix** - Fixes the battery icon to match the current battery level. (Useless for desktop pc)
5. **Pop Shop Details** - Adds a Show Details item to applications if Pop Shop is installed.
6. **System76 Power** - system76-power is a utility for managing graphics and power profiles. Options show up under battery menu. (Useful for hybrid and NVIDIA GPU)

## Settings Tweaks

### Prvacy Tweaks

![privacy-tweaks1](https://i.imgur.com/RNgA0vI.png)
![privacy-tweaks2](https://i.imgur.com/Aj3OupA.png)

### Over Amplification

![over-amplification](https://i.imgur.com/AIvJc4i.png)
