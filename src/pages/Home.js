import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div style={{ margin: 'auto', width: '60%', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '10%' }}>
            <Link to='/timer' style={{ textAlign: 'center' }}>Click Here For A Timer</Link>
            <p>I developed a timer component in React that counts up every second and resets when it reaches 60. To ensure that the timer state persists across route changes, I implemented state lifting in the parent component (App). The Timer component uses useEffect to initiate the timer when it mounts, and a cleanup function is included to clear the setInterval on component unmount to prevent multiple intervals from running simultaneously. This prevents the timer from speeding up when navigating back to the timer route. The timer value is displayed centrally using inline styling."</p>
        </div>
    )
}
