export default function Form4({ signData, handleSignData }) {
  const {
    signLaName1,
    signLaName2,
    signLaName3,
    signLaName4,
    signLa1,
    signLa2,
    signLa3,
    signLa4,
    signLaDate1,
    signLaDate2,
    signLaDate3,
    signLaDate4,
    signTenName1,
    signTenName2,
    signTenName3,
    signTenName4,
    signTenName5,
    signTenName6,
    signTen1,
    signTen2,
    signTen3,
    signTen4,
    signTenDate1,
    signTenDate2,
    signTenDate3,
    signTenDate4,
  } = signData;

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
      </form>
    </div>
  );
}
