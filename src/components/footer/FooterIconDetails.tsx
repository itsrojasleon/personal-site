import React, { Fragment } from 'react';
import { I, A } from '../../styles/footer/footer-icon-details';

interface FooterIconDetailsProps {
  id: string;
  url: string;
  icon: string;
}

const FooterIconDetails = (props: FooterIconDetailsProps): JSX.Element => {
  const { id, url, icon } = props;
  return (
    <Fragment>
      <A key={id} target="_blank" rel="noopener noreferrer" href={`${url}`}>
        <I className={`${icon}`} />
      </A>
    </Fragment>
  );
};
export default FooterIconDetails;
