import React from "react";


const Library = ({libraryStatus}) => 
{
    return(
        <div className={`library ${libraryStatus ? "active-library" : ""}`}>
            <h1>Library</h1>
            <div className="library-description">
                <h2>Song</h2>
                <h3>Artist</h3>
            </div>
        </div>
    );
}

export default Library;