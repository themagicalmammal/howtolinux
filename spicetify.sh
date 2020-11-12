echo "this work for spotify installed using apt or snap not for flatpak"
curl -fsSL https://raw.githubusercontent.com/khanhas/spicetify-cli/master/install.sh | sh
sudo chmod a+wr /usr/share/spotify
sudo chmod a+wr /usr/share/spotify/Apps -R
export SPICETIFY_INSTALL="/home/themagicallaptop/spicetify-cli"
export PATH="$SPICETIFY_INSTALL:$PATH"
echo 'export SPICETIFY_INSTALL="/home/themagicallaptop/spicetify-cli' >>~/.profile
echo 'export PATH="$SPICETIFY_INSTALL:$PATH' >>~/.profile
spicetify
spicetify backup apply enable-devtool
spicetify update
