import callApi from '../../util/apiCaller';

export const LOAD_ANALYZED_DATA = 'LOAD_ANALYZED_DATA';


export function loadAnalyzedData(analyzedData) {
  return {
    type: LOAD_ANALYZED_DATA,
    analyzedData,
  };
}

export function fetchAnalyzedData(name, limit) {
  return dispatch => callApi(`analyzed/?name=${name}&limit=${limit}`)
    .then(res => dispatch(loadAnalyzedData(res))
    );
}
