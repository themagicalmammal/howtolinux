# Email Client

Email clients are crucial components of any distribution. Thunderbird or Evolution are typically shipped by distributions.

## [Thunderbird](https://www.thunderbird.net/en-US/)

```bash
sudo apt install thunderbird -y
```

## [Evolution](https://help.gnome.org/users/evolution/stable/)

```bash
sudo apt install evolution -y
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

## [Geary](https://wiki.gnome.org/Apps/Geary)

```bash
sudo add-apt-repository ppa:geary-team/releases
sudo apt update
sudo apt install geary
```
