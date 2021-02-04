echo "Script has started! Please wait a bit..."
sudo apt install git wget tar make gcc libc-dev
git clone https://github.com/abba23/spotify-adblock-linux.git
cd spotify-adblock-linux
wget -O cef.tar.bz2 https://cef-builds.spotifycdn.com/cef_binary_88.1.6%2Bg4fe33a1%2Bchromium-88.0.4324.96_linux64_minimal.tar.bz2
tar -xf cef.tar.bz2 --wildcards '*/include' --strip-components=1
make
sudo make install
cd ..
rm -rf spotify-adblock-linux
wget https://raw.githubusercontent.com/themagicalmammal/howtopopbuntu/master/icons/spotify.desktop
sudo mv spotify.desktop /usr/share/applications/spotify.desktop
echo "Install is successful, please submit an issue here: https://github.com/themagicalmammal/howtopopbuntu/issues"
