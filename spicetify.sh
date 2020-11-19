#!/bin/bash
installing_spicetify () {
curl -fsSL https://raw.githubusercontent.com/khanhas/spicetify-cli/master/install.sh | sh
export SPICETIFY_INSTALL="$HOME/spicetify-cli"
export PATH="$SPICETIFY_INSTALL:$PATH"
echo 'export SPICETIFY_INSTALL="$HOME/spicetify-cli' >>~/.profile
echo 'export PATH="$SPICETIFY_INSTALL:$PATH' >>~/.profile
echo "Programm installed, now configuring"
}
apply_theme () {
echo "Succesfully installed, now applying theme"
spicetify backup apply enable-devtool
spicetify update
echo "Everything is done, enjoy your themed spotify"
}
if [[ -f /usr/share/spotify/spotify ]]
then 
echo "The Script will now be applied for version installed with apt"
installing_spicetify
sudo chmod a+wr /usr/share/spotify
sudo chmod a+wr /usr/share/spotify/Apps -R
apply_theme
else
#check for flatpak
	if [[ -f $(flatpak --installations)/app/com.spotify.Client/x86_64/stable/active/files/extra/share/spotify/spotify ]]
	then
	echo "The script will now be applied for the flatpak version"
	installing_spicetify
		if [[ -f ~/.var/app/com.spotify.Client/config/spotify/prefs ]]
		then 
		sed -i "s/prefs_path.*/prefs_path              =\ \/home\/$USER\/.var\/app\/com.spotify.Client\/config\/spotify\/prefs/g" $HOME/.config/spicetify/config.ini
		else
		sed -i "s/prefs_path.*/prefs_path              =\ \/home/$USER\/.config\/spotify\/prefs/g" $HOME/.config/spicetify/config.ini
		fi
	sudo chmod a+wr /var/lib/flatpak/app/com.spotify.Client/x86_64/stable/active/files/extra/share/spotify
	sudo chmod a+wr -R /var/lib/flatpak/app/com.spotify.Client/x86_64/stable/active/files/extra/share/spotify/Apps
	apply_theme	
	else
	# Check for snap
		if [[ -f /snap/spotify ]]
		then
		echo "snap isn't supported by spicetify, consider installing the flatpak or from the repositorys"
		else
		echo "Spotify doesn't seem to be installed, This may be a flatpak issue which causes path conflict. Please install via deb method/pop repo's. If you have installed it and believe this is an error, please submit an issue here: https://github.com/themagicalmammal/howtopopbuntu/issues"
		fi
	fi
fi
