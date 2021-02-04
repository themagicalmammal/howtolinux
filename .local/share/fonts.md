## Custom Fonts
```bash
wget https://github.com/themagicalmammal/howtopopbuntu/raw/master/.local/share/fonts.tar.xz
tar -xf $(xdg-user-dir DOWNLOAD)/fonts.tar.xz -C ${XDG_CONFIG_HOME:-~/.local}/share
rm $(xdg-user-dir DOWNLOAD)/fonts.tar.xz
```
