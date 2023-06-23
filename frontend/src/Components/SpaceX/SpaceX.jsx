import React, { Fragment, useEffect, useState } from 'react'
import { getSpaceXAPI } from "../../Shared/Api/SpaceXAPI"
import { Header } from '../Header/Header';
import { RocketsDetails } from './RocketsDetails/RocketsDetails';
import { Loader } from '../Loader/Loader'

export const SpaceX = () => {

    const [rocketsData, setRocketsData] = useState([]);

    const getRocketsData = async () => {
        const data = await getSpaceXAPI();
        if (data.status === 200) {
            console.log(data);
            setRocketsData(data.data);
        } else {
            setRocketsData([]);
        }
    };

    useEffect(() => {
        getRocketsData();
    }, []);

    return (
        <Fragment>
            <Header />
            <div className='flex justify-center items-center'>
                <div>
                    {rocketsData.length === 0 && <Loader />}
                </div>
                <div>
                    {rocketsData.length !== 0 &&
                        <div>
                            {rocketsData.map((ele) => (
                                <div key={ele.key}>
                                    <RocketsDetails
                                        id={ele.id}
                                        description={ele.description}
                                        country={ele.country}
                                        company={ele.company}
                                        flickr_images={ele.flickr_images}
                                        rocketname={ele.rocket_name}
                                        rocketid={ele.rocket_id}
                                        mass={ele.mass}
                                        height={ele.height}
                                        active={ele.active}
                                        firstflight={ele.first_flight}
                                    />
                                </div>
                            ))}
                        </div>}
                </div>
            </div>
        </Fragment>
    )
}
