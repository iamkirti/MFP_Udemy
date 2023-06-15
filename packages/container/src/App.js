import React from 'react';
import {mount} from 'marketing/MarketingApp';
import MarketingApp from './components/MarketingApp';

console.log("mount",mount);
//the mount function is a function that takes in a reference to an HTML element and then displays some content inside there.


export default()=>{
    return <div><h1>Hi from container</h1><hr/><MarketingApp/></div>
}