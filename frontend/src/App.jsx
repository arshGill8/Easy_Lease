import Form1 from "./components/form1";
import Form2 from "./components/form2";
import Form3 from "./components/form3";
import Form4 from "./components/form4";
import Form5 from "./components/form5";
import Form6 from "./components/form6";
import Form7 from "./components/form7";
import FinalPage from "./components/finalPage";
import { useState } from "react";
import axios from "axios";
import bg from "/office_bg.jpg";

export default function App() {
  const [page, setPage] = useState(1);

  const [landlordList, setLandlordList] = useState([{ landlord: "" }]);

  const [tenantList, setTenantList] = useState([
    { tenantFirstName: "", tenantLastName: "" },
  ]);

  const [rentalData, setRentalData] = useState({
    unit: "",
    streetNumber: "",
    streetName: "",
    city: "",
    postalCode: "",
    parkingSpace: "",
    inCondo: "",
  });

  const [contactData, setContactData] = useState({
    contUnit: "",
    contStreetNum: "",
    contStreetName: "",
    contPO: "",
    contCity: "",
    contProv: "",
    contPost: "",
    emailNotice: false,
    email: "",
    emCont: false,
    emContInfo: "",
  });

  const [leaseTermData, setLeaseTermData] = useState({
    startDate: "",
    tenancyType: "",
    fixedTenDate: "",

    otherTenDetails: "",

    rentDay: "",
    rentType: "",

    otherRentDetails: "",
    baseRent: "",

    parkingRent: "",
    otherUtil1: "",
    otherUtil2: "",
    otherUtil3: "",
    totalRent: "",
    payTo: "",
    payMethod: "",
    partPeriod: "",
    partRent: "",
    partDate: "",
    coverDateFrom: "",
    coverDateTo: "",
    nsfCharge: "",
  });

  const [utilityData, setUtility] = useState({
    gas: "",

    ac: "",

    addStore: "",

    laundry: "",

    guestPark: "",
    otherUtil1: "",
    otherUtilText1: "",
    electricity: "",

    heat: "",
    water: "",
    tenantUtilDetails: "",
  });

  const [depositData, setDepositData] = useState({
    rentDeposit: "",
    rentDiscount: "",
    rentDiscountDesc: "",
    depositAmount: "",
    keyDeposit: "",
    keyDepAmount: "",
    keyDepositDesc: "",
    smoking: "",
    smokingRules: "",
    tenantInsurance: "",

    addTerm: "",
  });

  const [landlordSignList, setLandlordSignList] = useState([
    { landlordName: "", landlordSign: "", landlordSignDate: "" },
  ]);

  const [tenantSignList, setTenantSignList] = useState([
    { tenantName: "", tenantSign: "", tenantSignDate: "" },
  ]);

  const handleLandlordSignChange = (value, index, property) => {
    setLandlordSignList((prevLandlordSignList) =>
      prevLandlordSignList.map((item, i) =>
        i === index
          ? {
              ...item,
              [property]: value,
            }
          : item
      )
    );
  };

  const handleLandlordSignAdd = () => {
    setLandlordSignList([
      ...landlordSignList,
      { landlordName: "", landlordSign: "", landlordSignDate: "" },
    ]);
  };
  const handleLandlordSignRemove = (index) => {
    const list = [...landlordSignList];
    list.splice(index, 1);
    setLandlordSignList(list);
  };
  //tenant signatures
  const handleTenantSignChange = (value, index, property) => {
    setTenantSignList((prevTenantSignList) =>
      prevTenantSignList.map((item, i) =>
        i === index
          ? {
              ...item,
              [property]: value,
            }
          : item
      )
    );
  };
  const handleTenantSignAdd = () => {
    console.log(tenantSignList);
    setTenantSignList([
      ...tenantSignList,
      { tenantName: "", tenantSign: "", tenantSignDate: "" },
    ]);
  };
  const handleTenantSignRemove = (i) => {
    console.log(i);
    const list = [...tenantSignList];
    list.splice(i, 1);
    setTenantSignList(list);
  };

  // landlord names
  const handleLandlordChange = (e, index) => {
    setLandlordList((prevLandlordList) =>
      prevLandlordList.map((item, i) =>
        i === index ? { ...item, [e.target.name]: e.target.value } : item
      )
    );
  };

  const handleLandlordAdd = () => {
    console.log(landlordList);
    setLandlordList([...landlordList, { landlord: "" }]);
  };
  const handleLandlordRemove = (i) => {
    console.log(i);
    const list = [...landlordList];
    list.splice(i, 1);
    setLandlordList(list);
  };

  // tenant names
  const handleTenantChange = (e, index) => {
    setTenantList((prevTenantList) =>
      prevTenantList.map((item, i) =>
        i === index ? { ...item, [e.target.name]: e.target.value } : item
      )
    );
  };

  const handleTenantAdd = () => {
    setTenantList([...tenantList, { tenantFirstName: "", tenantLastName: "" }]);
  };
  const handleTenantRemove = (i) => {
    console.log(i);
    const list = [...tenantList];
    list.splice(i, 1);
    setTenantList(list);
  };

  const handleContactData = (e) => {
    setContactData((prevContactData) => ({
      ...prevContactData,
      [e.target.name]: e.target.value,
    }));
    e.target.name === "emCont" && e.target.value === "No"
      ? setContactData((prevContactData) => ({
          ...prevContactData,
          emContInfo: "",
        }))
      : "";
    e.target.name === "emailNotice" && e.target.value === "No"
      ? setContactData((prevContactData) => ({
          ...prevContactData,
          email: "",
        }))
      : "";
  };

  const handleRentalData = (e) => {
    setRentalData((prevRentalData) => ({
      ...prevRentalData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleLeaseTermData = (e) => {
    setLeaseTermData((prevLeaseTermData) => ({
      ...prevLeaseTermData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUtilityData = (e) => {
    setUtility((prevUtilityData) => ({
      ...prevUtilityData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDepositData = (e) => {
    setDepositData((prevRentalDepositData) => ({
      ...prevRentalDepositData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      landlordList,
      tenantList,
      landlordSignList,
      tenantSignList,
      ...rentalData,
      ...contactData,
      ...leaseTermData,
      ...utilityData,
      ...depositData,
    };

    setPage(page + 1);

    try {
      await axios.post("http://localhost:3001/createForm", data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const handleBack = () => {
    setPage(page - 1);
  };

  const formComponents = {
    1: (
      <Form1
        handleLandlordAdd={handleLandlordAdd}
        handleLandlordRemove={handleLandlordRemove}
        handleLandlordChange={handleLandlordChange}
        landlordList={landlordList}
        handleTenantAdd={handleTenantAdd}
        handleTenantRemove={handleTenantRemove}
        handleTenantChange={handleTenantChange}
        tenantList={tenantList}
      />
    ),

    2: <Form2 rentalData={rentalData} handleRentalData={handleRentalData} />,
    3: (
      <Form3 contactData={contactData} handleContactData={handleContactData} />
    ),
    4: (
      <Form4
        leaseTermData={leaseTermData}
        handleLeaseTermData={handleLeaseTermData}
      />
    ),
    5: (
      <Form5 utilityData={utilityData} handleUtilityData={handleUtilityData} />
    ),

    6: (
      <Form6 depositData={depositData} handleDepositData={handleDepositData} />
    ),
    7: (
      <Form7
        handleLandlordSignAdd={handleLandlordSignAdd}
        handleLandlordSignRemove={handleLandlordSignRemove}
        handleLandlordSignChange={handleLandlordSignChange}
        landlordSignList={landlordSignList}
        handleTenantSignAdd={handleTenantSignAdd}
        handleTenantSignRemove={handleTenantSignRemove}
        handleTenantSignChange={handleTenantSignChange}
        tenantSignList={tenantSignList}
      />
    ),
    8: <FinalPage />,
  };

  const formToRender = formComponents[page] || <Form1 />;

  const formButton = () => {
    if (page === 7) {
      return (
        <button
          className="font-bold	bg-green-500 w-1/2 p-3 rounded hover:bg-green-600 shadow-md "
          onClick={handleSubmit}
        >
          Submit
        </button>
      );
    }
    return (
      <button
        className=" font-bold	text-md text-white bg-green-500 w-1/2 p-3 rounded hover:bg-green-600 shadow-md"
        onClick={handleNext}
      >
        Next
      </button>
    );
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover grid place-items-center h-screen"
    >
      <div
        className="grid justify-items-center  w-full lg:w-4/5	 py-6 px-7  shadow-lg    
    rounded-3xl	
    bg-white "
      >
        {formToRender}
        {page < 8 && (
          <div className="w-full flex justify-center gap-3">
            {page > 1 && (
              <button
                className=" font-bold w-1/2  bg-gray-200 hover:bg-gray-400  p-3 rounded hover: shadow-md"
                onClick={handleBack}
              >
                Go Back
              </button>
            )}
            {formButton()}
          </div>
        )}
        {/* <h2 className="p-3 rounded-full border-2 my-5 mb-4 ">{page}/7</h2> */}
      </div>
    </div>
  );
}
