import ReactDOM, { version as reactDomVersion } from 'react-dom';

// Uses the correct render API based on the available version of
// `react-dom`.
// Todo - remove check when support for React 17 is removed
const canUseNewReactRootApi =
  reactDomVersion &&
  (reactDomVersion.startsWith('18') ||
    reactDomVersion.startsWith('19') ||
    reactDomVersion.startsWith('0.0.0'));

export const renderElement = (node, outlet) => {
  if (canUseNewReactRootApi) {
    // eslint-disable-next-line import/no-unresolved
    const { createRoot } = require('react-dom/client');
    const root = createRoot(outlet);
    root.render(node);
  } else {
    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(node, outlet);
  }
};
