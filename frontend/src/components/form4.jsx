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
    // otherUtil1,
    // otherUtil2,
    // otherUtil3,
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
    <div className="w-full mb-4">
      <form className="my-8 ">
        <h1 className="mb-8 text-center ">Term of Tenancy Agreement</h1>

        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline  mb-6">
          <label className="md:text-2xl text-lg text-gray-900 mb-2">
            This tenancy starts on:{" "}
          </label>
          <input
            name="startDate"
            type="date"
            onChange={handleLeaseTermData}
            value={startDate}
            className="md:text-xl md:w-1/2 inline border border-gray-300 text-gray-900 rounded-lg p-2 focus:shadow-md"
          />
        </div>

        <div className="border rounded py-4 px-2.5">
          <label className="block mb-5 text-lg p-1 text-center text-gray-900 ">
            This tenancy agreement is for: (select an option below and fill in
            details as needed)
          </label>
          <div>
            <div className="flex mb-5 justify-between mx-1">
              <label className="">Fixed Length</label>
              <input
                name="tenancyType"
                type="radio"
                value="fixed"
                checked={tenancyType === "fixed"}
                onChange={handleLeaseTermData}
                className=""
              />
            </div>

            {tenancyType === "fixed" && (
              <div className="mb-5 mx-1 ">
                <label className="">End Date:</label>
                <input
                  name="fixedTenDate"
                  type="date"
                  onChange={handleLeaseTermData}
                  value={fixedTenDate}
                  className="w-full mt-2 inline border border-gray-300 text-gray-900 text-md rounded-md p-2 focus:shadow-md"
                />
              </div>
            )}

            <div className="flex mb-5 justify-between mx-1">
              <label className="">Monthly Tenancy</label>

              <input
                name="tenancyType"
                type="radio"
                value="monthly"
                checked={tenancyType === "monthly"}
                onChange={handleLeaseTermData}
                className=" "
              />
            </div>

            <div className="mx-1 flex justify-between">
              <label className="">
                Other (such as daily,
                <br /> weekly, please specify):
              </label>

              <input
                name="tenancyType"
                type="radio"
                value="other"
                checked={tenancyType === "other"}
                onChange={handleLeaseTermData}
              />
            </div>

            <div className="">
              {tenancyType === "other" && (
                <input
                  type="text"
                  name="otherTenDetails"
                  placeholder="Weekly"
                  value={otherTenDetails}
                  onChange={(e) => handleLeaseTermData(e)}
                  className=" mt-6  w-full inline border border-gray-300 text-gray-900 text-md rounded-md p-2 focus:shadow-md"
                ></input>
              )}
            </div>
          </div>
        </div>
        <h1 className="text-center my-6">Rent</h1>

        <div className="border px-2.5 py-4 rounded">
          <div className=" text-center mb-3">
            <p className="text-lg mb-2 w-full">Rent is to be paid on the:</p>
            <input
              placeholder="(e.g., first, second, last) day "
              type="text"
              value={rentDay}
              name="rentDay"
              onChange={(e) => handleLeaseTermData(e)}
              className="border w-full  mb-2 border-gray-300 text-gray-900 text-md rounded-md p-3 focus:shadow-md"
            ></input>
          </div>

          <div className="flex justify-between mx-1 mb-5">
            <label className="">Each Month</label>
            <input
              type="radio"
              name="rentType"
              value="month"
              checked={rentType === "month"}
              onChange={handleLeaseTermData}
            ></input>
          </div>
          <div className="flex justify-between mx-1 ">
            <label className="">Other (e.g., Weekly)</label>
            <input
              type="radio"
              name="rentType"
              value="other"
              checked={rentType === "other"}
              onChange={handleLeaseTermData}
            ></input>
          </div>

          {rentType === "other" && (
            <input
              type="text"
              value={otherRentDetails}
              placeholder="Weekly"
              name="otherRentDetails"
              onChange={(e) => handleLeaseTermData(e)}
              className="border w-full mt-2  border-gray-300 text-gray-900 text-md rounded-md p-3 focus:shadow-md"
            ></input>
          )}
        </div>

        <div className="border rounded my-8 py-4 px-2.5">
          {" "}
          <p className="text-center text-lg  mb-5">
            The tenant will pay the following rent:
          </p>
          <div className="mb-5">
            <label className="mx-1">Base rent for the rental unit</label>
            <input
              value={baseRent}
              name="baseRent"
              type="text"
              onChange={handleLeaseTermData}
              className="border w-full mt-2  border-gray-300 text-gray-900 text-md rounded-md p-3 focus:shadow-md"
              placeholder="$1800"
            ></input>
          </div>
          <div className="mb-5">
            <label className=" mx-1">Parking (if applicable)</label>
            <input
              value={parkingRent}
              name="parkingRent"
              type="text"
              onChange={handleLeaseTermData}
              className="border w-full mt-2 border-gray-300 text-gray-900 text-md rounded-md p-3 focus:shadow-md"
            ></input>
          </div>
          {/* <div className="mb-5">
            <label className="mx-0">
              Other services and utilities (specify if applicable):
            </label>
            <input
              value={otherUtil1}
              name="otherUtil1"
              type="text"
              onChange={handleLeaseTermData}
              className="border w-full mt-2  border-gray-300 text-gray-900 text-md rounded-md p-3 focus:shadow-md"
            ></input>
          </div> */}
          <div className="mb-5">
            <label className="">Total Rent (Lawful Rent)</label>
            <input
              value={totalRent}
              name="totalRent"
              type="text"
              onChange={handleLeaseTermData}
              className="border w-full mt-2  border-gray-300 text-gray-900 text-md rounded-md p-3 focus:shadow-md"
            ></input>
          </div>
          <div className="mb-5">
            {" "}
            <label className="">Rent is payable to:</label>
            <input
              value={payTo}
              name="payTo"
              type="text"
              onChange={handleLeaseTermData}
              className="border w-full mt-2  border-gray-300 text-gray-900 text-md rounded-md p-3 focus:shadow-md"
            ></input>
          </div>
          <div className="">
            {" "}
            <label className="">
              Rent will be paid using the following methods:
            </label>
            <input
              value={payMethod}
              name="payMethod"
              type="text"
              onChange={handleLeaseTermData}
              className="border w-full mt-2  border-gray-300 text-gray-900 text-md rounded-md p-3 focus:shadow-md"
            ></input>
          </div>
        </div>

        <div>
          <div className="border px-2.5 py-4 my-8 rounded">
            <p className="text-center text-lg mb-3">
              Is the first rental period a partial period?
            </p>

            <div className="flex gap-6 justify-center">
              <div className="flex gap-2">
                <label>Yes</label>
                <input
                  value="yes"
                  name="partPeriod"
                  type="radio"
                  onChange={handleLeaseTermData}
                  checked={partPeriod === "yes"}
                ></input>
              </div>

              <div className="flex gap-2">
                <label>No</label>
                <input
                  value="no"
                  name="partPeriod"
                  type="radio"
                  onChange={handleLeaseTermData}
                  checked={partPeriod === "no"}
                ></input>
              </div>
            </div>
            {partPeriod === "yes" && (
              <div className="text-center mt-5">
                <label className="">Tenant will pay a partial rent of:</label>
                <input
                  value={partRent}
                  placeholder="$500"
                  name="partRent"
                  type="text"
                  onChange={handleLeaseTermData}
                  className="border w-full my-3 border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                ></input>
                <label>On</label>
                <input
                  type="date"
                  value={partDate}
                  name="partDate"
                  onChange={handleLeaseTermData}
                  className="border w-full my-3  border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                ></input>
                <label className="mx-1">
                  This partial rent covers the rental of the unit from:{" "}
                </label>
                <input
                  type="date"
                  value={coverDateFrom}
                  name="coverDateFrom"
                  onChange={handleLeaseTermData}
                  className="border w-full my-3 border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                ></input>

                <span className="">To</span>
                <input
                  onChange={handleLeaseTermData}
                  type="date"
                  value={coverDateTo}
                  name="coverDateTo"
                  className="border w-full mt-3  border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                ></input>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col border rounded px-2.5 py-4 ">
          <label className="">
            If the tenant’s cheque is returned because of non-sufficient funds
            (NSF), the tenant will have to pay the landlord’s administration
            charge of
          </label>
          <input
            type="text"
            value={nsfCharge}
            name="nsfCharge"
            onChange={handleLeaseTermData}
            className="border w-full my-3  border-gray-300 text-gray-900 text-md rounded-md p-3 focus:shadow-md"
          ></input>
          <span>* Plus any NSF charges made by the landlord's bank.</span>
        </div>
      </form>
    </div>
  );
}
