# SENG-SCF-071222-PHASE-1

## Forking and cloning

---

To clone this repository into your local computer from this remote follow the steps below.

1. Fork the repository (This will make a copy of the repository for your user)

   ![fork example](/assets/images/fork.png)

1. Make sure you see your username as the owner

   ![remote example](/assets/images/remote.png)

1. Click on the code button and clone the project into your repository

   ![clone button example](/assets/images/cloneButton.png)

   > You can do a final check to see that the username is your own and not someone elses

1. copy the link provided by git

   ![copy link example](/assets/images/cloneButton.png)

1. open your terminal and navigate to the desired directory
1. run `git clone <LINK>` replace `<LINK>` with the link you copied from your machine

   ![terminal example](/assets/images/cloneTerminal.png)

# Extension | HotKeys | Requests

## Installing Live Server

---

1. Click on the extension button

   ![extension example](/assets/images/extensionButton.png)

1. Search for `live server`
1. install live server

   ![install live server example](/assets/images/installLiveServer.png)

1. Right click the file you want the browser to listen to

   ![right click example](/assets/images/openWLiveServer.png)

1. A popup will appear letting you know the server port that was open

   ![portPopUp](/assets/images/portPopUp.png)

1. Navigate to `localhost:<PORT>` replace `<PORT>` with the port that was opened on your machine

   ![browser example](/assets/images/browser.png)

## Github Commands
* git status
* git add . 
* git commit -m "present tense, active voice commit"
* git remote -v 
* git pull `remote-name` main
   * `remote-name` is what you named your other remote. Most of you have `mainRemote`
   * it should be: 
      * `git pull mainRemote main`
* If you run into errors or warnings try to force the
* git pull --ff `remote-name` main
   1. Accept both incoming changes on vscode
   1. Then add and commit changes

### What to do if git push is giving you a permission error?
[Follow this video so you don't lose your work](https://youtu.be/ALGkjl1bz_M)
1. `git remote -v` will list the remote repository you have set.
   1. If the remote that you have for your origin says learn-co-curriculum you cloned the wrong repo.
1. `git remote remove origin` will remove the origin with learn-co-curriculum
1. Navigate to canvas find the specific lab and clone it
1. Copy the ssh github link for your newly forked repository
1. `git remote add origin <PasteLinkHere>` This will add the link we pasted to your origin and allow you to push your changes on your repo.

## HOTKEYS:
**WINDOWS**
1. ctrl + c - copy
1. ctrl + v - paste
1. ctrl + s - save
1. ctrl + / - comment out
1. ctrl + d - highlight multiple of the same words
1. alt + down/up - move a line down or up respectively
1. alt + shift + down/up - copy a line down or up respectively

**MACOS**
1. cmd + c - copy
1. cmd + v - paste
1. cmd + s - save
1. cmd + / - comment out
1. cmd + d - highlight multiple of the same words
1. option + down/up - move a line down or up respectively
1. option + shift + down/up - copy a line down or up respectively

**MAC**

## EXTENSIONS:

1. [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

1. [code spell checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
