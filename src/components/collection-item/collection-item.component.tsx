import React from 'react';
import { connect } from 'react-redux';

import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

interface CollectionItemProps {
  key: any;
  addItem: any;
  item: any;
}

const CollectionItem: React.FC<CollectionItemProps> = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  addItem: (item: any) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
