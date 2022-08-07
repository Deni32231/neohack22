import React from 'react';

const SearchCheckbox = (props) => {
    return (
        <label className="mr-6 cursor-pointer"><input className="cursor-pointer" type="checkbox" /> {props.value}</label>
    );
};

export default SearchCheckbox;