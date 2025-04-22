import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import {fetchFilters} from "../../api/api"
import React from 'react';
import { useOutletContext } from "react-router-dom";
import styles from './HomePage.module.css';


export default function HomePage() {
    const {data} = useOutletContext();
    const {topAlbums,newAlbums,songs,genres} = data;
    
    return(
        <>
            <Hero/>
            <div className={styles.wrapper}>
                <Section title="Top Albums" data={topAlbums} type="album" />
                <Section title="New Albums" data={newAlbums} type="album" />
                <Section 
                    title="Songs"
                    data={songs}
                    filtersData={fetchFilters}
                    type="song"
                />

            </div>
        </>
    );
}