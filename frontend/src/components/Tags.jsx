import React from 'react';
import axios from '../utils/axios';


const Tags = () => {

    const myTags = [];

    const getMyTags = async () => {
        try {
            const { data } = await axios.get(`/contest/getAllCourses/2`)
            return data
        } catch (error) {
            console.log(error)
        }
    }
    
    console.log(getMyTags)



    

};

export default Tags;