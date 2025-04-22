import Hero from '../../components/Hero/Hero';
import React from 'react';
import { useOutletContext } from "react-router-dom";

export default function HomePage() {
    const {data} = useOutletContext();
    const {topAlbums,newAlbums,songs,genres} = data;
    console.log(topAlbums,newAlbums,songs,genres)
    return(
        <>
            <Hero/>
        </>
    )
}