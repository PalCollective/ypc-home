"use client"
import React, { useEffect, useState } from 'react';
import Radar from 'radar-sdk-js';
import 'radar-sdk-js/dist/radar.css';
import homeStyles from "../home.module.css";
// import { getAccessToken, retrieveData } from "../form/mongoDBservice";
import maps from "../form/sampleData/maps.json"

interface Case {
    nickname: string;
    latitude: number;
    longitude: number;
}

const extractQueryParams = (url: string) => {
    const queryParams = new URLSearchParams(url);
    const user = queryParams.get('user') || '';
    const client = queryParams.get('client') || '';
    return { client, user };
};

// console.log(maps)
const RadarMap: React.FC = () => {
    // const [cases, setCases] = useState<any[]>([]);
    // // const cases = maps.cases
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const { user } = typeof window !== 'undefined' ? extractQueryParams(window.location.search) : { user: '' };
    //         const accessToken: string = await getAccessToken();
    //         const data: any = await retrieveData("maps", "cases", user, accessToken);
    //         console.log(data.document.cases)
    //         if (data && data.document.cases) {
    //             setCases(data.document.cases);
    //         }
    //     };

    //     fetchData();
    // }, []);
    const cases: Case[] = maps.cases;
    useEffect(() => {
        if (cases.length === 0) return;

        const radarApiKey = process.env.NEXT_PUBLIC_RADAR_API_KEY;
        if (!radarApiKey) {
            console.error("Radar API key not found. Make sure to add it to your .env file.");
            return;
        }

        Radar.initialize(radarApiKey);
        const mapOptions: any = {
            container: 'map',
            style: 'radar-default-v1',
            center: [34.3760301, 31.4344916],
            zoom: 10,
        };

        const map = new (Radar.ui.map as any)(mapOptions);
        const { user } = typeof window !== 'undefined' ? extractQueryParams(window.location.search) : { user: '' };
        cases.forEach((caseItem: any) => {
            const { nickname, latitude, longitude } = caseItem;
            if (latitude && longitude) {
                Radar.ui.marker({
                    text: nickname,
                    color: 'Red'
                })
                    .setLngLat([parseFloat(longitude), parseFloat(latitude)])
                    .addTo(map);
            } else {
                console.log(`Skipping case ${nickname} due to missing latitude or longitude`);
            }
        });
    }, [cases]);

    return (
        <main className={homeStyles.homeContainer}>
            <nav className={homeStyles.globalNav}>
                <ul className={homeStyles.siteNav}>
                    <li className={homeStyles.home}>
                        <a href="/">
                            <img src="Symbol.svg" alt="Home" />
                        </a>
                    </li>
                </ul>
            </nav>

            <div>
                <h2>Contact Us</h2>
                <h3>Reach out to us for any inquiries or feedback</h3>
            </div>
            <div id="map-container" style={{ height: '100%', position: 'absolute', width: '100%', zIndex: -1 }}>
                <div id="map" style={{ height: '100%', position: 'absolute', width: '100%', zIndex: -1 }} />
            </div>
        </main>
    );
};

export default RadarMap;


