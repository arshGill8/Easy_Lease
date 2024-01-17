import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai";
import React, { useRef, useEffect, useMemo } from "react";
import SignatureCanvas from "react-signature-canvas";

export default function Form7({
  handleLandlordSignAdd,
  handleLandlordSignRemove,
  landlordSignList,
  handleLandlordSignChange,
  handleTenantSignAdd,
  handleTenantSignRemove,
  tenantSignList,
  handleTenantSignChange,
}) {
  const landSignatureRefs = useRef([]);
  const tenantSignatureRefs = useRef([]);

  const addLandlordSignee = () => {
    handleLandlordSignAdd();
  };

  const removeLandlordSignee = (index) => {
    handleLandlordSignRemove(index);
  };

  const addTenantSignee = () => {
    handleTenantSignAdd();
  };
  const removeTenantSignee = (index) => {
    handleTenantSignRemove(index);
  };
  const handleLandlordEnd = (index) => {
    const signatureDataURL = landSignatureRefs.current
      .getTrimmedCanvas()
      .toDataURL("image/png");

    handleLandlordSignChange(signatureDataURL, index, "landlordSign");
  };
  const handleTenantEnd = (index) => {
    const signatureDataURL = tenantSignatureRefs.current
      .getTrimmedCanvas()
      .toDataURL("image/png");

    handleTenantSignChange(signatureDataURL, index, "tenantSign");
  };

  return (
    <div className="w-full">
      <form className="my-8">
        <div className="mb-10">
          <h1 className="text-center flex justify-center ">
            Landlord(s) Signature
          </h1>
          {landlordSignList.map((singleLandlordSignee, index) => (
            <div key={index}>
              <input
                placeholder="Landlord's Legal Name"
                name="landlordName"
                type="text"
                className="w-full my-4 mt-8 inline border border-gray-300 text-gray-900  rounded-lg p-3 focus:shadow-md"
                onChange={(e) =>
                  handleLandlordSignChange(
                    e.target.value,
                    index,
                    "landlordName"
                  )
                }
                value={singleLandlordSignee.landlordName}
              />
              <div className="overflow-hidden border border-gray-300  rounded-lg my-4 flex flex-col items-center">
                <label className="bg-sky-400 flex overflow-hidden py-2 w-full justify-center">
                  Landlord signature
                </label>
                <SignatureCanvas
                  maxLength={80}
                  penColor="black"
                  canvasProps={{
                    className: "w-4/5 mb-3.5   h-24 border-b-2 border-black ",
                  }}
                  ref={landSignatureRefs}
                  name="landlordSign"
                  onEnd={() => handleLandlordEnd(index)}
                  willReadFrequently={true}
                />
              </div>
              <input
                name="landlordSignDate"
                type="date"
                className="my-4 w-full mt-2 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                onChange={(e) =>
                  handleLandlordSignChange(
                    e.target.value,
                    index,
                    "landlordSignDate"
                  )
                }
                value={singleLandlordSignee.landlordSignDate}
              />

              <div className="flex">
                {landlordSignList.length > 1 && (
                  <button
                    className="md:w-1/6 flex gap-1 items-center justify-center w-2/5 font-medium	 text-white bg-red-500   p-2 py-3 rounded hover:bg-red-600 shadow-md"
                    type="button"
                    onClick={() => removeLandlordSignee(index)}
                  >
                    Remove <AiOutlineCloseCircle />
                  </button>
                )}

                {landlordSignList.length - 1 == index &&
                  landlordSignList.length < 5 && (
                    <button
                      className=" md:w-1/4 ml-auto flex gap-1 items-center justify-center w-2/5  font-medium	 text-white bg-green-500  p-2 py-3 rounded hover:bg-green-600 shadow-md"
                      type="button"
                      onClick={addLandlordSignee}
                    >
                      Landlord <AiOutlinePlusCircle />
                    </button>
                  )}
              </div>
            </div>
          ))}
        </div>
        <div className="mb-10">
          <h1 className="text-center flex justify-center ">
            Tenant(s)
            <br /> Signature
          </h1>

          {tenantSignList.map((singleTenantSignee, index) => (
            <div key={index}>
              <input
                placeholder="Tenant's Legal Name"
                name="tenantName"
                type="text"
                className="w-full my-4 mt-8 inline border border-gray-300 text-gray-900  rounded-lg p-3 focus:shadow-md"
                onChange={(e) =>
                  handleTenantSignChange(e.target.value, index, "tenantName")
                }
                value={singleTenantSignee.tenantName}
              />
              <div className="overflow-hidden border border-gray-300  rounded-lg my-4 flex flex-col items-center">
                <label className="bg-sky-400 flex overflow-hidden py-2 w-full justify-center">
                  Tenant signature
                </label>
                <SignatureCanvas
                  maxLength={80}
                  penColor="black"
                  canvasProps={{
                    className: "w-4/5 mb-3.5   h-24 border-b-2 border-black ",
                  }}
                  ref={tenantSignatureRefs}
                  name="tenantSign"
                  onEnd={() => handleTenantEnd(index)}
                  willReadFrequently={true}
                />
              </div>
              <input
                name="tenantSignDate"
                type="date"
                className="my-4 w-full mt-2 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                onChange={(e) =>
                  handleTenantSignChange(
                    e.target.value,
                    index,
                    "tenantSignDate"
                  )
                }
                value={singleTenantSignee.tenantSignDate}
              />

              <div className="flex">
                {tenantSignList.length > 1 && (
                  <button
                    className="md:w-1/6 flex gap-1 items-center justify-center w-2/5 font-medium	 text-white bg-red-500   p-2 py-3 rounded hover:bg-red-600 shadow-md"
                    type="button"
                    onClick={() => removeTenantSignee(index)}
                  >
                    Remove <AiOutlineCloseCircle />
                  </button>
                )}

                {tenantSignList.length - 1 == index &&
                  tenantSignList.length < 5 && (
                    <button
                      className=" md:w-1/4 ml-auto flex gap-1 items-center justify-center w-2/5  font-medium	 text-white bg-green-500  p-2 py-3 rounded hover:bg-green-600 shadow-md"
                      type="button"
                      onClick={addTenantSignee}
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
