import { Fragment } from 'react'
import './Banner.css' 

export const Banner = () => {
    // This funny tag syntax is neither a string nor HTML.  It is called JSX, and it is a syntax extension to JavaScript. 
    return(
        // You can use fragment to group elements html. You can swap "<Frangment></Fragment>" to "<></>". It works too.
        // Remember that a component have to return just one element (you can nesting elements inside it)
        <Fragment>
            <header className="banner">
                <img src="/img/banner.png" alt="people with team spirit"/>
            </header>
        </Fragment>
        
    )
}

