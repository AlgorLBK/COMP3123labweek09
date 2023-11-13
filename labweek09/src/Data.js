import React, { useState } from 'react';

const DataInfo = () => {
    const [data, setData] = useState({
        welcome: 'Welcome to Fullstack Development - 1',
        week: 'React JS Programming Week09 Lab exercise',
        stId: '101372552',
        name: 'Algor Lombako Konga',
        college: 'George Brown College, Toronto'
    });

    return (
        <div>
            <h1>{data.welcome}</h1>
            <h2>{data.week}</h2>
            <h3>{data.stId}</h3>
            <h4>{data.name}</h4>
            <p>{data.college}</p>
        </div>
    );
};

export default DataInfo;