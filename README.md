# Tweaks for Pop OS 20.10
 These are the set of tweaks I use on my pop os. I have 2 PC's one of them is 7th Gen i5 laptop with ssd and other one is a 3rd Gen 6 years old desktop. These tweaks are added on the basis of my experience over 5 months using pop on them both.
  
## 1. Installation
 While doing a install there are certain things you need to know if you want a faster boot. On my laptop I select a clean install and let the interface do its job. While on my desktop I select advanced partition, now there is a reason for that. If I select clean install it creates 2 extra partitions one is for recovery which I never use. And second one is swap now you might thing that why should i not keep swap. Let me explain over period of last 3 months I witnessed the fact that my swap is never used because on my desktop I do pretty basic stuff. While on my laptop I build kernels so swap gets used time to time. Also if you keep these 2 extra partitions every time you boot systemd mounts them which make the boot slow.
 
 So create 2 partitions
 - 512 mb for EFI
 - Remaining for EXT4 for system
 
##### Q. Should I use Brtfs or Ext4?
**Ans.** Depends, Now brtfs is starting to become a trend since Fedora adopted it and it now ships with Fedora 33. Also, I have started to use this on my laptop but not my desktop. Now there is a reason for that, initial benchmarks show that brtfs is slower than ext4 though brtfs has more advanced features than ext4. So In my opinion if you have a older pc go for ext4 but if you have a newer one you can go for brtfs.

- [Reference to Fedora Trend](https://www.phoronix.com/scan.php?page=news_item&px=Fedora-33-Released)
- [Reference to Benchmarks b/w File Systems](https://www.unixmen.com/review-ext4-vs-btrfs-vs-xfs/)
- [Reference for How to brtfs on Pop os](https://mutschler.eu/linux/install-guides/pop-os-btrfs/)

## 2. Post Installation
 There is some basic things you need to do after its installation.
 
 - Update your System
 Get latest updates via terminal or pop shop
 For Terminal use
 ```bash
 sudo apt update && sudo apt upgrade && flatpak update
 ```
 
 - Proprietary Drivers
 You can get proprietary drivers directly from Pop shop but you still get problems you can refer to a guide.
 
 [Guide for NVIDIA](https://askubuntu.com/questions/61396/how-do-i-install-the-nvidia-drivers) 
 [Guide for AMD](https://linuxconfig.org/how-to-install-the-latest-amd-radeon-drivers-on-ubuntu-18-04-bionic-beaver-linux#:~:text=In%20order%20to%20get%20the,the%20form%20of%20a%20tarball.)
 
 - Gnome Tweaks
 Install Gnome Tweaks
 ```bash
 sudo apt install gnome-tweaks
 ```
 Functionality which I use in gnome-tweaks are -
 
##### Minimise Button
 Minimise is a important button for gnome. I always wonder why they didn't add it. While I think you can live without it if you use Super key a lot but for me minimise button is very useful.
 <gnome-minimise>
##### Battery Percentage
 This option is also a pretty useful option but only for a laptop.
##### Optimising Font
 I use custom resolution on my pc so fonts seem small to me so it make it better I use 1.11x font with antialiasing to subpixel.
 <custom-font-size>
 
 - Add custom resolution
 If your display supports higher refresh rate go for it. Because higher refresh rates are smoother. My display is capable for 120hz.
 <set-of-refreshrates>
 <set-of-resolutions>
 My screen can support 1600x900 highest but that looks too big to me. So I add 1920x1080 for custom resolution
 
 To add custom resolution do this steps.
 1. Check xrandr
 You can know the name of your display here generally it is eDP-1 if is hybrid it can be eDP-1-1
 <xrandr>
 2. Find resolution which will fit
 My original maximum resolution is 1600 900 which is 16:9 aspect ratio. So if I choose a different aspect ratio some part of my display will be blacked out.
 
 So, I can go for 1920x1080 or 1536x864
 To find out which fits you best you can do tests by adding different resolution
 3. How to add?
 - cvt
 Type
 ```bash
 cvt 1920 1080 #Your custom resolution
 ```
 <cvt>
 - xrandr --newmode
 Copy line after modline
 ```bash
 xrandr --newmode "1920x1080_60.00"  173.00  1920 2048 2248 2576  1080 1083 1088 1120 -hsync +vsync
 ```
 <newmode>
 - xrandr --addmode
 Add that resolution name with display name
 ```bash
 xrandr --addmode eDP-1 "1920x1080_60.00"
 ```
 <addmode>
 
 Done, well not quite
 **Problem 1**: What about the other refresh rates?
 **Problem 2**: The resolution goes away after reboot and you have to add it again.
 
 ##### Solution for Problem 1:
 You have to experiment with cvt a bit to find which refresh rates should be.
 As my refresh rate is from 0-120 I did some expermientation and added some resolution.
 
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
 <profile>
 
 Finally it will look like
 <custom-resolution-final>
 
 ## 3. Preferred Apps
 Pop os ships with a basic set of apps which generally every person use but I dont use all of them and also I use some alternatives which I like better.
 
 - Chrome
 I prefer Chrome & Vivaldi, as Chrome is a most popular browser also I has been using Chrome since probably 2012 and Vivaldi is the fastest browser and is optimised for older hardware.
 
 To remove FireFox
 ```bash
 sudo apt remove --purge firefox*
 ```
 To install Chrome
 ```bash
 sudo apt install google-chrome-stable
 ```
 To install Vivaldi
 ```bash
 wget -qO- https://repo.vivaldi.com/archive/linux_signing_key.pub | sudo apt-key add -
 sudo add-apt-repository 'deb https://repo.vivaldi.com/archive/deb/ stable main' 
 sudo apt update && sudo apt install vivaldi-stable 
 ```
 
 - Email Client
 I dont use email client for me chrome is enough.
 ```bash
 sudo apt remove --purge geary* && sudo apt autoremove
 ```
 
 Alternatives 
 
 1. Evolution
 ```bash
 sudo apt install evolution
 ```
 2. Thunderbird
 ```bash
 sudo apt install thunderbird
 ```
 3. MailSpring
 Go [here](https://linuxconfig.org/how-to-install-mailspring-on-ubuntu-18-04-bionic-beaver-linux)
 
 - VLC Media player
 Best video player for any platform
 ```bash
 sudo apt install vlc
 ```
 
 Get rid of stock video player
 ```bash
 sudo apt remove --purge totem* && sudo apt autoremove
 ```
