echo "Script has started!"
sudo apt install git wget tar make gcc libc-dev
echo "Generating libraries......"
git clone https://github.com/abba23/spotify-adblock-linux.git
cd spotify-adblock-linux
wget -O cef.tar.bz2 https://cef-builds.spotifycdn.com/cef_binary_88.1.6%2Bg4fe33a1%2Bchromium-88.0.4324.96_linux64_minimal.tar.bz2
tar -xf cef.tar.bz2 --wildcards '*/include' --strip-components=1
make
echo "Installing libraries..."
sudo make install
cd ..
sudo rm -rf spotify-adblock-linux
wget https://raw.githubusercontent.com/themagicalmammal/howtopopbuntu/master/icons/spotify.desktop
sudo mv spotify.desktop /usr/share/applications/spotify.desktop
echo "Enjoy your Spotify Pro..."
echo "Install is successful, please submit an issue here: https://github.com/themagicalmammal/howtopopbuntu/issues"
