import React, { useState, useContext, useEffect } from 'react';
import FileContextData from '../context';

const OtherSEE = () => {

    const [otherImage, setOtherImage] = useState(null);
    const { other } = useContext(FileContextData);

    useEffect(() => {

        if (other != null) {
            setOtherImage(URL.createObjectURL(other));
        }
        
    }, []);

    if (other == null) {
        return <>
            <h1>OTHER DOCUMENTS NOT UPLOADED</h1>
        </>
    }
    return (
        <>
            <div className='border-4 border-solid border-gray-600 rounded-2xl  w-[85%] h-[40vh]'>
                <h1 className="text-xl text-center">YOUR OTHER DOCUMENT</h1>
                <img src={otherImage} alt="PanCard" className='h-[80%] w-[100%]' />
            </div>
        </>
    )
}

export default OtherSEE; 