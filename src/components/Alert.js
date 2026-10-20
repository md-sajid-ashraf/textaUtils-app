import React from 'react'

export default function Alert(props) {
    const capitalize = (word) =>{
        word = word.slice(0,1).toUpperCase()[0] + word.slice(1).toLowerCase();
        return word;
    }

    return (
        <div style={{ height: '50px' }}>
            { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
                    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                </div>}
        </div>
    )
}
