# How to Pop/Ubuntu?
###### This is done exclusively on Pop OS 20.10 but this should work on every Ubuntu-based Distros with Gnome/Unity/Budgie DE's.
 These are the set of tweaks I use on my pop os. I have 2 PC's one of them is 7th Gen i5 lappy with SSD and another one is a 3rd Gen 6 years old desktop. These tweaks are added based on my experience over 5 months using pop on them both.

## 1 Installation
 While doing an install there are certain things you need to know if you want a faster boot. On my lappy, I select a clean install and let the interface do its job. While on my desktop I select an advanced partition, now there is a reason for that. If I select clean install it creates extra partitions one is for recovery which I never use. Also if you keep these extra partitions every time your boot system mounts them which makes the boot slow.

 To create these 3 partitions:-
 - 512 MB for EFI boot
 - 4096/6144/8192 for Linux-swap (If you want)
 - Remaining for EXT4 system

#### Q. Should I use Brtfs or Ext4?
**Ans.** Depends, Now brtfs is starting to become a trend since Fedora adopted it and it now ships with Fedora 33. Also, I have started to use this on my lappy but not my desktop. Now there is a reason for that, initial benchmarks show that brtfs is slower than ext4 though brtfs has more advanced features than ext4. So In my opinion, if you have an older pc go for ext4 but if you have a newer one you can go for brtfs.

