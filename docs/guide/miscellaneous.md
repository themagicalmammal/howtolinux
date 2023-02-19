# Miscellaneous

## Ad-Hosts

I use **Steven Black** Ad-Hosts for ad-blocking the whole system without any other extra app. This blocks basic ads but not YouTube or Spotify ads.

I use **Unified hosts + fake news + gambling + porn**

### Q. How to?

**Ans. Steps:**

1. Get a [host](https://github.com/StevenBlack/hosts)
2. Save it to Downloads
3. Then

```sh
sudo mv $(xdg-user-dir DOWNLOAD)/hosts.txt /etc/hosts
```

## Terminal Mods

### 1. Neofetch Mod

Neofetch displays information about your operating system, software and hardware. This comes with a default config which has a lot of information including CPU,GPU blah blah blah. Me being a minimalist only use some information out of this.
So, my custom config, makes the neofetch look like this.  
![neofetch](https://i.imgur.com/5TFEWLs.png)
To make your neofetch look this, go [here](https://github.com/themagicalmammal/howtopopbuntu/blob/master/.config/Config.md).

### 2. Shell Config

I am currently using [Starship](https://starship.rs/) shell config with Dark Patrol from [Gogh](https://github.com/Mayccoll/Gogh).
**Note:** If you have troubles installing starship with shell script you can install it via [brew](https://brew.sh/).
To make your terminal look like mine, go [here](https://github.com/themagicalmammal/howtopopbuntu/blob/master/.config/Config.md).
![terminal](https://i.imgur.com/p2pDFEi.png)

### 3. Bash Alias

A Bash Alias is a method of supplementing or overriding Bash commands with new ones.

Get my .bash_alias file from [here](https://gist.github.com/themagicalmammal/94c5210122e75b63db230d364ffe73c0). Add this to your .bash.rc

```sh
if [ -f ~/.bash_alias ]; then . ~/.bash_alias fi
```

## TLP

TLP is a utility for battery optimization on laptops. TLP comes with a default configuration which is perfectly tuned. The utility works by optimizing the power used by hardware devices while your laptop is running on its battery.

```sh
sudo apt install tlp
sudo tlp start
```

If you need a graphical interface to optimise or control it.

```sh
sudo add-apt-repository ppa:linuxuprising/apps && sudo apt update
sudo apt install tlpui
```

## Disable Frequents

Disable Frequents Tab in Gnome app menu. This option is not required for Gnome > 3.38.

```sh
gsettings set org.gnome.desktop.privacy remember-app-usage false

```

## Clean your System

### Clean via Terminal

```sh
sudo apt --purge autoremove
sudo rm -rf ~/.cache/thumbnails/*
sudo apt clean
sudo apt autoclean
```

### Bleachbit

I use Bleachbit because it is good to remove unnecessary junk from your computer.

```sh
sudo apt install bleachbit
```

**Steps:** BleachBit (root) > Select every option (except free disk) > **Clean**  
![bleachbit](https://i.imgur.com/MTAGpB0.png)
**Note:** After doing this the first boot might be slow don't worry it's perfectly normal.

## Night Light

Night Light mode is simply made to remove some lights which hinder our sleep cycle. As researchers have found that at night if a certain set of colors interact with our eyes it doesn't let the eye rest making it _unsleepy_ that's why we use a night light.
**Steps:** Settings > Display > Night light
_You can also select the timing which fits your sleep cycle._
![nightlight](https://i.imgur.com/10HhO7b.png)

## Tile Windows

The beautiful thing I like about Pop OS is its feature-rich environment to increase work efficiency.
![Tile-windows](https://i.imgur.com/23cp7mL.png)

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

## Customization

### 1. We need to add gnome-shell-integration for Chrome.

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
