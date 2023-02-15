# Installation

::: tip
Go through this, because this can be a very helpful step. I am currently using btrfs & find it better. Also, don't remove the Recovery partition to be on the safe side, it helps out a lot.
:::

## Partitions to Create

- 500 MB for Efi boot (Enough even for multi-boot)
- Recovery (Very Useful, for specific distributions only)
- Swap partition (First, read [What about Swap?](#what-about-swap))
- (Before selecting read about Btrfs & Zfs) Remaining for Ext4/Btrfs/Zfs System

## Q. What about Swap?

**If you are installing with a Ubiquity installer it will automatically create a Swap File any time Ext4 is used for root.**
There are two ways of getting swap (You can choose which is better)

- General Method - Creating a swap partition (Linux-swap), Now to do this you need to understand the importance of swap, if you have a low RAM device you need a huger swap like if you have 2GB ram you should get 4 to 6 GB of swap & optimise your swap ratio to a higher value. So, if you have a higher ram you need a lower swap. So, according to my numbers for a ram: swap should be as follows, 2 & lower:6, 4:6, 8:4, 16 & above:2. Also, you have to adjust the swappiness property (given below).

**[BTRFS] - [Snapshots](https://fedoramagazine.org/btrfs-snapshots-backup-incremental/) don't work on Btrfs if we create a swap file in that partition. So Btrfs users should either stick with the general method or create a swap file in a different partition.**

- Swap File - It is a relatively new concept. In this, you create a swap file post-installation. You don't need to dedicate some fixed amount of memory to it as it does on Linux-swap that is why it is also space-efficient. And the best part is you can resize this or remove this whenever you want to. 

::: warning
The "status" parameter in the dd command may not work on all versions of dd. If you encounter an error related to "status", you can simply omit that parameter.
:::

**Post Installation Steps:**

**Btrfs [Snapshots won't work]**
Go [here](https://askubuntu.com/questions/1206157/can-i-have-a-swapfile-on-btrfs#:~:text=It%20is%20possible%20to%20use,file%20on%20a%20separate%20subvolume.)

**Ext4**

1. Instruction set for the Swap file

```sh
sudo dd if=/dev/zero of=/swapfile bs=1G count=4 status=progress
```

Count 4 means 4 sets of 1 GB, i.e. 4GB.

2. Change permissions and Make swap

```sh
sudo chmod 600 /swapfile && sudo mkswap /swapfile
```

3. Turn the Swap on

```sh
sudo swapon /swapfile
```

4. Open the fstab file

```sh
sudo nano /etc/fstab
```

5. Add this line

```sh
/swapfile none swap defaults 0 0
```

6. Reboot

## Q. What about ZRAM?

First, you should know what ZRAM is. ZRAM creates a block device in RAM, where pages would otherwise be written to swap before it is compressed, then stored. Allowing for a much faster I/O and, the data compression provides a lot of memory savings. The downside of ZRAM is the usage of CPU for compression but this is usually balanced by the gains from avoiding swap and with overall memory savings of compression.  
This is very useful on my PC with 4GB ram and a 3.4GHz CPU.

## Q. How to enable ZRAM?

1. Install zram-config

::: code-group
```sh [Arch]
sudo pacman -S zram-config
```
```sh [Debian]
sudo apt install zram-config -y
```
```sh [Fedora]
sudo dnf install zram-config -y
```
```sh [Ubuntu]
sudo apt install zram-config -y
```
```sh [Void]
sudo xbps-install -S zram-config
```
:::

2. To check

```sh
cat /proc/swaps
```

**Should look like this**

![zram](https://i.imgur.com/gYJfMz3.png)

3. If it doesn't show up, try **rebooting**.

## Q. Should I Encrypt?

Encryption adds a layer to the disk, so there's a performance penalty. In day to day operations, you wouldn't notice it though, but there's an argument that older hardware might suffer if they're already in the limit. But it's usually a very useful feature to have, you never know what will happen to your hardware, if it's lost or stolen, you don't want to think about people having access to your stuff as well.

## Q. Should I use Btrfs or Ext4 or XFS?

**Ans.** It depends, As Btrfs is in its infancy state also Ext4 is a more popular option. But, Btrfs is starting to become a trend since Fedora adopted it & it ships with Fedora 33. Also, I am using this on both of my systems. If you are on HDD then go for Btrfs because it is surprisingly fast on it but, if you are on a SSD you can go for XFS. But, remember if you go for XFS it is not resizable unless you are on a lvm.

To fix installation bugs

::: code-group
```sh [Arch]
sudo pacman -S btrfs-progs
```
```sh [Debian]
sudo apt install btrfs-progs -y
```
```sh [Fedora]
sudo dnf install btrfs-progs -y
```
```sh [Ubuntu]
sudo apt install btrfs-progs -y
```
```sh [Void]
sudo xbps-install -S btrfs-progs
```
:::
- [Reference on Rising of Btrfs](https://www.linuxjournal.com/content/btrfs-centos-living-loopback)
- [Reference on Btrfs on HDD](https://www.phoronix.com/scan.php?page=article&item=linux54-hdd-raid&num=1)
- [Reference on XFS on SSD](https://www.phoronix.com/scan.php?page=article&item=linux-58-filesystems&num=4)

## Q. What about ZFS?

**Ans.** ZFS has been added as an experimental new filesystem on 19.10. If you want to learn more about referring to [this](https://itsfoss.com/zfs-ubuntu/) article. If it meets your requirements you can try it. Lately, it is becoming a trend. As, it is very stable and used by leading companies such as Oracle. You can check out [why people are switching to ZFS](https://rudd-o.com/linux-and-free-software/ways-in-which-zfs-is-better-than-btrfs).

If you want to learn how to, go [here](https://linuxconfig.org/install-ubuntu-20-04-with-zfs).
