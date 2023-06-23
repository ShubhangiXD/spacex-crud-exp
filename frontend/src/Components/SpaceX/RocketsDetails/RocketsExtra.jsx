import React from 'react'
import { HiOutlineRocketLaunch } from 'react-icons/hi2'

export const RocketsExtra = ({ id = "", rocketid = "", mass = "", height = "", active, firstflight = "" }) => {
    return (
        <>
            <div tabIndex={id} className="collapse collapse-arrow bg-white px-4">
                <div className="collapse-title text-md font-Kanit">
                    <HiOutlineRocketLaunch size={17} />
                    See More...
                </div>
                <div className="collapse-content font-Raleway text-sm">
                    <p>Rocket ID: {rocketid}</p>
                    <p>First Flight: {firstflight}</p>
                    <p>Mass: {mass.kg} kg or {mass.lb} lb</p>
                    <p>Height: {height.meters} m or {height.feet} ft</p>
                </div>
            </div>
        </>
    )
}
