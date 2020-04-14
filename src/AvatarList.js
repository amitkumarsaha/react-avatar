import React from 'react';

const AvatarList = (props) => {

    return (
        <div className='avatarstyle ma4 bg-light-purple dib pa3 tc grow shadow-5'>
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt={props.name} />
            <h1>{props.name}</h1>
            <p1>{props.role}</p1>
        </div>
    )
}

export default AvatarList;