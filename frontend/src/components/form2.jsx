import React, { useState } from "react";

export default function Form2({ rentalData, handleRentalData }) {
  const {
    unit,
    streetNumber,
    streetName,
    city,
    postalCode,
    parkingSpace,
    inCondo,
  } = rentalData;

  return (
    <div className="w-full">
      <form className="my-8">
        <h1 className=" mb-5 flex justify-center ">Rental Unit Info</h1>
        <p className="mb-5 text-lg">
          The landlord will rent to the tenant the rental unit at
        </p>
        <div>
          <input
            placeholder=" Unit (e.g., unit 1 or basement unit)"
            name="unit"
            type="text"
            onChange={(e) => handleRentalData(e)}
            value={unit}
            className="w-full  mb-4  inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <div>
          <input
            placeholder=" Street Number"
            name="streetNumber"
            type="text"
            onChange={(e) => handleRentalData(e)}
            value={streetNumber}
            className="w-full  mb-4  inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <div>
          <input
            placeholder="Street Name"
            name="streetName"
            type="text"
            onChange={(e) => handleRentalData(e)}
            value={streetName}
            className="w-full  mb-4  inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <div>
          <input
            placeholder="Toronto"
            name="city"
            type="text"
            onChange={(e) => handleRentalData(e)}
            value={city}
            className="w-full  mb-4  inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <div>
          <input
            placeholder="Postal Code"
            name="postalCode"
            type="text"
            onChange={(e) => handleRentalData(e)}
            value={postalCode}
            className="mb-4 w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <div>
          <input
            placeholder="Number of vehicle parking spaces and description (e.g., indoor/outdoor, location)"
            name="parkingSpace"
            type="text"
            onChange={(e) => handleRentalData(e)}
            value={parkingSpace}
            className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>

        <div className=" flex flex-col gap-2.5 items-center rounded border p-3 md:pr-9 border-gray-300">
          <label className=" text-black text-md  w-3/4 text-center ">
            The rental unit is in a condominium?
          </label>
          <div className="flex gap-6 w-1/4 justify-center">
            <div className="flex gap-2">
              <label>Yes</label>
              <input
                name="inCondo"
                type="radio"
                value="yes"
                onChange={handleRentalData}
                checked={inCondo === "yes"}
                className="w-full"
              />
            </div>

            <div className="flex gap-2 ">
              <label className="">No</label>
              <input
                name="inCondo"
                type="radio"
                value="no"
                checked={inCondo === "no"}
                onChange={handleRentalData}
                className="w-full "
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
