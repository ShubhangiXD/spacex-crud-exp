import React, { useEffect, useState } from 'react'
import { RocketsExtra } from './RocketsExtra'

export const RocketsDetails = ({ id = "", description = "", company = "", country = "", flickr_images = [], rocketname = "", rocketid = "", mass = "", height = "", active, firstflight="" }) => {
    const [customActiveClass, setCustomaActiveClass] = useState("");
    const setActiveClass = () => {
        if (active) {
            setCustomaActiveClass(" bg-green");
        } else {
            setCustomaActiveClass(" bg-orange");
        }
    };
    useEffect(() => {
        setActiveClass();
    });

    return (
        <>
            <div className="grid grid-cols-1 my-2">
                <div className={"card w-40rem text-black shadow-xl " + customActiveClass}>
                    <figure><img src={flickr_images[0]} alt={rocketname} /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-Kanit">{rocketname} - {country}</h2>
                        <p className='font-Raleway'>{description}</p>
                    </div>
                    <RocketsExtra
                        id={id}
                        rocketid={rocketid}
                        mass={mass}
                        height={height}
                        active={active}
                        firstflight={firstflight}
                    />
                </div>
            </div>
        </>
    )
}
