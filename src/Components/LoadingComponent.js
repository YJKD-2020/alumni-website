import React from 'react';

export const Loading = () => {
    return (
        <div className="col-12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <h2>Please wait while the data is loading</h2>
            <p> Loading ... </p>
        </div>
    );
}

export default Loading;
