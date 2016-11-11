import _ from 'lodash';
import AlchemyLanguageV1 from 'watson-developer-cloud/alchemy-language/v1';
import blacklisted from './blacklisted';
const alchemy = new AlchemyLanguageV1({
  // api_key: '0d2bb1f1c6673a4e7156a3e33857f4f634a6f8b4',
  api_key: 'a9784f931077221398a75d527bf2168d80c91fb8',
});

/**
 * @returns
 */
export default class {

  /**
   * @returns
   */
  getMedia(datum) {
    if (_.has(datum, 'entities.media')) {
      return datum.entities.media.map(_media => {
        return {
          id: _media.id,
          media_url: _media.media_url,
          media_url_https: _media.media_url_https,
          url: _media.url,
          type: _media.type,
        };
      });
    }
    return null;
  }

  /**
   * @param {string} str
   */
  getSentiments(str) {
    return new Promise((fulfill, reject) => {
      alchemy.sentiment({ text: str }, (err, response) => {
        if (!err) fulfill(response);
        reject(err);
      });
    });
  }

  /**
   * @param {string} str
   */
  getKeywords(str) {
    return new Promise((fulfill, reject) => {
      alchemy.keywords({ text: str }, (err, response) => {
        if (!err) fulfill(response);
        reject(err);
      });
    });
  }

  getEmotions(str) {
    return new Promise((fulfill, reject) => {
      alchemy.emotion({ text: str }, (err, response) => {
        if (!err) fulfill(response);
        reject(err);
      });
    });
  }

  getTopWords(_str, limit) {
    const obj = {};
    const results = {};
    this.filterBlackList(this.filterLinks(_str)).split(' ').map(word => {
      return !obj.hasOwnProperty(word)
        ? obj[word] = 1
        : obj[word]++;
    });

    return this.sortObj(obj).map((keyVal, i) => { // eslint-disable-line
      if (!results.hasOwnProperty(keyVal[0]) && i < limit) {
        return Object.assign(results, { [keyVal[0]]: keyVal[1] });
      }
    })[0];
  }

  sortObj(obj) {
    // convert object into array
    const sortable = [];
    for (const key in obj) { // eslint-disable-line
      if (obj.hasOwnProperty(key)) {
        sortable.push([key, obj[key]]); // each item is an array in format [key, value]
      }
    }

    // sort items by value
    sortable.sort((a, b) => {
      return b[1] - a[1]; // compare numbers
    });
    return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
  }


  /**
   * @param {string} str
   */
  watsonAll(str) {
    return new Promise((fulfill, reject) => {
      Promise.all([
        this.getSentiments(str),
        this.getKeywords(str),
        this.getEmotions(str),
      ]).catch(err => reject(err))
        .then(response => fulfill(response));
    });
  }

  /**
   * @returns
   */
  getTweetUser() {
    return {
      name: this.tweet.user.name,
      description: this.tweet.user.description,
      profile_image_url: this.tweet.user.profile_image_url,
      profile_image_url_https: this.tweet.user.profile_image_url_https,
      location: this.tweet.user.location || '',
      statuses_count: this.tweet.user.statuses_count,
    };
  }


  /**
   * @param {any} text
   * @returns
   */
  filterLinks(text) {
    const matchLinks = [/(https?:\/\/[^\s]+)/g, /(http?:\/\/[^\s]+)/g];
    return _.difference(text.toLowerCase().split(' '), matchLinks).join(' ');
  }

  filterBlackList(text) {
    return _.difference(text.toLowerCase().split(' '), blacklisted).join(' ');
  }
}

