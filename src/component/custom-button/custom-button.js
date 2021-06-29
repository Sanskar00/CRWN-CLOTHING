import React from 'react';

import './custom-button.scss';

const CustomButton = ({children,isGoogleSignIN,...otherProps})=>(
    <button className={`${isGoogleSignIN ? 'google-sign-in':'' } custom-button`} {...otherProps}>
        {children}
    </button>
)
export default CustomButton;