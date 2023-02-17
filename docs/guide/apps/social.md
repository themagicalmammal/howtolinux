# Social Apps

## Telegram

Official Telegram client

::: code-group

```sh [Arch]
sudo pacman -S telegram-desktop
```

```sh [Debian]
sudo apt update && sudo apt install telegram-desktop
```

```sh [Fedora]
sudo dnf install telegram-desktop
```

```sh [Ubuntu]
sudo apt update && sudo apt install telegram-desktop
```

```sh [Void]
sudo xbps-install telegram-desktop
```

:::

## Discord

Official Discord client

::: code-group

```sh [Arch]
sudo pacman -S discord
```

```sh [Debian]
sudo apt update && sudo apt install discord
```

```sh [Fedora]
sudo dnf install discord
```

```sh [Ubuntu]
sudo apt update && sudo apt install discord
```

```sh [Void]
sudo xbps-install discord
```

:::

###  [BetterDiscord](https://betterdiscord.net/home/). 

To install themes and customize discord's interface according your liking.

::: details

## To install BetterDiscord

For more thorough documentation,
take a look at `betterdiscordctl`'s [README](https://github.com/bb010g/betterdiscordctl#betterdiscordctl).

## Install dependencies

### Curl

Install using your [package manager](https://curl.se/download.html#Linux)

## Install betterdiscordctl

```
$ curl -O https://raw.githubusercontent.com/bb010g/betterdiscordctl/master/betterdiscordctl
$ chmod +x betterdiscordctl
$ sudo mv betterdiscordctl /usr/local/bin
```

> You can then keep `betterdiscordctl` up to date with this command:
> ```
> $ sudo betterdiscordctl self-upgrade
> ```

## Install BetterDiscord

Replace `[COMMAND]` with `install` to install BD for the first time,
`reinstall` to reinstall BD after a Discord update,
or `uninstall` to uninstall an existing installation.

- For Stable

```
$ betterdiscordctl [COMMAND]
```

- For PTB

```
$ betterdiscordctl --flavor PTB [COMMAND]
```

- For Canary

```
$ betterdiscordctl --flavor Canary [COMMAND]
```

- For Snap

```
$ betterdiscordctl --d-install snap [COMMAND]
```

- For Flatpak

```
$ betterdiscordctl --d-install flatpak [COMMAND]
```

:::


## Facebook Messenger ([Caprine](https://github.com/sindresorhus/caprine))

Unofficial Facebook messenger

::: code-group

```sh [Arch]
sudo pacman -S caprine
```

```sh [Debian]
# Download the latest release package from the Caprine website: https://github.com/sindresorhus/caprine/releases/latest
sudo dpkg -i caprine_*.deb
```

```sh [Fedora]
# Download the latest release package from the Caprine website: https://github.com/sindresorhus/caprine/releases/latest
sudo dnf install ./caprine-*.rpm
```

```sh [Ubuntu]
# Download the latest release package from the Caprine website: https://github.com/sindresorhus/caprine/releases/latest
sudo dpkg -i caprine_*.deb
```

```sh [Void]
sudo xbps-install caprine
```

:::

## Signal

Official Signal client

::: code-group

```sh [Arch]
sudo pacman -S signal-desktop
```

```sh [Debian]
curl -s https://updates.signal.org/desktop/apt/keys.asc | sudo apt-key add -
echo "deb [arch=amd64] https://updates.signal.org/desktop/apt xenial main" | sudo tee -a /etc/apt/sources.list.d/signal-xenial.list
sudo apt update && sudo apt install signal-desktop
```

```sh [Fedora]
sudo dnf install signal-desktop
```

```sh [Ubuntu]
curl -s https://updates.signal.org/desktop/apt/keys.asc | sudo apt-key add -
echo "deb [arch=amd64] https://updates.signal.org/desktop/apt xenial main" | sudo tee -a /etc/apt/sources.list.d/signal-xenial.list
sudo apt update && sudo apt install signal-desktop
```

```sh [Void]
sudo xbps-install signal-desktop
```

:::

## Whatsapp ([WhatsappQT](https://gitlab.com/bit3/whatsappqt))

Unofficial Whatsapp client

::: code-group

```sh [Arch]
yay -S whatsapp-nativefier
```

```sh [Debian]
sudo apt update && sudo apt install nodejs npm
sudo npm install nativefier -g
nativefier "https://web.whatsapp.com/" --name "WhatsAppQT"
```

```sh [Fedora]
sudo dnf install nodejs npm
sudo npm install nativefier -g
nativefier "https://web.whatsapp.com/" --name "WhatsAppQT"
```

```sh [Ubuntu]
sudo apt update && sudo apt install nodejs npm
sudo npm install nativefier -g
nativefier "https://web.whatsapp.com/" --name "WhatsAppQT"
```

```sh [Void]
sudo xbps-install nodejs npm
sudo npm install nativefier -g
nativefier "https://web.whatsapp.com/" --name "WhatsAppQT"

```

:::
