import React,{useState,useEffect} from "react";
import {useSwiper} from "swiper/react";
// import {ReactComponent as RightArrow} from "../../../assets/RightArrow.svg";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styles from "./CarouselRightNavigation.module.css";

function CarouselRightNavigation() {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(true);

    useEffect(() => {
        const handleChange = () => {
            setIsEnd(swiper.isEnd);
        };

        //set initial state
        setIsEnd(swiper.isEnd);

        //add event listeners
        swiper.on("slideChange", handleChange);

        //cleanup function to remove event listeners
        return () => {
            swiper.off("slideChange", handleChange);
        };
    },[swiper]);


    return (
        <div className={styles.rightNavigation}>
            {!isEnd && (
                <KeyboardArrowRightIcon 
                    className = {`${styles.arrow} ${isEnd ? styles.disabled : "active"}`}
                    onClick={() => !isEnd && swiper.slideNext()}
                    aria-label="Next Slide"
                    data-cy="carousel-next-button"
                    style={{opacity: isEnd ? 0.7 : 1}}
                />
            )}
        </div>
    )
}


export default CarouselRightNavigation;