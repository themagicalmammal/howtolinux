# Preferred Apps
Pop has apps that you need. But, if you do not like them, you can also get alternatives.

## Snap Vs Flatpak (Package Managers except apt, dpkg)
Snap can incorporate more apps than Flatpak. It runs how the developer wants it to. Some even say go as far as to say, "Snap is the future". But, currently, Flatpak outperforms Snap, for the most part, that is why I don't prefer Snap but, still, it's your choice. 

**If you are a newbie I won't recommend you remove snap.**  
[Reference to Removing Snap](https://www.kevin-custer.com/blog/disabling-snaps-in-ubuntu-20-04/) 
[Reference to Detailed Guide on Flatpak](https://itsfoss.com/flatpak-guide/) 

## Email Client
Chrome is good enough for me. Pop OS ships with Geary which is a great email client for any user.

**If you want to remove Geary**
```bash
sudo apt-get autoremove --purge geary* -y
```

**Alternatives,**

## 1. [Evolution](https://help.gnome.org/users/evolution/stable/)
```bash
sudo apt install evolution -y
```
## 2. [Thunderbird](https://www.thunderbird.net/en-US/)
```bash
sudo apt install thunderbird -y
```
## 3. [MailSpring](https://getmailspring.com/)
Get the [deb file](https://github.com/Foundry376/Mailspring/releases) and try installing it. 
If it throws gvfs dependency error. Follow these **Steps:**
1. Install these libraries
```bash
sudo apt install libsecret-1-dev gconf2 python2 python-is-python2 -y
```
1. Install the deb,
```bash
sudo dpkg --ignore-depends=gvfs-bin -i mailspring*.deb
```

## Video Tools
## 1. [VLC](https://www.videolan.org/index.html)
VLC is the best video player for any platform
```bash
sudo apt install vlc  -y
```

Get rid of the stock video player
```bash
sudo apt-get autoremove --purge totem* -y
```
## 2. [OBS Studio](https://obsproject.com/)
OBS Studio is software designed for capturing, compositing, encoding, recording, and streaming video content, efficiently.
```bash
sudo apt install obs-studio -y
```

## 3. [Peek](https://github.com/phw/peek)
Peek is a recorder with video recording, GIF recording and screenshot capabilities. 
**Pop users don't need to add this repo.**
```bash
sudo add-apt-repository ppa:peek-developers/stable && sudo apt update
sudo apt install peek -y
```

## Audio Tools
## 1. [PulseAudio Controls](https://www.freedesktop.org/wiki/Software/PulseAudio/)
PulseAudio is an audio server. The audio in your apps passes through Pulse. So in that way, you can use several methods to handle these sounds ere you can hear them. It also optimizes the quality of your audio.
```bash
sudo apt install pavucontrol -y
```
To learn how to control your audio, go [here](importanttweaks#controlling-audio-devices).
## 2. [PulseEffects](https://github.com/wwmm/pulseeffects)
Audio effects for Pulseaudio applications. This helps add specialized effects for each application individually and thus creates multiple profiles for different applications.
```bash
sudo apt install pulseeffects -y
```
**This might add a lot of desktop icons.**
## 3. [Audacity](https://www.audacityteam.org/)
Audacity is open-source software, easy-to-use, multi-track audio editor, and allows users to record audio and edit music clips.
```bash
flatpak install org.audacityteam.Audacity -y
```
## 4. [Ardour](https://ardour.org/)
Ardour is a recorder and digital audio workstation app. It's made to be suitable for professional use.
```bash
sudo apt install ardour -y
```

## Office
I directly use Chrome extension for the office, which you can get [here](https://chrome.google.com/webstore/detail/editor-for-docs-sheets-sl/eahibemoondbjaojgcdnmjlnbjmgbbml)  
**If you have not tried LibreOffice, I will recommend you to try it first.** 
Alternatives,
## 1. [Free Office](https://www.freeoffice.com/en/)
Looks like Microsoft Office 2016. 
Get the deb file [here](https://www.freeoffice.com/en/download/applications)
## 2. [OnlyOffice](https://www.onlyoffice.com/)
Looks like Microsoft Office 2013. 
Get the deb file [here](https://www.onlyoffice.com/en/download-desktop.aspx)
## 3. [WPS Office](https://www.wps.com/)
### If you have a problem with Chinese apps or are privacy concerns skip over this.
This is a beautiful office suite with lots of customization. 
Get the deb file [here](https://linux.wps.com/) 

## You can also use web-based offices like Google Drive.
### To remove LibreOffice
```bash
sudo apt-get autoremove --purge libreoffice* -y
``` 
 

## Graphic tools
## 1. [GIMP](https://www.gimp.org/)
It is a free and open-source Image Editor. Additionally, you can improve your richness with many customization choices and plugins.
```bash
sudo apt install gimp -y
```
## 2. [Krita](https://krita.org/en/)
Open-source art software. It is made by professionals that want to see affordable design tools for everyone.
```bash
sudo apt install krita -y
```
## 3. [Blender](https://www.blender.org/)
Free and open-source, 3D creation suite. It supports the aggregate of the 3D pipeline, including modeling, rigging, animation, simulation, rendering, compositing and motion tracking, even video editing and game creation.
```bash
sudo apt install blender -y
```
## 4. [Inkscape](https://inkscape.org/)
Free and open-source, vector graphics editor used to create vector images, primarily in Scalable Vector Graphics (SVG) format. Here you can be an illustrator, designer, web designer, or just someone who wants to create vector imagery.
```bash
sudo apt install inkscape -y
```

## Social Apps
## 1. Telegram
Official Telegram client
```bash
flatpak install org.telegram.desktop -y
```
## 2. Discord
Official Discord client
```bash
flatpak install com.discordapp.Discord -y
```
### BetterDiscord
To install themes and customize its interface according your liking you can install [BetterDiscord](https://betterdiscord.net/home/). To install BetterDiscord, go [here](https://gist.github.com/ObserverOfTime/d7e60eb9aa7fe837545c8cb77cf31172).
## 3. Facebook Messenger ([Caprine](https://github.com/sindresorhus/caprine))
Unofficial Facebook messenger 
Get the installer [here](https://github.com/sindresorhus/caprine/releases)
## 4. Signal
Official Signal client
```bash
flatpak install org.signal.Signal -y
```
## 5. Whatsapp ([WhatsappQT](https://gitlab.com/bit3/whatsappqt))
Unofficial Whatsapp client
```bash
flatpak install io.bit3.WhatsAppQT -y
```
## 6. Reddit ([Giara](https://giara.gabmus.org/#install))
### Better to use Reddit on your browser.
Unofficial Reddit client. Currently, this its on its Beta stage.
```bash
flatpak install org.gabmus.giara -y
```


## Programming Apps
## 1. Atom by GitHub
A hackable text editor for devs.
```bash
flatpak install io.atom.Atom -y
```
## 2. Pycharm IDE
A Python IDE for devs.
```bash
flatpak install pycharm-community -y #use professional if you have a license
```
Important python modules,
```bash
sudo apt install python3-pip python3-dev python3-distutils python3-virenv
pip3 install virtualenv #solves the global package bug
```
**Note:** If you use python 2.x use python instead of python3 and pip instead of pip3.
## 3. GitHub-Desktop
A seamless way to contribute to projects on GitHub.
```bash
sudo apt install git github-desktop -y
```
If this doesn't work, get the deb [here](https://github.com/shiftkey/desktop/releases).
## 4. Java
Go through [this](https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-18-04) to get the correct version.

## 5. Visual Studio
Go through [this](https://code.visualstudio.com/docs/setup/linux).

## Entertainment Apps
## 1. Spotify for Music
**Supports Ad-block and Spicetify-cli**
```bash
curl -sS https://download.spotify.com/debian/pubkey_0D811D58.gpg | sudo apt-key add -
echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list
sudo apt update && sudo apt install spotify-client -y
```
Features that can be added, 
### 1. Spicetify-Cli & Themes
To install themes for spotify, you can check [this](https://github.com/khanhas/spicetify-cli), to install different themes, go [here](https://github.com/morpheusthewhite/spicetify-themes) out. If you have troubles going through the steps of spicetify-cli. Here is a script you can use.
```bash
curl -fsSL https://gist.githubusercontent.com/themagicalmammal/f6f086f9c701924371e1d334c60c8562/raw/6bf8f24e6211c8ea3ba3d028634e58f1af8b971f/spicetify.sh | bash
```
You need to log in & out after this. 
### 2. Spotify-Adblock
If you do not like ads, you can install [Ad-free Spotify](https://github.com/abba23/spotify-adblock-linux). To simplify the steps go through this. 
**Note:** This might be buggy.
```bash
curl -fsSL https://gist.githubusercontent.com/themagicalmammal/81e719ac496790049ecfb745a26dfc9b/raw/f22b8b886307cb58618ccf85f89df3ee8d4dc59d/spotify_adblock.sh | sudo bash
```

## 2. Steam for Gaming
```bash
sudo apt install steam -y
```
If it doesn't work, turn on multiverse.
```bash
sudo add-apt-repository multiverse && sudo apt update
```

## 3. Multimedia Codecs
Gives you the ability to play popular non-free media formats, including DVD, MP3, Quicktime and Windows Media.
```bash
sudo apt install ubuntu-restricted-extras -y
```
To enable restricted codecs to play DVDs
```bash
sudo apt install libdvd-pkg -y
sudo dpkg-reconfigure libdvd-pkg
```

## Productivity Apps
## 1. [Kinto](https://github.com/rbreaves/kinto)
Key remapper that makes Mac user's transition to Linux easier. It provides macOS keyboard shortcuts. So, if you miss your Mac shortcut style you can use this.

## Other Apps
## 1. uGet
uGet is a lightweight yet powerful open Source download manager for Linux. Basic features include a download queue, a clipboard monitor, and the ability to process downloads in a batch format.
```bash
sudo apt install aria2 uget -y
```
## 2. Wine (Windows Apps)
Wine (originally an acronym for "Wine Is Not an Emulator") is a compatibility layer capable of running Windows applications.
**Remove Wine if you have it installed**
1. If you have a 64-bit system this command will enable 32-bit support
```bash
sudo dpkg --add-architecture i386
```
1. Then follow these **Steps:**
```bash
wget https://dl.winehq.org/wine-builds/winehq.key && sudo apt-key add winehq.key
sudo apt-add-repository deb\ https://dl.winehq.org/wine-builds/ubuntu/\ $(lsb_release -c | sed 's/Codename:\t/''/g')\ main && sudo apt update
sudo apt install --install-recommends winehq-stable -y
```
1. Then open wine configuration, add download the additional wine files
```bash
winecfg
```
**Saftey with Wine** - Never use wine with sudo. Windows apps always run with admin rights in wine. No sudo needed sometimes, You need to tell wine to start an app as a "normal user" but, you never need to run it with admin rights because it already does. So from this, you could be thinking can't hurt to run wine with sudo, Right? Yes, it can hurt, or do you believe that a potential Virus wouldn't be happy to be run with root rights? Viruses work through wine like they would on Windows. sudo gives them even more privileges. 

## 3. Lutris
Lutris is an Open Source gaming platform for Linux. It installs and launches games, so you can start playing without the hassle of setting up your games. 
```bash
sudo add-apt-repository ppa:lutris-team/lutris
sudo apt update
sudo apt install lutris
```

## 4. Synaptic Package manager
Synaptic serves as a graphical front-end to APT which makes the process of software management easier.
```bash
sudo apt install synaptic -y
```
## 5. Nautilus (admin mode)
Adds right-click property *Open as Administrator*
```bash
sudo apt install nautilus-admin -y && nautilus -q
```
## 6. Timeshift
Timeshift is a system restore tool for Linux. Creates a file system snapshot using rsync+hard links or BTRFS snapshots.
```bash
sudo apt install timeshift -y
```
## 7. Resource Monitor
## - Htop
A utility to see which process is taking how much CPU or memory.
```bash
sudo apt install htop -y
```
![htop](https://i.imgur.com/wXpdDWc.png)
## - Bashtop
An advanced utility that shows usage and stats for processor, memory, disks, network, and processes.
**Repo already exists in Pop 20.10**
```bash
sudo add-apt-repository ppa:bashtop-monitor/bashtop && sudo apt update
sudo apt install bashtop -y
```
![bashtop](https://i.imgur.com/Ao28LjH.png)
## 8. Firewall
## - Gufw
GUFW is a graphical utility for managing Uncomplicated Firewall (UFW). This is pretty easy to use application with a bunch of settings which you can set according to your preference.
```bash
sudo apt install gufw
```
## - Opensnitch
Helps you to review which services connect to the internet. Also, stopping some services might help save some internet, and give you more control over it. To get a compiled version of Opensnitch goes [here](https://github.com/evilsocket/opensnitch).
