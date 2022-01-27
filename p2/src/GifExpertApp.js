import react, { useState } from "react";
import reactDom from "react-dom";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {


    //const  categorie  = ['One Punch', 'Samurai'];
    const [categories, setCategories] = useState(['One Punch']);



    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />


            {
                categories.map(category => {
                    return (

                        <GifGrid category={category}
                            key={category}
                        />

                    )
                })
            }

        </>
    )
}