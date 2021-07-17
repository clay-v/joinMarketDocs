## Quickstart
### RECOMMENDED INSTALLATION METHOD (Linux and macOS only)

Once you've downloaded this repo, either as a tar/zip file, and extracted it, or via `git clone`:

Make sure to validate the signature on the tar/zip file provided on the [release page](https://github.com/Joinmarket-Org/joinmarket-clientserver/releases),
or check the signature in git if you install that way using `git log --show-signature`.

**macOS users**: Make sure that you have Homebrew and Apple's Command Line Tools installed.

    ./install.sh
    (follow instructions on screen; provide sudo password when prompted)
    source jmvenv/bin/activate
    cd scripts

(You can add `--develop` as an extra flag to `install.sh` to make the Joinmarket code editable in-place.)

You can optionally install a Qt GUI application, you will be prompted to choose this during installation.

Do note, Python 2 is no longer supported as it has reached its end of life.


## Installation on Linux

**WARNING: This manual process is more difficult**; the `install.sh` script is recommended, please use it unless you're sure you need to do this.

To install everything (client and server), install these packages:

    sudo apt-get install python3-dev python3-pip git build-essential automake pkg-config libtool libffi-dev libssl-dev libgmp-dev

(+ `libsodium-dev` if you can find it, else build after)

(to build `libsodium` after):

    git clone git://github.com/jedisct1/libsodium.git
    cd libsodium
    git checkout tags/1.0.18
    ./autogen.sh
    ./configure
    make check
    sudo make install
    cd ..

Then install this repo:

    git clone https://github.com/Joinmarket-Org/joinmarket-clientserver
    cd joinmarket-clientserver

Then:

    sudo pip install virtualenv
    virtualenv --python=python3 jmvenv
    source jmvenv/bin/activate

**At this point you should see `(jmvenv)` at the beginning of your command prompt.**

Then build and install a local copy of libsecp256k1 for python-bitcointx:

    mkdir -p deps
    cd deps
    git clone git://github.com/bitcoin-core/secp256k1
    cd secp256k1
    git checkout 0d9540b13ffcd7cd44cc361b8744b93d88aa76ba
    make clean
    ./autogen.sh
    ./configure --prefix JM_ROOT --enable-module-recovery --disable-jni --enable-experimental --enable-module-ecdh --enable-benchmark=no
    make
    make check
    make install
    cd ../..

> *NOTE*: JM_ROOT must be replaced with the venv directory you've just created, so it will be `~/joinmarket-clientserver/jmvenv` if you installed to your home directory.


### Installing packages to run everything in-one:

> *NOTE*: It is very important to have activated virtualenv before running this step. Otherwise, `pip install` will fail, you may be tempted to re-run it with `sudo pip install` which will cause problems in the future.

    pip install -r requirements/base.txt

If you have installed this "full" version of the client, you can use it with the command line scripts as explained in the [usage guide](USAGE.md).

## Installation on macOS

**WARNING: This manual process is more difficult**; the `install.sh` script is recommended, please use it unless you're sure you need to do this.

1) Install Apple Command Line Tools
    ```
    xcode-select --install
    ```
2) Install Homebrew
    ```
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```
3) Install automake, libtool, and libsodium
    ```
    brew install automake libtool libsodium
    ```
4) Build secp256k1
    ```
    git clone https://github.com/bitcoin-core/secp256k1
    cd secp256k1
    git checkout 0d9540b13ffcd7cd44cc361b8744b93d88aa76ba
    ./autogen.sh
    ./configure --enable-module-recovery --disable-jni --enable-experimental --enable-module-ecdh --enable-benchmark=no
    make
    make check
    sudo make install
    cd ..
    rm -rf secp256k1
    ```
5) Clone the joinmarket-clientserver repo.
    ```
    git clone https://github.com/Joinmarket-Org/joinmarket-clientserver
    cd joinmarket-clientserver
    ```
6) Create virtualenv "jmvenv"
    ```sh
    sudo pip3 install virtualenv
    virtualenv jmvenv
    source jmvenv/bin/activate
    ```
    At this point you should see `(jmvenv)` at the beginning of your command prompt.

7) Setup joinmarket-qt
    ```
    pip install -r requirements/gui.txt
    ```
