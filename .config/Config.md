## Configuring Neofetch
```bash
wget https://github.com/themagicalmammal/howtopopbuntu/releases/download/neofetch/neofetch.tar.xz
tar -xf $(xdg-user-dir DOWNLOAD)/neofetch.tar.xz -C ${XDG_CONFIG_HOME:-~/.config}
rm $(xdg-user-dir DOWNLOAD)/neofetch.tar.xz
```
**Note for Non-Pop users** -  You have to change your logo according to this, <br />
1. Open the config file
```bash
gedit ${XDG_CONFIG_HOME:-~/.config}/neofetch/config.conf
```
2. Ctrl + F then find, "ascii_distro"
3. Change your distro name according the names listed above the text.

## Configuring Starship
```bash
wget https://github.com/themagicalmammal/howtopopbuntu/releases/download/Starship/starship.toml
mv $(xdg-user-dir DOWNLOAD)/starship.toml ${XDG_CONFIG_HOME:-~/.config}/starship.toml
```
