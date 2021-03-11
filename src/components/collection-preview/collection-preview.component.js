import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.style.scss';

export default function CollectionPreview({title, items}){
    return(
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
            {
                items.filter((_, idx) => idx < 4).map(({id,...otherItems}) => 
                (
                    <CollectionItem key={id} {...otherItems}/>
                ))
            }
            </div>           
        </div>
    );
}