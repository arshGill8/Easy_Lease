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
          <h1 className="   flex justify-center ">Landlord(s)</h1>
          {landlordList.map((singleLandlord, i) => (
            <div key={i}>
              <input
                placeholder="Landlord's Legal Name"
                name="landlord"
                type="text"
                onChange={(e) => handleLandlordChange(e, i)}
                value={singleLandlord.landlord}
                className="w-full mb-3.5 mt-8 inline border border-gray-300 text-gray-900  rounded-lg p-3 focus:shadow-md"
              />

              <div className="flex">
                {landlordList.length > 1 && (
                  <button
                    className="md:w-1/6  flex gap-1 items-center justify-center w-2/5 font-medium	 text-white bg-red-500   p-2 py-3 rounded hover:bg-red-600 shadow-md"
                    type="button"
                    onClick={() => removeLandlord(i)}
                  >
                    Remove <AiOutlineCloseCircle />
                  </button>
                )}

                {landlordList.length - 1 == i && landlordList.length < 5 && (
                  <button
                    className="md:w-1/4 ml-auto flex gap-1 items-center justify-center w-2/5  font-medium	 text-white bg-green-500  p-2 py-3 rounded hover:bg-green-600 shadow-md"
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
          <h1 className="flex justify-center py-1  ">Tenant(s)</h1>

          {tenantList.map((singleTenant, i) => (
            <div key={i}>
              <div className="md:flex w-full gap-10">
                <div className="w-full">
                  <input
                    placeholder="Tenant's Legal First Name"
                    name="tenantFirstName"
                    type="text"
                    onChange={(e) => handleTenantChange(e, i)}
                    value={singleTenant.tenantFirstName}
                    className="w-full inline border mb-3.5 mt-8 border-gray-300 text-gray-900  rounded-lg p-3 focus:shadow-md "
                  />
                </div>
                <div className="w-full">
                  <input
                    placeholder="Tenant's Legal Last Name"
                    name="tenantLastName"
                    type="text"
                    onChange={(e) => handleTenantChange(e, i)}
                    value={singleTenant.tenantLastName}
                    className="md:mt-8 w-full inline border my-3.5 border-gray-300 text-gray-900  rounded-lg p-3 focus:shadow-md "
                  />
                </div>
              </div>

              <div className="flex">
                {tenantList.length > 1 && (
                  <button
                    className=" md:w-1/6 flex gap-1 items-center justify-center w-2/5 text-white bg-red-500  p-2 py-3 rounded hover:bg-red-600 shadow-md"
                    type="button"
                    onClick={() => removeTenant(i)}
                  >
                    Remove <AiOutlineCloseCircle />
                  </button>
                )}

                {tenantList.length - 1 == i && tenantList.length < 5 && (
                  <button
                    className=" md:w-1/4 flex gap-1 items-center justify-center w-2/5 ml-auto  font-medium	 text-white bg-green-500  p-2 py-3 rounded hover:bg-green-600 shadow-md"
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
