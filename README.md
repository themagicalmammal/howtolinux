# How to Popbuntu?
###### This is done exclusively on Pop OS 20.10 but, this should work on almost every Ubuntu-based Distros.
 These are the set of tweaks I use on my Pop OS. I have two computers one is a 7th Gen i5 lappy with SSD the other one is a 3rd Gen 6 years old desktop. These tweaks are added based on my experience over five months using pop on them both.

## 1 Installation
**Only for Advanced Users** <br />
 Go through this, if you are on a disk space crunch or use Swap-file instead of a Linux-swap(partition). It is recommended to keep the Recovery partition to be on the safe side the example of this is 20.10, while upgrading 20.04 to 20.10 failed for many people, but recovery will help you out at those times. 

 Partitions I create:-
 - 500 MB for EFI boot (Enough even if you have a multi-boot system)
 - Recovery (Add it, unless you are on a space crunch) <br />
 - Remaining for EXT4 system <br />
 
 **What about swap?** <br />
 **Note-** If you have a strong hardware with huge ram then you don't need swap but if you still want you can create a swap file. <br />
 There are two ways of getting swap <br />
  - General Method - creating a swap partition (linux-swap) of lets just say size 4096 MB (should be from 1024 to 8192 MB) <br />

  - Swap File (Might have errors) - Well this is a relatively new concept but you can create a swap file post installation & use it. You don't need to dedicate some fixed amount of memory to it like it does on linux-swap, that's why it is also space efficient. And best part is you can resize this or remove this whenever you want to. To learn how to do so refer [this](https://linuxize.com/post/how-to-add-swap-space-on-ubuntu-18-04/). <br />
  **Pop users sometimes have problem with these method. So you might have to do some testing.**<br />
  
 **A thought about Encryption** <br />
 Encryption adds a layer to the disk, so there's a performance penalty. In day to day operations you wouldn't notice it though, but there's an argument that older hardware might suffer if they're already in the limit. But it's usually a very useful feature to have, you never know what will happen to your hardware, if it's lost or stolen, you don't want to think about people having access to your stuff as well.

#### Q. Should I use Btrfs or Ext4?
**Ans.** It depends, As Btrfs is starting to become a trend since Fedora adopted it & it ships with Fedora 33. Also, I am using this on both of my systems. I installed Btrfs on my desktop & noticed that Btrfs is surprisingly fast. But, I do not know if this is the case with every distro.

- [Reference on Rise of Btrfs](https://www.linuxjournal.com/content/btrfs-centos-living-loopback)
- [Reference to Fedora Trend](https://www.phoronix.com/scan.php?page=news_item&px=Fedora-33-Released)

#### How to Btrfs on Pop?
**Ans.** Does not work with the clean install. You have to go to Advanced partition select format Btrfs either of GParted or installer. <br />  <br />
If you can't find btrfs in GParted install this,
 ```bash
 sudo apt install btrfs-progs
 ```
 
#### Q. What about ZFS?
**ONLY FOR UBUNTU** <br />
**Ans.** ZFS has been added as a experimental new filesystem on 19.10. If you want to learn more about refer [this](https://itsfoss.com/zfs-ubuntu/) article. If it meets your requirements you can try it. Lately it is becoming a trend. You can checkout [why people are switching to ZFS](https://rudd-o.com/linux-and-free-software/ways-in-which-zfs-is-better-than-btrfs). <br />

If you want to learn how to, go [here](https://linuxconfig.org/install-ubuntu-20-04-with-zfs).

## 2. Post Installation
 There are some basic things you need to do after installation.

 - **Update your System** <br />
 *Get the latest updates via terminal or pop shop.* <br />
 For Terminal use
 ```bash
 sudo apt update && sudo apt upgrade && flatpak update
 ```

 - **Proprietary Drivers** <br />
 *You can get proprietary drivers directly from the Pop/Ubuntu Shop or Terminal.* <br />
 *If you get issues with NVIDIA get the NVIDIA iso.*<br />
 
 - **Gnome Tweaks**
 ```bash
 sudo apt install gnome-tweaks
 ```
 #### Tweaks I am using -

#### 1. Minimize Button
 Minimize is an important button for gnome. I always wonder why they did not add it. While I think you can live without it if you use the Super key a lot. But, for me, the minimize button seems to be very useful. <br />

You can also get the maximize button but it's not that useful because double-clicking the title bar does the job.<br /> <br />
 ![gnome-minimise](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/gnome-minimise.png)<br>
 #### 2. Battery Percentage
 This option is also pretty useful but only for a lappy.<br>
 #### 3. Optimizing Font
 I use custom resolution on my pc so fonts seem small to me so it make it better I use 1.11x font with anti aliasing to Subpixel.<br /> <br />
 ![custom-font-size](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/custom-font-size.png) <br /> <br />

 - **Custom Resolution with Xrandr** </br>
 **Please read all the problems & bugs with this, so that you know what problems might come & how to fix them** <br />
 If your display supports a higher refresh rate, go for it because higher refresh rate displays make the moving content look and feel smoother and snappier.<br /> <br />
 ![set-of-refreshrates](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/set-of-refreshrates.png)

 ### Custom Resolution
 #### Steps
 **1. Check xrandr**  <br />
 You can know the name of your display here generally it is eDP-1 if is hybrid it can be eDP-1-1<br /> <br />
 ![xrandr](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/xrandr.png)
 <br /> <br />
 **2. Find resolution which will fit**  <br />
 My original maximum resolution is 1600 900, which is a 16:9 aspect ratio. So if I choose a different aspect ratio, then some parts of my display will blackout. <br />

 So, I can go for 1920x1080 or 1792x1008 <br />
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
 
  #### [Problem] The resolution goes away after a reboot.
 **Ans -** Add all the final lines to .profile so every time a session starts, the code runs, the custom resolution gets added.
 ```bash
 nano ~/.profile
 ```
 ![profile](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/profile.png)
 
 #### [Problem] What about other refresh rates? <br />
 **Ans -** You have to experiment with cvt a bit to find which refresh rates should be. My refresh rate is from 60hz to 120hz. I did some experimentation and added some resolution. <br />

 Like if your display supports 120 hertz
 ```bash
 cvt 1920 1080 120
 ```
 <custom-120>

 Finally, I added these resolutions
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
 **Ans -** Simple if you have added custom resolution to your .profile, open it again, remove those lines, and reboot.
 
 #### [BUG] Problems regarding Hybrid Graphics Switching.
 **Ans -** If you have a Hybrid or Multiple Graphics Card, your display name will change if you switch graphics. So, you have to change the xrandr --addmode <displayname> if you switch Graphics.
 
 ## 3. Preferred Apps
 Pop has apps that you need. But, if you do not like them, you can also get alternatives.
 
 ### - Snap Vs Flatpak (Package Manager except apt,dpkg)
 Snap can incorporate more apps than Flatpak. It runs how the developer intended. Some even say go as far as to say, "Snap is the future". But, currently, Flatpak outperforms Snap, for the most part, that is why I don't prefer Snap but, still, it's your choice. <br />
 
 [Reference to Removing Snap](https://www.kevin-custer.com/blog/disabling-snaps-in-ubuntu-20-04/) <br />
 [Reference to Detailed Guide on Flatpak](https://itsfoss.com/flatpak-guide/)
 
 ### - Browser
Today Chrome is the most popular browser in the world. Also, I have been using Chrome since probably 2012. <br /> <br />

 **MENTION OPENSOURCE - Chrome is not an open-source browser, Vivaldi is partly open-source, and also these browsers do not support [VAAPI](https://forum.vivaldi.net/topic/31874/enable-hardware-accelerated-video-vaapi/2) & same goes for Opera as well.** <br />

 **Firefox & TOR are the only open-source browsers on this list. Meaning these are better alternatives if you are looking for privacy. But, TOR doesn't support VAAPI. ** <br />

To learn more about **VAAPI** go [here](https://wiki.archlinux.org/index.php/Hardware_video_acceleration).

 **Chromium Based Browsers**
 1. **[Chrome](https://www.google.com/chrome/)** 
 ```bash
 sudo apt install google-chrome-stable
 ```
 2. **[Vivaldi](https://vivaldi.com/)**
 ```bash
 wget -qO- https://repo.vivaldi.com/archive/linux_signing_key.pub | sudo apt-key add -
 sudo add-apt-repository 'deb https://repo.vivaldi.com/archive/deb/ stable main'
 sudo apt update && sudo apt install vivaldi-stable
 ```
 3. **[Opera](https://www.opera.com/)**
 ```bash
 sudo add-apt-repository 'deb https://deb.opera.com/opera-stable/ stable non-free'
 wget -qO - https://deb.opera.com/archive.key | sudo apt-key add -
 sudo apt-get update
 sudo apt-get install opera-stable
  ```
  **Non Chromium Based**
  1. **[Firefox](https://www.mozilla.org/en-US/firefox/new/)** <br />
  Comes pre-installed with Pop & Ubuntu.<br />
  
  2. **[TOR](https://www.torproject.org/download/)**
 ```bash
 sudo add-apt-repository ppa:micahflee/ppa && sudo apt update
 sudo apt install torbrowser-launcher
 ```
 I have not listed **Chromium** since it needs snap to install.<br />
  
  **You should always keep a Non-Chrome based browser to be on the safe side because in case of driver/library error which bugs Chromium-based browsers, Non-Chromium-based browsers can help you out.** <br /> <br />
 To remove Firefox (Not Recommended)
 ```bash
 sudo apt remove --purge firefox*
 ```
 **Extensions I use on my Chrome** <br />
 Generally, these extensions exists for almost all browsers. <br />
 ![Chromeextensions](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/Chromeextensions.png)
 1. **[Absolute Enable](https://chrome.google.com/webstore/detail/absolute-enable-right-cli/jdocbkpgdakpekjlhemmfcncgdjeiika?hl=en)** - Force Enable Right Click & Copy on disabled websites.
 2. **[uBlock Origin](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en)** - uBlock Origin is not an "ad blocker", it's a wide-spectrum content blocker with CPU and memory efficiency as a primary feature.
 3. **[GNOME Shell integration](https://chrome.google.com/webstore/detail/gnome-shell-integration/gphhapmejobijbbhgpjhcjognlahblep?hl=en)** - This extension provides integration with GNOME Shell and the corresponding extensions repository, make it easy to add extensions via your browser.
 4. **[Grammarly](https://chrome.google.com/webstore/detail/grammarly-for-chrome/kbfnbcaeplbcioakkpcpgfkobkghlhen?hl=en)** - Helps when you write something for fixing mistakes, helps me complete writing stuff fast.
 5. **[Random User-Agent](https://chrome.google.com/webstore/detail/random-user-agent/einpaelgookohagofgnnkcfjbkkgepnp?hl=en)** - Automatically change the user agent after specified period of time to a randomly selected one, thus hiding your real user agent
 6. **[The Great Suspender](https://chrome.google.com/webstore/detail/the-great-suspender/klbibkeccnjlkjkiokjodocebajanakg?hl=en)** - Make your computer run smoothly by suspending the tabs you aren't using
 7. **[Touch VPN](https://chrome.google.com/webstore/detail/touch-vpn-secure-and-unli/bihmplhobchoageeokmgbdihknkjbknd/related?hl=en-US)** - Simple setup. Relatively nominal footprint, as far as my diags/utils have determined at this early stage and consuming a minor spot in memory. 
 
 ### - Email Client
 Chrome is good enough for me. Pop OS ships with Geary which is a great email client for any user.
 
 **If you want to remove Geary**
 ```bash
 sudo apt remove --purge geary* && sudo apt autoremove
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
 I directly use Chrome extension for the office, which you can get [here](https://chrome.google.com/webstore/detail/editor-for-docs-sheets-sl/eahibemoondbjaojgcdnmjlnbjmgbbml)

 To remove LibreOffice
 ```bash
 sudo apt remove --purge libreoffice* && sudo apt autoremove
 ```
 Alternatives, <br />
 **Free Office** (Something like MS-Office) <br />
 Guide the deb file [here](https://www.freeoffice.com/en/download/applications) <br />
 
 **Open Office** (LibreOffice is a way better option) <br />
 Guide the deb file [here](https://www.openoffice.org/download/) <br />

 **WPS OFFICE is a Chinese application making it a privacy concern for users using it.**

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
 If you do not like ads, you can get [Ad-free Spotify](https://github.com/abba23/spotify-adblock-linux). <br /> 
 **But, if you like Spotify please buy the Premium, Ad-free Spotify isn't as efficient and gets buggy time to time.**  <br />  <br />
 ![spotify-adfree](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/spotify-adfree.png) <br />  <br />
 
 2. **Steam for Gaming**
 ```bash
 sudo apt install steam
 ```
 If it doesn't work, turn on multiverse.
 ```bash
 sudo add-apt-repository multiverse && sudo apt update
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
 ###### To run Windows programs on Linux.
 1. Install wine according to your architecture. <br />
 ```bash
 sudo apt install wine
 ```
 **For 64-bit system this command enables 32-bit support** <br />
 ```bash
 sudo dpkg --add-architecture i386
 ```
 2. To check the version installed.
 ```bash
 wine --version
 ```
 
 **Saftey with Wine** - NEVER use wine with sudo. Windows apps always run with admin rights in wine. No sudo needed, sometimes you need to tell wine to start an app as a "normal user", but you NEVER need to tell it to run with admin rights, because it already does. So from this you could be thinking can't hurt to run wine with sudo, right? YES it can hurt, or do you believe that a potential Virus wouldn't be happy to be run with root rights? Viruses work through wine like they would on Windows. sudo gives them even more privileges, as when you would run them as admin on Windows. <br />
 
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
 ###### Timeshift is a system restore tool for Linux. Creates a file system snapshot using rsync+hard links or BTRFS snapshots.
 ```bash
 sudo apt install timeshift
 ```

 ### - Debloating
 ###### Remove useless stuff that you do not need.  Please, read what it does before you remove them.
 - **Calculator** - You know what a calculator is.
 ```bash
 sudo apt remove --purge gnome-calculator
 ```
 - **Calendar** - I put this on a list because I never need the Calendar even on my phone
 ```bash
 sudo apt remove --purge gnome-calendar && sudo apt autoremove
 ```
 - **Character Map** - is a Unicode character map that allows you to select characters from a table and insert them into a text string. I have no known use for it.
 ```bash
 sudo apt remove --purge gucharmap* && sudo apt autoremove
 ```
 - **Contacts** - Gnome contacts tool important for a work pc.
 ```bash
 sudo apt remove --purge gnome-contacts* && sudo apt autoremove
 ```
 - **Document Scanner** - Important tool for a work pc.
 ```bash
 sudo apt remove --purge sane* simple-scan
 ```
 - **Gnome Fonts** - shows you the fonts installed on your computer for your use as thumbnails. Selecting any thumbnails shows the full view of how the font would look under various sizes.
 ```bash
 sudo apt remove --purge gnome-font-viewer
 ```
 - **Gnome Help** - Useful for newcomers
 ```bash
 sudo apt remove --purge yelp* && sudo apt autoremove
 ```
 - **Gnome Power Manager** - can show historical and current battery information and programs waking up that use power. I never use it.
 ```bash
 sudo apt remove --purge gnome-power-manager
 ```
 - **Pinyin (Only for Chinese users)** - Pinyin is the Romanization of Chinese characters based on their pronunciation.
 ```bash
 sudo apt remove --purge ibus-libpinyin* && sudo apt autoremove
 ```
 - **Vim** - Vim is a highly configurable text editor built to configure any kind of text very efficient fashion. I have removed this because I use Nano/Gedit/Atom.
 ```bash
 sudo apt remove --purge gvim* vim* && sudo apt autoremove
 ```
 - **Popsicle USB creator** - If you create a live USB, you should keep this tool but, Etcher seems a better option.<br />
 **Get [Etcher](https://www.balena.io/etcher/)** <br />
 ```bash
 sudo apt remove --purge popsicle*
 ```
 
 ### Reverting
 If you accidentally remove any, you can add them back by
 ```bash
 sudo apt install <appname>
 ```
 *App name doesn't require * symbol*
 ## 4. Important Tweaks
 ### Settings
 #### -- Privacy Tweaks
 ![1](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/1.png)
 ![2](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/2.png)
 ![3](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/3.png)
 ![4](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/4.png)
 #### -- Over Amplification
 ![sound](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/sound.png)
 #### -- Accessibility
 1. Disable Cursor blinking, this doesn't save any resources, this is just a choice.
 2. Optimise repeat keys speed <br /> <br />
 ![repeatkeys](https://github.com/themagicalmammal/howtopopbuntu/blob/master/Screenshots/repeatkeys.png)
 ### Disable annoying Keyring
 #### This provides security for browsers on a autologin-based system.(Easy way to understand it)
 If you have a autologin system, whenever you open a browser (except firefox) or Github-desktop, the system asks for a key. <br /> <br />
 **Steps to Disable it** 
 ```atom
 App password & keys > Login > Change Password > Type your Current Pass > Continue > Continue with Empty Pass > Make unencrypted
 ```
 ![key](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/chngpass.png)
 ![unen](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/disablekeyring.png) <br />

 ## 5. Optimizing Boot time & Ram Management
 My original boot time was 1min 4sec after removing apps it is now 58sec.<br /> <br />
 ![originalboottime](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/originalboottime.png)

 ### Disabling Plymouth
 **For Pop OS** <br />
 ```bash
 sudo kernelstub --delete-options "quiet systemd.show_status=false splash"
 ```
 **For Ubuntu** <br />
 Go through [this](https://www.kevin-custer.com/blog/disabling-the-plymouth-boot-screen-in-ubuntu-20-04/) guide. <br />
 
 **This reduces my boot time to 35sec** <br />
 
 ### EarlyOOM
 It is a cool new feature enabled in Fedora 33. What is it, you ask? In Layman terms, It frees memory when the ram or the swap gets close to full (over 90%). Making this a beneficial feature for the heavy usage. This is a very important feature for old hardware. It only consumes 0.5 to 2 MB in the background. <br /> <br />
 To install it 
 ```bash
 sudo apt install earlyoom
 ```
 To check it's status
 ```bash
 systemctl status earlyoom
 ``` 
 <br />
 
 ### Wayland (Display Manager)
 **Before you do this, Please read what Wayland is** <br />
 Wayland is a display manager. X.org is the default display manager. But, X.org is old and is very bloated, thus uses more resources. So in this way, Wayland can be a better option. But, Wayland is a newer display manager and has many bugs, and one of them being **NVIDIA**, it glitches a lot. So, if you have an NVIDIA GPU, Wayland is a bad option. Also, if you don't have NVIDIA GPU, still there may be bugs, so if you experience bugs/glitches please get rid of it(Remove #).
 
 1. Edit the /etc/gdm3/custom.conf to either disable or enable Wayland.
  ```bash
 sudo nano /etc/gdm3/custom.conf
 ```
 2. Add # before this line
   ```atom
 WaylandEnable=false
 ```
 3. Then
  ```bash
 sudo systemctl restart gdm3
 ```
 4. Then select it in login <br />
 ![wayland](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/wayland.png) 
 5. To confirm (Output: wayland)
  ```bash
 echo $XDG_SESSION_TYPE
 ```
 <br />
 
 ### Disabling Unnecessary Extensions
 Pop OS comes with a lot of Extensions which generally is not used by everyone so you can prefer to disable them you can. </br>
 The built-in extensions I use are - <br /> <br />
 ![extensions](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/extensions.png) 
 
 #### I have disabled these
 1. **Alt-Tab** -  By default, Alt+Tab will raise all windows of an application. This extension still groups windows by application.
 2. **Always show workspaces** - Always show workspaces in the overview.
 3. **Desktop Icons** - Add icons to the desktop.
 4. **Pop Battery Icon Fix** - Fixes the battery icon to match the current battery level. (Useless for desktop pc)
 5. **Pop Shop Details** - Adds a Show Details item to applications if Pop Shop is installed.
 6. **System76 Power** - system76-power is a utility for managing graphics and power profiles. (Useful for hybrid and NVIDIA GPU)

 ### Disabling Pop Shop on Boot
 Pop Shop always opens on the startup of the system there is a way to stop that. This also helps in saving some ram. <br /> <br />
 **Steps**
 1. Edit App center daemon from opening it at start
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
 - **ModemManager** is a DBus-activated daemon that controls mobile broadband (2G/3G/4G) interfaces. If you do not have a mobile broadband interface, you do not need this.
 ```bash
 sudo systemctl disable ModemManager.service
 sudo systemctl mask ModemManager.service
 ```
 **Note** - If you are not using this and don't want Wi-Fi to disable wpa_supplicant.service.
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
  - **Avahi-daemon** is supposed to provide zero-configuration network discovery and make it super-easy to find printers and other hosts on your network. I always disable it and do not miss it.
 ```bash
 sudo systemctl disable avahi-daemon.service
 sudo systemctl mask avahi-daemon.service
 ```
 - **Apport** collects potentially sensitive data, such as core dumps, stack traces, and log files. They can contain passwords, credit card numbers, serial numbers, and other private material.
 ```bash
 sudo apt remove --purge apport* && sudo apt autoremove
 ```
 - **Saned** is the SANE (Scanner Access Now Easy) daemon that allows remote
clients to access image acquisition devices available on the localhost.
 ```bash
 sudo systemctl disable saned.service
 sudo systemctl mask saned.service
 ```

 - **Thermald** [Unsafe to remove]  daemon prevents machines from overheating and was introduced in the 14.04 Ubuntu Trusty LTS release. It monitors thermal sensors and will modify cooling controls to keep the hardware cool.<br />
 **If your system heats after removing this even a bit, add it back**
 ```bash
 sudo systemctl disable thermald.service
 sudo systemctl mask thermald.service
 ```
 - **Switcheroo-control** is a D-Bus service to check the availability of dual-GPU. Keep this only if you have 2 GPUs.
 ```bash
 sudo systemctl disable switcheroo-control.service
 sudo systemctl mask switcheroo-control.service
 ```
 - **Systemd-resolved**  is a system service that provides network name resolution to local applications. It implements a caching and validating DNS/DNSSEC stub resolver.
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
 - **System76-power** Power Controls for lappy not required on a desktop PC.
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
 **To Enable them again** <br />
 Let the service name be xyz.service
 ```bash
 sudo systemctl unmask xyz.service
 sudo systemctl enable xyz.service
 ```

 - Disabling **Startup Application Preferences** <br /> <br />
 ![application-pref](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/application-pref.png)

 #### Boot time after disabling those stuff
 ![prekernelbootime](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/prekernelbootime.png)

 ### Custom kernel
 Custom Kernels are known and used by fewer people, but these kernels add a significant boost to performance and battery.
 1. **Xanmod** is the more popular choice among intel based hardware. It provides a stable, responsive, and smooth desktop experience. <br />
To get Xanmod go [here](https://xanmod.org/)  <br />
While installing this don't forget to add, **Setting the FQ-PIE Queuing Discipline**. <br />

 2. **Liquorix** is a distro kernel replacement built using the best configuration and kernel sources for desktop, multimedia, and gaming workloads. Works better with AMD hardware. <br />
To get Liquorix go [here](https://liquorix.net/) <br /> <br />

 Initial benchmarks on intel make Xanmod a winner whereas, AMD hardware generally goes better with Liquorix. Also, if you are having heating issues go for Liquorix for a better thermal response. I use Xanmod normal because long term release felt slow for me on both my PC & lappy. <br />

 [Reference of Xanmod being compared to Clear Linux](https://www.phoronix.com/scan.php?page=article&item=ubuntu-xanmod-clear&num=1) <br />
 [Reference of Liquorix Kernel Benchmarks For AMD Ryzen](https://www.phoronix.com/scan.php?page=article&item=radeon-gaming-liquorix54&num=1) <br />
 [Linux Generic vs Xanmod vs Liquorix](https://www.youtube.com/watch?v=EAe95sWrv0U) (It is not in English but you will get the point.) <br />
 
**Note** - At this point, this boots as fast as it can be.<br />

 ### Getting rid of Custom Kernel
 **IF YOU ARE A NEW USER AND DON'T KNOW WHAT YOU ARE DOING, PLEASE SEARCH SOME THREADS OR ASK SOMEONE BEFORE TAKING ANY ACTION. BECAUSE THIS IS A VERY RISKY STEP AND CAN POTENTIALLY KILL YOUR SYSTEM.**<br />
 1. Removing the Kernel apt modules <br />

 For XanMod
 ```bash
 sudo apt remove --purge linux-xanmod && sudo apt-get --purge autoremove
 ``` 

 For Liquorix
 ```bash
 sudo apt remove --purge linux-image-liquorix-amd64 linux-headers-liquorix-amd64 && sudo apt-get --purge autoremove
 ```
 2. [XanMod Only] Remove FQ-PIE Queue Discipline for systemd
 ```bash
 sudo rm /etc/sysctl.d/90-override.conf
 ```
 4. Removing  the Kernel Repos <br />
 
 For XanMod <br />
 Download this [deb](https://dl.xanmod.org/xanmod-repository.deb) and uninstall it. <br />
 
 For Liquorix <br />
 ```bash
 sudo add-apt-repository ppa:damentz/liquorix
 ```
 
 5. Getting, name of the Kernel
 ```bash
 uname -r
 ```
 6. Removing the Kernel
 ```bash
 sudo apt-get remove <kernel name>
 ```
 7. Getting, remaining Kernel files 
 ```bash
 apt list --installed *xanmod* *liquorix*
 ```
 8. Removing the remaining Kernel files
 ```bash
 sudo apt-get remove <name of kernel files>
 ```
 
 [Reference of installing and removing XanMod](https://www.reddit.com/r/pop_os/comments/jlrney/psa_installing_and_removing_the_xanmod_kernel_in/) <br />
 
 ### Final Boot Time
 ![final-boottime](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/final-boottime.png)

 ## 6. Miscellaneous
 ### Get latest Ad-Hosts
 I use **Steven Black** Ad-Hosts for ad-blocking the whole system without any other extra app. This blocks basic ads but not YouTube or Spotify ads. <br />
 To get it go [here](https://github.com/StevenBlack/hosts). <br />

 I use **Unified hosts + fake news + gambling + porn** <br />

 #### Q. How to?
 **Ans.** Steps -
 1. Get a host
 2. Save as text to Downloads
 3. Rename hosts.txt to hosts
 4. Open terminal & type
 ```bash
 sudo nautilus
 ```
 5. Go to file system root > Home > Your Username > Downloads > Copy the Hosts file > Go back to Root > Etc - Then Paste it here, it will ask to Replace, do so.
 Note - If it does not ask you to replace, you might have gone wrong somewhere.

 ### Clean your System
 **Terminal**
 ```bash
 sudo apt --purge autoremove
 sudo rm -rf ~/.cache/thumbnails/*
 sudo apt-get clean
 sudo apt-get autoclean
 ```
 **Tool** <br />
 I use Bleachbit because it is good to remove unnecessary junk from your computer.
 ```bash
 sudo apt install bleachbit
 ```
 **Steps ->** BleachBit (root) > Select every option (except free disk) > **Clean** <br /> <br />
 ![bleachbit](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/bleachbit.png)
 **Note**:- After doing this the first boot might be slow don't worry it's perfectly normal.

 ### Night Light
 Night Light mode is simply made to remove some lights which hinder our sleep cycle. As researchers have found that at night if a certain set of colors interact with our eyes it doesn't let the eye rest making it *unsleepy* that's why we use a night light.<br /> <br />
 **Steps ->** Settings > Display > Night light <br />
 *You can also select the timing which fits your sleep cycle.*<br /> <br />
 ![nightlight](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/nightlight.png)

 ### Tile Windows
 The beautiful thing I like about Pop OS is its feature rich environment to increase work efficiency.<br /> <br />
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
 - [Dash to Dock](https://extensions.gnome.org/extension/307/dash-to-dock/) <br /> <br />
 ![dashtodock](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/dashtodock.png)
 - [Dash to Panel](https://extensions.gnome.org/extension/1160/dash-to-panel/) <br /> <br />
 ![dashtopanel](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/dashtopanel.png)
 To get the start button I [have](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/start.png). <br />

 **Only works with Dash** <br />
 - [Compiz alike magic lamp effect](https://extensions.gnome.org/extension/3740/compiz-alike-magic-lamp-effect/)
 
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
 #### 6. In the Gnome tweak tool, Select your theme.

**Tip** - How to fix terminal theme
 1. Go to Preferences.
 2. Add Profiles.
 3. Name it Big_Sur.
 3. Go to colors, then select *choose use colors from system theme*.
 4. Set Big_Sur default.
 5. Close and reopen the terminal.

**Tip** - How to fix gedit/text-editor theme
 1. Go to Preferences.
 2. Go to Font & Colors.
 3. Select Color Scheme - Classic. <br />

 ![bigsurlikelook](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/bigsurlikelook.png)
 #### 7. Add Activity Hot Corner & Format time.
 ![overlay](https://github.com/themagicalmammal/how-to-popbuntu/blob/master/Screenshots/overlay.png)

 ## 7. Bonus
 #### Among Us if Steam Glitches
 #### For everyone following this method, Among Us is available for everyone in Steam for Linux. I prefer to get it from Steam since it is stable. But, on old hardware, Steam seems to glitch a lot, so this is an alternative. Please try not to use this if you do not need to because this is a pirated edition, and in no way, I want to encourage piracy.
 **Steps**
 1. Install Wine (Go to Others Section in this repo)
 2. Download [Among Us](http://www.mediafire.com/file/czz4ctxxcauy2t8/Among.Us.v2020.9.9s.zip/file)
 3. To run it type
 ```bash
 wine Among\ Us.exe
 ```
 4. What I do is create a file start.sh & run it.
 ```bash
 echo "wine Among\ Us.exe" > start.sh | chmod 755 start.sh
 ```
 5. Open terminal inside the folder
 ```bash
 ./start.sh
 ```

 [<img src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-13.png" width="150" height="54" />](https://www.reddit.com/user/themagicalmammal) <br />
  [Pop OS](https://www.reddit.com/r/pop_os/comments/jm1j5i/a_guide_to_setting_up_popubuntu/)/[Ubuntu](https://www.reddit.com/r/Ubuntu/comments/jm1gvw/a_guide_to_setting_up_popubuntu/) to post your queries and suggestions.

### Thanks for Suggestions
1. [GGG_246](https://www.reddit.com/user/GGG_246/) - Actually a lot of stuff I didn't know. To check what he did go [here](https://www.reddit.com/r/Ubuntu/comments/jm1gvw/a_guide_to_setting_up_popubuntu/gasmuhg?utm_source=share&utm_medium=web2x&context=3) & [here](https://www.reddit.com/r/Ubuntu/comments/jm1gvw/a_guide_to_setting_up_popubuntu/gata2s4?utm_source=share&utm_medium=web2x&context=3) & Swap file.
2. [WsadES](https://www.reddit.com/user/wsades) - Suggestion about removing unnecessary extension & Pop Shop on boot.
3. [spxak1](https://www.reddit.com/user/spxak1/) - Mention Firefox & Chromium-based Bug & Idea about Disclaimer & Reverting back to stock kernel.
4. [JawadAlkassim](https://www.reddit.com/user/JawadAlkassim/) - Mention opensource & Vivaldi vaapi & Wayland.
5. [arsfeld](https://www.reddit.com/user/arsfeld) - Information about Encryption and my misconception about recovery
6. [lulzdoods](https://www.reddit.com/user/lulzdoods) - Completing the uninstall guide for kernel
