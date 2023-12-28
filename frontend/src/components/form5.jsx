export default function Form4({ utilityData, handleUtilityData }) {
  const {
    gas,
    ac,

    addStore,

    laundry,

    guestPark,
    otherUtil1,

    otherUtilText1,

    electricity,
    heat,
    water,
    tenantUtilDetails,
  } = utilityData;

  return (
    <div className="w-full">
      <form className="my-4">
        <h1 className="py-4 text-center text-xl flex justify-center mb-4">
          The following services are included in the lawful rent for the rental
          unit, as specified:
        </h1>
        <div className="px-2  rounded   ">
          <div className="flex justify-between  mb-4 ">
            <h3 className="">Gas</h3>

            <div className="flex gap-8 ">
              <div className="flex flex-col gap-2">
                <label>Yes </label>
                <input
                  name="gas"
                  type="radio"
                  value="yes"
                  checked={gas === "yes"}
                  onChange={handleUtilityData}
                  className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                />
              </div>

              <div className="flex flex-col gap-2">
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
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <h3>Air Conditioning</h3>

            <div className="flex gap-8 ">
              <div className="flex flex-col gap-2">
                <label>Yes </label>
                <input
                  name="ac"
                  type="radio"
                  value="yes"
                  checked={ac === "yes"}
                  onChange={handleUtilityData}
                  className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label>No </label>
                <input
                  name="ac"
                  type="radio"
                  value="no"
                  checked={ac === "no"}
                  onChange={handleUtilityData}
                  className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <h3>Additional storage space</h3>

            <div className="flex gap-8 ">
              <div className="flex flex-col gap-2">
                <label>Yes </label>
                <input
                  name="addStore"
                  type="radio"
                  value="yes"
                  checked={addStore === "yes"}
                  onChange={handleUtilityData}
                  className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                />
              </div>
              <div className="flex flex-col gap-2">
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
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <h3>On-Site Laundry</h3>

            <div className="flex gap-8 ">
              <div className="flex flex-col gap-2">
                <label>Yes </label>
                <input
                  name="laundry"
                  type="radio"
                  value="yes"
                  checked={laundry === "yes"}
                  onChange={handleUtilityData}
                  className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                />
              </div>
              <div className="flex flex-col gap-2">
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
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <h3>Guest Parking</h3>
            <div className="flex gap-8 ">
              <div className="flex flex-col gap-2">
                <label>Yes </label>
                <input
                  name="guestPark"
                  type="radio"
                  value="yes"
                  checked={guestPark === "yes"}
                  onChange={handleUtilityData}
                  className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                />
              </div>
              <div className="flex flex-col gap-2">
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
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <h3>Other</h3>
            <div className="flex gap-8 ">
              <div className="flex flex-col gap-2">
                <label>Yes </label>
                <input
                  name="otherUtil1"
                  type="radio"
                  value="yes"
                  checked={otherUtil1 === "yes"}
                  onChange={handleUtilityData}
                  className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                />
              </div>
              <div className="flex flex-col gap-2">
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
            </div>
          </div>
          {otherUtil1 === "yes" && (
            <input
              type="text"
              value={otherUtilText1}
              name="otherUtilText1"
              onChange={handleUtilityData}
              className="w-full block border border-gray-300 text-gray-900 text-md rounded-lg p-2 my-5 focus:shadow-md"
            ></input>
          )}
        </div>
        <h1 className="py-4 text-center text-xl flex justify-center mb-4">
          The following utilities are the responsibility of:{" "}
        </h1>

        <div className="flex justify-between mb-4">
          <h3>Electricity</h3>
          <div className="flex gap-6 ">
            <div className="flex flex-col gap-2">
              <label>LandLord</label>
              <input
                name="electricity"
                type="radio"
                value="landlord"
                checked={electricity === "landlord"}
                onChange={handleUtilityData}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>
            <div className="flex flex-col gap-2">
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
          </div>
        </div>

        <div className="flex justify-between mb-4">
          <h3>Heat</h3>
          <div className="flex gap-6 ">
            <div className="flex flex-col gap-2">
              <label>LandLord </label>

              <input
                name="heat"
                type="radio"
                value="landlord"
                checked={heat === "landlord"}
                onChange={handleUtilityData}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>
            <div className="flex flex-col gap-2">
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
          </div>
        </div>

        <div className="flex justify-between mb-4">
          <h3>Water</h3>
          <div className="flex gap-6 ">
            <div className="flex flex-col gap-2">
              <label>LandLord </label>

              <input
                name="water"
                type="radio"
                value="landlord"
                checked={water === "landlord"}
                onChange={handleUtilityData}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>
            <div className="flex flex-col gap-2">
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
          </div>
        </div>
        <label>
          If the tenant is responsible for any utilities, provide details of the
          arrangement, e.g. tenant sets up account with and pays the utility
          provider, tenant pays a portion of the utility costs (if necessary add
          additional pages):
        </label>
        <input
          type="text"
          value={tenantUtilDetails}
          name="tenantUtilDetails"
          onChange={handleUtilityData}
          className="w-full mt-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
        ></input>
      </form>
    </div>
  );
}