8) Start joinmarket-qt
    ```
    cd scripts
    python joinmarket-qt.py
    ```

## Installation on Windows

Before starting, note you need either (a) Bitcoin Core installed on Windows or (b) use a remote connection to Bitcoin Core specified in the `joinmarket.cfg` (explained at the end of this section).

If (a), then note the following two points:

#### Installing Bitcoin Core

If you haven't done so yet, install Bitcoin Core, version 0.18 or newer, as described [here](https://bitcoin.org/en/full-node#windows-10). After starting it for the first time, it will start the Initial Block Download. JoinMarket cannot be used until this is finished. More information on that can be found [here](https://bitcoin.org/en/full-node#initial-block-downloadibd).

#### Configuring Bitcoin Core

Bitcoin Core needs to be configured to allow JoinMarket to connect to it. From the `Settings` menu choose `Options` and click `Open Configuration File`. Add `server=1`, save and close the file. After that restart Bitcoin Core.

There are currently two choices for installing on Windows; one, directly installing on Windows, requiring the manual addition of a libsodium dependency, or, two, using Ubuntu via the WSL mechanism (which may require additional setup to make the Qt GUI work).

1) [Installation directly on Windows](#installation-directly-on-windows)

2) [Installation using WSL](#installation-using-wsl)

### Installation directly on Windows

As per the note above, binaries for JoinmarketQt are being offered with releases as of 0.7.0+.
This section is for doing a full command line install, on Windows.

First, if you have not done so, install [Python](https://www.python.org/downloads/windows/) - specifically, the latest Python 3 version. Make sure to choose to install `pip` during the installation (it should be included automatically, but you can choose the custom installation option to choose it).

Be sure to choose the option that allows `python` to be in your PATH variable (you are prompted to do this at the end of the install).

Install Joinmarket, choosing the zip file of the latest [release](https://github.com/JoinMarket-Org/joinmarket-clientserver/releases). You should check the .asc signature file on the zip that you download.

Unzip the `joinmarket-clientserver-x.x.x` (where `x.x.x` is the release number) in any appropriate location.

Using the command prompt in Administrator mode, go to that directory and run the commands:

`pip install -r requirements\base.txt`
`pip install -r requirements\gui.txt`

(the latter is needed for Joinmarket-Qt).

The final step is to manually add the libsodium dependency, as mentioned. Do the following:

Download the file at `https://www.nuget.org/api/v2/package/libsodium` and rename it to `.zip` so that you can unzip it. Once unzipped, find the `libsodium.dll` file at `runtimes\win-x64\native\libsodium.dll` and copy it into `C:\Windows\System` (note this will require Admin rights).

At this point Joinmarket should be ready to run both in command line and Joinmarket-Qt form (using `python joinmarket-qt.py` from the `\scripts` subdirectory of `joinmarket-clientserver`).

From here, go to `Configuring Joinmarket` below.

### Installation using WSL

> note: The following method requires Windows 10 version 1607 or later.

#### Enable Windows Subsystem for Linux
> note: a more detailed guide can be found [here](https://github.com/michaeltreat/Windows-Subsystem-For-Linux-Setup-Guide/blob/master/readmes/02_WSL_Ubuntu_setup.md).

 1. Open the `Control Panel` and navigate to `Programs`, `Programs and Features`, `Turn Windows features on or off`.
 2. Select `Windows Subsystem for Linux` and click `OK`.
 3. When asked, choose to restart.

#### Install Ubuntu from the Microsoft Store
1. Open the `Microsoft Store`, search for `Ubuntu 18.04 LTS` and click `Get`.
> note: other distributions are available, but this is the only one tested
2. When finished downloading click `Launch`.
3. A window should pop up, telling your `Installing, this may take a few minutes...`
4. After installation is done, you'll be asked to provide a `UNIX username` and `UNIX password`. This will be the administrator account for the Ubuntu installation.
5. Finish the installation with updating the software within Ubuntu by typing the command `sudo apt update && sudo apt upgrade -y`. When asked, type the password provided earlier.

#### Installing JoinMarket
At this point you have an (almost) fully featured Linux installation on Windows and you can install JoinMarket using the instructions in the [Installation on Linux](#installation-on-linux) section of this file.
