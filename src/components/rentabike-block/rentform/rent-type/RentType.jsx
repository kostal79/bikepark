import React, { useState } from 'react'
import './RentType.css'

const RentType = () => {
    let [type, setType] = useState('for days')


    function handleType(event) {
        if (type === 'for days') {
            setType('for hours')

        } else if (type === 'for hours') {
            setType('for days')
        }
    }

    return (
        <div className='rentType__wrapper'>
            <p className='rentType__title'>Тип аренды</p>
            <div className='rentType__container'>
                <div
                    className={'rentType__button'}
                    onClick={handleType}
                >
                    по дням
                </div>
                <div
                    className={type === 'for days' ? 'rentType__toggler' : 'rentType__toggler rentType__toggler--shifted'}
                >
                    {type === 'for days' ? 'по дням' : '2 часа'}</div>
                <div
                    className={'rentType__button'}
                    onClick={handleType}
                >
                    2 часа
                </div>
            </div>
        </div>
    );
};

export default RentType