import { T } from '../util/constants';
import Analyzer from '../util/Analyzer';

const a = new Analyzer();

export const getAnalyzedData = (req, res) => {
  const name = req.query.name;
  const limit = req.query.limit ? +req.query.limit : 20;
  return T.get('statuses/user_timeline', { screen_name: name, count: limit })
    .catch(err => Error(err))
    .then(results => {
      let target = '';
      let user = {};
      const media = [];
      const tweets = [];
      results.data.map(datum => {
        if (!user.hasOwnProperty(datum.user)) {
          user = datum.user;
        }

        if (a.getMedia(datum)) {
          media.push(a.getMedia(datum));
        }

        tweets.push(datum.text);
        return target += `${datum.text} `;
      });

      const topTenWords = a.getTopWords(target, 10);
      const topTwentyWords = a.getTopWords(target, 20);

      a.watsonAll(target)
        .catch(err => Error(err))
        .then(analyedData =>
          res.json({
            date: Date.now(),
            user: {
              type: 'twitter',
              name,
              profile_image_url: user.profile_image_url_https,
              followers_count: user.followers_count,
              friends_count: user.friends_count,
              created_at: user.created_at,
            },
            tweets,
            sentiments: analyedData[0].docSentiment || {},
            keywords: analyedData[1].keywords || {},
            emotions: analyedData[2].docEmotions || {},
            topTenWords,
            topTwentyWords,
            media,
          })
        );
    });
};
