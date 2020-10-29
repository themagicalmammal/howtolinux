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
 
 - Gnome Tweaks
 Install Gnome Tweaks
 ```bash
 sudo apt install gnome-tweaks
 ```
 Functionality which I use in gnome-tweaks are -
 
##### Minimise Button
 Minimise is a important button for gnome. I always wonder why they didn't add it. While I think you can live without it if you use Super key a lot but for me minimise button is very useful.
 <picture-1>
##### Battery Percentage
 This option is also a pretty useful option but only for a laptop.
##### Optimising Font
 I use custom resolution on my pc so fonts seem small to me so it make it better I use 1.1x font with antialiasing to subpixel.
 
