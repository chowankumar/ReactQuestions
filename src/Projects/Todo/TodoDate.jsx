import { useEffect,useState } from "react";
export const TodoDate =()=>{

    const [dateTime, setDateTime] = useState("");

        //todo date and time

        useEffect(() => {
            const interval = setInterval(() => {
                const now = new Date();
                const formattedDate = now.toLocaleDateString();
                const formatettedTime = now.toLocaleTimeString();
    
                setDateTime(`${formattedDate} - ${formatettedTime}`)
            }, 1000)
    
            return () => clearInterval(interval)
    
        }, [])
    return (
        <h2 className="date-time">{dateTime}</h2>
       
    )
}