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
    <div className="w-full mb-2">
      <form className="my-8">
        <h1 className="mb-8 text-center flex justify-center ">
          Address for Giving Notices/Documents to the Landlord
        </h1>

        <div>
          <input
            placeholder=" Unit (e.g., unit 1 or basement unit)"
            name="contUnit"
            type="text"
            onChange={(e) => handleContactData(e)}
            value={contUnit}
            className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>

        <div>
          <input
            placeholder="Street Number"
            name="contStreetNum"
            type="text"
            onChange={(e) => handleContactData(e)}
            value={contStreetNum}
            className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>

        <div>
          <input
            placeholder="Street Name"
            name="contStreetName"
            type="text"
            onChange={(e) => handleContactData(e)}
            value={contStreetName}
            className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>

        <div>
          <input
            placeholder="PO Box"
            name="contPO"
            type="text"
            onChange={(e) => handleContactData(e)}
            value={contPO}
            className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>

        <div>
          <input
            placeholder="City/Town"
            name="contCity"
            type="text"
            onChange={(e) => handleContactData(e)}
            value={contCity}
            className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>

        <div>
          <input
            maxLength={2}
            placeholder="Province"
            name="contProv"
            type="text"
            onChange={(e) => handleContactData(e)}
            value={contProv}
            className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>

        <div>
          <input
            placeholder="Postal Code"
            name="contPost"
            type="text"
            onChange={(e) => handleContactData(e)}
            value={contPost}
            className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>

        <div className="border flex flex-col items-center mt-1 px-2 rounded">
          <p className=" my-4 text-gray-900 text-md p-1 text-center mb-3">
            Both the landlord and tenant agree to receive notices and documents
            by email, where allowed by the Landlord and Tenant Board’s Rules of
            Procedure.
          </p>
          <div className="flex gap-6 w-1/4 justify-center mb-3">
            <div className="flex gap-2">
              <label>Yes</label>
              <input
                name="emailNotice"
                type="radio"
                onChange={handleContactData}
                checked={emailNotice === "yes"}
                value="yes"
                className=""
              />
            </div>

            <div className="flex gap-2">
              <label className="">No</label>
              <input
                name="emailNotice"
                type="radio"
                value="no"
                checked={emailNotice === "no"}
                onChange={handleContactData}
                className=""
              />
            </div>
          </div>

          {emailNotice === "yes" && (
            <>
              <label className="block mb-2 text-md text-gray-900">
                If yes, provide email address:{" "}
              </label>
              <input
                placeholder=""
                name="email"
                type="text"
                onChange={(e) => handleContactData(e)}
                value={email}
                className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-2.5 focus:shadow-md"
              />
            </>
          )}
        </div>

        <div className="border mt-6 flex flex-col items-center px-2 rounded">
          <p className=" my-4 text-gray-900 text-md p-1 px-2 text-center mb-3">
            The landlord is providing phone and/or email contact information for
            emergencies or day-to-day communications:
          </p>

          <div className="flex gap-6 w-1/4 justify-center mb-3 ">
            <div className="flex gap-2">
              <label>Yes</label>
              <input
                name="emCont"
                type="radio"
                value="yes"
                checked={emCont === "yes"}
                onChange={handleContactData}
                className=""
              />
            </div>
            <div className="flex gap-2">
              <label className="">No</label>
              <input
                name="emCont"
                type="radio"
                value="no"
                checked={emCont === "no"}
                onChange={handleContactData}
                className=""
              />
            </div>
          </div>
          {emCont === "yes" && (
            <>
              <label className="block mb-2  text-gray-900">
                If yes, provide information:
              </label>
              <input
                name="emContInfo"
                type="text"
                onChange={handleContactData}
                value={emContInfo}
                className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-2.5 focus:shadow-md"
              />
            </>
          )}
        </div>
      </form>
    </div>
  );
}
