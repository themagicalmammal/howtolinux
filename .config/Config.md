## Configuring Neofetch
```bash
wget https://raw.githubusercontent.com/themagicalmammal/howtopopbuntu/master/.config/neofetch/config.conf
mkdir ${XDG_CONFIG_HOME:-~/.config}/neofetch
mv config.conf ${XDG_CONFIG_HOME:-~/.config}/neofetch/config.conf
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
wget https://raw.githubusercontent.com/themagicalmammal/howtopopbuntu/master/.config/starship.toml
mv starship.toml ${XDG_CONFIG_HOME:-~/.config}/starship.toml
```
