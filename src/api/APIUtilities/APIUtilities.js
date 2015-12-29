// API Utilities

import { canUseDOM } from 'react/lib/ExecutionEnvironment';

const PRODUCTION_API_BASE_URL = 'http://blog.tonikarttunen.com/api/';
const DEVELOPMENT_API_BASE_URL = 'http://127.0.0.1:8000/api/';

const getAPIBaseURL = () => {
  if (canUseDOM) {
    const HOST_BASE_URL =
    window.location.origin || /* Modern browsers */
    window.location.protocol + '//' + window.location.hostname +
    (window.location.port ? ':' + window.location.port : ''); /* IE */

    return (
      HOST_BASE_URL.includes('tonikarttunen.com') ?
      PRODUCTION_API_BASE_URL :
      DEVELOPMENT_API_BASE_URL
    );
  } else {
    const DEVELOPMENT = process.env.NODE_ENV !== 'production';
    return DEVELOPMENT ? DEVELOPMENT_API_BASE_URL : PRODUCTION_API_BASE_URL;
  }
};

export default {
  PRODUCTION_API_BASE_URL: PRODUCTION_API_BASE_URL,

  DEVELOPMENT_API_BASE_URL: DEVELOPMENT_API_BASE_URL,

  APIURL: (path) => {
    return getAPIBaseURL() + path;
  }
};