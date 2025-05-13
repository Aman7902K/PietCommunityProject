import React from 'react'
import  { useState } from 'react';
import Profile_card from './Profile_card';
import Profile_Projects from './Profile_Projects';


function Profile() {


    return (
        <>
            <div className='flex flex-col items-center gap-2'>
                <Profile_card />
                <Profile_Projects/>
            </div>

        </>
    );
}


export default Profile