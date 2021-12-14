# NFT ART GENERATOR📦!
![undertale_text_box](https://user-images.githubusercontent.com/88680048/146084737-a169b4e9-329c-4955-8340-19c7e1437bd8.gif)

this is an asset-based procedural art generator, which means that you will have to create by hand everything you want your NFT to contain.

    such as clothes, hats, accessories, etc.
this project is oriented to artists who want to start creating crypto art, so you must program **ABSOLUTELY NOTHING😎.**

# REQUIREMENTS📋

 - Desire to make crypto art
 - a computer
 - Basic knowledge of Visual Studio Code
`how to create folders, add files and how to open the terminal`

# STARTING🦆✨

First of all you need to have `Visual Studio Code` and `Node.js` installed.

**[Visual Studio Code](https://code.visualstudio.com)**
**[Node.js](https://nodejs.org)**

## Downloading the repository 📦

after that, download this repository with the **"Code"** button above or use the following command in the git terminal: 

    $ git clone https://github.com/PgrRjsc/nft-art-generator

## Installing the dependencies⚙📦🗳

for the package to work, you will need to **install the package dependencies** using the following commands in the terminal

    1.npm install
    2.npm install truffle -p
after the dependencies are installed, the package will be 100% functional.
## adding the assets🗃
first of all, you should import your assets to the Input folder and you should organize each type of asset in subfolders 
## modifying the config.js



When you enter you will see a code similar to this one:

    const race = {
      asset: {
        name: "asset",
        layers: [
        ],
      },
    };

to make everything work you need to add the following code inside the layers section:

      {
        name: "asset-name"
        elements: [
          {
            id: 0,//changes the id depending on the element number
            name: "asset-name",
            path: `${dir}/1-path of the file`,
            weight: 100, ///this variable dictates the rarity of the object on a scale of 1 to 100.
          },
          ///copy the id function depending on how many variants that layer has
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      }
**copy and paste this code depending on how many types of assets you want it to have.**
## Generating the images
Once you have done all of the above, to generate the images, you will need to use the following command in the terminal: 

    node index.js
##
and that's it, enjoy your new NFT collection.

# Author ✒

 - **of course me LMAO**

# License📑
This project is under the MIT License- see the [LICENSE.md](https://github.com/PgrRjsc/nft-art-generator/blob/main/LICENSE) file for details.

# Expressions of Gratitude 🎁

 - Tell others about this project 📢.
 - Invite a beer 🍺 or a coffee ☕ to someone from the team.
 - Say thank you publicly 🤓.
 - etc.
##
**⌨️ whit ❤️ by [Roberto Sanchez (Robeshiri)](https://github.com/PgrRjsc)**
