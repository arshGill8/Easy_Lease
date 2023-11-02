export default function Form4({ depositData, handleDepositData }) {
  const {
    reqDepositY,
    reqDepositN,
    rentDiscount,
    rentDiscountDesc,

    depAmount,

    keyDeposit,

    keyDepAmount,
    keyDepositDesc,
    smokingN,
    smokingY,
    smokingRules,
    tenInsuranceN,
    tenInsuranceY,

    addTermY,
    addTermN,
  } = utilityData;

  return (
    <div className="w-full">
      <form className="my-8">
        <h1 className="py-4 text-xl flex justify-center ">Rent Discounts</h1>
        <div>
          <h3>Select one:</h3>
          <label>There is no rent discount</label>
          <input
            name="rentDiscount"
            type="radio"
            value="no"
            checked={rentDiscount === "no"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />

          <label>The lawful rent will be discounted as follows: </label>
          <input
            name="rentDiscount"
            type="radio"
            value="yes"
            checked={rentDiscount === "yes"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
          <label>
            Provide description of rent discount (if necessary add additional
            pages):
          </label>
          <input type="text" value={rentDiscountDesc} name="rentDiscountDesc" />
        </div>

        <h1 className="py-4 text-xl flex justify-center ">Rent Deposit</h1>
        <div>
          <h3>Select one:</h3>
          <label>A rent deposit is not required.</label>
          <input
            name="keyDeposit"
            type="radio"
            value="no"
            checked={rentDeposit === "no"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
          <div>
            <input
              name="rentDeposit"
              type="radio"
              value="yes"
              checked={rentDeposit === "yes"}
              onChange={handleUtilityData}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />
            <p>
              The tenant will pay a rent deposit of $
              <input value={depAmount} type="text" name="depAmount" /> This can
              only be applied to the rent for the last rental period of the
              tenancy.
            </p>
          </div>
        </div>

        <h1>Key Deposit</h1>
        <div>
          <h3>Select one:</h3>
          <label>A key deposit is not required.</label>
          <input
            name="keyDeposit"
            type="radio"
            value="no"
            checked={keyDeposit === "no"}
            onChange={handleUtilityData}
            className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />

          <div>
            <input
              name="keyDeposit"
              type="radio"
              value="yes"
              checked={keyDeposit === "yes"}
              onChange={handleUtilityData}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />
            <p>
              The tenant will pay a refundable key deposit of $
              <input
                value={keyDepositAmount}
                type="text"
                name="keyDepAmount"
              />{" "}
              to cover the cost of replacing the keys, remote entry devices or
              cards if they are not returned to the landlord at the end of the
              tenancy.
            </p>
          </div>
          <p>
            If a refundable key deposit is required, provide description and
            number of keys, access cards and remote entry devices:
          </p>
          <input
            value={keyDepositDesc}
            type="text"
            onChange={handleDepositData}
          ></input>

          <h1>Smoking</h1>
          <p>
            Under provincial law, smoking is not allowed in any indoor common
            areas of the building. The tenant agrees to these additional rules
            on smoking:{" "}
          </p>
          <p>Select one:</p>
          <label>None</label>
          <input></input>
          <span>or</span>
          <label>Smoking rules</label>
          <input></input>
          <h1>Tenant's Insurance</h1>
          <p>Select one:</p>
          <label>No Tenant Insurance Requirements</label>
          <input></input>
          <span>or</span>
          <label>
            The tenant must have liability insurance at all times. If the
            landlord asks for proof of coverage, the tenant must provide it. It
            is up to the tenant to get contents insurance if they want it.{" "}
          </label>
          <input></input>
          <h1>Additional Terms</h1>
          <p>Select one:</p>
          <label>No Additional Terms</label>
          <input></input>
          <span>or</span>
          <label>
            This tenancy agreement includes an attachment with additional terms
            that the landlord and tenant agreed to.
          </label>
          <input></input>
        </div>
      </form>
    </div>
  );
}
