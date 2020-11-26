echo "Script has started! Please wait a bit..."
git clone https://github.com/abba23/spotify-adblock-linux.git
cd spotify-adblock-linux
wget -O cef.tar.bz2 http://opensource.spotify.com/cefbuilds/cef_binary_80.0.8%2Bgf96cd1d%2Bchromium-80.0.3987.132_linux64_minimal.tar.bz2
tar -xf cef.tar.bz2 --wildcards '*/include' --strip-components=1
sudo make
sudo make install
cd ..
rm spotify-adblock-linux
curl https://raw.githubusercontent.com/themagicalmammal/howtopopbuntu/master/icons/spotify-premium.desktop
sudo mv spotify-premium.desktop /usr/share/applications/spotify-premium.desktop
echo "Install is successful, please submit an issue here: https://github.com/themagicalmammal/howtopopbuntu/issues"
