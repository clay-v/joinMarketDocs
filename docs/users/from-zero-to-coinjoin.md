# Fastest way to coinjoin

#### 1. Download [Ubuntu image](https://ubuntu.com/)
#### 2. Download and install [VirtualBox](https://www.virtualbox.org/wiki/Downloads) and follow along with the [Ministy of Nodes tutorial](https://www.youtube.com/watch?v=BIrL1lNsnJQ) using the parameters bellow
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

  Start the Virtual Machine and go through the Ubuntu installation. **Important**, for the user name do not use *joinmarket* as this will be used later.

#### 3. Install [Joininbox](https://github.com/openoms/joininbox#tested-environments)
  * Start as the `root` us(er or change with:
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
  * Once you are synced to the tip of the blockchain, close the terminal and log out from the current user and log in into the newly created `joinmarket` user with the password you set. From now on every time you want to use Joinmarket you'll log into the `joinmarket` user and open the terminal. You should see the Joininbox menu
  * We first need to create a wallet
    1. `START Quick start with JoinMarket`
    2. `GEN Generate a new wallet`

  Follow the process to create a new wallet and at the end press `ENTER` to go back to the Joininbox menu.
  * To start the Joinmarket graphical interface you can exit from the Joininbox menu and type:
  `python joinmarket-qt.py`
  ---
