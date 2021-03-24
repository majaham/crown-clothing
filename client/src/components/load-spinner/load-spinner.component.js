import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './load-spinner.styles';

const LoadSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
    return isLoading? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ): (<WrappedComponent {...otherProps}/>)
}

export default LoadSpinner