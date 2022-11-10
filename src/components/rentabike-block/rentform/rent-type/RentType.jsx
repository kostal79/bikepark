import React, { useState } from 'react'
import './RentType.css'
import Store from '../../../../store/Store'

const RentType = () => {

    let [type, setType] = useState(Store.rentType.type)


    function handleType(event) {
        if (type === 'for days') {
            setType('for hours');
            Store.rentType.type = 'for 2 hours'

        } else if (type === 'for hours') {
            setType('for days')
            Store.rentType.type = 'for days'
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