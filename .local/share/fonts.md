## Custom Fonts
1. Get the [fonts file](https://github.com/themagicalmammal/howtopopbuntu/releases/download/Fonts/fonts.tar.xz).
2. Open the Terminal and then
```bash
tar -xf $(xdg-user-dir DOWNLOAD)/fonts.tar.xz -C ${XDG_CONFIG_HOME:-~/.local}/share
rm $(xdg-user-dir DOWNLOAD)/fonts.tar.xz
```
