export default function Form4({ leaseTermData, handleLeaseTermData }) {
  const {
    startDate,
    fixedTenDate,

    otherTenDetails,
    tenancyType,
  } = leaseTermData;

  return (
    <div className="w-full">
      <form className="my-8">
        <h1 className="py-4 text-xl flex justify-center ">
          Term of Tenancy Agreement
        </h1>

        <div>
          <label className="block my-3 text-md font-medium text-gray-900">
            This tenancy starts on:{" "}
          </label>
          <input
            name="startDate"
            type="date"
            onChange={(e) => handleLeaseTermData(e)}
            value={startDate}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>

        <div>
          <label className="block my-3 text-md font-medium text-gray-900">
            This tenancy agreement is for: (select an option below and fill in
            details as needed)
          </label>

          <div>
            <label>a fixed length of time </label>
            <input
              name="tenancyType"
              type="radio"
              value="fixed"
              checked={tenancyType === "fixed"}
              onChange={handleLeaseTermData}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />
            <label>ending on:</label>

            <input
              name="fixedTenDate"
              type="date"
              onChange={(e) => handleLeaseTermData(e)}
              value={fixedTenDate}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />
          </div>

          <div>
            <label className="">Monthly Tenancy</label>

            <input
              name="tenancyType"
              type="radio"
              value="monthly"
              checked={tenancyType === "monthly"}
              onChange={handleLeaseTermData}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />
            <div>
              <label className="">
                Other (such as daily, weekly, please specify):
              </label>

              <input
                name="tenancyType"
                type="radio"
                value="other"
                checked={tenancyType === "other"}
                onChange={handleLeaseTermData}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />

              {tenancyType === "other" && (
                <input
                  type="text"
                  value={otherTenDetails}
                  name=""
                  onChange={handleLeaseTermData}
                  className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                ></input>
              )}
            </div>
          </div>
        </div>

        <h1>Rent</h1>
        <div>
          {" "}
          <p placeholder="(e.g., first, second, last) day ">
            Rent is to be paid on the <input></input>
          </p>
          <label>Each Month</label>
          <input></input>
          <label htmlFor="">Other</label>
          <input></input>
        </div>
        <div>
          {" "}
          <p>The tenant will pay the following rent:</p>
          <label>Base rent for the rental unit</label>
          <input></input>
          <label>parking (if applicable)</label>
          <input></input>
          <label>Other services and utilities (specify if applicable):</label>
          <input></input>
          <label>Total Rent (Lawful Rent)</label>
          <input></input>
          <label>Rent is payable to:</label>
          <input></input>
          <label>Rent will be paid using the following methods:</label>
          <input></input>
        </div>
        <div>
          <p>Is the first rental period a partial period?</p>
          <label>yes</label>
          <input></input>
          <label>no</label>
          <input></input>
          {yes && (
            <div>
              <label>the tenant will pay a partial rent of $</label>
              <input></input>
              <label>on</label>
              <input></input>
              <label>
                This partial rent covers the rental of the unit from{" "}
              </label>
              <input type="date"></input>
              <span>to</span>
              <input type="date"></input>
            </div>
          )}
          <label>
            If the tenant’s cheque is returned because of non-sufficient funds
            (NSF), the tenant will have to pay the landlord’s administration
            charge of $
          </label>
          <input></input>
          <span> plus any NSF charges made by the landlord's bank.</span>
        </div>
      </form>
    </div>
  );
}
