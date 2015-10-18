// FeatureDetection

// IE 9 or older
const isIE9OrOlder = () => {
  return (navigator.appVersion.indexOf('MSIE') !== -1) &&
  (parseFloat(navigator.appVersion.split('MSIE')[1]) < 10);
};

// IE 10
const isIE10 = () => {
  if (Function('/*@cc_on return document.documentMode===10@*/')()) {
    return true;
  }
  return false;
};

// IE 10 or older
const isIE10OrOlder = () => {
  return isIE10() || isIE9OrOlder();
};

// CSS transforms
const supportsCSSTransforms = () => {
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
};

// SVG
const supportsSVG = () => {
  return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1');
}

export default {
  isIE9OrOlder,
  isIE10,
  isIE10OrOlder,
  supportsCSSTransforms,
  supportsSVG
};
