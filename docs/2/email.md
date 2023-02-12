# Email Client
Chrome is good enough for me. Pop OS ships with Geary which is a great email client for any user.

**If you want to remove Geary**
```bash
sudo apt-get autoremove --purge geary* -y
```

## [Evolution](https://help.gnome.org/users/evolution/stable/)
```bash
sudo apt install evolution -y
```
## [Thunderbird](https://www.thunderbird.net/en-US/)
```bash
sudo apt install thunderbird -y
```
## [MailSpring](https://getmailspring.com/)
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