import React, { useState, useContext, useEffect } from 'react'
import FileContextData from '../context'

const CompanySEE = () => {

    const [companyImage, setCompanyImage] = useState(null);
    const { company } = useContext(FileContextData);

    useEffect(() => {

        if (company != null) {
            setCompanyImage(URL.createObjectURL(company));
        }

    }, []);

    if (company == null) {
        return (<>
            <h1>COMPANY FILE NOT UPLOADED</h1>
        </>)
    }
    return (
        <>
            <div className='border-4 border-solid border-gray-600 rounded-2xl  w-[85%] h-[40vh]'>
                <h1 className="text-xl text-center ">YOUR COMPANY FILE</h1>
                <img src={companyImage} alt="PanCard" className='h-[80%] w-[100%]' />
            </div>
        </>
    )
}

export default CompanySEE;
