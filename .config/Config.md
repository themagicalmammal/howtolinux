## Configuring Neofetch
1. Get the [Neofetch file](https://github.com/themagicalmammal/howtopopbuntu/releases/tag/neofetch).
2. Open the Terminal and then
```bash
tar -xf $(xdg-user-dir DOWNLOAD)/neofetch.tar.xz -C ${XDG_CONFIG_HOME:-~/.config}
rm $(xdg-user-dir DOWNLOAD)/neofetch.tar.xz
```
**Note for Non-Pop users** -  You have to change your logo according to this, <br />
1. Open the config file
```bash
gedit ${XDG_CONFIG_HOME:-~/.config}/neofetch/config.conf
```
2. Ctrl + F then find, "ascii_distro"
3. Change your distro name according the names listed above.

## Configuring Starship
1. Get the [Starship Config](https://github.com/themagicalmammal/howtopopbuntu/releases/download/starship/starship.toml)
2.  Open the Terminal and then
```bash
mv $(xdg-user-dir DOWNLOAD)/starship.toml ${XDG_CONFIG_HOME:-~/.config}/starship.toml
```
