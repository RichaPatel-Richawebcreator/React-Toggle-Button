import { useState } from 'react'
import './ToggleSwitch.css'
export const ToogleSwitch = () => {
    const [isOn, setIsOn] = useState(false);
    const handleToogleSwitch = () => {
        setIsOn(!isOn);
    }
    const checkIson = isOn ? 'on': 'off'
    const toogleBgColor = {backgroundColor: isOn ? '#4caf50' : ''}
    return (
        <>
            <div className='toggle-switch' style={toogleBgColor} onClick={handleToogleSwitch}>
                <div className={`switch ${checkIson}`}>
                    <span className='switch-state'>{checkIson}</span>
                </div>
            </div>
        </>
    )
}
