import React from 'react';


import Section from './section';


const TopStories = () => {

  let topSectionData = {abc: 123};

  return (
    <div className="container">

        <Section topColor="section pumpkinTop" data={topSectionData} header="This is my header"/>

    </div>
  )
}

export default TopStories;
