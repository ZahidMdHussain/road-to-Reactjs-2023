import { useEffect, useState } from "react";

const useOnline = () => {
    const [online, setOnline] = useState(true);
    useEffect(() => {
        const handleOnline = () => {
            setOnline(true);
        }
        const handleOffline = () =>{
            setOnline(false);
        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        }

    }, []);

    return online;
};

export default useOnline;