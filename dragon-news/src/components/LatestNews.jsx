import React from 'react';
import Marquee from "react-fast-marquee"

const LatestNews = () => {
    return (
        <div className='flex gap-2 items-center bg-gray-200 p-2'>
            <p className='bg-[#D72050] text-white px-4 py-2'>Latest</p>
            <Marquee pauseOnHover={true} className='space-x-10'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima culpa nesciunt hic maxime, officia cumque deserunt nulla ipsam! Praesentium.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima culpa nesciunt hic maxime, officia cumque deserunt nulla ipsam! Praesentium.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima culpa nesciunt hic maxime, officia cumque deserunt nulla ipsam! Praesentium.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews; 