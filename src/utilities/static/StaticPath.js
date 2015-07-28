// Static file helpers

import { canUseDOM } from 'react/lib/ExecutionEnvironment';

const PRODUCTION_STATIC_ROOT = 'http://static.tonikarttunen.com/static/';
const DEVELOPMENT_STATIC_ROOT = 'http://127.0.0.1:8888/';

const getStaticRootUrl = () => {
  if (canUseDOM) {
    const HOST_BASE_URL =
    window.location.origin || /* Modern browsers */
    window.location.protocol + '//' + window.location.hostname +
    (window.location.port ? ':' + window.location.port : ''); /* IE */

    return (HOST_BASE_URL.includes('tonikarttunen.com') ?
      PRODUCTION_STATIC_ROOT :
      DEVELOPMENT_STATIC_ROOT);
  } else {
    const DEVELOPMENT = process.env.NODE_ENV !== 'production';
    return DEVELOPMENT ? DEVELOPMENT_STATIC_ROOT : PRODUCTION_STATIC_ROOT;
  }
};

export default {
  PRODUCTION_STATIC_ROOT: PRODUCTION_STATIC_ROOT,

  DEVELOPMENT_STATIC_ROOT: DEVELOPMENT_STATIC_ROOT,

  staticPath: (path) => {
    return getStaticRootUrl() + path;
  }
};
