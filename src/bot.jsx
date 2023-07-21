import PancardSUBMIT from './components/Pancard';
import GstSUBMIT from './components/Gst';
import CompanySUBMIT from './components/Company';
import OtherSUBMIT from './components/Other';
import PanSEE from './components/Panview';
import GstSEE from './components/Gstview';
import CompanySEE from './components/Companyview';
import OtherSEE from './components/Otherview';
import UploadData from './Api/UploadData';


const begin = [
  {
    id: "1",
    message: "Hello, Give me your information",
    trigger: "2"
  },
  {
    id: "2",
    message: "Please enter your Pancard Details.",
    trigger: "pan"
  },
  {
    id: "pan",
    component: <PancardSUBMIT />,
    asMessage: false,
    trigger: "panvalidation"
  },

  {
    id: "panvalidation",
    user: true,
    validator: (value) => {
      if ((value !== "")) {
        return 'Please upload your Pan file';
      }
      else if (value === "") {
        return 'Please upload your Pan file'
      }
      return true;
    },
    trigger: "gstask"
  },
  {
    id: "gstask",
    message: "Do you want to enter your GST DETAILS ?",
    trigger: "gstyesorno"
  },
  {
    id: "gstyesorno",
    options: [
      { value: 'yes', label: 'Yes', trigger: 'gst' },
      { value: 'no', label: 'No', trigger: 'companyask' },
    ],
  },
  {
    id: "gst",
    component: <GstSUBMIT />,
    asMessage: false,
    trigger: "gstvalidation"
  },

  {
    id: "gstvalidation",
    user: true,
    validator: (value) => {
      if ((value !== "")) {
        return 'Please upload your GST file';
      }
      else if (value === "") {
        return 'Please upload your GST file'
      }
      return true;
    },
    trigger: "companyask"
  },
  {
    id: "companyask",
    message: "Do you want to enter your COMPANY DETAILS ?",
    trigger: "companyyesorno"
  },
  {
    id: "companyyesorno",
    options: [
      { value: 'yes', label: 'Yes', trigger: 'company' },
      { value: 'no', label: 'No', trigger: 'otherask' },
    ],
  },
  {
    id: "company",
    component: <CompanySUBMIT />,
    asMessage: false,
    trigger: "companyvalidation"
  },

  {
    id: "companyvalidation",
    user: true,
    validator: (value) => {
      if ((value !== "")) {
        return 'Please upload your COMPANY file';
      }
      else if (value === "") {
        return 'Please upload your COMPANY file'
      }
      return true;
    },
    trigger: "otherask"
  },
  {
    id: "otherask",
    message: "Do You Want to upload other Document",
    trigger: "optother"
  },
  {
    id: "optother",
    options: [
      { value: 'yes', label: 'Yes', trigger: 'other' },
      { value: 'no', label: 'No', trigger: 'panview' },
    ],
  },
  {
    id: "other",
    component: <OtherSUBMIT />,
    asMessage: false,
    trigger: "othervalidation"
  },

  {
    id: "othervalidation",
    user: true,
    validator: (value) => {
      if ((value !== "")) {
        return 'Please upload your OTHER DOUCUMENTS file';
      }
      else if (value === "") {
        return 'Please upload your OTHER DOUCUMENTS file'
      }
      return true;
    },
    trigger: "panview"
  },
  {
    id: "panview",
    component: (<PanSEE />),
    asMessage: false,
    trigger: "gstview"

  },
  {
    id: "gstview",
    component: (<GstSEE />),
    asMessage: false,
    trigger: "companyview"

  },
  {
    id: "companyview",
    component: (<CompanySEE />),
    asMessage: false,
    trigger: "otherview"

  },
  {
    id: "otherview",
    component: (<OtherSEE />),
    asMessage: false,
    trigger: "updateask"

  },
  {
    id: "updateask",
    message: "Do you want to UPDATE DOCUMENT ?",
    trigger: "15"

  },
  {
    id: "15",
    options: [
      { value: 'yes', label: 'Yes', trigger: 'update' },
      { value: 'no', label: 'No', trigger: 'end-message' },
    ],
    trigger: "update"
  },
  {
    id: "update",
    message: "Which document you want to update",
    trigger: "updateoption"

  },

  {
    id: "updateoption",
    options: [
      { value: 'Pancard', label: 'Pancard', trigger: 'panupdate' },
      { value: 'Gst', label: 'Gst', trigger: 'gstupdate' },
      { value: 'Company', label: 'Company', trigger: 'companyupdate' },
      { value: 'Other', label: 'Other', trigger: 'otherupdate' },
    ],

  },


  // PANCARD UPDATE
  {
    id: "panupdate",
    message: "Please enter your PANCARD DETAILS :",
    trigger: "panupdate1"
  },
  {
    id: "panupdate1",
    component: <PancardSUBMIT />,
    asMessage: false,
    trigger: "panvalidation1"
  },
  {
    id: "panvalidation1",
    user: true,
    validator: (value) => {
      if ((value !== "")) {
        return 'Please upload your Pan file';
      }
      else if (value === "") {
        return 'Please upload your Pan file'
      }
      return true;
    },
    trigger: "gstupdate"
  },

  // GST UPDATE
  {
    id: "gstupdate",
    message: "Please enter your GST DETAILS :",
    trigger: "gstupdate1"
  },
  {
    id: "gstupdate1",
    component: <GstSUBMIT />,
    asMessage: false,
    trigger: "gstvalidation1"
  },
  {
    id: "gstvalidation1",
    user: true,
    validator: (value) => {
      if ((value !== "")) {
        return 'Please upload your GST file';
      }
      else if (value === "") {
        return 'Please upload your GST file'
      }
      return true;
    },
    trigger: "companyupdate"
  },

  // COMPANY DOCUMENT UPDATE
  {
    id: "companyupdate",
    message: "Please enter your COMPANY DETAILS :",
    trigger: "companyupdate1"
  },
  {
    id: "companyupdate1",
    component: <CompanySUBMIT />,
    asMessage: false,
    trigger: "companyvalidation1"
  },
  {
    id: "companyvalidation1",
    user: true,
    validator: (value) => {
      if ((value !== "")) {
        return 'Please upload your COMPANY file';
      }
      else if (value === "") {
        return 'Please upload your COMPANY file'
      }
      return true;
    },
    trigger: "otherupdate"
  },

  // OTHER DOCUMENT UPDATE
  {
    id: "otherupdate",
    message: "Please enter your COMPANY DOCUMENTS :",
    trigger: "otherupdate1"
  },
  {
    id: "otherupdate",
    component: <OtherSUBMIT />,
    asMessage: false,
    trigger: "othervalidation1"
  },
  {
    id: "othervalidation1",
    user: true,
    validator: (value) => {
      if ((value !== "")) {
        return 'Please upload your OTHER DOUCUMENTS file';
      }
      else if (value === "") {
        return 'Please upload your OTHER DOUCUMENTS file'
      }
      return true;
    },
    trigger: "panview"
  },

  // LAST MESSAGE
  {
    id: "end-message",
    message: "DO YOU WANT TO SAVE YOUR DATA",
    trigger: "end-ask"
  },
  {
    id: "end-ask",
    options: [
      { value: 'Done', label: 'Yes, Ready to save', trigger: 'postdata' },
      { value: 'Nope', label: 'No, I want to update', trigger: 'update' },
    ],
    trigger: "askUp"
  },
  {
    id: "postdata",
    component: <UploadData />,
    trigger: "thankyou"
  },
  {
    id: "thankyou",
    message: "Thankyou your data is submitted to DATABASE sucessfully",
    end: true
  },
];

export default begin;