import React, { useContext, useEffect } from 'react'
import FileContextData from '../context';

const UploadData = () => {
    
    const { gst, pan, company, other } = useContext(FileContextData);
    const requestBody = {
        userId: "12",
    };

    if (pan != null) {
        requestBody.pan = pan;
    }

    useEffect(() => {
        const formData = new FormData();
        formData.append('userId', '12');
        formData.append('panCard', pan);
        if (gst != null) {
            formData.append('gstPhoto', gst)
        }

        if (company != null) {
            formData.append('companyPhoto', company);
        }

        if (other != null) {
            formData.append("otherPhoto", other)
        }
        const data = fetch("http://localhost:8000/api/", {
            method: "POST",
            body: formData,
        }).then(response => response.json())
            .then(data => {
                // Handle the response from the server
                console.log(data);
            })
            .catch(error => {
                // Handle any errors
                console.error(error);
            });
    }, [])
    return (
        <div>
            Data updated
        </div>
    )
}

export default UploadData;
