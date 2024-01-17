export default function Form6({ depositData, handleDepositData }) {
  const {
    rentDeposit,
    rentDiscount,
    rentDiscountDesc,
    depositAmount,
    keyDeposit,
    keyDepAmount,
    keyDepositDesc,
    smoking,
    smokingRules,
    tenantInsurance,

    addTerm,
  } = depositData;

  return (
    <div className="w-full">
      <form className="my-4">
        <h1 className="py-4 text-lg text-center ">Rent Discount?</h1>
        <div className="flex justify-center gap-20 ">
          <div className="flex flex-col gap-2 ">
            <label>Yes</label>
            {/* <label>The lawful rent will be discounted as follows: </label> */}
            <input
              name="rentDiscount"
              type="radio"
              value="yes"
              checked={rentDiscount === "yes"}
              onChange={handleDepositData}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>No</label>
            <input
              name="rentDiscount"
              type="radio"
              value="no"
              checked={rentDiscount === "no"}
              onChange={handleDepositData}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />
          </div>
        </div>
        {rentDiscount === "yes" && (
          <div className="flex text-center flex-col mt-5 px-2">
            <label className="block ">
              Provide description of rent discount:
            </label>
            <input
              type="text"
              value={rentDiscountDesc}
              onChange={handleDepositData}
              name="rentDiscountDesc"
              className="w-full mt-2 block border border-gray-300 text-gray-900 text-md rounded-lg p-2 focus:shadow-md"
            />
          </div>
        )}
        <h1 className="py-4 text-lg text-center "> Rent Deposit?</h1>
        <div className="flex  justify-center gap-20 ">
          <div className="flex flex-col gap-2">
            <label>Yes</label>
            <input
              name="rentDeposit"
              type="radio"
              value="yes"
              checked={rentDeposit === "yes"}
              onChange={handleDepositData}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>No</label>
            <input
              name="rentDeposit"
              type="radio"
              value="no"
              checked={rentDeposit === "no"}
              onChange={handleDepositData}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />
          </div>
        </div>
        {rentDeposit === "yes" && (
          <>
            <h2 className=" flex justify-center mt-5">Rent deposit amount</h2>
            <input
              value={depositAmount}
              onChange={handleDepositData}
              type="text"
              name="depositAmount"
              className="w-full mt-2 inline border border-gray-300 text-gray-900 text-md rounded-lg p-2 focus:shadow-md"
              placeholder="$1000"
            />
            <p className="mt-1 text-sm text-center">
              {" "}
              *This can only be applied to the rent for the last rental period
              of the tenancy.
            </p>
          </>
        )}
        <h1 className="py-4 text-lg text-center">Key Deposit?</h1>
        <div className="flex  justify-center gap-20 ">
          <div className="flex flex-col gap-2">
            <label>Yes</label>

            <input
              name="keyDeposit"
              type="radio"
              value="yes"
              checked={keyDeposit === "yes"}
              onChange={handleDepositData}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>No</label>
            <input
              name="keyDeposit"
              type="radio"
              value="no"
              checked={keyDeposit === "no"}
              onChange={handleDepositData}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />
          </div>
        </div>
        {keyDeposit === "yes" && (
          <>
            {" "}
            <h2 className=" flex justify-center mt-5">
              Refundable key deposit amount
            </h2>
            <input
              value={keyDepAmount}
              onChange={handleDepositData}
              type="text"
              name="keyDepAmount"
              className="w-full mt-2 inline border border-gray-300 text-gray-900 text-md rounded-lg p-2 focus:shadow-md"
              placeholder="$75"
            />
            <h2 className=" flex justify-center mt-4">Provide description</h2>
            <input
              value={keyDepositDesc}
              type="text"
              onChange={handleDepositData}
              className="w-full mt-2 inline border border-gray-300 text-gray-900 text-md rounded-lg p-2 focus:shadow-md"
              placeholder="ex. number of keys, access cards and remote
              entry devices"
              name="keyDepositDesc"
            ></input>
          </>
        )}
        <h1 className="py-4 text-lg text-center  ">Smoking Allowed?</h1>
        <div className="flex   justify-center gap-20 ">
          <div className="flex flex-col gap-2">
            <label>Yes</label>
            <input
              name="smoking"
              type="radio"
              value="yes"
              checked={smoking === "yes"}
              onChange={handleDepositData}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>No</label>
            <input
              name="smoking"
              type="radio"
              value="no"
              checked={smoking === "no"}
              onChange={handleDepositData}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />
          </div>
        </div>
        {smoking === "yes" && (
          <div>
            <h2 className=" flex justify-center mt-5">
              Provide description of smoking rules{" "}
            </h2>
            <input
              name="smokingRules"
              value={smokingRules}
              onChange={handleDepositData}
              className="w-full mt-2 inline border border-gray-300 text-gray-900 text-md rounded-lg p-2 focus:shadow-md"
            ></input>
          </div>
        )}
        <h1 className="py-4 text-lg text-center ">
          Tenant's Insurance Required?
        </h1>
        <div className="flex  justify-center gap-20">
          <div className="flex flex-col gap-2">
            <label>Yes </label>
            <input
              name="tenantInsurance"
              type="radio"
              value="yes"
              checked={tenantInsurance === "yes"}
              onChange={handleDepositData}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>No</label>
            <input
              name="tenantInsurance"
              type="radio"
              value="no"
              checked={tenantInsurance === "no"}
              onChange={handleDepositData}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />
          </div>
        </div>{" "}
        <h1 className="py-4 text-lg text-center "> Additional Terms?</h1>
        <div className="flex  justify-center gap-20 ">
          <div className="flex flex-col gap-2">
            <label>Yes</label>
            <input
              name="addTerm"
              type="radio"
              value="yes"
              checked={addTerm === "yes"}
              onChange={handleDepositData}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>No</label>
            <input
              name="addTerm"
              type="radio"
              value="no"
              checked={addTerm === "no"}
              onChange={handleDepositData}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />
          </div>
        </div>
        {addTerm === "yes" && (
          <p className="my-2 text-sm text-center">
            *This tenancy agreement includes an attachment with additional terms
            that the landlord and tenant agreed to.
          </p>
        )}
      </form>
    </div>
  );
}
