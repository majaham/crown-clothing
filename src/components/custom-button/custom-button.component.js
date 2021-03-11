import './custom-button.style.scss';

export default function CustomButton({children, isGoogleSignIn,inverted,...otherProps}){
    return (
        <button className={`${inverted? 'inverted': ''} ${isGoogleSignIn? 'google-signin': ''} custom-button`} {...otherProps}>{children}</button>
    );
}

