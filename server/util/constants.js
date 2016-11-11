import moment from 'moment';
import Twit from 'twit';
import _ from 'lodash';
const T = new Twit({ // TODO: Set keys in Env to abstract from source
  consumer_key: 'KwdLVYC50lNo5WkGKpS9EhUeo',
  consumer_secret: 'EFstm0bNmd4lM7sYB5Moj1J9utTLQstPnPtISRDOF8ll14jf2p',
  access_token: '4287337822-DsuF11VrsS9GqbyP6BrAxwY8g6jBrMOB1QzYDkA',
  access_token_secret: 'bKZLqf6Qbkpgh2yOwlwhWpWKHPTC5ntL4Jtw71Pq31gUd',
  timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
});

module.exports = {
  T,
  _,
  moment,
};
