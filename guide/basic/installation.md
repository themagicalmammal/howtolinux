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

- **General Method** - Creating a swap partition (Linux-swap), Now to do this you need to understand the importance of swap, if you have a low RAM device you need a huger swap like if you have 2GB ram you should get 4 to 6 GB of swap & optimise your swap ratio to a higher value. So, if you have a higher ram you need a lower swap. So, according to my numbers for a ram: swap should be as follows, lower:6, 4:6, 8:4, 16 & above:2. Also, you have to adjust the swappiness property (given below).

::: info
[BTRFS] - [Snapshots](https://fedoramagazine.org/btrfs-snapshots-backup-incremental/) don't work on Btrfs if we create a swap file in that partition. So Btrfs users should either stick with the general method or create a swap file in a different partition.
:::

- **Swap File** - It is a relatively new concept. In this, you create a swap file post-installation. You don't need to dedicate some fixed amount of memory to it as it does on Linux-swap that is why it is also space-efficient. And the best part is you can resize this or remove this whenever you want to.

::: warning
The "status" parameter in the dd command may not work on all versions of dd. If you encounter an error related to "status", you can simply omit that parameter.
:::

## Instructions to add Swap File

#### Btrfs

If a functional swap file is present on the subvolume, the btrfs filesystem does not permit the creation of snapshots. This indicates that putting a swap file on a different subvolume is highly recommended. Swap file can't be located on a btrfs raid of any sort.

::: details Add Swap to Btrfs
Let's assume that the current swap is already off, the `/` is on `/dev/sda1` and Ubuntu is installed with `/` on `@` subvolume and `/home` is on `@home` subvolume.

1. Mount `/dev/sda1` to `/mnt`.

```sh
sudo mount /dev/sda1 /mnt
```

If you run ls `/mnt`, you'll see `@`, `@home` and other subvolumes that may be there.

2. Create a new `@swap` subvolume.

```sh
sudo btrfs sub create /mnt/@swap
```

3. Unmount `/dev/sda1` from `/mnt`.

```sh
sudo umount /mnt
```

4. Create `/swap` directory where we plan to mount the `@swap` subvolume.

```sh
sudo mkdir /swap
```

5. Mount the `@swap` subvolume to `/swap`.

```sh
sudo mount -o subvol=@swap /dev/sda1 /swap
```

6. Create the swap file.

```sh
sudo touch /swap/swapfile
```

7. Set 600 permissions to the file.

```sh
sudo chmod 600 /swap/swapfile
```

8. Disable COW for this file.

```sh
sudo chattr +C /swap/swapfile
```

9. Set size of the swap file to 4G as an example.

```sh
sudo dd if=/dev/zero of=/swap/swapfile bs=1M count=4096
```

10. Format the swapfile.

```sh
sudo mkswap /swap/swapfile
```

11. Turn the swap file on

```sh
sudo swapon /swap/swapfile
```

12. Now the new swap should be working.

13. Open the `/etc/fstab` file

```sh
sudo nano /etc/fstab
```

##### Add this line

```sh
// Rest of your fstab
UUID=XXXXXXXXXXXXXXX /swap btrfs subvol=@swap 0 0 // [!code focus]
/swap/swapfile none swap sw 0 0 // [!code focus]
```

:::

#### Ext4

Ext4 is fits perfectly with swap file you can create a swap file using this instructions.

::: details Add Swap to Ext4

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

4. Open the '/etc/fstab' file

```sh
sudo nano /etc/fstab
```

##### Add this line

```sh
// Rest of your fstab
/swapfile none swap defaults 0 0  // [!code focus]
```

5. Reboot
   :::

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
sudo apt install btrfs-progs
```

```sh [Fedora]
sudo dnf install btrfs-progs
```

```sh [Ubuntu]
sudo apt install btrfs-progs
```

```sh [Void]
sudo xbps-install -S btrfs-progs
```

:::

- [Reference on Rising of Btrfs](https://www.linuxjournal.com/content/btrfs-centos-living-loopback)
- [Reference on Btrfs on HDD](https://www.phoronix.com/scan.php?page=article&item=linux54-hdd-raid&num=1)
- [Reference on XFS on SSD](https://www.phoronix.com/scan.php?page=article&item=linux-58-filesystems&num=4)

## Q. What about ZFS?

**Ans.** ZFS has been added as an experimental new filesystem. If you want to learn more about referring to [this](https://itsfoss.com/zfs-ubuntu/) article. If it meets your requirements you can try it. Lately, it is becoming a trend. As, it is very stable and used by leading companies such as Oracle. You can check out [why people are switching to ZFS](https://rudd-o.com/linux-and-free-software/ways-in-which-zfs-is-better-than-btrfs).
