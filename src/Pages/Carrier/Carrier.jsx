import React from 'react';
import HrBanner from './Carrier-banner/HrBanner';
import Boss from './Carrier-boss/Boss';
import Vacancies from './Carrier-vacancies/vacancies';
import Choose from './Carrier-choose/Choose';

const Carrier = () => {
    return (
        <div>
            <HrBanner/>
            <Boss/>
            <Vacancies/>
            <Choose/>
        </div>
    );
};

export default Carrier;