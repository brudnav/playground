import React from "react";


const Nav = ({libraryStatus,setLibraryStatus}) => 
{
    return(
        <nav>
           <h2>Heading</h2>
           <button onClick={() => setLibraryStatus(!libraryStatus)}>Library</button>
        </nav>
    );
}

export default Nav;