# Entertainment Apps

## Spotify

::: code-group

```sh [Arch]
sudo pacman -S spotify
```

```sh [Debian]
curl -sS https://download.spotify.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list
sudo apt update && sudo apt install spotify-client
```

```sh [Fedora]
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
sudo dnf install spotify-client
```

```sh [Ubuntu]
curl -sS https://download.spotify.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list
sudo apt update && sudo apt install spotify-client
```

```sh [Void]
git clone https://github.com/void-linux/void-packages.git
cd void-packages/srcpkgs/
./xbps-src pkg -j$(nproc) spotify
sudo xbps-install -Rv binpkgs/*/spotify-[0-9]*.x86_64.xbps
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

## Multimedia Codecs

Gives you the ability to play popular non-free media formats, including DVD, MP3, Quicktime and Windows Media.

::: code-group

```sh [Arch]
sudo pacman -S gstreamer gst-plugins-base gst-plugins-good gst-plugins-bad gst-plugins-ugly ffmpeg
```

```sh [Debian]
sudo apt install gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly ffmpeg
```

```sh [Fedora]
sudo dnf install gstreamer1-plugins-base gstreamer1-plugins-good gstreamer1-plugins-bad-free gstreamer1-plugins-bad-free-extras gstreamer1-plugins-ugly ffmpeg
```

```sh [Ubuntu]
sudo apt install ubuntu-restricted-extras
```

```sh [Void]
sudo xbps-install -S gstreamer gst-plugins-base gst-plugins-good gst-plugins-bad gst-plugins-ugly ffmpeg
```

:::

## Steam

::: code-group

```sh [Arch]
sudo pacman -S steam
```

```sh [Debian]
sudo add-apt-repository multiverse
sudo apt update && sudo apt install steam
```

```sh [Fedora]
sudo dnf install steam
```

```sh [Ubuntu]
sudo add-apt-repository multiverse
sudo apt update && sudo apt install steam
```

```sh [Void]
sudo xbps-install -S steam
```

:::

## Lutris

Lutris is an Open Source gaming platform for Linux. It installs and launches games, so you can start playing without the hassle of setting up your games.

::: code-group

```sh [Arch]
sudo pacman -S lutris
```

```sh [Debian]
sudo dpkg --add-architecture i386
wget -nc https://dl.winehq.org/wine-builds/winehq.key
sudo apt-key add winehq.key
echo "deb https://dl.winehq.org/wine-builds/debian/ buster main" | sudo tee /etc/apt/sources.list.d/winehq.list
sudo apt update && sudo apt install lutris
```

```sh [Fedora]
sudo dnf config-manager --add-repo https://download.opensuse.org/repositories/Emulators:/Wine:/Fedora/Fedora_34/Emulators:Wine:Fedora.repo
sudo dnf install lutris
```

```sh [Ubuntu]
sudo add-apt-repository ppa:lutris-team/lutris
sudo apt update && sudo apt install lutris
```

```sh [Void]
sudo xbps-install -S lutris
```

:::
