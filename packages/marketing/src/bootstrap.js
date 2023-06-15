import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const mount=(el)=>{
ReactDOM.render(<App/>,el)
}


//if we are in developemnt or isolation call mount immediately
if(process.env.NODE_ENV==='development'){
    const devRoot=document.querySelector('#_marketing-dev-root');
    if(devRoot){
mount(devRoot);
    }

}

//when we are running thru conatiner export mount
export {mount};