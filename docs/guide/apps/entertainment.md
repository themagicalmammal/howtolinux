# Entertainment Apps

## Spotify

::: code-group

```sh [Arch]
sudo pacman -S spotify
```

```sh [Debian]
curl -sS https://download.spotify.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list
sudo apt-get update
sudo apt-get install spotify-client
```

```sh [Fedora]
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
sudo dnf install spotify-client
```

```sh [Ubuntu]
curl -sS https://download.spotify.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list
sudo apt-get update
sudo apt-get install spotify-client
```

```sh [Void]

```

:::

### Spicetify

To install themes for spotify, you can check [this](https://github.com/khanhas/spicetify-cli), to install different themes, go [here](https://github.com/morpheusthewhite/spicetify-themes) out. If you have troubles going through the steps of spicetify-cli. Here is a script you can use. You need to log in & out after using this.

```sh
curl -fsSL https://gist.githubusercontent.com/themagicalmammal/f6f086f9c701924371e1d334c60c8562/raw/d331b26ef430ffa2887172552ce9bbf91df74f3e/spicetify.sh | sh
```

### Spicetify Marketplace

Marketplace allows you to browse, download, and install extensions, themes, and CSS snippets with ease. You can also browse custom apps, but will need to do some manual installation to get them working. You can install the adblocker directly from marketplace apps.

```sh
curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/resources/install.sh | sh
```

## Steam for Gaming

::: code-group

```sh [Arch]
sudo pacman -S steam
```

```sh [Debian]
sudo apt-get install steam
```

```sh [Fedora]
sudo dnf install steam
```

```sh [Ubuntu]
sudo apt-get install steam
```

```sh [Void]
sudo xbps-install -S steam
```

:::

If it doesn't work, turn on multiverse.

```sh
sudo add-apt-repository multiverse && sudo apt update
```

## Multimedia Codecs

Gives you the ability to play popular non-free media formats, including DVD, MP3, Quicktime and Windows Media.

```sh
sudo apt install ubuntu-restricted-extras -y
```

To enable restricted codecs to play DVDs

```sh
sudo apt install libdvd-pkg -y
sudo dpkg-reconfigure libdvd-pkg
```
