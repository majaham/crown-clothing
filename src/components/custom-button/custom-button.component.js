import './custom-button.style.scss';

export default function CustomButton({children, isGoogleSignIn,...otherProps}){
    return (
        <button className={`${isGoogleSignIn? 'google-signin': ''} custom-button`} {...otherProps}>{children}</button>
    );
}