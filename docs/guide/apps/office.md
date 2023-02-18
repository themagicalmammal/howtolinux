# Office

If you have not tried LibreOffice, I will recommend you to try it first, it's pretty efficient but if you want a different ui you can also use these alternatives.

## [LibreOffice](https://www.freeoffice.com/en/)

This generally comes default with every linux.

::: code-group

```sh [Arch]
sudo pacman -S libreoffice
```

```sh [Debian]
sudo apt update && sudo apt install libreoffice
```

```sh [Fedora]
sudo dnf install libreoffice
```

```sh [Ubuntu]
sudo apt update && sudo apt install libreoffice
```

```sh [Void]
sudo xbps-install -S libreoffice
```

:::

## [Free Office](https://www.freeoffice.com/en/)

Looks like Microsoft Office 2016.

::: code-group

```sh [Arch]
yay -S onlyoffice-desktopeditors
```

```sh [Debian]
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys CB2DE8E5
sudo echo "deb http://download.onlyoffice.com/repo/debian squeeze main" | sudo tee /etc/apt/sources.list.d/onlyoffice.list
sudo apt update && sudo apt install onlyoffice-desktopeditors
```

```sh [Fedora]
sudo dnf config-manager --add-repo https://download.onlyoffice.com/repo/centos/main/noarch/
sudo rpm --import http://download.onlyoffice.com/repo/onlyoffice.key
sudo dnf install onlyoffice-desktopeditors
```

```sh [Ubuntu]
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys CB2DE8E5
sudo echo "deb http://download.onlyoffice.com/repo/ubuntu bionic main" | sudo tee /etc/apt/sources.list.d/onlyoffice.list
sudo apt update && sudo apt install onlyoffice-desktopeditors
```

```sh [Void]
chmod +x OnlyOffice-x.x.x-x86_64.AppImage
./OnlyOffice-x.x.x-x86_64.AppImage
```

:::

## [OnlyOffice](https://www.onlyoffice.com/)

Looks like Microsoft Office 2013.

This is a beautiful office suite with lots of customization.

::: code-group

```sh [Arch]
sudo pacman -S onlyoffice-desktopeditors
```

```sh [Debian]
sudo apt update && sudo apt install onlyoffice-desktopeditors
```

```sh [Fedora]
sudo dnf install https://download.onlyoffice.com/repo/centos/main/noarch/onlyoffice-repo.noarch.rpm
sudo dnf install onlyoffice-desktopeditors
```

```sh [Ubuntu]
sudo apt update && sudo apt install onlyoffice-desktopeditors
```

```sh [Void]
sudo xbps-install -S onlyoffice-desktopeditors
```

:::

## [WPS Office](https://www.wps.com/)

::: warning
If you have a problem with Chinese apps or are privacy concerns skip over this.
:::

::: code-group

```sh [Arch]
yay -S wps-office
```

```sh [Debian]
sudo apt update && sudo apt install wps-office
```

```sh [Fedora]
sudo dnf install https://linux.m2osw.com/fedora/rpmfusion/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://linux.m2osw.com/fedora/wps-office/wps-office-11.1.0.10161-1.x86_64.rpm
```

```sh [Ubuntu]
sudo apt update && sudo apt install wps-office
```

```sh [Void]
sudo xbps-install -S wps-office
```

:::