- [Reference to Fedora Trend](https://www.phoronix.com/scan.php?page=news_item&px=Fedora-33-Released)
- [Reference to Benchmarks b/w File Systems](https://www.unixmen.com/review-ext4-vs-btrfs-vs-xfs/)
- [Reference for How to brtfs on Pop os](https://mutschler.eu/linux/install-guides/pop-os-btrfs/)

## 2. Post Installation
 There are some basic things you need to do after installation.

 - **Update your System** <br />
 *Get latest updates via terminal or pop shop.* <br />
 For Terminal use
 ```bash
 sudo apt update && sudo apt upgrade && flatpak update
 ```

 - **Proprietary Drivers** <br />
 *You can get proprietary drivers directly from the Pop shop but you still get problems you can refer to a guide.*

 1. [Guide for NVIDIA](https://askubuntu.com/questions/61396/how-do-i-install-the-nvidia-drivers) <br />
 2. [Guide for AMD](https://linuxconfig.org/how-to-install-the-latest-amd-radeon-drivers-on-ubuntu-18-04-bionic-beaver-linux#:~:text=In%20order%20to%20get%20the,the%20form%20of%20a%20tarball.)
 - **Gnome Tweaks**
 ```bash
 sudo apt install gnome-tweaks
 ```
 #### Tweaks I am using -

 #### 1. Minimize Button
 Minimise is an important button for gnome. I always wonder why they didn't add it. While I think you can live without it if you use the Super key a lot but for me, the minimize button is very useful. You can also get the maximize button but it's not that useful because double-clicking the title bar does the job.<br /> <br />
 ![gnome-minimise](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/gnome-minimise.png)<br>
 #### 2. Battery Percentage
 This option is also pretty useful but only for a lappy.<br>
 #### 3. Optimising Font
 I use custom resolution on my pc so fonts seem small to me so it make it better I use 1.11x font with antialiasing to subpixel.<br /> <br />
 ![custom-font-size](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/custom-font-size.png) <br /> <br />



 - **Custom Resolution with Xrandr** </br>
 **Please read all the problems & bugs with this, so that you know what problems might come & how to fix them** <br />
 If your display supports higher refresh rate go for it. Because higher refresh rates are smoother. My display is capable for 120hz.<br /> <br />
 ![set-of-refreshrates](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/set-of-refreshrates.png)

 ### To add custom resolution do these steps.
 **1. Check xrandr**  <br />
 You can know the name of your display here generally it is eDP-1 if is hybrid it can be eDP-1-1<br /> <br />
 ![xrandr](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/xrandr.png)
 <br /> <br />
 **2. Find resolution which will fit**  <br />
 My original maximum resolution is 1600 900 which is a 16:9 aspect ratio. So if I choose a different aspect ratio some part of my display will be blacked out. <br />

 So, I can go for 1920x1080 or 1536x864 <br />
 *To find out which fits you best you can do tests by adding different resolutions*
 <br /> <br />
 **3. How to add?**
 #### - cvt
 ```bash
 cvt 1920 1080 #Your custom resolution
 ```
 ![cvt](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/cvt.png)
 #### - xrandr --newmode
 Copy line after modline
 ```bash
 xrandr --newmode "1920x1080_60.00"  173.00  1920 2048 2248 2576  1080 1083 1088 1120 -hsync +vsync
 ```
 ![newmode](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/newmode.png)
 #### - xrandr --addmode
 Add the resolution with display name
 ```bash
 xrandr --addmode eDP-1 "1920x1080_60.00"
 ```
 ![addmode](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/addmode.png) <br />
 
  #### [Problem] The resolution goes away after reboot.
 **Ans -** Add all the final lines to .profile so every time a session is created the lines will run and resolution will be automatically added.
 ```bash
 sudo gedit ~/.profile
 ```
 ![profile](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/profile.png)
 
 #### [Problem] What about other refresh rates? <br />
 **Ans -** You have to experiment with cvt a bit to find which refresh rates should be.
 As my refresh rate is from 0 - 120. I did some experimentation and added some resolution. <br />

 Like if your refresh rate supports 120 you can directly do this.
 ```bash
 cvt 1920 1080 120
 ```
 <custom-120>

 Finally I added these resolutions
 ```bash
 xrandr --newmode "1920x1080_120.00"  369.50  1920 2080 2288 2656  1080 1083 1088 1160 -hsync +vsync
 xrandr --addmode eDP-1 "1920x1080_120.00"
 xrandr --newmode "1920x1080_119.91"  369.25  1920 2080 2288 2656  1080 1083 1088 1160 -hsync +vsync
 xrandr --addmode eDP-1 "1920x1080_119.91"
 xrandr --newmode "1920x1080_60.00"  173.00  1920 2048 2248 2576  1080 1083 1088 1120 -hsync +vsync
 xrandr --addmode eDP-1 "1920x1080_60.00"
 xrandr --newmode "1920x1080_59.89"  172.75  1920 2048 2248 2576  1080 1083 1088 1120 -hsync +vsync
 xrandr --addmode eDP-1 "1920x1080_59.89"
 ```

 **Now it should look like this** <br /> <br />
 ![custom-resolution-final](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/custom-resolution-final.png)

 #### [Problem] How to get rid of custom resolution?
 **Ans -** Simple if you have added to your .profile open it again and remove those lines and Reboot.
 
 #### [BUG] Problems regarding Hybrid Graphics Switching.
 **Ans -** If you have Hybrid or Multiple Graphics Cards your display name will change if you switch graphics. So keep in mind you have to change the xrandr --addmode <displayname> if you switch graphics.
 
 ## 3. Preferred Apps
 Pop Os ships with a basic set of apps which generally every person uses but I don't use all of them and also I use some alternatives which I like better.

 ### - Browser
 I personally prefer Chrome, as Chrome is the most popular browser also I have been using Chrome since probably 2012 and Vivaldi is the fastest browser and is optimized for older hardware which makes it fast on my old desktop. <br /> <br />

 **MENTION ABOUT OPENSOURCE - Chrome is not an open-source browser, Vivaldi is partly open-source, and also Vivaldi doesn't support [video hardware acceleration](https://forum.vivaldi.net/topic/31874/enable-hardware-accelerated-video-vaapi/2) & same goes for Opera which is also a partly open-source browser.** <br />

 **Firefox & TOR are the only opensource browsers on this list. Meaning these are better alternatives if you are looking for privacy.**

 1. **Chrome**
 ```bash
 sudo apt install google-chrome-stable
 ```
 2. **Vivaldi** [Chrome-based]
 ```bash
 wget -qO- https://repo.vivaldi.com/archive/linux_signing_key.pub | sudo apt-key add -
 sudo add-apt-repository 'deb https://repo.vivaldi.com/archive/deb/ stable main'
 sudo apt update && sudo apt install vivaldi-stable
 ```
 3. **Opera**
 ```bash
 sudo add-apt-repository 'deb https://deb.opera.com/opera-stable/ stable non-free'
 wget -qO - https://deb.opera.com/archive.key | sudo apt-key add -
 sudo apt-get update
 sudo apt-get install opera-stable
  ```
  4. **TOR**
 ```bash
 sudo add-apt-repository ppa:micahflee/ppa && sudo apt update
 sudo apt install torbrowser-launcher
 ```

  **You should keep Firefox or a non-chrome based browser to be on the safe side because in case of driver/library error bugging chrome-based browsers, then non-chrome-based browsers can help you out.** <br /> <br />
 To remove Firefox (Not Recommended)
 ```bash
 sudo apt remove --purge firefox*
 ```

 ### - Email Client
 I don't use email client for me chrome is enough.
 ```bash
 sudo apt remove --purge Geary* && sudo apt autoremove
 ```

 Alternatives,

 1. **Evolution**
 ```bash
 sudo apt install evolution
 ```
 2. **Thunderbird**
 ```bash
 sudo apt install thunderbird
 ```
 3. **MailSpring** <br />
 1. Install the [gvfs-bin](https://pkgs.org/download/gvfs-bin) dependency.
 2. Get the deb file [here](https://github.com/Foundry376/Mailspring/releases/tag/1.7.8)

 ### - Video Player
 VLC is the best video player for any platform
 ```bash
 sudo apt install vlc
 ```

 Get rid of the stock video player
 ```bash
 sudo apt remove --purge totem* && sudo apt autoremove
 ```

 ### - Office
 I directly use chrome extension for the office which you can see [here](https://chrome.google.com/webstore/detail/editor-for-docs-sheets-sl/eahibemoondbjaojgcdnmjlnbjmgbbml)

 Remove LibreOffice
 ```bash
 sudo apt remove --purge libreoffice* && sudo apt autoremove
 ```
 Alternatives, <br />

 **Open Office** <br />
 Guide to install is [here](https://linuxhint.com/openoffice_installation_ubuntu/) <br />

 **Since, WPS OFFICE is a Chinese app there is a privacy concern for users using it so, current links have been removed because of that.**

 ### - Social Apps
 1. **Telegram** <br />
 Personally I use Kotogram client
 ```bash
 flatpak install io.github.kotatogram
 ```
 2. **Whatsapp** <br />
 Gtkwhatsapp has better features
 ```bash
 flatpak install com.gigitux.gtkwhats
 ```
 3. **Discord** <br />
 ```bash
 flatpak install com.discordapp.Discord
 ```

 ### - Programming Apps
 1. **Atom by GitHub**
 ```bash
 flatpak install io.atom.Atom
 ```
 2. **Pycharm**
 ```bash
 flatpak install pycharm-community
 ```
 3. **GitHub-Desktop**
 ```bash
 sudo apt install github-desktop
 ```
 4. **Java** <br />
 Go through [this](https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-18-04) to get the version you need.

 ### - Entertainment Apps
 1. **Spotify for Music**
 **With Ad-block support**
 ```bash
 curl -sS https://download.spotify.com/debian/pubkey_0D811D58.gpg | sudo apt-key add -
 echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list
 sudo apt update && sudo apt install spotify-client
 ```
 If you are not a premium user but don't like ads, get [ad-free spotify](https://github.com/abba23/spotify-adblock-linux). <br />  <br />
 ![spotify-adfree](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/spotify-adfree.png) <br />  <br />
 2. **Steam for Gaming**
 ```bash
 flatpak install steam #6th one
 ```
 3. **Multimedia Codecs**
 ```bash
 sudo apt install ubuntu-restricted-extras
 ```
 ### Others
 #### uGet (Download Manager)
 ```bash
 sudo apt install aria2 uget
 ```
 #### Wine
 ###### To run Windows programs on linux.
 1. Check if your system is 32-bit or 64-bit, If you already know just skip this part.
 ```bash
 lscpu
 ```
 2. Install wine according to your architecture. <br />
 For 64-bit
 ```bash
 sudo apt install wine64
 ```
 For 32-bit
 ```bash
 sudo apt install wine32
 ```
 3. To check the version installed.
 ```bash
 wine --version
 ```
 #### Synaptic Package manager
 ```bash
 sudo apt install synaptic
 ```
 #### Nautilus (admin)
 ###### You can add a command *Open as Administrator*
 ```bash
 sudo apt install nautilus-admin && nautilus -q
 ```
 #### Timeshift
 ###### Timeshift is a system restore tool for Linux. Creates filesystem snapshots using rsync+hardlinks, or BTRFS snapshots.
 ```bash
 sudo apt install timeshift
 ```

 ### - Debloating
 ###### Remove useless stuff that you don't need. If you use this stuff don't remove them. And at least read what it does before your remove them.
 - **Calculator** - you know what a calculator is, I generally use the chrome calculator directly.
 ```bash
 sudo apt remove --purge gnome-calculator && sudo apt autoremove
 ```
 - **Calendar** - I put this on a list because I never need the calender even on my phone
 ```bash
 sudo apt remove --purge gnome-calendar && sudo apt autoremove
 ```
 - **Character Map** - is a Unicode character map that allows you to select characters from a table and insert them into a text string. I have no known use for it.
 ```bash
 sudo apt remove --purge Gucharmap* && sudo apt autoremove
 ```
 - **Contacts** - Gnome contacts tool important for a work pc.
 ```bash
 sudo apt remove --purge gnome-contacts* && sudo apt autoremove
 ```
 - **Document Scanner** - Important tool for a work pc.
 ```bash
 sudo apt remove --purge sane* simple-scan && sudo apt autoremove
 ```
 - **Gnome Fonts** - shows you the fonts installed on your computer for your use as thumbnails. Selecting any thumbnails shows the full view of how the font would look under various sizes.
 ```bash
 sudo apt remove --purge gnome-font-viewer && sudo apt autoremove
 ```
 - **Gnome Help** - Useful for newcomers
 ```bash
 sudo apt remove --purge yelp* && sudo apt autoremove
 ```
 - **Gnome Power Manager** - can show historical and current battery information and programs waking up that use power. I never use it.
 ```bash
 sudo apt remove --purge gnome-power-manager && sudo apt autoremove
 ```
 - **Pinyin (Only for Chinese users)** - Pinyin is the Romanization of Chinese characters based on their pronunciation.
 ```bash
 sudo apt remove --purge ibus-libpinyin* && sudo apt autoremove
 ```
 - **Vim** - Vim is a highly configurable text editor built to make creating and changing any kind of text very efficient. It is included as "vi" with most UNIX systems and with Apple OS X. I removed this because I use nano/gedit/atom.
 ```bash
 sudo apt remove --purge gvim* vim* && sudo apt autoremove
 ```
 - **Popsicle USB creator** - If you create USB's you should keep this tool but I am an old Etcher user and want to stick with it that's why I removed this.<br />
 **Get [Etcher](https://www.balena.io/etcher/)** <br />
 ```bash
 sudo apt remove --purge popsicle* && sudo apt autoremove
 ```
 
 ### Reverting
 If you accidently removed any of them you can add them back by
 ```bash
 sudo apt install <appname>
 ```
 *App name doesn't require * symbol*
 ## 4. Important Tweaks
 ### Setting Tweaks
 #### - Privacy Tweaks
 ![1](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/1.png)
 ![2](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/2.png)
 ![3](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/3.png)
 ![4](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/4.png)
 #### - Over Amplification
 ![sound](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/sound.png)
 ### Disable annoying keyring
 #### While this disables annoying keyring every time you open a browser you have to keep in mind that this is also a privacy concern.
 Whenever you open Chrome/Vivaldi any browser the system asks for a key which according to me is very annoying. <br /> <br />
 **Steps** 
 ```atom
 App password & keys > Login > Change Password > Type your Current Pass > Continue > Continue with Empty Pass > Make unencrypted
 ```
 ![key](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/key.png)
 ![unen](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/unen.png) <br />

 ## 5. Optimizing Boot time & Ram Management
 My original boot time was 1min 4sec after removing apps it is now 58sec.<br /> <br />
 ![originalboottime](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/originalboottime.png)

 ### Disabling plymouth
 ```bash
 sudo kernelstub --delete-options "quiet systemd.show_status=false splash"
 ```
 ![boottime1](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/boottime1.png)
 
 ### Disabling Unnessary Extensions
 Pop OS comes with a lot of Extensions which generally is not used by everyone so you can prefer to disable them you can. </br>
 The built-in extensions I use are - <br /> <br />
 ![extensions](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/extensions.png) 
 
 #### The one's I have disabled are -
 1. **Alt-Tab**- Raise First Window - Make Alt+Tab only raise the first window in the group. By default, Alt+Tab will raise all windows of an application. This extension still groups windows by application, but only raises the most recent window in the selected group
 2. **Always show workspaces** - Always show workspaces in the overview
 3. **Desktop Icons** - Add icons to the desktop
 4. **Pop Battery Icon Fix** - Fixes the battery icon in Pop!_OS to correctly match the current battery level. (I use this only on my laptop)
 5. **System76 Power Management** - system76-power is a utility for managing graphics and power profiles. This helps if you have Hybrid or NVIDIA graphics. (I only use this on my laptop)

 ### Disabling Pop Shop on Boot
 Pop Shop always opens on the startup of the system there is a way to stop that. This also helps in saving some ram. <br /> <br />
 **Steps**
 1. Edit Appcenter deamon from opening it at start
 ```bash
 sudo nano /usr/share/applications/io.elementary.appcenter-daemon.desktop
 ```
 2. Put # here before this line
 ```bash
 Exec=io.elemantry.appcenter -s
 ```
 ### Clearing High buff/cache
 Computer accumulates high buff/cache over time and make the user force reboot. To clear buff cache you can use this. <br />
 ```bash
 free -h && sudo sysctl -w vm.drop_caches=3 && sudo sync && echo 3 | sudo tee /proc/sys/vm/drop_caches && free -h
 ```
 
 ### Masking and Disabling some useless services
 #### DISCLAIMER
 ##### PLEASE DO THIS AT YOUR OWN RISK. WHILE THIS IS SAFE TO DO YOU CAN STILL MESS UP YOUR SYSTEM SO, PLEASE READ THIS CAREFULLY AND UNDERSTAND EVERYTHING BEFORE YOU PROCEED.
 - **Network-dispatcher** is a dispatcher daemon for systemd-networkd connection status changes.
 ```bash
 sudo apt remove --purge networkd-dispatcher
 ```
 - **ModemManager** is a DBus-activated daemon that controls mobile broadband (2G/3G/4G) interfaces. If you don’t have a mobile broadband interface — built-in, paired with a mobile phone via Bluetooth, or USB dongle — you don’t need this.
 ```bash
 sudo systemctl disable ModemManager.service
 sudo systemctl mask ModemManager.service
 ```
 **Note** - If you are not using this and don't want wifi to disable wpa_supplicant.service.
 - **Fwupd** is a simple daemon allowing you to update some devices' firmware, including UEFI for several machines
 Disable thunderbolt_power <br />
 ```bash
 sudo nano /etc/fwupd/daemon.conf
 ```
 Make it
 ```bash
 BlacklistPlugins=test;invalid;thunderbolt_power
 ```
 ![blacklist_thunderbold](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/blacklist_thunderbold.png)
 Remove fwupd from boot
 ```bash
 sudo systemctl disable fwupd.service
 sudo systemctl mask fwupd.service
 ```
  - **Avahi-daemon** is supposed to provide zero-configuration network discovery and make it super-easy to find printers and other hosts on your network. I always disable it and don’t miss it.
 ```bash
 sudo systemctl disable avahi-daemon.service
 sudo systemctl mask avahi-daemon.service
 ```
 - **AppArmor** [Unsafe to remove] is a Linux kernel security module that allows the system administrator to restrict programs' capabilities with per-program profiles. Profiles can allow capabilities like network access, raw socket access, and the permission to read, write, or execute files on matching paths.
 - **Apport** collects potentially sensitive data, such as core dumps, stack traces, and log files. They can contain passwords, credit card numbers, serial numbers, and other private material.
 **Apparmour has used my many apps like Chromium not to mention removing it is a security threat so please proceed carefully**
 ```bash
 sudo apt remove --purge apport* apparmor* && sudo apt autoremove
 ```
 - **Saned** is the SANE (Scanner Access Now Easy) daemon that allows remote
clients to access image acquisition devices available on the localhost.
 ```bash
 sudo systemctl disable saned.service
 sudo systemctl mask saned.service
 ```

 - **Thermald** [Unsafe to remove]  daemon prevents machines from overheating and was introduced in the 14.04 Ubuntu Trusty LTS release. It monitors thermal sensors and will modify cooling controls to keep the hardware cool.<br />
 **If your system heats after removing this even by a bit add it back**
 ```bash
 sudo systemctl disable thermald.service
 sudo systemctl mask thermald.service
 ```
 - **Switcheroo-control** is a D-Bus service to check the availability of dual-GPU. Keep this only if you have 2 GPUs.
 ```bash
 sudo systemctl disable switcheroo-control.service
 sudo systemctl mask switcheroo-control.service
 ```
 - **Systemd-resolved**  is a system service that provides network name resolution to local applications. It implements a caching and validating DNS/DNSSEC stub resolver, as well as an LLMNR and MulticastDNS resolver and responder.
 1. Disable & Mask the systemd-resolved service
 ```bash
 sudo systemctl stop systemd-resolved.service
 sudo systemctl disable systemd-resolved.service
 sudo systemctl mask systemd-resolved.service
 ```
 2. Then put dns=default in the [main] section of
 ```bash
 sudo nano /etc/NetworkManager/NetworkManager.conf
 ```
 3. Delete the symlink /etc/resolv.conf
 ```bash
 sudo rm /etc/resolv.conf
 ```
 4. Restart

 - **Gpu-manager** is software that creates a xorg.conf for you. So running this in every boot is just overkill. You only need to run this if you change your GPU.
 ```bash
 sudo systemctl disable gpu-manager.service
 sudo systemctl mask gpu-manager.service
 ```
 - **Udisk2** disabling this removes the capability to automount the system.
 ```bash
 sudo systemctl mask udisks2.service
 ```
 - **System76-power** power controls for lappy not required on a desktop pc.
 ```bash
 sudo systemctl disable system76-power.service
 sudo systemctl mask system76-power.service
 ```
 - **Apt-daily-upgrade** bug -
 ```bash
 sudo systemctl disable apt-daily.service
 sudo systemctl disable apt-daily.timer
 sudo systemctl disable apt-daily-upgrade.timer
 sudo systemctl disable apt-daily-upgrade.service
 ```

 - Disabling **Startup Application Preferences** <br /> <br />
 ![application-pref](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/application-pref.png)

 #### Boot time after disabling those stuff
 ![prekernelbootime](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/prekernelbootime.png)

 ### Custom kernel
 Custom Kernels are known and used by fewer people, but these kernels do add a significant boost to performance and battery.
 1. **Xanmod** is the more popular choice among intel based hardware. It is built to provide a stable, responsive, and smooth desktop experience. <br />
 To get Xanmod go [here](https://xanmod.org/)
 2. **Liquorix** is a distro kernel replacement built using the best configuration and kernel sources for desktop, multimedia, and gaming workloads. Works better with AMD hardware. <br />
 To get Liquorix go [here](https://liquorix.net/) <br /> <br />
 Initial benchmarks on intel make Xanmod a winner whereas AMD hardware generally goes better with Liquorix. Also if you are having heating issues go for Liquorix it has a better thermal response. I use Xanmod normal because lts release felt slow for me on both my pc & lappy. <br />

 [Reference of Xanmod being compared to Clear Linux](https://www.phoronix.com/scan.php?page=article&item=ubuntu-xanmod-clear&num=1) <br />
 [Reference of Liquorix Kernel Benchmarks For AMD Ryzen](https://www.phoronix.com/scan.php?page=article&item=radeon-gaming-liquorix54&num=1) <br />
 
**Note** - At this point this boots as fast as it can be.<br />

 ### Temporary Solution if your System creates problems with Custom Kernel
 1. Open Nautilus in admin mode via Terminal
 ```bash
 sudo nautilus
 ```
 2. Go to **efi partition > loader > Open loader.conf** <br /> <br />

 Edit this
 ```atom
 default Pop_OS-current
  ```
 To this
 ```atom
 default Pop_OS-oldkern
  ```
 3. Reboot  <br />
 **Now you are back to your original kernel** <br />
 ###### To confirm this type
 ```bash
 uname -r
  ```

 ### Removing the Custom Kernel Permanently
 1. First do the temporary solution
 2. Then, we will remove kernel apt modules <br /> <br />
 
 For XanMod
 ```bash
 sudo apt remove --purge linux-xanmod && sudo apt-get --purge autoremove
 ``` 
 For Liquorix
 ```bash
 sudo apt remove --purge linux-image-liquorix-amd64 linux-headers-liquorix-amd64 && sudo apt-get --purge autoremove
 ```
 3. Remove FQ-PIE Queue Discipline for systemd only for XanMod users
 ```bash
 sudo rm /etc/sysctl.d/90-override.conf
 ```
 4. Finally, removing there repositories <br />
 
 For XanMod <br />
 Download this [deb](https://dl.xanmod.org/xanmod-repository.deb) and Uninstall it. <br />
 
 For Liquorix <br />
 ```bash
 sudo add-apt-repository ppa:damentz/liquorix
 ```
 5. Cleaning out files <br />
 **After doing all this the systemd files still exist.** <br /> <br />
 
 6. **Steps to Clean out those files**
  -  Open Nautilus in admin mode via Terminal
 ```bash
 sudo nautilus
 ```
  - Go to efi paritions > EFI > Pop_OS------Somethinghuge----- > **Delete initrd.img vmlinuz.efi**
  - Then, go to efi paritions > loader > entries > **Delete Pop_OS-current.conf**

 ### Final Boot Time
 ![final-boottime](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/final-boottime.png)

 ## 6. Miscellaneous
 ### Get latest Ad-Hosts
 I use **Steven Black** Adhosts for ad-blocking the whole system without any other extra app. This blocks basic ads but not Youtube or Spotify ads. <br />
 To get it go [here](https://github.com/StevenBlack/hosts). <br />

 I use **Unified hosts + fakenews + gambling + porn** <br />

 #### Q. How to?
 **Ans.** Steps -
 1. Go here get a certain file open its link.
 2. Save as text to Downloads.
 3. Rename hosts.txt to hosts.
 4. Open terminal type
 ```bash
 sudo nautilus
 ```
 5. Go to filesystem root > home > your username > Downloads > copy the host's file > go back to filesystem root > etc - paste it here, it will ask to replace do so.
 Note - If it doesn't ask to replace you went wrong somewhere.

 ### Clean your System
 **Terminal**
 ```bash
 sudo apt --purge autoremove
 sudo rm -rf ~/.cache/thumbnails/*
 sudo apt-get clean
 sudo apt-get autoclean
 ```
 **Tool** <br />
 I use bleachbit because it is good to remove unnecessary junk from your computer.
 ```bash
 sudo apt install bleachbit
 ```
 **Steps ->** BleachBit (root) > Select every option (except free disk) > **Clean** <br /> <br />
 ![bleachbit](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/bleachbit.png)
 **Note**:- After doing this the first boot might be slow don't worry it's perfectly normal.

 ### Night Light
 Night light mode is simply made to remove some lights which hinder our sleep cycle. As researchers have found that at night if a certain set of colors interact with our eyes it doesn't let the eye rest making it "unsleepy" that's why we use a night light.<br /> <br />
 **Steps ->** Settings > Display > Night light <br />
 *You can also select the timing which fits your sleep cycle.*<br /> <br />
 ![nightlight](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/nightlight.png)

 ### Tile Windows
 The beautiful thing I like about Pop-OS is it's feature rich environment to increase work efficiency.<br /> <br />
 ![Tile-windows](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/Tile-windows.png)

 ### Customization
 #### 1. We need to add gnome-shell-integration for Chrome.
 ![gsi](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/gsi.png)
 #### 2. Then go to [Gnome.org](https://extensions.gnome.org/) and get your extensions. <br />
 ##### Important Extensions
 - [User themes](https://extensions.gnome.org/extension/19/user-themes/)
 - [Impatience](https://extensions.gnome.org/extension/277/impatience/) <br /> <br />
 ##### Some More Cool Extensions
 - [Frippery Move Clock](https://extensions.gnome.org/extension/2/move-clock/)
 - [Dynamic Panel Transparency](https://extensions.gnome.org/extension/1011/dynamic-panel-transparency/)
 - [Compiz windows effect](https://extensions.gnome.org/extension/3210/compiz-windows-effect/)
 #### 3. Left Titlebar buttons
 **Steps ->** GNOME Tweaks > Windows Titlebar > **Left** <br />
 **Note:-** This glitches the gnome-tweak-tool for some reason don't worry about it and increase the size of the window.
 #### 4. Custom themes
 *Go to [Gnome-look](https://www.gnome-look.org/browse/cat/)* <br />  <br />
 **My setup** <br />
 Shell & Application - [WhiteSur](https://www.gnome-look.org/p/1403328/) <br />
 Cursor - [Layan](https://www.gnome-look.org/s/Gnome/p/1365214/) <br />
 Icons - [Tela circle icon](https://www.pling.com/p/1359276/) <br />

 #### 5. Place the theme in .themes & the icons in .icons in Home.
 #### 6. In Gnome-tweak-tool select your theme

**Tip** - How to fix terminal theme
 1. Go to Preferences
 2. Add Profiles
 3. Name it bigsur
 3. Go to colors, then select *choose use colors from system theme*
 4. Set bigsur default
 5. Close and reopen the terminal

**Tip** - How to fix gedit/text-editor theme
 1. Go to Preferences
 2. Go to Font & Colors
 3. Select Color Scheme - Classic <br />

 ![bigsurlikelook](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/bigsurlikelook.png)
 #### 7. Add Activity Hot Corner & Format time.
 ![overlay](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/overlay.png)

 ## 7. Bonus
 #### Among US if you have Steam Glitches
 #### For everyone following this method, Among US is available for everyone in Steam for Linux. If you really like this game and want to show respect to developers, Please buy the Full version. I have only posted this method because Steam for Linux doesn't work well on my Desktop at all. So, I had to find an alternative instead of install Windows I had to chose this. And in no way do I want to encourage piracy.
 **Steps**
 1. Install Wine (Go to Others Section in this repo)
 2. Download [Among Us](http://www.mediafire.com/file/czz4ctxxcauy2t8/Among.Us.v2020.9.9s.zip/file)
 3. To run it type
 ```bash
 sudo wine Among\ Us.exe
 ```
 4. What I do is create a file start.sh & run it.
 ```bash
 echo "sudo wine Among\ Us.exe" > start.sh | chmod 777 start.sh
 ```
 5. Open terminal inside the folder
 ```bash
 ./start.sh
 ```

 [<img src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-13.png" width="150" height="54" />](https://www.reddit.com/r/pop_os/comments/jlfwd4/created_a_pop_os_guide_for_new_comers) <br />
 Reddit Page to post your queries and suggestions.

### Thanks for Suggestions
1. [WsadES](https://www.reddit.com/user/wsades) - Suggestion about removing unnecessary extension & Pop Shop on boot.
2. [JawadAlkassim](https://www.reddit.com/user/JawadAlkassim/) - Mention about opensource & Vivaldi vaapi.
3. [spxak1](https://www.reddit.com/user/spxak1/) - Mention about Firefox & Chrome-based bug & Idea about Disclaimer & Reverting back to stock kernel.
