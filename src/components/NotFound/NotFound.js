// Not found (404 error) page

import React from 'react/addons';
import DocumentTitle from 'react-document-title';

export default class NotFound extends React.Component {
  render() {
    return (
      <DocumentTitle title="Page Not Found - Toni Karttunen">
        <section className="not-found">
          <h1>Page Not Found</h1>
        </section>
      </DocumentTitle>
    );
  }
}
