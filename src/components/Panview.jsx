import React, { useState , useContext, useEffect } from 'react'
import FileContextData from '../context'

const PanSEE = () => {

    const [panImage, setPanImage] = useState(null);
    const { pan } = useContext(FileContextData);

    useEffect(() => {

        if (pan != null) {
            setPanImage(URL.createObjectURL(pan));
        }

    }, []);

    if (pan == null) {
        return <></>
    }
    return (
        <>
            <div className='border-4 border-solid border-gray-600 rounded-2xl w-[85%] h-[40vh]'>
                <h1 className="text-xl text-center">YOUR PANCARD</h1>
                <img src={panImage} alt="PanCard" className='h-[80%] w-[100%] rounded-xl mb-10' />
            </div>
        </>
    )
}

export default PanSEE;
