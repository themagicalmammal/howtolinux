# Tweaks for Pop OS 20.10
 These are the set of tweaks I use on my pop os. I have 2 PC's one of them is 7th Gen i5 laptop with ssd and other one is a 3rd Gen 6 years old desktop. These tweaks are added on the basis of my experience over 5 months using pop on them both.
  
1. Installation
 While doing a install there are certain things you need to know if you want a faster boot. On my laptop I select a clean install and let the interface do its job. While on my desktop I select advanced partition, now there is a reason for that. If I select clean install it creates 2 extra partitions one is for recovery which I never use. And second one is swap now you might thing that why should i not keep swap. Let me explain over period of last 3 months I witnessed the fact that my swap is never used because on my desktop I do pretty basic stuff. While on my laptop I build kernels so swap gets used time to time. Also if you keep these 2 extra partitions every time you boot systemd mounts them which make the boot slow.
 
 So create 2 partitions
 - 512 mb for EFI
 - Remaining for EXT4 for system
