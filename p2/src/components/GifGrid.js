import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);



    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading</p>}
            <div className="content-card">
                {images.map(img => {

                    return <GifGridItem
                        key={img.id}
                        {...img} />
                })}
            </div>
        </>
    )
}
