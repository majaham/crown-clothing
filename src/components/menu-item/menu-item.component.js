import React from 'react';
import { Link } from 'react-router-dom';
import './menu-item.style.scss';

const MenuItem = (props) => {
    return <Link className={`${props.size} menu-item`} to={props.linkUrl}>
            <div  style={{backgroundImage: `url(${props.imageUrl})`}}
            className='background-image'/>
            <div className='content'>
                <h1 className='title'>{props.title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>           
        </Link>
}
export default MenuItem;