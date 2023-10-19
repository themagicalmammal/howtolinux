# Miscellaneous

This is a collection of some other amazing things you can try with your linux.

## AdHosts

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
