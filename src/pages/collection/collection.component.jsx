import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
  console.log({ match });
  return (
    <div className='collection'>
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

export default CollectionPage;
