# Entertainment Apps
## Spotify for Music
**Supports Ad-block and Spicetify-cli**
```bash
curl -sS https://download.spotify.com/debian/pubkey_0D811D58.gpg | sudo apt-key add -
echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list
sudo apt update && sudo apt install spotify-client -y
```
Features that can be added, 
### Spicetify-Cli & Themes
To install themes for spotify, you can check [this](https://github.com/khanhas/spicetify-cli), to install different themes, go [here](https://github.com/morpheusthewhite/spicetify-themes) out. If you have troubles going through the steps of spicetify-cli. Here is a script you can use.
```bash
curl -fsSL https://gist.githubusercontent.com/themagicalmammal/f6f086f9c701924371e1d334c60c8562/raw/6bf8f24e6211c8ea3ba3d028634e58f1af8b971f/spicetify.sh | bash
```
You need to log in & out after this. 
### Spotify-Adblock
If you do not like ads, you can install [Ad-free Spotify](https://github.com/abba23/spotify-adblock-linux). To simplify the steps go through this. 
**Note:** This might be buggy.
```bash
curl -fsSL https://gist.githubusercontent.com/themagicalmammal/81e719ac496790049ecfb745a26dfc9b/raw/f22b8b886307cb58618ccf85f89df3ee8d4dc59d/spotify_adblock.sh | sudo bash
```

## Steam for Gaming
```bash
sudo apt install steam -y
```
If it doesn't work, turn on multiverse.
```bash
sudo add-apt-repository multiverse && sudo apt update
```

## Multimedia Codecs
Gives you the ability to play popular non-free media formats, including DVD, MP3, Quicktime and Windows Media.
```bash
sudo apt install ubuntu-restricted-extras -y
```
To enable restricted codecs to play DVDs
```bash
sudo apt install libdvd-pkg -y
sudo dpkg-reconfigure libdvd-pkg
```