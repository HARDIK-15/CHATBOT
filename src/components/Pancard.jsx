import { useState, useContext } from "react";
import FileContextData from "../context";

const PancardSUBMIT = (props) => {


    const [file, setFile] = useState(null);
    const { setPan } = useContext(FileContextData);

    const handleFileChange = (event) => {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);
    };

    const handleComplete = (e) => {
        e.preventDefault();
        setPan(file);

        props.triggerNextStep({ value: file });
    };

    return (
        <div>
            <h1 className="text-lg">Upload Your PANCARD Please :</h1>
            <br />
            <form onSubmit={handleComplete}>
                <input type="file"
                    required
                    onChange={handleFileChange}
                />
                <div className="text-center">
                    <br />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-5 rounded">SUBMIT</button>
                </div>
            </form>
        </div>
    );
};

export default PancardSUBMIT;