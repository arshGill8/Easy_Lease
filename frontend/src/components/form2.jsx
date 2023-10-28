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
        <h1 className="py-4 text-xl flex justify-center ">Rental Unit Info</h1>
        <div>
          <label className="block my-3 text-md font-medium text-gray-900">
            Unit
          </label>
          <input
            placeholder="e.g., unit 1 or basement unit"
            name="unit"
            type="text"
            onChange={(e) => handleRentalData(e)}
            value={unit}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <div>
          <label className="block my-3 text-md font-medium text-gray-900">
            Street Number
          </label>
          <input
            placeholder="e.g., unit 1 or basement unit"
            name="streetNumber"
            type="text"
            onChange={(e) => handleRentalData(e)}
            value={streetNumber}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <div>
          <label className="block my-3 text-md font-medium text-gray-900">
            Street Name
          </label>
          <input
            placeholder="e.g., unit 1 or basement unit"
            name="streetName"
            type="text"
            onChange={(e) => handleRentalData(e)}
            value={streetName}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <div>
          <label className="block my-3 text-md font-medium text-gray-900">
            City/Town
          </label>
          <input
            placeholder="e.g., unit 1 or basement unit"
            name="city"
            type="text"
            onChange={(e) => handleRentalData(e)}
            value={city}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <div>
          <label className="block my-3 text-md font-medium text-gray-900">
            Postal Code
          </label>
          <input
            placeholder="e.g., unit 1 or basement unit"
            name="postalCode"
            type="text"
            onChange={(e) => handleRentalData(e)}
            value={postalCode}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <div>
          <label className="block my-3 text-md font-medium text-gray-900">
            Number of vehicle parking spaces and description{" "}
          </label>
          <input
            placeholder=" e.g., indoor/outdoor, location"
            name="parkingSpace"
            type="text"
            onChange={(e) => handleRentalData(e)}
            value={parkingSpace}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>
        <div className="flex items-center">
          <p className="block my-3 text-md font-medium text-gray-900 w-3/4">
            The rental unit is a unit in a condominium.
          </p>
          <div className="flex gap-6 w-1/4">
            <div className="">
              <label>Yes</label>
              <input
                name="inCondo"
                type="radio"
                value="true"
                onChange={handleRentalData}
                checked={inCondo === "true"}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>
            <div className="">
              <label className="">No</label>
              <input
                name="inCondo"
                type="radio"
                value="false"
                checked={inCondo === "false"}
                onChange={handleRentalData}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
