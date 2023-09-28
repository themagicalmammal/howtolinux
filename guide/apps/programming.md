# Programming Apps

## Atom

A hackable text editor for devs.

::: code-group

```sh [Arch]
sudo pacman -S atom
```

```sh [Debian]
wget -qO - https://packagecloud.io/AtomEditor/atom/gpgkey | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://packagecloud.io/AtomEditor/atom/any/ any main"
sudo apt update && sudo apt install atom
```

```sh [Fedora]
sudo dnf install atom
```

```sh [Ubuntu]
wget -qO - https://packagecloud.io/AtomEditor/atom/gpgkey | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://packagecloud.io/AtomEditor/atom/any/ any main"
sudo apt update && sudo apt install atom
```

```sh [Void]
sudo xbps-install -S atom
```

:::

## Pycharm IDE

A Python IDE for devs.

::: code-group

```sh [Arch]
sudo pacman -S pycharm-community-edition
```

```sh [Debian]
sudo apt install wget openjdk-11-jdk
wget https://download.jetbrains.com/python/pycharm-community-2021.3.1.tar.gz
sudo tar xvfz pycharm-community-2021.3.1.tar.gz -C /opt/
sudo /opt/pycharm-community-2021.3.1/bin/pycharm.sh
```

```sh [Fedora]
sudo dnf install pycharm-community
```

```sh [Ubuntu]
sudo apt install wget openjdk-11-jdk
wget https://download.jetbrains.com/python/pycharm-community-2021.3.1.tar.gz
sudo tar xvfz pycharm-community-2021.3.1.tar.gz -C /opt/
sudo /opt/pycharm-community-2021.3.1/bin/pycharm.sh
```

```sh [Void]
sudo xbps-install -S pycharm-community
```

:::

Important python modules,

::: code-group

```sh [Arch]
sudo pacman -S python-pip python python-virtualenv
pip3 install virtualenv #solves the global package bug
```

```sh [Debian]
sudo apt install python3-pip python3-dev python3-distutils python3-venv
pip3 install virtualenv #solves the global package bug
```

```sh [Fedora]
sudo dnf install python3-pip python3-devel python3-virtualenv
pip3 install virtualenv #solves the global package bug
```

```sh [Ubuntu]
sudo apt install python3-pip python3-dev python3-distutils python3-venv
pip3 install virtualenv #solves the global package bug
```

```sh [Void]
sudo xbps-install -S python3 python3-pip python3-setuptools python3-dev python3-virtualenv
pip3 install virtualenv #solves the global package bug
```

:::

::: tip
If you use python 2.x use python instead of python3 and pip instead of pip3.
:::

## GitHub-Desktop

A seamless way to contribute to projects on GitHub.

::: code-group

```sh [Arch]
yay -S github-desktop-bin
```

```sh [Debian]
sudo apt install git
wget -qO - https://packagecloud.io/shiftkey/desktop/gpgkey | sudo apt-key add -
echo "deb [arch=amd64] https://packagecloud.io/shiftkey/desktop/any/ any main" | sudo tee /etc/apt/sources.list.d/packagecloud-shiftky-desktop.list
sudo apt update && sudo apt install github-desktop
```

```sh [Fedora]
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo dnf config-manager --add-repo=https://packages.microsoft.com/yumrepos/vscode
sudo dnf install github-desktop
```

```sh [Ubuntu]
sudo apt install git
wget -qO - https://packagecloud.io/shiftkey/desktop/gpgkey | sudo apt-key add -
echo "deb [arch=amd64] https://packagecloud.io/shiftkey/desktop/any/ any main" | sudo tee /etc/apt/sources.list.d/packagecloud-shiftky-desktop.list
sudo apt update && sudo apt install github-desktop
```

```sh [Void]
wget https://github.com/shiftkey/desktop/releases/download/release-VERSION/GitHubDesktop-linux-VERSION.deb
xdeb -d void -b GitHubDesktop-linux-VERSION.deb
sudo xbps-install -f GitHubDesktop-linux-VERSION.xbps
```

:::

If this doesn't work, get the deb [here](https://github.com/shiftkey/desktop/releases).

## Java

::: code-group

```sh [Arch]
sudo pacman -S jdk-openjdk
```

```sh [Debian]
sudo apt install default-jdk
```

```sh [Fedora]
sudo dnf install java-latest-openjdk
```

```sh [Ubuntu]
sudo apt install default-jdk
```

```sh [Void]
sudo xbps-install -S openjdk
```

:::

## Visual Studio

::: code-group

```sh [Arch]
sudo pacman -S code
```

```sh [Debian]
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
rm packages.microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt update && sudo apt install code
```

```sh [Fedora]
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo dnf config-manager --add-repo=https://packages.microsoft.com/yumrepos/vscode
sudo dnf install code
```

```sh [Ubuntu]
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
rm packages.microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt update && sudo apt install code
```

```sh [Void]
sudo xbps-install -S code
```

:::
