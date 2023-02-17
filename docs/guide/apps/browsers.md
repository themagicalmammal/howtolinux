# Browser

Today Chrome is the most popular browser in the world. Also, I have been using Chrome since probably 2012. Though, recently I have moved on with Firefox based browsers.

::: tip
Chrome is not an open-source browser, Vivaldi & Opera are partly open-source, and also these browsers do not support VAAPI Firefox, Brave & TOR are open-source browsers. Meaning these are better alternatives if you are looking for privacy. But, TOR doesn't support VAAPI.

To learn more about **VAAPI** go [here](https://wiki.archlinux.org/index.php/Hardware_video_acceleration).
:::

## Chromium Browsers

## [Chromium](https://www.chromium.org/chromium-projects/)

Chromium is an open-source browser that serves as the basis for Google Chrome. It is known for its speed and compatibility with a wide range of web technologies. Chromium includes a range of features, such as built-in support for Google services, a customizable interface, and support for multiple tabs and windows.

::: code-group

```sh [Arch]
sudo pacman -S chromium
```

```sh [Debian]
sudo apt install chromium
```

```sh [Fedora]
sudo dnf install  install chromium
```

```sh [Ubuntu]
sudo apt install chromium-browser
```

```sh [Void]
sudo xbps-install -S chromium
```

:::

## [Chrome](https://www.google.com/chrome/)

Google Chrome is another popular browser available on Linux. It is known for its speed and compatibility with a wide range of web technologies. Chrome includes a range of features, such as built-in support for Google services, a customizable interface, and support for multiple tabs and windows.

::: code-group

```sh [Arch]
yay -S google-chrome
```

```sh [Debian]
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb
```

```sh [Fedora]
sudo dnf install fedora-workstation-repositories
sudo dnf config-manager --set-enabled google-chrome
sudo dnf install google-chrome-stable
```

```sh [Ubuntu]
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb
```

```sh [Void]
sudo xbps-install -S google-chrome
```

:::

## [Vivaldi](https://vivaldi.com/)

Vivaldi is a browser that is known for its speed, customization options, and privacy features. It includes a range of features, such as a customizable interface, built-in support for tab stacking and tab tiling, and support for multiple tabs and windows.

::: code-group

```sh [Arch]
yay -S vivaldi
```

```sh [Debian]
wget https://downloads.vivaldi.com/stable/vivaldi-stable_4.1.2369.21-1_amd64.deb
sudo dpkg -i vivaldi-stable_4.1.2369.21-1_amd64.deb
```

```sh [Fedora]
sudo dnf install vivaldi-stable
```

```sh [Ubuntu]
wget https://downloads.vivaldi.com/stable/vivaldi-stable_4.1.2369.21-1_amd64.deb
sudo dpkg -i vivaldi-stable_4.1.2369.21-1_amd64.deb
```

```sh [Void]
sudo xbps-install -S vivaldi
```

:::

## [Brave](https://brave.com/)

Brave is a browser that is known for its focus on privacy and security. It includes a range of features, such as built-in ad and tracker blockers, a customizable interface, and support for multiple tabs and windows.

::: code-group

```sh [Arch]
yay -S brave-bin
```

```sh [Debian]
sudo apt install apt-transport-https curl
sudo curl -s https://brave-browser-apt-release.s3.brave.com/brave-core.asc | sudo apt-key --keyring /etc/apt/trusted.gpg.d/brave-browser-release.gpg add -
echo "deb [arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main" | sudo tee /etc/apt/sources.list.d/brave-browser-release.list
sudo apt update && sudo apt install brave-browser
```

```sh [Fedora]
sudo dnf install dnf-plugins-core
sudo dnf config-manager --add-repo https://brave-browser-rpm-release.s3.brave.com/x86_64/
sudo rpm --import https://brave-browser-rpm-release.s3.brave.com/brave-core.asc
sudo dnf install brave-browser
```

```sh [Ubuntu]
sudo apt install apt-transport-https curl
sudo curl -s https://brave-browser-apt-release.s3.brave.com/brave-core.asc | sudo apt-key --keyring /etc/apt/trusted.gpg.d/brave-browser-release.gpg add -
echo "deb [arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main" | sudo tee /etc/apt/sources.list.d/brave-browser-release.list
sudo apt update && sudo apt install brave-browser
```

```sh [Void]
sudo xbps-install -S brave
```

:::

## [Opera](https://www.opera.com)

Opera is a browser that is known for its speed, security, and customization options. It includes a range of features, such as built-in support for VPN services, a customizable interface, and support for multiple tabs and windows.

::: code-group

```sh [Arch]
sudo pacman -S opera
```

```sh [Debian]
wget https://download3.operacdn.com/pub/opera/desktop/80.0.4170.54/linux/opera-stable_80.0.4170.54_amd64.deb
sudo dpkg -i opera-stable_80.0.4170.54_amd64.deb
```

```sh [Fedora]
sudo dnf install opera-stable
```

```sh [Ubuntu]
wget https://download3.operacdn.com/pub/opera/desktop/80.0.4170.54/linux/opera-stable_80.0.4170.54_amd64.deb
sudo dpkg -i opera-stable_80.0.4170.54_amd64.deb
```

```sh [Void]
sudo xbps-install -S opera
```

:::

## Non-Chromium Browsers

## [Firefox](https://www.mozilla.org/en-US/firefox/)

Firefox is one of the most popular browsers available on Linux. It is known for its speed, security, and privacy features. Firefox includes a range of features, such as a customizable interface, built-in spell check, and support for multiple tabs and windows.

::: code-group

```sh [Arch]
sudo pacman -S firefox
```

```sh [Debian]
sudo apt install firefox
```

```sh [Fedora]
sudo dnf install firefox
```

```sh [Ubuntu]
sudo apt install firefox
```

```sh [Void]
sudo xbps-install -S firefox
```

:::

## [TOR](https://www.torproject.org/)

Tor Browser is a version of Firefox that is configured to protect your privacy and anonymity on the internet. It uses the Tor network to route your internet traffic through a series of nodes, making it difficult for anyone to track your online activity. Tor Browser also includes built-in privacy features, such as NoScript and HTTPS Everywhere, to further enhance your online security.

::: code-group

```sh [Arch]
sudo pacman -S tor
```

```sh [Debian]
sudo apt install tor
```

```sh [Fedora]
sudo dnf install tor
```

```sh [Ubuntu]
sudo apt install torbrowser-launcher
```

```sh [Void]
sudo xbps-install -S tor
```

:::

## [Librewolf](https://librewolf.net)

LibreWolf is a fork of Firefox that is focused on privacy and security. It includes several built-in privacy features, such as ad and tracker blocking, fingerprinting protection, and first-party isolation. LibreWolf also removes some of the proprietary features found in Firefox, such as Pocket and telemetry.

::: code-group

```sh [Arch]
yay -S librewolf
```

```sh [Debian]
wget https://gitlab.com/librewolf-community/browser/linux/uploads/5aa5a5206ec208c6c34ebf1e2706d9b6/librewolf_94.0-1_amd64.deb
sudo dpkg -i librewolf_94.0-1_amd64.deb
```

```sh [Fedora]
sudo dnf copr enable atim/librewolf
sudo dnf install librewolf
```

```sh [Ubuntu]
wget https://gitlab.com/librewolf-community/browser/linux/uploads/5aa5a5206ec208c6c34ebf1e2706d9b6/librewolf_94.0-1_amd64.deb
sudo dpkg -i librewolf_94.0-1_amd64.deb
sudo apt install -f
```

:::

It's a bit complicated on Void you have to follow this:

::: details
You can install Librewolf on Void Linux using xbps-src, which is Void's package building tool.

1. First, install xbps-src if you haven't already done so:

```sh
sudo xbps-install -S xbps-src
```

2. Next, create a working directory for building the package:

```sh
mkdir -p ~/srcpkgs/librewolf && cd ~/srcpkgs/librewolf
```

3. Download the source package from the official Librewolf website:

```sh
wget https://gitlab.com/librewolf-community/browser/-/archive/94.0-1/librewolf-94.0-1.tar.bz2
```

3. Extract the source package:

```sh
tar xf librewolf-94.0-1.tar.bz2
cd librewolf-94.0-1
```

4. Build the package:

```sh
./configure --disable-debug
make -j$(nproc)
sudo make install
```

5. The package should now be installed on your system, and you can launch it from the command line by running librewolf. If you want to create a desktop shortcut, you can create a .desktop file in the ~/.local/share/applications/ directory with the following contents:

```sh
[Desktop Entry]
Name=Librewolf
Exec=librewolf
Icon=librewolf
Type=Application
Categories=Network;
```

Note that the version number and download link may change over time, so be sure to check the official Librewolf website for the latest release.
:::

## Extensions

Generally, these extensions exist for almost all browsers.

## Privacy Add-ons

- **uBlock Origin** [Chrome](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en) [Firefox](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) - uBlock Origin is not an "ad blocker", it's a wide-spectrum content blocker with CPU and memory efficiency as a primary feature.
- **HTTPS Everywhere** [Chrome](https://chrome.google.com/webstore/detail/https-everywhere/gcbommkclmclpchllfjekcdonpmejbdp?hl=en) [Firefox](https://addons.mozilla.org/en-US/firefox/addon/https-everywhere/) - HTTPS Everywhere is an extension created by EFF and the Tor Project which automatically switches thousands of sites from insecure "http" to secure "https".
- **ClearURLs** [Chrome](https://chrome.google.com/webstore/detail/clearurls/lckanjgmijmafbedllaakclkaicjfmnk?hl=en) [Firefox](https://addons.mozilla.org/en-US/firefox/addon/clearurls/) - Removes tracking elements from URLs.
- **Decentraleyes** [Chrome](https://chrome.google.com/webstore/detail/decentraleyes/ldpochfccmkkmhdbclfhpagapcfdljkj) [Firefox](https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/) - Protects you against tracking through "free", centralized, content delivery. It prevents a lot of requests from reaching networks like Google Hosted Libraries, and serves local files to keep sites from breaking. Complements regular content blockers.
- **Privacy Badger** [Chrome](https://chrome.google.com/webstore/detail/privacy-badger/pkehgijcmpdhfbdbbnkijodmdjhbjlgp) [Firefox](https://addons.mozilla.org/en-US/firefox/addon/privacy-badger17/) - Privacy Badger automatically learns to block invisible trackers.
- **User-Agent Switcher & Manager** [Chrome](https://chrome.google.com/webstore/detail/user-agent-switcher-and-m/bhchdcejhohfmigjafbampogmaanbfkg?hl=en) [Firefox](https://addons.mozilla.org/en-US/firefox/addon/user-agent-string-switcher/) - Spoof websites trying to gather information about your web navigation to deliver distinct content you may not want
- **CanvasBlocker** [Firefox](https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/) - Alters some JS APIs to prevent fingerprinting. (Chrome Unsupported)

::: danger

- **NoScript** [Chrome](https://chrome.google.com/webstore/detail/noscript/doojmbjmlfjjnbmnoijecmcbfeoakpjm?hl=en) [Firefox](https://addons.mozilla.org/en-US/firefox/addon/noscript/) - This might break some websites. Allow potentially malicious web content to run only from sites you trust. Protect yourself against XSS other web security exploits.
  :::

## Useful Tools

- **Absolute Enable** [Chrome](https://chrome.google.com/webstore/detail/absolute-enable-right-cli/jdocbkpgdakpekjlhemmfcncgdjeiika?hl=en) [Firefox](https://addons.mozilla.org/en-US/firefox/addon/absolute-enable-right-click/) - Force Enable Right Click & Copy on disabled websites.

## Productivity Tools

- **LanguageTool** [Chrome](https://chrome.google.com/webstore/detail/grammar-and-spell-checker/oldceeleldhonbafppcapldpdifcinji?hl=en) [Firefox](https://addons.mozilla.org/en-US/firefox/addon/languagetool/) - Check your texts for spelling and grammar problems everywhere on the web.
