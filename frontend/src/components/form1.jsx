import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai";
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
        <div className="mb-10">
          <h1 className=" py-2 mb-5 flex justify-center ">Landlord(s)</h1>
          {landlordList.map((singleLandlord, i) => (
            <div key={i}>
              <label className="block my-3  font-medium text-gray-900">
                {i === 0 && "1. Landlord's Legal Name"}
                {i > 0 && ` ${i + 1}. Landlord's Legal Name `}
              </label>
              <input
                placeholder="Enter legal name here"
                name="landlord"
                type="text"
                onChange={(e) => handleLandlordChange(e, i)}
                value={singleLandlord.landlord}
                className="w-full mb-1 inline border border-gray-300 text-gray-900  rounded-lg p-3 focus:shadow-md"
              />

              <div className="flex">
                {landlordList.length > 1 && (
                  <button
                    className="md:w-1/4 flex gap-1 items-center justify-center w-2/5 font-medium	 text-white bg-red-500  mt-4 p-2 py-3 rounded hover:bg-red-600 shadow-md"
                    type="button"
                    onClick={() => removeLandlord(i)}
                  >
                    Remove <AiOutlineCloseCircle />
                  </button>
                )}

                {landlordList.length - 1 == i && landlordList.length < 5 && (
                  <button
                    className="md:w-1/4 ml-auto flex gap-1 items-center justify-center w-2/5  font-medium	 text-white bg-green-500  mt-4 p-2 py-3 rounded hover:bg-green-600 shadow-md"
                    type="button"
                    onClick={addLandlord}
                  >
                    Landlord <AiOutlinePlusCircle />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-10">
          <h1 className="flex justify-center ">Tenant(s)</h1>

          {tenantList.map((singleTenant, i) => (
            <div key={i}>
              <div className="md:flex w-full gap-10">
                <div className="w-full">
                  <label className="block my-3  font-medium text-gray-900">
                    {i === 0 && "1. Tenant's Legal First Name"}
                    {i > 0 && ` ${i + 1}. Tenant's Legal First Name `}
                  </label>
                  <input
                    placeholder="Enter legal first name here"
                    name="tenantFirstName"
                    type="text"
                    onChange={(e) => handleTenantChange(e, i)}
                    value={singleTenant.tenantFirstName}
                    className="w-full inline border border-gray-300 text-gray-900  rounded-lg p-3 focus:shadow-md"
                  />
                </div>
                <div className="w-full">
                  <label className="block my-3  font-medium text-gray-900">
                    {i === 0 && " 1. Tenant's Legal Last Name"}
                    {i > 0 && ` ${i + 1}. Tenant's Legal Last Name `}
                  </label>
                  <input
                    placeholder="Enter legal last name here"
                    name="tenantLastName"
                    type="text"
                    onChange={(e) => handleTenantChange(e, i)}
                    value={singleTenant.tenantLastName}
                    className="w-full inline border border-gray-300text-gray-900  rounded-lg p-3 focus:shadow-md mb-1"
                  />
                </div>
              </div>

              <div className="flex">
                {tenantList.length > 1 && (
                  <button
                    className=" md:w-1/4 flex gap-1 items-center justify-center w-2/5 text-white bg-red-500 mt-4 p-2 py-3 rounded hover:bg-red-600 shadow-md"
                    type="button"
                    onClick={() => removeTenant(i)}
                  >
                    Remove <AiOutlineCloseCircle />
                  </button>
                )}

                {tenantList.length - 1 == i && tenantList.length < 5 && (
                  <button
                    className=" md:w-1/4 flex gap-1 items-center justify-center w-2/5 ml-auto  font-medium	 text-white bg-green-500 mt-4 p-2 py-3 rounded hover:bg-green-600 shadow-md"
                    type="button"
                    onClick={addTenant}
                  >
                    Tenant <AiOutlinePlusCircle />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
