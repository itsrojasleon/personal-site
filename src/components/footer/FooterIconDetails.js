import React, { Fragment } from 'react';
import { I, A } from '../styled-components/footer/footer-icon-details';

function FooterIconDetails(props) {
  const { id, url, icon } = props;
  return (
    <Fragment>
      <A key={id} target="_blank" rel="noopener noreferrer" href={`${url}`}>
        <I className={`${icon}`} />
      </A>
    </Fragment>
  );
}
export default FooterIconDetails;
