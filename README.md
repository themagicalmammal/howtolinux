# Tweaks for Pop OS 20.x or Ubuntu 20.x based distros
 These are the set of tweaks I use on my pop os. I have 2 PC's one of them is 7th Gen i5 laptop with ssd and other one is a 3rd Gen 6 years old desktop. These tweaks are added on the basis of my experience over 5 months using pop on them both.
  
## 1. Installation
 While doing a install there are certain things you need to know if you want a faster boot. On my laptop I select a clean install and let the interface do its job. While on my desktop I select advanced partition, now there is a reason for that. If I select clean install it creates 2 extra partitions one is for recovery which I never use. And second one is swap now you might thing that why should i not keep swap. Let me explain over period of last 3 months I witnessed the fact that my swap is never used because on my desktop I do pretty basic stuff. While on my laptop I build kernels so swap gets used time to time. Also if you keep these 2 extra partitions every time you boot systemd mounts them which make the boot slow.
 
 So Create 2 partitions
 - 512 mb for EFI boot
 - Remaining for EXT4 system
 
#### Q. Should I use Brtfs or Ext4?
**Ans.** Depends, Now brtfs is starting to become a trend since Fedora adopted it and it now ships with Fedora 33. Also, I have started to use this on my laptop but not my desktop. Now there is a reason for that, initial benchmarks show that brtfs is slower than ext4 though brtfs has more advanced features than ext4. So In my opinion if you have a older pc go for ext4 but if you have a newer one you can go for brtfs.

