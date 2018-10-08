import React from 'react';

const car = (props) => {
    return (
        <article className="Car" onClick={props.clicked}>
            <h1>{props.makeName}</h1>
            <div className="Info">
                <p className="ModelName">{props.modelName}</p>
            </div>
        </article>
    )
}

export default car;