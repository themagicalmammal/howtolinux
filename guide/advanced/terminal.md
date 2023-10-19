# Terminal

Enhance your terminal's visual appeal with these handy tweaks that will give it a sleek and stylish appearance.

## 1. Neofetch Mod

Neofetch displays information about your operating system, software and hardware. This comes with a default config which has a lot of information including CPU, GPU blah blah blah. Me being a minimalist only use some information out of this. My custom config of neofetch looks like this -

<p align='center'>
  <img src='https://i.imgur.com/5TFEWLs.png'>
</p>

If you want something similar you can get my [config](https://gist.github.com/themagicalmammal/1a0fa96f4131c77b5d1de4a846915ce8) using -

```sh
wget https://gist.githubusercontent.com/themagicalmammal/1a0fa96f4131c77b5d1de4a846915ce8/raw/85a6b500e3d0de26c68a8ea734ef69e2fd23a610/config.conf
mkdir ${XDG_CONFIG_HOME:-~/.config}/neofetch
mv config.conf ${XDG_CONFIG_HOME:-~/.config}/neofetch/config.conf
```

::: tip NOTE
If you are using any distro other than POP OS. You can open the config file (/.config/neofetch/config.conf) and find, "ascii_distro" change your distro icon according the comment on names listed above the text.
:::

## 2. Shell Config

I am currently using [Starship](https://starship.rs/) shell config with Dark Patrol from [Gogh](https://github.com/Mayccoll/Gogh).
**Note:** If you have troubles installing starship with shell script you can install it via [brew](https://brew.sh/).
To make your terminal look like mine, go [here](https://gist.github.com/themagicalmammal/dd4905509d6e3bd297eb92fd750dad98).

<p align='center'>
  <img src='https://i.imgur.com/wOLDJbQ.png'>
</p>

## 3. Bash Alias

A Bash Alias is a method of supplementing or overriding Bash commands with new ones. Get my .bash_alias file from [here](https://gist.github.com/themagicalmammal/94c5210122e75b63db230d364ffe73c0). Add this to your .bash.rc

```sh
if [ -f ~/.bash_alias ]; then . ~/.bash_alias fi
```
