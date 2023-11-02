export default function Form4({ utilityData, handleUtilityData }) {
  const {
    gas,
    ac,

    addStore,

    laundry,

    guestPark,
    otherUtil1,
    otherUtil2,
    otherUtil3,
    otherUtilText1,
    otherUtilText2,
    otherUtilText3,

    electricity,
    heat,
    water,
    utilityDetails,
  } = utilityData;

  return (
    <div className="w-full">
      <form className="my-8">
        <h1 className="py-4 text-xl flex justify-center ">
          The following services are included in the lawful rent for the rental
          unit, as specified:
        </h1>

        <div>
          <h3>Gas</h3>
          <label>Yes </label>
          <input
            name="gas"
            type="radio"
            value="yes"
            checked={gas === "yes"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
          <label>No </label>
          <input
            name="gas"
            type="radio"
            value="no"
            checked={gas === "no"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <div>
          <h3>Air Conditioning</h3>
          <label>Yes </label>
          <input
            name="ac"
            type="radio"
            value="yes"
            checked={ac === "yes"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
          <label>No </label>
          <input
            name="ac"
            type="radio"
            value="no"
            checked={gas === "no"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <div>
          <h3>Additional storage space</h3>
          <label>Yes </label>
          <input
            name="addStore"
            type="radio"
            value="yes"
            checked={addStore === "yes"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
          <label>No </label>
          <input
            name="addStore"
            type="radio"
            value="no"
            checked={addStore === "no"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <div>
          <h3>On-Site Laundry</h3>
          <label>Yes </label>
          <input
            name="laundry"
            type="radio"
            value="yes"
            checked={laundry === "yes"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
          <label>No </label>
          <input
            name="laundry"
            type="radio"
            value="no"
            checked={laundry === "no"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <div>
          <h3>Guest Parking</h3>
          <label>Yes </label>
          <input
            name="guestPark"
            type="radio"
            value="yes"
            checked={guestPark === "yes"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
          <label>No </label>
          <input
            name="guestPark"
            type="radio"
            value="no"
            checked={guestPark === "no"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <div>
          <h3>Other</h3>
          {otherUtil1 === "yes" && (
            <input
              type="text"
              value={otherUtilText1}
              name="otherUtilText1"
              onChange={handleUtilityData}
            ></input>
          )}
          <label>Yes </label>
          <input
            name="otherUtil1"
            type="radio"
            value="yes"
            checked={otherUtil1 === "yes"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
          <label>No </label>
          <input
            name="otherUtil1"
            type="radio"
            value="no"
            checked={otherUtil1 === "no"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <div>
          <h3>Other</h3>
          <input
            type="text"
            value={otherUtilText2}
            name="otherUtilText2"
            onChange={handleUtilityData}
          ></input>
          <label>Yes </label>
          {otherUtil2 === "yes" && (
            <input
              name="otherUtil2"
              type="radio"
              value="yes"
              checked={otherUtil2 === "yes"}
              onChange={handleUtilityData}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />
          )}
          <label>No </label>
          <input
            name="otherUtil2"
            type="radio"
            value="no"
            checked={otherUtil2 === "no"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <div>
          <h3>Other</h3>
          {otherUtil3 === "yes" && (
            <input
              type="text"
              value={otherUtilText3}
              name="otherUtilText3"
              onChange={handleUtilityData}
            ></input>
          )}
          <label>Yes </label>
          <input
            name="otherUtil3"
            type="radio"
            value="yes"
            checked={otherUtil3 === "yes"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
          <label>No </label>
          <input
            name="otherUtil3"
            type="radio"
            value="no"
            checked={otherUtil3 === "no"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <h1>The following utilities are the responsibility of: </h1>
        <div>
          <h3>Electricity</h3>
          <label>LandLord </label>
          <input
            name="electricity"
            type="radio"
            value="landlord"
            checked={electricity === "landlord"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
          <label>Tenant </label>
          <input
            name="electricity"
            type="radio"
            value="tenant"
            checked={electricity === "tenant"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <div>
          <h3>Heat</h3>
          <label>LandLord </label>
          <input
            name="heat"
            type="radio"
            value="landlord"
            checked={heat === "landlord"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
          <label>Tenant </label>
          <input
            name="heat"
            type="radio"
            value="tenant"
            checked={heat === "tenant"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <div>
          <h3>Water</h3>
          <label>LandLord </label>
          <input
            name="water"
            type="radio"
            value="landlord"
            checked={water === "landlord"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
          <label>Tenant </label>
          <input
            name="water"
            type="radio"
            value="tenant"
            checked={water === "tenant"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <label>
          If the tenant is responsible for any utilities, provide details of the
          arrangement, e.g. tenant sets up account with and pays the utility
          provider, tenant pays a portion of the utility costs (if necessary add
          additional pages):
        </label>
        <input type="text" value={utilityDetails}></input>
      </form>
    </div>
  );
}
