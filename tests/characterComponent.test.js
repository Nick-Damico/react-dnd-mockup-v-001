const homepageUrl = 'http://localhost:3000/';
module.exports = {
  "User goes to D&D character index page": (client) => {
    client.url(client.launchUrl)

    client.assert.urlEquals(homepageUrl);
    client.assert.elementPresent('h1.App-title');
    client.assert.elementPresent('main.character__container');
    client.assert.elementPresent('div.hero__card');
  },

  "Close": (client) => client.end()
}
