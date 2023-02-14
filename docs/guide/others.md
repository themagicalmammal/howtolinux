# Other Apps
## uGet
uGet is a lightweight yet powerful open Source download manager for Linux. Basic features include a download queue, a clipboard monitor, and the ability to process downloads in a batch format.
```bash
sudo apt install aria2 uget -y
```
## Wine (Windows Apps)
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

## Lutris
Lutris is an Open Source gaming platform for Linux. It installs and launches games, so you can start playing without the hassle of setting up your games. 
```bash
sudo add-apt-repository ppa:lutris-team/lutris
sudo apt update
sudo apt install lutris
```

## Synaptic Package manager
Synaptic serves as a graphical front-end to APT which makes the process of software management easier.
```bash
sudo apt install synaptic -y
```
## Nautilus (admin mode)
Adds right-click property *Open as Administrator*
```bash
sudo apt install nautilus-admin -y && nautilus -q
```
## Timeshift
Timeshift is a system restore tool for Linux. Creates a file system snapshot using rsync+hard links or BTRFS snapshots.
```bash
sudo apt install timeshift -y
```
## Resource Monitor
### i. Htop
A utility to see which process is taking how much CPU or memory.
```bash
sudo apt install htop -y
```
![htop](https://i.imgur.com/wXpdDWc.png)
### ii. Bashtop
An advanced utility that shows usage and stats for processor, memory, disks, network, and processes.
**Repo already exists in Pop 20.10**
```bash
sudo add-apt-repository ppa:bashtop-monitor/bashtop && sudo apt update
sudo apt install bashtop -y
```
![bashtop](https://i.imgur.com/Ao28LjH.png)
## Firewall
### i. Gufw
GUFW is a graphical utility for managing Uncomplicated Firewall (UFW). This is pretty easy to use application with a bunch of settings which you can set according to your preference.
```bash
sudo apt install gufw
```
### ii. Opensnitch
Helps you to review which services connect to the internet. Also, stopping some services might help save some internet, and give you more control over it. To get a compiled version of Opensnitch goes [here](https://github.com/evilsocket/opensnitch).