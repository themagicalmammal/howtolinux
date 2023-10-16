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

Neofetch displays information about your operating system, software and hardware. This comes with a default config which has a lot of information including CPU, GPU blah blah blah. Me being a minimalist only use some information out of this.
So, my custom config, makes the neofetch look like this. You can follow this -

```sh
wget https://gist.githubusercontent.com/themagicalmammal/1a0fa96f4131c77b5d1de4a846915ce8/raw/85a6b500e3d0de26c68a8ea734ef69e2fd23a610/config.conf
mkdir ${XDG_CONFIG_HOME:-~/.config}/neofetch
mv config.conf ${XDG_CONFIG_HOME:-~/.config}/neofetch/config.conf
```

<p align='center'>
  <img src='https://i.imgur.com/5TFEWLs.png'>
</p>

::: tip NOTE
FOR NON-POP USERS

- Open the config file
  ```sh
  gedit ${XDG_CONFIG_HOME:-~/.config}/neofetch/config.conf
  ```
- Ctrl + F then find, "ascii_distro"
- Change your distro name according the comment on names listed above the text.
:::

### 2. Shell Config

I am currently using [Starship](https://starship.rs/) shell config with Dark Patrol from [Gogh](https://github.com/Mayccoll/Gogh).
**Note:** If you have troubles installing starship with shell script you can install it via [brew](https://brew.sh/).
To make your terminal look like mine, go [here](https://gist.github.com/themagicalmammal/dd4905509d6e3bd297eb92fd750dad98).

<p align='center'>
  <img src='https://imgur.com/wOLDJbQ'>
</p>

### 3. Bash Alias

A Bash Alias is a method of supplementing or overriding Bash commands with new ones. Get my .bash_alias file from [here](https://gist.github.com/themagicalmammal/94c5210122e75b63db230d364ffe73c0). Add this to your .bash.rc

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
