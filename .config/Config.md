## Configuring your Neofetch
1. Get the [Neofetch file](https://github.com/themagicalmammal/howtopopbuntu/releases/tag/neofetch).
2. Open a Terminal, then
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
