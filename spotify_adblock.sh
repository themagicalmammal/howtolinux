echo "Script has started!"
wget https://github.com/abba23/spotify-adblock-linux/releases/download/v1.2/spotify-adblock.so
sudo mv spotify-adblock.so /usr/local/lib/spotify-adblock.so
wget https://raw.githubusercontent.com/themagicalmammal/howtopopbuntu/master/icons/spotify.desktop
sudo mv spotify.desktop /usr/share/applications/spotify.desktop
echo "Install is successful, please submit an issue here: https://github.com/themagicalmammal/howtopopbuntu/issues"
