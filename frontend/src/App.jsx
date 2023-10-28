import Form1 from "./components/form1";
import Form2 from "./components/form2";
import Form3 from "./components/form3";
import Form4 from "./components/form4";
import Form5 from "./components/form5";
import Form6 from "./components/form6";
import Form7 from "./components/form7";
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
    inCondo: false,
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
    fixedTen: "",
    fixedTenDate: "",
    monthTen: "",
    otherTen: "",
    rentDay: "",
    monthly: "",
    weekly: "",
    baseRent: "",

    parkingRent: "",
    otherUtil1: "",
    otherUtil2: "",
    otherUtil3: "",
    totalRent: "",
    payTo: "",
    payMethod: "",
    partRent: "",
    partDate: "",
    coverDateFrom: "",
    coverDateTo: "",
    nsfCharge: "",
  });
  const [utilityData, setUtility] = useState({
    gasN: "",
    gasY: "",
    acN: "",
    acY: "",
    addStoreN: "",
    addStoreY: "",
    laundryN: "",
    laundryY: "",
    guestParkN: "",
    guestParkY: "",
    elecLandlord: "",
    elecTenant: "",
    heatLandlord: "",
    heatTenant: "",
    waterLandlord: "",
    waterTenants: "",
  });
  const [depositData, setDepositData] = useState({
    reqDepositY: "",
    reqDepositN: "",
    rentDiscN: "",
    rentDiscY: "",
    amountDep: "",

    // page 5
    keyDepY: "",
    keyDepN: "",
    keyDepAmount: "",
    smokingN: "",
    smokingY: "",
    smokingRules: "",
    tenInsuranceN: "",
    tenInsuranceY: "",

    // page 6
    addTermY: "",
    addTermN: "",
  });
  const [signData, setSignData] = useState({
    signLaName1: "",
    signLaName2: "",
    signLaName3: "",
    signLaName4: "",
    signLa1: "",
    signLa2: "",
    signLa3: "",
    signLa4: "",
    signLaDate1: "",
    signLaDate2: "",
    signLaDate3: "",
    signLaDate4: "",
    signTenName1: "",
    signTenName2: "",
    signTenName3: "",
    signTenName4: "",
    signTenName5: "",
    signTenName6: "",
    signTen1: "",
    signTen2: "",
    signTen3: "",
    signTen4: "",
    signTenDate1: "",
    signTenDate2: "",
    signTenDate3: "",
    signTenDate4: "",
  });

  // landlord functions
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

  // tenant functions
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
    console.log(e.target.value);
    setContactData((prevContactData) => ({
      ...prevContactData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRentalData = (e) => {
    setRentalData((prevRentalData) => ({
      ...prevRentalData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleLeaseTermData = (e) => {
    setRentalData((prevRentalData) => ({
      ...prevRentalData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUtilityData = (e) => {
    setRentalData((prevRentalData) => ({
      ...prevRentalData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDepositData = (e) => {
    setRentalData((prevRentalData) => ({
      ...prevRentalData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignData = (e, index) => {
    setSignData((prevSignData) =>
      prevSignData.map((item, i) =>
        i === index ? { ...item, [e.target.name]: e.target.value } : item
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = [...landlordList, ...tenantList];
    axios
      .post("http://localhost:3001/createForm", data)
      .then(() => console.log("data sent"))
      .catch((err) => {
        console.log(err);
      });
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
    7: <Form7 signData={signData} handleSignData={handleSignData} />,
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
        className=" font-bold	text-md text-white bg-green-500 w-full mt-4 p-2 py-3 rounded hover:bg-green-600 shadow-md"
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
        <div className="w-full flex justify-center gap-3">
          {page > 1 && (
            <button
              className=" font-bold w-full mt-4bg-gray-300 hover:bg-gray-400 p-2 py-3 rounded hover: shadow-md"
              onClick={handleBack}
            >
              Go Back
            </button>
          )}
          {formButton()}
        </div>
        <h2>{page}/7</h2>
      </div>
    </div>
  );
}
