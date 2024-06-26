import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { GiBasketballBasket } from 'react-icons/gi';
import '../App.css';

const Home = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handleVideoClick = (e) => {
        e.stopPropagation();
        setShowVideo(!showVideo);
    };

    return (
        <motion.div
            className="home"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="basketball-world">The Basketball Dream..</h1>
            <motion.div
                className="video-container"
                style={{ position: "relative", top: "-2cm", left: "-3cm" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleVideoClick}
            >
                <FaPlay size={40} />
            </motion.div>
            {showVideo && (
                <motion.div
                    className="video-modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => setShowVideo(false)}
                >
                    <iframe
                        title="Basketball Ad"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/2-bi_USOWWI"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </motion.div>
            )}
            <motion.div
                className="basketball-left"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 1, repeat: Infinity, repeatType: 'loop' }}
            >
                <GiBasketballBasket size={80} />
            </motion.div>
            <motion.div
                className="basketball-right"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 1, repeat: Infinity, repeatType: 'loop' }}
            >
                <GiBasketballBasket size={80} />
            </motion.div>
        </motion.div>
    );
};

export default Home;