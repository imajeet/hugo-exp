import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SearchBar from './components/SearchBar/SearchBar';
import List from './components/List/List';
import WatsonResults from './components/WatsonResults/WatsonResults';

import { fetchAnalyzedData } from './AnalyzedActions';
import { getAnalyzedData } from './AnalyzedReducer';

import styles from './Analyzed.css';

class Analyzed extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchAnalyzedData('', 200));
  }

  handleSubmit(e) {
    if (e.key === 'Enter') {
      this.props.dispatch(fetchAnalyzedData(e.target.value));
      e.target.value = ' '; // eslint-disable-line
    }
  }

  render() {
    const { sentiments, user, emotions } = this.props.data;
    return (
      <div className={styles['analyzed-container']}>
        <SearchBar handleSubmit={this.handleSubmit} />
        <WatsonResults
          name={user.name}
          sentiments={sentiments}
          emotions={emotions}
        />
        <div className={styles['analyzed-list']}>
          <List data={this.props.data} />
        </div>
      </div>
    );
  }
}

// required for serverside rendering
Analyzed.need = [() => { return fetchAnalyzedData('', 200); }];

function mapStateToProps(store) {
  return {
    data: getAnalyzedData(store),
  };
}

Analyzed.propTypes = {
  data: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

Analyzed.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Analyzed);
