import { useState } from 'react'
import './ToggleSwitch.css'
export const ToogleSwitch = () => {
    const [isOn, setIsOn] = useState(false);
    const handleToogleSwitch = () => {
        setIsOn(!isOn);
    }
    return (
        <>
            <div className='toggle-switch' style={{ backgroundColor: isOn ? '#4caf50' : '' }} onClick={handleToogleSwitch}>
                <div className={`switch ${isOn ? 'on' : 'off'}`}>
                    <span className='switch-state'>{isOn ? 'on': 'off'}</span>
                </div>
            </div>
        </>
    )
}
