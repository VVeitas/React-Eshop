import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

interface CollectionPreviewProps {
  title: string;
<<<<<<< HEAD
  items: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  }[];
=======
  items: { id: number; name: string; imageUrl: string; price: number }[];
>>>>>>> 57c8c303f77356fe58d4253e0deff11adec570c2
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({
  title,
  items,
}) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
<<<<<<< HEAD
        .map(item => (
          <CollectionItem key={item.id} item={item} />
=======
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
>>>>>>> 57c8c303f77356fe58d4253e0deff11adec570c2
        ))}
    </div>
  </div>
);

export default CollectionPreview;
