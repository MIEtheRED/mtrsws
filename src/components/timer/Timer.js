import { useState, useEffect } from 'react';
import styles from "./timer.module.css";

const Timer = () => {
    const [days, setDays] = useState(0);

    const creation = "October, 14, 2022";

    const getTime = () => {
        const time = Date.now() - Date.parse(creation);

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    }

    useEffect(() => {
        getTime(creation)
    }, []);

    return (
        <div className={styles.timer}>
            <p>In business for: {days} days</p>
        </div>
    );
};

export default Timer;