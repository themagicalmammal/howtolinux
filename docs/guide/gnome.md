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

## Custom Fonts

Custom Fonts increase the user experience. I use custom fonts on my laptop and also my Oneplus.

Currently, I am using Linotte Font for system & MonoFur for my terminal.
To change your font, go to gnome-tweaks then to Fonts.  
![customfont](https://i.imgur.com/yjks4Of.png)
To change Terminal font, Go to preferences, then to profiles, then in custom font select MonoFur.
To get my fonts,

```sh
wget https://github.com/themagicalmammal/howtopopbuntu/raw/master/.local/share/fonts.tar.xz
tar -xf $(xdg-user-dir DOWNLOAD)/fonts.tar.xz -C ${XDG_CONFIG_HOME:-~/.local}/share
rm $(xdg-user-dir DOWNLOAD)/fonts.tar.xz
```

If the font doesn't show, you can try clearing the font cache

```sh
fc-cache -f -v
```

## Tile Windows

The beautiful thing I like about Pop OS is its feature-rich environment to increase work efficiency.
![Tile-windows](https://i.imgur.com/23cp7mL.png)

## Customization

### 1. We need to add gnome-shell-integration for Chrome.

[Chrome](https://chrome.google.com/webstore/detail/gnome-shell-integration/gphhapmejobijbbhgpjhcjognlahblep?hl=en) [Firefox](https://addons.mozilla.org/en-US/firefox/addon/gnome-shell-integration/) - This extension provides integration with GNOME Shell and the corresponding extensions' repository, make it easy to add extensions via your browser.

![gsi](https://i.imgur.com/d8M3YpY.png)

### 2. Then go to [Gnome.org](https://extensions.gnome.org/) and get your extensions.

### Important Extensions

- [User themes](https://extensions.gnome.org/extension/19/user-themes/)
- [Impatience](https://extensions.gnome.org/extension/277/impatience/)

### Some More Cool Extensions

- [Showtime - Desktop Widget](https://extensions.gnome.org/extension/1429/showtime/)
- [Activities Configurator](https://extensions.gnome.org/extension/358/activities-configurator/)
- [Dash to Dock](https://extensions.gnome.org/extension/307/dash-to-dock/)

  ![dashtodock](https://i.imgur.com/75pDvsf.png)

- [Frippery Move Clock](https://extensions.gnome.org/extension/2/move-clock/)
- [Remove Accessibility](https://extensions.gnome.org/extension/112/remove-accesibility/)
- [Dynamic Panel Transparency](https://extensions.gnome.org/extension/1011/dynamic-panel-transparency/)
- [Dash to Panel](https://extensions.gnome.org/extension/1160/dash-to-panel/)

  ![dashtopanel](https://i.imgur.com/aim0WOW.png)
  To get the start button I [have](https://i.imgur.com/JQOGhRx.png).
  f

- [Compiz windows effect](https://extensions.gnome.org/extension/3210/compiz-windows-effect/)
- [Compiz alike magic lamp effect](https://extensions.gnome.org/extension/3740/compiz-alike-magic-lamp-effect/)

### 3. Custom themes

_Go to [Gnome-look](https://www.gnome-look.org/browse/cat/)_  
**My Setup**
Shell & Application - [WhiteSur-light](https://www.gnome-look.org/p/1403328/)
Cursor - [Bibata](https://www.gnome-look.org/s/Gnome/p/1197198/)
Icons - [McMojave-circle](https://www.gnome-look.org/s/Gnome/p/1305429)
Wallpaper - [Colorful New York](https://imgur.com/gallery/kBwTMX5)

### 4. Place the theme in .themes & the icons in .icons in Home.

### 5. In the Gnome tweak tool, Select your theme.

**Tip** - How to fix terminal theme

1. Go to Preferences.
2. Add Profiles.
3. Name it Big_Sur.
4. Go to colors, then select _choose use colors from system theme_.
5. Set Big_Sur default.
6. Close and reopen the terminal.

**Tip** - How to fix gedit/text-editor theme

1. Go to Preferences.
2. Go to Font & Colors.
3. Select Color Scheme - Classic.

**Tip** - Add icon instead of Activities text

1. Go to Extensions.
2. Open settings for Activities Configurator.
3. Select a custom icon
   **The icon I use is [here](https://i.imgur.com/mv2d9Yi.png)**
4. Hide Text & reduce icon padding

### After you do all of this, your desktop should look this

![bigsurlikelook](https://i.imgur.com/2zDuo9S.png)

### To fix qt5 applications like KolourPaint to respect system theme, go [here](https://gist.github.com/tur1ngb0x/82f6fa2fff3d05fe2e3c73d83ee3b6a4).
