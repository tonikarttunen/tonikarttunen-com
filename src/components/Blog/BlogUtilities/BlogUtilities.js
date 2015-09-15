// BlogUtilities

import { canUseDOM } from 'react/lib/ExecutionEnvironment';

const PRODUCTION_BLOG_BASE_URL = 'http://blog.tonikarttunen.com/api/';
const DEVELOPMENT_BLOG_BASE_URL = 'http://127.0.0.1:8000/api/';

const getBlogBaseURL = () => {
  if (canUseDOM) {
    const HOST_BASE_URL =
    window.location.origin || /* Modern browsers */
    window.location.protocol + '//' + window.location.hostname +
    (window.location.port ? ':' + window.location.port : ''); /* IE */

    return (
      HOST_BASE_URL.includes('tonikarttunen.com') ?
      PRODUCTION_BLOG_BASE_URL :
      DEVELOPMENT_BLOG_BASE_URL
    );
  } else {
    const DEVELOPMENT = process.env.NODE_ENV !== 'production';
    return DEVELOPMENT ? DEVELOPMENT_BLOG_BASE_URL : PRODUCTION_BLOG_BASE_URL;
  }
};

export default {
  PRODUCTION_BLOG_BASE_URL: PRODUCTION_BLOG_BASE_URL,

  DEVELOPMENT_BLOG_BASE_URL: DEVELOPMENT_BLOG_BASE_URL,

  blogURL: (path) => {
    return getBlogBaseURL() + path;
  }
};