- [Reference to Fedora Trend](https://www.phoronix.com/scan.php?page=news_item&px=Fedora-33-Released)
- [Reference to Benchmarks b/w File Systems](https://www.unixmen.com/review-ext4-vs-btrfs-vs-xfs/)
- [Reference for How to brtfs on Pop os](https://mutschler.eu/linux/install-guides/pop-os-btrfs/)

## 2. Post Installation
 There is some basic things you need to do after its installation.
 
 - **Update your System** <br>
 *Get latest updates via terminal or pop shop.* <br>
 For Terminal use
 ```bash
 sudo apt update && sudo apt upgrade && flatpak update
 ```
 
 - **Proprietary Drivers** <br>
 *You can get proprietary drivers directly from Pop shop but you still get problems you can refer to a guide.*
 
 [Guide for NVIDIA](https://askubuntu.com/questions/61396/how-do-i-install-the-nvidia-drivers) <br>
 [Guide for AMD](https://linuxconfig.org/how-to-install-the-latest-amd-radeon-drivers-on-ubuntu-18-04-bionic-beaver-linux#:~:text=In%20order%20to%20get%20the,the%20form%20of%20a%20tarball.)
 
 - **Gnome Tweaks**
 ```bash
 sudo apt install gnome-tweaks
 ```
 ###### Tweaks I am using -
 
##### Minimise Button
 Minimise is a important button for gnome. I always wonder why they didn't add it. While I think you can live without it if you use Super key a lot but for me minimise button is very useful. You can also get the maximize button but its not that usefull because double clicking the windows does the job.<br>
 ![gnome-minimise](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/gnome-minimise.png)<br>
##### Battery Percentage
 This option is also a pretty useful option but only for a laptop.<br>
##### Optimising Font
 I use custom resolution on my pc so fonts seem small to me so it make it better I use 1.11x font with antialiasing to subpixel.<br>
 ![custom-font-size](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/custom-font-size.png)<br>
 
 - **Add custom resolution** </br>
 If your display supports higher refresh rate go for it. Because higher refresh rates are smoother. My display is capable for 120hz.<br>
 ![set-of-refreshrates](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/set-of-refreshrates.png)
 
 ##### To add custom resolution do this steps. 
 **1. Check xrandr**  <br>
 You can know the name of your display here generally it is eDP-1 if is hybrid it can be eDP-1-1
 ![xrandr](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/xrandr.png)
 <br>
 **2. Find resolution which will fit**  <br>
 My original maximum resolution is 1600 900 which is 16:9 aspect ratio. So if I choose a different aspect ratio some part of my display will be blacked out. <br>
 
 So, I can go for 1920x1080 or 1536x864 <br>
 *To find out which fits you best you can do tests by adding different resolutions*
 <br>
 **3. How to add?**
 ##### - cvt
 ```bash
 cvt 1920 1080 #Your custom resolution
 ```
 ![cvt](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/cvt.png)
 ##### - xrandr --newmode
 Copy line after modline 
 ```bash
 xrandr --newmode "1920x1080_60.00"  173.00  1920 2048 2248 2576  1080 1083 1088 1120 -hsync +vsync
 ```
 ![newmode](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/newmode.png)
 ##### - xrandr --addmode
 Add the resolution with display name
 ```bash
 xrandr --addmode eDP-1 "1920x1080_60.00"
 ```
 ![addmode](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/addmode.png)
 
 #### Done???
 **Well not quite**
 
 **Problem 1**: What about other refresh rates? <br>
 **Problem 2**: The resolution goes away after reboot. <br>
 
 ##### Solution for Problem 1:
 You have to experiment with cvt a bit to find which refresh rates should be.
 As my refresh rate is from 0 - 120. I did some expermientation and added some resolution. <br>
 
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
 ##### Solution for Problem 2:
 Add all the final lines to .profile so every time a session is created the lines will run and resolution will be automatically added.
 ```bash
 sudo gedit ~/.profile
 ```
 ![profile](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/profile.png)
 
 Finally it will look like
 ![custom-resolution-final](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/custom-resolution-final.png)
 
 ## 3. Preferred Apps
 Pop os ships with a basic set of apps which generally every person uses but I don't use all of them and also I use some alternatives which I like better.
 
 #### - Chrome
 I prefer Chrome & Vivaldi, as Chrome is the most popular browser also I have been using Chrome since probably 2012 and Vivaldi is the fastest browser and is optimized for older hardware.
 
 To remove Firefox
 ```bash
 sudo apt remove --purge firefox*
 ```
 1. **Chrome**
 ```bash
 sudo apt install google-chrome-stable
 ```
 2. **Vivaldi**
 ```bash
 wget -qO- https://repo.vivaldi.com/archive/linux_signing_key.pub | sudo apt-key add -
 sudo add-apt-repository 'deb https://repo.vivaldi.com/archive/deb/ stable main' 
 sudo apt update && sudo apt install vivaldi-stable 
 ```
 
 #### - Email Client
 I don't use email client for me chrome is enough.
 ```bash
 sudo apt remove --purge geary* && sudo apt autoremove
 ```
 
 Alternatives 
 
 1. **Evolution**
 ```bash
 sudo apt install evolution
 ```
 2. **Thunderbird**
 ```bash
 sudo apt install thunderbird
 ```
 3. **MailSpring** <br>
 Go [here](https://linuxconfig.org/how-to-install-mailspring-on-ubuntu-18-04-bionic-beaver-linux)
 
 #### - VLC Media player
 Best video player for any platform
 ```bash
 sudo apt install vlc
 ```
 
 Get rid of the stock video player
 ```bash
 sudo apt remove --purge totem* && sudo apt autoremove
 ```
 
 #### - Office
 I directly use chrome extension for the office which you can see [here](https://chrome.google.com/webstore/detail/editor-for-docs-sheets-sl/eahibemoondbjaojgcdnmjlnbjmgbbml)
 
 Remove LibreOffice
 ```bash
 sudo apt remove --purge libreoffice* && sudo apt autoremove
 ```
 
 Alternative, **WPS Office** <br>
 Get the deb package [here](https://www.wps.com/)
 
 #### - Useless apps (According to Me)
 Calculator
 ```bash
 sudo apt remove --purge gnome-calculator && sudo apt autoremove
 ```
 Calendar
 ```bash
 sudo apt remove --purge gnome-calendar && sudo apt autoremove
 ```
 Character Map
 ```bash
 sudo apt remove --purge Gucharmap* && sudo apt autoremove
 ```
 Contacts
 ```bash
 sudo apt remove --purge gnome-contacts* && sudo apt autoremove
 ```
 Document Scanner
 ```bash
 sudo apt remove --purge sane* simple-scan && sudo apt autoremove
 ```
 Gnome Fonts
 ```bash
 sudo apt remove --purge gnome-font-viewer && sudo apt autoremove
 ```
 Gnome Help
 ```bash
 sudo apt remove --purge yelp* && sudo apt autoremove
 ```
 Gnome Power Manager
 ```bash
 sudo apt remove --purge gnome-power-manager && sudo apt autoremove
 ```
 Pinyin (Only for Chinese users)
 ```bash
 sudo apt remove --purge ibus-libpinyin* && sudo apt autoremove
 ```
 Vim
 ```bash
 sudo apt remove --purge gvim* vim* && sudo apt autoremove
 ```
 Popsicle USB creator
 ```bash
 sudo apt remove --purge popsicle* && sudo apt autoremove
 ```
 Note - If you need a Live USB creator you can get [Etcher](https://www.balena.io/etcher/)
 
 #### - Social Apps
 1. **Telegram** <br>
 Personally I use Kotogram client
 ```bash
 flatpak install io.github.kotatogram
 ```
 2. **Whatsapp** <br>
 Gtkwhatsapp has better features
 ```bash
 flatpak install com.gigitux.gtkwhats
 ```
  
 #### - Programming Apps
 1. **Atom by GitHub**
 ```bash
 flatpak install atom #5th one
 ```
 2. **Pycharm**
 ```bash
 flatpak install pycharm-community
 ```
 3. **GitHub-Desktop**
 ```bash
 sudo apt install github-desktop
 ```
 4. **Java** <br>
 Go through [this](https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-18-04) to get the version you need.
 
 #### - Entertainment Apps
 1. **Spotify for Music**
 ```bash
 flatpak install spotify
 ```
 2. **Steam for Gaming**
 ```bash
 flatpak install steam #6th one
 ```
 3. **Multimedia Codecs**
 ```bash
 sudo apt install ubuntu-restricted-extras
 ```
 ## 4. Important Tweaks
 #### Setting Tweaks
 ###### Privacy Tweaks
 ![1](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/1.png)
 ![2](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/2.png)
 ![3](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/3.png)
 ![4](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/4.png)
 ###### Over Amplification
 ![sound](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/sound.png)
 #### Disable annoying Keyring
 Whenever you open Chrome/Vivaldi any browser the system asks for a key which according to me is very annoying. <br>
 *There is a easy way to disable this*
 ```steps
 Open app password and keys (Seahorse) > Go to Login > Change Password > Type old passpord continue > Don't type and password continue > Make unencrypted
 ```
 ![key](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/key.png)
 ![unen](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/unen.png) <br>
 
 ## 5. Optimising Boot time
 My original boot time was 1min 4sec after removing apps it is now 58sec.
 ![originalboottime](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/originalboottime.png)
 
 #### Disabling plymouth
 ```bash
 sudo kernelstub --delete-options "quiet systemd.show_status=false splash"
 ```
 ![boottime1](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/boottime1.png)
 
 #### Remove *Network-dispatcher* is a dispatcher daemon for systemd-networkd connection status changes.
 ```bash
 sudo apt remove --purge networkd-dispatcher
 ``` 
 #### Masking and disabling useless services
 - **ModemManager** is a DBus-activated daemon that controls mobile broadband (2G/3G/4G) interfaces. If you don’t have a mobile broadband interface — built-in, paired with a mobile phone via Bluetooth, or USB dongle — you don’t need this.
 ```bash
 sudo systemctl disable ModemManager.service
 sudo systemctl mask ModemManager.service
 ```
 Note - If you are not using this and don't want wifi disable wpa_supplicant.service.
 - **Fwupd** is a simple daemon allowing you to update some devices' firmware, including UEFI for several machines
 Disable thunderbolt_power <br>
 ```bash
 sudo nano /etc/fwupd/daemon.conf
 ```
 Make it 
 ```bash
 BlacklistPlugins=test;invalid;thunderbolt_power
 ```
 ![blacklist_thunderbold](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/blacklist_thunderbold.png)
 Remove fwupd from boot
 ```bash
 sudo systemctl disable fwupd.service
 sudo systemctl mask fwupd.service
 ```
  - **Avahi-daemon** is supposed to provide zero-configuration network discovery, and make it super-easy to find printers and other hosts on your network. I always disable it and don’t miss it.
 ```bash
 sudo systemctl disable avahi-daemon.service
 sudo systemctl mask avahi-daemon.service
 ```
 - *AppArmor* is a Linux kernel security module that allows the system administrator to restrict programs' capabilities with per-program profiles. Profiles can allow capabilities like network access, raw socket access, and the permission to read, write, or execute files on matching paths.
 - *Apport* collects potentially sensitive data, such as core dumps, stack traces, and log files. They can contain passwords, credit card numbers, serial numbers, and other private material.
 ```bash
 sudo apt remove --purge apport* apparmor* && sudo apt autoremove
 ```
 - **Saned** is the SANE (Scanner Access Now Easy) daemon that  allows  remote
clients  to  access  image  acquisition  devices available on the local
host.
 ```bash
 sudo systemctl disable saned.service
 sudo systemctl mask saned.service
 ```
 - **Thermald** daemon prevents machines from overheating and was introduced in the 14.04 Ubuntu Trusty LTS release. It monitors thermal sensors and will modify cooling controls to keep the hardware cool. (My system didn't suffer must removing it but if yours does unmask and enable it. But if your system heats even a bit after removing this add this back.)
 ```bash
 sudo systemctl disable thermald.service
 sudo systemctl mask thermald.service
 ```
 - **Switcheroo-control** is D-Bus service to check the availability of dual-GPU. Keep this only if you have 2 gpu's.
 ```bash
 sudo systemctl disable switcheroo-control.service
 sudo systemctl mask switcheroo-control.service
 ```
 - **Gpu-manager** is software that creates a xorg.conf for you. So running this in every boot is just overkill. You only need to run this if you change your gpu.
 ```bash
 sudo systemctl disable gpu-manager.service
 sudo systemctl mask gpu-manager.service
 ```
 - **Udisk2** disabling this removes the capability to automount the system.
 ```bash
 sudo systemctl mask udisks2.service
 ```
 - **system76-power** power controls for laptop not required on a desktop pc.
 ```bash
 sudo systemctl disable system76-power.service
 sudo systemctl mask system76-power.service
 ```
 - **apt-daily-upgrade** bug -
 ```bash
 sudo systemctl disable apt-daily.service
 sudo systemctl disable apt-daily.timer
 sudo systemctl disable apt-daily-upgrade.timer
 sudo systemctl disable apt-daily-upgrade.service
 ```
 
 - Disabling startup application preferences
 ![application-pref](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/application-pref.png)
 
 Now my boot time reduces to 
 ![prekernelbootime](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/prekernelbootime.png)

 #### Getting a custom kernel
 1. Xanmod is the more popular choice among intel based hardware. It is built to provide a stable, responsive and smooth desktop experience. <br>
 To get xanmod go [here](https://xanmod.org/)
 2. Liquorix is a distro kernel replacement built using the best configuration and kernel sources for desktop, multimedia, and gaming workloads. Works better with amd hardware. <br>
 To get liquorix go [here](https://liquorix.net/)
 <br>
 Initial benchmarks on intel makes xanmod a winner whereas amd hardware generally go better with liquorix. Also if you are having heating issues go for liquorix it has better thermal response. I use xanmod normal release lts felt slow for me on both my pc's.
 <br> <br>
 At this point the boot is as fast as it can be.
 ![final-boottime](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/final-boottime.png)
 
 ## 6. Miscellaneous
 #### Get latest ad-hosts
 I use Steven Black adhosts for adblocking the whole system without any other extra app. This blocks basic ads but not youtube or spotify ads. <br>
 To get it go [here](https://github.com/StevenBlack/hosts).
 
 I am using Unified hosts + fakenews + gambling + porn
 
 ###### Q. How to?
 **Ans.** Steps - 
 1. Go here get a certain file open its link. 
 2. Save as text to Downloads.
 3. Rename hosts.txt to hosts.
 4. Open terminal type
 ```bash
 sudo nautilus
 ```
 5. Go to filesystem root > home > yourusername > Downloads > copy the hosts file > go back to filesystem root > etc - paste it here, it will ask to replace do so.
 Note - If it doesn't ask to replace you went wrong somewhere.
 
 #### Clean your System
 **Terminal**
 ```bash
 sudo apt autoremove
 sudo rm -rf ~/.cache/thumbnails/*
 sudo apt-get clean
 sudo apt-get autoclean
 ```
 **Tool**
 I personally use bleachbit because it is good at remove unnecessary junk from your computer.
 ```bash
 sudo apt install bleachbit 
 ```
 Open BleachBit(root) > Select every option except free disk > Clean
 ![bleachbit](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/bleachbit.png)
 
 #### Night-Light
 Night light mode is simply made to remove some lights which hinder our sleep cycle. As researchers have found that at night if certain set of colors interact with our eyes it doesn't let the eye rest making it "unsleepy" that's why we use night light.<br>
 To enable it go to Settings > Display > Night light <br>
 You can also select the timing which fits your sleep cycle.
 ![nightlight](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/nightlight.png)
 
 #### Customization
 ##### 1. We need to add gnome-shell-integration for Chrome.
 ![gsi](https://github.com/themagicalmammal/pop-os-tweaks/blob/master/Screenshots/gsi.png)
 ##### 2. Then go to [Gnome.org](https://extensions.gnome.org/) and get your extensions. <br>
 **Important Extensions**
 - [User themes](https://extensions.gnome.org/extension/19/user-themes/)
 - [Impatience](https://extensions.gnome.org/extension/277/impatience/)
 **Some More Cool Extensions**
 - [Frippery Move Clock](https://extensions.gnome.org/extension/2/move-clock/)
 - [Dynamic Panel Transparency](https://extensions.gnome.org/extension/1011/dynamic-panel-transparency/)
 - [Compiz windows effect](https://extensions.gnome.org/extension/3210/compiz-windows-effect/)
 ##### 3. Go to GNOME Tweaks > Windows Titlebar > Left
 **Note:-** This glitches the gnome-tweak tool for some reason don't worry about it and increase size of the window.
 ##### 4. After installing User themes extension we can get custom themes. If you need custom themes go to [Gnome-look](https://www.gnome-look.org/browse/cat/) <br>
 **I use this setup**
 Shell & Application - [WhiteSur](https://www.gnome-look.org/p/1403328/)
 
 ##### 5. Download the theme place it in .themes folder in Home and Download the icons place it in .icons folder in Home.
