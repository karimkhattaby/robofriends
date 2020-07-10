// @ts-nocheck
import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
    <div>
        {
            robots.map( (user, i) => {
                return <Card key={i} robot={robots[i]}/>
            })
        }
    </div>
    );
};

export default CardList;