import React, { createContext } from 'react'
// We should create a data to import our products

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    //We should create a data to import all_products
    const contextValue = { /*all_product*/}
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider