import React from 'react';

import './custom-button.styles.scss';

const CustomButton: React.FC<any> = ({
  children,
  isGoogleSignIn,
<<<<<<< HEAD
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} custom-button`}
=======
  ...otherProps
}) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
>>>>>>> 57c8c303f77356fe58d4253e0deff11adec570c2
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
