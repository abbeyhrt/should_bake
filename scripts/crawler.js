'use strict';

const fs = require('fs');
const path = require('path');
const request = require('request-promise');
const cheerio = require('cheerio');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const RECIPES_PATH = path.resolve(__dirname, '../src/data/recipes.json');

const websites = {
  handleTheHeat: $ => ({
    title: $('.recipe-title > h1').text(),
    summary: $('.key_info .summary > p').text(),
  }),
};

// Website, how to get ___

// Given a website link
// Get the HTML of the page
// Load it into Cheerio so we can select different recipe parts from the website
// Save it to disk

// Multiple websites, multiple requests with their own way of extracting the recipe information

const websitesToVisit = [
  {
    url: 'https://www.handletheheat.com/chewy-brownies/',
    website: 'handleTheHeat',
  },
  {
    url: 'https://www.handletheheat.com/caramel-pecan-blondies/',
    website: 'handleTheHeat',
  },
];

async function visit({ url, website }) {
  const html = await request(url);
  const $ = cheerio.load(html);
  const getRecipe = websites[website];
  return getRecipe($);
}

Promise.all(websitesToVisit.map(visit))
  .then(recipes => {
    // When we're all done, write the recipes to disk.
    return writeFileAsync(RECIPES_PATH, JSON.stringify(recipes, null, 2));
  })
  .then(() => {
    console.log('✅  all done');
  })
  .catch(error => {
    console.log(error);
  });
