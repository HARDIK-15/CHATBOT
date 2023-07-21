import React, { createContext, useState, useEffect } from 'react';

const FileContextData = createContext();
export default FileContextData;

const ContextFunc = ({ children }) => {
    const [pan, setPan] = useState();
    const [gst, setGst] = useState()
    const [company, setCompany] = useState()
    const [other, setOther] = useState()
    const [demo, setDemo] = useState()

    useEffect(() => {
        setPan(null);
        setCompany(null);
        setOther(null);
        setGst(null);
    }, [])

    return (
        <FileContextData.Provider value={{
            pan, gst, company, other, demo, setCompany, setDemo, setGst, setOther, setPan
        }}>
            {children}
        </FileContextData.Provider>
    )
}

export { ContextFunc };