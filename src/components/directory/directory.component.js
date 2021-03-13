import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../redux/directory/directory-selector';
import './directory.style.scss';

function Directory(props) {
    const {sections} = props;
    return <div className='directory-menu'>
        {
            sections.map(({title, imageUrl, size, id}) => {
                return <MenuItem key = {id} title={title} imageUrl = {imageUrl} size={size}/>
            })
        }
    </div>     
}
const mapStateToProps = state => ({
  //sections: state.directory.sections
  sections: selectDirectorySections(state)
});
export default connect(mapStateToProps)( Directory);