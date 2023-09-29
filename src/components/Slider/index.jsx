import { Card } from "../Card"
import { Container } from "./style"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode } from 'swiper/modules'
import React, { useState, useEffect } from "react"

export const Slider = ({ info, title, isTrue }) => {
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 600px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(max-width: 600px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    return (
        <Container>
            <h2>{title}</h2>
            <Swiper grabCursor spaceBetween={10} slidesPerView={matches && (2) || !matches && (5)} freeMode={true} pagination={{ clickable: true }} modules={[FreeMode, Pagination]}>
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card item={item} text={true} isShow={isTrue} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}