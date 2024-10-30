import React, { useEffect } from 'react';
import SectionAbout from '../AboutUs/SectionAbout/SectionAbout';
import SectionGroup from '../AboutUs/SectionGroup/SectionGroup';
import SectionGallery from '../AboutUs/SectionGallery/SectionGallery';
import SectionAboutInfo from '../AboutUs/SectionAboutInfo/SectionAboutInfo';



export const AboutUs = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    },[]);

    return (
      <>
        <SectionAbout/>
        <SectionGroup />
        <SectionGallery/>
        <SectionAboutInfo/>
      </>
    );
};

export default AboutUs;