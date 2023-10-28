export default function Form3({ contactData, handleContactData }) {
  const {
    contUnit,
    contStreetNum,
    contStreetName,
    contPO,
    contCity,
    contProv,
    contPost,
    emailNotice,
    email,
    emCont,
    emContInfo,
  } = contactData;

  return (
    <div className="w-full">
      <form className="my-8">
        <h1 className="py-4 text-xl flex justify-center ">
          Address for Giving Notices or Documents to the Landlord
        </h1>
        <div>
          <label className="block my-3 text-md font-medium text-gray-900">
            Unit
          </label>
          <input
            placeholder="e.g., unit 1 or basement unit"
            name="contUnit"
            type="text"
            onChange={(e) => handleContactData(e)}
            value={contUnit}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <div>
          <label className="block my-3 text-md font-medium text-gray-900">
            Street Number
          </label>
          <input
            placeholder="e.g., unit 1 or basement unit"
            name="contStreetNum"
            type="text"
            onChange={(e) => handleContactData(e)}
            value={contStreetNum}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <div>
          <label className="block my-3 text-md font-medium text-gray-900">
            Street Name
          </label>
          <input
            placeholder="e.g., unit 1 or basement unit"
            name="contStreetName"
            type="text"
            onChange={(e) => handleContactData(e)}
            value={contStreetName}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>

        <div>
          <label className="block my-3 text-md font-medium text-gray-900">
            PO Box
          </label>
          <input
            placeholder="e.g., unit 1 or basement unit"
            name="contPO"
            type="text"
            onChange={(e) => handleContactData(e)}
            value={contPO}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>

        <div>
          <label className="block my-3 text-md font-medium text-gray-900">
            City/Town
          </label>
          <input
            placeholder="e.g., unit 1 or basement unit"
            name="contCity"
            type="text"
            onChange={(e) => handleContactData(e)}
            value={contCity}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>

        <div>
          <label className="block my-3 text-md font-medium text-gray-900">
            Province
          </label>
          <input
            placeholder=" e.g., indoor/outdoor, location"
            name="contProv"
            type="text"
            onChange={(e) => handleContactData(e)}
            value={contProv}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>

        <div>
          <label className="block my-3 text-md font-medium text-gray-900">
            PostalCode
          </label>
          <input
            placeholder=" e.g., indoor/outdoor, location"
            name="contPost"
            type="text"
            onChange={(e) => handleContactData(e)}
            value={contPost}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>

        <div className="flex items-center">
          <p className="block my-3 text-md font-medium text-gray-900 w-3/4">
            Both the landlord and tenant agree to receive notices and documents
            by email, where allowed by the Landlord and Tenant Board’s Rules of
            Procedure.
          </p>
          <div className="flex gap-6 w-1/4">
            <div className="">
              <label>Yes</label>
              <input
                placeholder=" e.g., indoor/outdoor, location"
                name="emailNotice"
                type="text"
                onChange={(e) => handleContactData(e)}
                value={emailNotice}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>
            <div className="">
              <label className="">No</label>
              <input
                name="emailNotice"
                type="radio"
                value="false"
                checked={!emailNotice}
                onChange={handleContactData}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>
          </div>
          <label className="block my-3 text-md font-medium text-gray-900">
            If yes, provide email addresses:{" "}
          </label>
          <input
            placeholder=" e.g., indoor/outdoor, location"
            name="email"
            type="text"
            onChange={(e) => handleContactData(e)}
            value={email}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <div className="flex items-center">
          <p className="block my-3 text-md font-medium text-gray-900 w-3/4">
            The landlord is providing phone and/or email contact information for
            emergencies or day-to-day communications:The landlord is providing
            phone and/or email contact information for emergencies or day-to-day
            communications:
          </p>
          <div className="flex gap-6 w-1/4">
            <div className="">
              <label>Yes</label>
              <input
                placeholder=" e.g., indoor/outdoor, location"
                name="emCont"
                type="text"
                onChange={(e) => handleContactData(e)}
                value={emCont}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>
            <div className="">
              <label className="">No</label>
              <input
                name="emCont"
                type="radio"
                value="false"
                checked={!emCont}
                onChange={handleContactData}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>
          </div>
          <label className="block my-3 text-md font-medium text-gray-900">
            If yes, provide information:{" "}
          </label>
          <input
            placeholder=" e.g., indoor/outdoor, location"
            name="emContInfo"
            type="text"
            onChange={(e) => handleContactData(e)}
            value={emContInfo}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
      </form>
    </div>
  );
}
