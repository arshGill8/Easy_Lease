export default function Form1({
  handleLandlordAdd,
  handleLandlordRemove,
  handleLandlordChange,
  landlordList,
  handleTenantAdd,
  handleTenantRemove,
  handleTenantChange,
  tenantList,
}) {
  const addLandlord = () => {
    handleLandlordAdd();
  };
  const removeLandlord = (i) => {
    handleLandlordRemove(i);
  };

  const addTenant = () => {
    handleTenantAdd();
  };
  const removeTenant = (i) => {
    handleTenantRemove(i);
  };
  return (
    <div className="w-full">
      <form className="my-8">
        <h1 className="py-4 text-xl flex justify-center ">Landlord(s)</h1>

        {landlordList.map((singleLandlord, i) => (
          <div key={i}>
            <label className="block my-3 text-md font-medium text-gray-900">
              {i === 0 && "1. Landlord's Legal Name"}
              {i > 0 && ` ${i + 1}. Landlord's Legal Name `}
            </label>
            <input
              placeholder="Enter legal name here"
              name="landlord"
              type="text"
              onChange={(e) => handleLandlordChange(e, i)}
              value={singleLandlord.landlord}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />

            <div className="flex gap-3">
              {landlordList.length > 1 && (
                <button
                  className="inline font-bold	text-md text-white bg-red-500 w-full mt-4 p-2 py-3 rounded hover:bg-red-600 shadow-md"
                  type="button"
                  onClick={() => removeLandlord(i)}
                >
                  Remove
                </button>
              )}

              {landlordList.length - 1 === i && landlordList.length < 5 && (
                <button
                  className="inline font-bold	text-md text-white bg-green-500 w-full mt-4 p-2 py-3 rounded hover:bg-green-600 shadow-md"
                  type="button"
                  onClick={addLandlord}
                >
                  Add Landlord
                </button>
              )}
            </div>
          </div>
        ))}

        <h1 className="py-4 text-xl flex justify-center ">Tenant(s)</h1>

        {tenantList.map((singleTenant, i) => (
          <div key={i}>
            <div className="md:flex w-full gap-10">
              <div className="w-full">
                <label className="block my-3 text-md font-medium text-gray-900">
                  {i === 0 && "1. Tenant's Legal First Name"}
                  {i > 0 && ` ${i + 1}. Tenant's Legal First Name `}
                </label>
                <input
                  placeholder="Enter legal first name here"
                  name="tenantFirstName"
                  type="text"
                  onChange={(e) => handleTenantChange(e, i)}
                  value={singleTenant.tenantFirstName}
                  className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                />
              </div>
              <div className="w-full">
                <label className="block my-3 text-md font-medium text-gray-900">
                  {i === 0 && " 1. Tenant's Legal Last Name"}
                  {i > 0 && ` ${i + 1}. Tenant's Legal Last Name `}
                </label>
                <input
                  placeholder="Enter legal last name here"
                  name="tenantLastName"
                  type="text"
                  onChange={(e) => handleTenantChange(e, i)}
                  value={singleTenant.tenantLastName}
                  className="w-full inline border border-gray-300text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                />
              </div>
            </div>

            <div className="flex gap-3">
              {tenantList.length > 1 && (
                <button
                  className="inline font-bold	text-md text-white bg-red-500 w-full mt-4 p-2 py-3 rounded hover:bg-red-600 shadow-md"
                  type="button"
                  onClick={() => removeTenant(i)}
                >
                  Remove
                </button>
              )}

              {tenantList.length - 1 === i && tenantList.length < 5 && (
                <button
                  className="inline font-bold	text-md text-white bg-green-500 w-full mt-4 p-2 py-3 rounded hover:bg-green-600 shadow-md"
                  type="button"
                  onClick={addTenant}
                >
                  Add Landlord
                </button>
              )}
            </div>
          </div>
        ))}
      </form>
    </div>
  );
}
