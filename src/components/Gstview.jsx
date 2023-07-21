import React, { useState, useContext, useEffect } from 'react'
import FileContextData from '../context'

const GstSEE = () => {

    const [gstImage, setGstImage] = useState(null);
    const { gst } = useContext(FileContextData);

    useEffect(() => {

        if (gst != null) {
            setGstImage(URL.createObjectURL(gst));
        }

    }, []);

    if (gst == null) {
        return (<>
            <h1>GST FILE NOT UPLOADED</h1>
        </>)
    }
    return (
        <>
            <div className='border-4 border-solid border-gray-600 rounded-2xl  w-[85%] h-[40vh]'>
                <h1 className="text-xl text-center">YOUR GST FILE</h1>
                <img src={gstImage} alt="GSTCard" className='h-[80%] w-[100%]' />
            </div>
        </>
    )
}

export default GstSEE;
