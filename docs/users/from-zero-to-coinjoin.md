# Fastest way to coinjoin

#### 1. Download [Ubuntu image](https://ubuntu.com/)
#### 2. Download and install [VirtualBox](https://www.virtualbox.org/wiki/Downloads) and follow along with the [Ministry of Nodes tutorial](https://www.youtube.com/watch?v=BIrL1lNsnJQ) using the parameters bellow
  #### OS
  * type - linux
  * version - ubuntu (64-bit)

  #### Ram
  * Memory size - 4096 MB

  #### Storage
  * Create a virtual hard disk now
  * VDI (VirtualBox Disk image)
  * Dynamically allocated
  * File location and size - 30 GB

  #### Settings
  * General > Advanced > Shared Clipboard - Bidirectional
  * System > Processor > Processors(s) - 4
  * Storage - ubuntu-20.04.2.0-desktop-amd64.iso
  * Network > Adapter 1 > Attached to: Bridged Adapter

  Start the Virtual Machine and go through the Ubuntu installation. **Important**, for the Ubuntu username use *joinmarket* as this will be useful later.

#### 3. Install [Joininbox](https://github.com/openoms/joininbox#tested-environments)
  * Start as the `root` user or change with:
  `sudo su`

  * Run the [build script](https://github.com/openoms/joininbox/blob/master/build_joininbox.sh):
  ```bash
  # download
  wget https://raw.githubusercontent.com/openoms/joininbox/master/build_joininbox.sh
  # inspect the script
  cat build_joininbox.sh
  # run
  sudo bash build_joininbox.sh
  ```
  * Start the JoininBox menu by changing to the `joinmarket` user in the terminal:
  `sudo su joinmarket` and set a new password.
  * On the `Startup option` choose `PRUNED Start a pruned node from prunednode.today`
  * Once you are synced to the tip of the blockchain you can press `Ctrl+c` to get out of the logs. Next you should exit the terminal by typing `exit` and pressing enter till the terminal is closed.
  * Reaopen the terminal and first we need to create a wallet
    1. `START Quick start with JoinMarket`
    2. `GEN Generate a new wallet`

  Follow the process to create a new wallet and at the end press `ENTER` to go back to the Joininbox menu.
  * To start the Joinmarket graphical interface you can exit from the Joininbox menu and type:
  `python joinmarket-qt.py`. Being the first time you start Joinmarket you'll be prompted to restart it. Do so.
  ---
