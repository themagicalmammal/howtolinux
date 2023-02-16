# Browser

Today Chrome is the most popular browser in the world. Also, I have been using Chrome since probably 2012. Though, recently I have moved on with Firefox based browsers.

::: tip
Chrome is not an open-source browser, Vivaldi & Opera are partly open-source, and also these browsers do not support VAAPI Firefox, Brave & TOR are open-source browsers. Meaning these are better alternatives if you are looking for privacy. But, TOR doesn't support VAAPI.

To learn more about **VAAPI** go [here](https://wiki.archlinux.org/index.php/Hardware_video_acceleration).
:::

# Chromium Based Browsers

## [Chromium](https://www.chromium.org/chromium-projects/)

Chromium is an open-source browser that serves as the basis for Google Chrome. It is known for its speed and compatibility with a wide range of web technologies. Chromium includes a range of features, such as built-in support for Google services, a customizable interface, and support for multiple tabs and windows.

```sh
sudo apt install -y chromium-browser
```

## [Chrome](https://www.google.com/chrome/)

Google Chrome is another popular browser available on Linux. It is known for its speed and compatibility with a wide range of web technologies. Chrome includes a range of features, such as built-in support for Google services, a customizable interface, and support for multiple tabs and windows.

```sh
sudo apt install google-chrome-stable
```

## [Vivaldi](https://vivaldi.com/)

Vivaldi is a browser that is known for its speed, customization options, and privacy features. It includes a range of features, such as a customizable interface, built-in support for tab stacking and tab tiling, and support for multiple tabs and windows.

```sh
wget -qO- https://repo.vivaldi.com/archive/linux_signing_key.pub | sudo apt-key add -
sudo add-apt-repository 'deb https://repo.vivaldi.com/archive/deb/ stable main'
sudo apt update && sudo apt install vivaldi-stable -y
```

## [Brave](https://brave.com/)

Brave is a browser that is known for its focus on privacy and security. It includes a range of features, such as built-in ad and tracker blockers, a customizable interface, and support for multiple tabs and windows.

```sh
sudo apt install apt-transport-https -y
curl -s https://brave-browser-apt-release.s3.brave.com/brave-core.asc | sudo apt-key --keyring /etc/apt/trusted.gpg.d/brave-browser-release.gpg add -
echo "deb [arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main" | sudo tee /etc/apt/sources.list.d/brave-browser-release.list
sudo apt update && sudo apt install brave-browser
```

## [Opera](https://www.opera.com)

Opera is a browser that is known for its speed, security, and customization options. It includes a range of features, such as built-in support for VPN services, a customizable interface, and support for multiple tabs and windows.

```sh
sudo add-apt-repository 'deb https://deb.opera.com/opera-stable/ stable non-free'
wget -qO - https://deb.opera.com/archive.key | sudo apt-key add -
sudo apt update && sudo apt install opera-stable -y
```

# Non-Chromium Based

## [Firefox](https://www.mozilla.org/en-US/firefox/)

Firefox is one of the most popular browsers available on Linux. It is known for its speed, security, and privacy features. Firefox includes a range of features, such as a customizable interface, built-in spell check, and support for multiple tabs and windows.

## [TOR](https://www.torproject.org/)

Tor Browser is a version of Firefox that is configured to protect your privacy and anonymity on the internet. It uses the Tor network to route your internet traffic through a series of nodes, making it difficult for anyone to track your online activity. Tor Browser also includes built-in privacy features, such as NoScript and HTTPS Everywhere, to further enhance your online security.

```sh
sudo apt install torbrowser-launcher -y
```

## [Librewolf](https://librewolf.net)

LibreWolf is a fork of Firefox that is focused on privacy and security. It includes several built-in privacy features, such as ad and tracker blocking, fingerprinting protection, and first-party isolation. LibreWolf also removes some of the proprietary features found in Firefox, such as Pocket and telemetry.

```sh
sudo apt install torbrowser-launcher -y
```

### Extensions

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

## Desktop specific

- **GNOME Shell integration** [Chrome](https://chrome.google.com/webstore/detail/gnome-shell-integration/gphhapmejobijbbhgpjhcjognlahblep?hl=en) [Firefox](https://addons.mozilla.org/en-US/firefox/addon/gnome-shell-integration/) - This extension provides integration with GNOME Shell and the corresponding extensions' repository, make it easy to add extensions via your browser.
