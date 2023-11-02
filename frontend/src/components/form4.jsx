export default function Form4({ leaseTermData, handleLeaseTermData }) {
  const {
    startDate,
    tenancyType,
    fixedTenDate,

    otherTenDetails,

    rentDay,
    rentType,

    otherRentDetails,
    baseRent,

    parkingRent,
    otherUtil1,
    otherUtil2,
    otherUtil3,
    totalRent,
    payTo,
    payMethod,
    partPeriod,
    partRent,
    partDate,
    coverDateFrom,
    coverDateTo,
    nsfCharge,
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
            onChange={handleLeaseTermData}
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
            {tenancyType === "fixed" && (
              <>
                <label>ending on:</label>
                <input
                  name="fixedTenDate"
                  type="date"
                  onChange={handleLeaseTermData}
                  value={fixedTenDate}
                  className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                />
              </>
            )}
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
          <p>
            Rent is to be paid on the{" "}
            <input
              placeholder="(e.g., first, second, last) day "
              type="text"
              value={rentDay}
              onChange={handleLeaseTermData}
            ></input>
          </p>
          <label>Each Month</label>
          <input
            type="radio"
            name="rentType"
            value="month"
            checked={rentType === "month"}
            onChange={handleLeaseTermData}
          ></input>
          <label>Other(e.g., weekly)</label>
          <input
            type="radio"
            name="rentType"
            value="other"
            checked={rentType === "other"}
            onChange={handleLeaseTermData}
          ></input>
          {rentType === "other" && (
            <input
              type="text"
              value={otherRentDetails}
              name="otherRentDetails"
              onChange={handleLeaseTermData}
            ></input>
          )}
        </div>

        <div>
          {" "}
          <p>The tenant will pay the following rent:</p>
          <label>Base rent for the rental unit</label>
          <input
            value={baseRent}
            name="baseRent"
            type="text"
            onChange={handleLeaseTermData}
          ></input>
          <label>parking (if applicable)</label>
          <input
            value={parkingRent}
            name="parkingRent"
            type="text"
            onChange={handleLeaseTermData}
          ></input>
          <label>Other services and utilities (specify if applicable):</label>
          <input
            value={otherUtil1}
            name="otherUtil1"
            type="text"
            onChange={handleLeaseTermData}
          ></input>
          <input
            value={otherUtil2}
            name="otherUtil2"
            type="text"
            onChange={handleLeaseTermData}
          ></input>
          <input
            value={otherUtil3}
            name="otherUtil3"
            type="text"
            onChange={handleLeaseTermData}
          ></input>
          <label>Total Rent (Lawful Rent)</label>
          <input
            value={totalRent}
            name="totalRent"
            type="text"
            onChange={handleLeaseTermData}
          ></input>
          <label>Rent is payable to:</label>
          <input
            value={payTo}
            name="payTo"
            type="text"
            onChange={handleLeaseTermData}
          ></input>
          <label>Rent will be paid using the following methods:</label>
          <input
            value={payMethod}
            name="payMethod"
            type="text"
            onChange={handleLeaseTermData}
          ></input>
        </div>
        <div>
          <p>Is the first rental period a partial period?</p>
          <label>yes</label>
          <input
            value="yes"
            name="partPeriod"
            type="radio"
            onChange={handleLeaseTermData}
            checked={partPeriod === "yes"}
          ></input>
          <label>no</label>
          <input
            value="no"
            name="partPeriod"
            type="radio"
            onChange={handleLeaseTermData}
            checked={partPeriod === "no"}
          ></input>
          {partPeriod === "yes" && (
            <div>
              <label>the tenant will pay a partial rent of $</label>
              <input
                value={partRent}
                name="partRent"
                type="text"
                onChange={handleLeaseTermData}
              ></input>
              <label>on</label>
              <input
                type="date"
                value={partDate}
                name="partDate "
                onChange={handleLeaseTermData}
              ></input>
              <label>
                This partial rent covers the rental of the unit from{" "}
              </label>
              <input
                type="date"
                value={coverDateFrom}
                name="coverDateFrom"
                onChange={handleLeaseTermData}
              ></input>

              <span>to</span>
              <input
                onChange={handleLeaseTermData}
                type="date"
                value={coverDateTo}
                name="coverDateTo"
              ></input>
            </div>
          )}
          <label>
            If the tenant’s cheque is returned because of non-sufficient funds
            (NSF), the tenant will have to pay the landlord’s administration
            charge of $
          </label>
          <input
            type="text"
            value={nsfCharge}
            name="nsfCharge"
            onChange={handleLeaseTermData}
          ></input>
          <span> plus any NSF charges made by the landlord's bank.</span>
        </div>
      </form>
    </div>
  );
}
