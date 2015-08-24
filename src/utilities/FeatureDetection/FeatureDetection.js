// FeatureDetection

export default {
  // IE 9 or older
  isIE9OrOlder: () => {
    return (navigator.appVersion.indexOf('MSIE') !== -1) &&
    (parseFloat(navigator.appVersion.split('MSIE')[1]) < 10);
  },

  // CSS transforms
  supportsCSSTransforms: () => {
    const transforms = [
      'transform',
      'webkitTransform',
      'WebkitTransform',
      'mozTransform',
      'MozTransform',
      'oTransform',
      'OTransform',
      'msTransform'
    ];

    let div = document.createElement('div');

    for (let i = 0; i < transforms.length; i++) {
      if ((typeof div.style[transforms[i]]) !== 'undefined') {
        return true;
      }
    }

    return false;
  },

  // SVG
  supportsSVG: () => {
    return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1');
  }
};
