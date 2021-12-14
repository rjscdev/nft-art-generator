/*made with love ♥*/
const fs = require("fs");
const path = require("path");
const width = 1000; //image width
const height = 1000; //image height
const dir = __dirname;
const description = "the description of the collection"; //the description of the collection
const baseImageUri = "https//:www.exampleweb.com"; //the url of your web page
const endEditionAt = 10; //number up to which it will stop generating images
const editionSize = 10; //how many images do you want
const raceWeights = [
  {
    value: "yourCollectionName",
    from: 1,
    to: editionSize,
  },
];

const race = {
  asset: {
    //change the name to your collection name
    name: "asset", //change the name to your collection name
    layers: [
      /*
        how to add more layers and assets:
      {
        name: "asset-name"
        elements: [
          {
            id: 0,
            name: "asset-name",
            path: `${dir}/1-path of the file`,
            weight: 100, ///this variable dictates the rarity of the object on a scale of 1 to 100.
          },
          ///copy the id function depending on how many variants that layer has
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      }
        */
       /* this are testing assets*/
      {
        name: "Background",
        elements: [
          {
            id: 0,
            name: "Light blue",
            path: `${dir}/backgrounds/LightBlue.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Orange",
            path: `${dir}/backgrounds/Orange.png`,
            weight: 80,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Amogus",
        elements: [
          {
            id: 0,
            name: "Sus",
            path: `${dir}/amogus/sus.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
    ],
  },
};
/*don't touch this section*/
module.exports = {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  GenerateFrom,
  endEditionAt,
  race,
  raceWeights,
};
