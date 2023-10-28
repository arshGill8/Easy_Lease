import express from "express";
import cors from "cors";
import { PDFDocument } from "pdf-lib";
import { readFile, writeFile } from "fs/promises";

const port = 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/createForm", (req, res) => {
  const {
    llName1,
    llName2,
    llName3,
    llName4,
    llName5,
    tLname1,
    tLname2,
    tLname3,
    tLname4,
    tLname5,
    tFname1,
    tFname2,
    tFname3,
    tFname4,
    tFname5,
    unitNumber,
    streetNum,
    streetName,
    city,
    posCode,
    parking,
    inCondoN,
    inCondoY,
    contUnit,
    contStreetNum,
    contStreetName,
    contPO,
    contCity,
    contProv,
    contPost,
    emailNoticeY,
    emailNoticeN,
    email,
    emCont,
    emCont_Y,
    emCont_N,
    startDate,
    fixedTen,
    fixedTenDate,
    monthTen,
    otherTen,
    rentDay,
    monthly,
    weekly,
    baseRent,
    parkingRent,
    otherUtil1,
    otherUtil2,
    otherUtil3,
    totalRent,
    payTo,
    payMethod,
    partRent,
    partDate,
    coverDateFrom,
    coverDateTo,
    nsfCharge,
    gasN,
    gasY,
    acN,
    acY,
    addStoreN,
    addStoreY,

    laundryN,
    laundryY,
    guestParkN,
    guestParkY,

    elecLandlord,
    elecTenant,
    heatLandlord,
    heatTenant,
    waterLandlord,
    waterTenants,
    reqDepositY,
    reqDepositN,
    rentDiscN,
    rentDiscY,
    amountDep,

    keyDepY,
    keyDepN,
    keyDepAmount,
    smokingN,
    smokingY,

    smokingRules,
    tenInsuranceN,
    tenInsuranceY,
    addTermY,
    addTermN,
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
  } = req.body;

  async function fillForm(input, output) {
    try {
      const pdfDoc = await PDFDocument.load(await readFile(input));

      const form = pdfDoc.getForm();

      // page 1 GET
      const txtseller1 = form.getField("txtseller1");
      const txtseller2 = form.getField("txtseller2");
      const txtseller3 = form.getField("txtseller3");
      const txtseller4 = form.getField("txtseller4");
      const txtLandlord5 = form.getField("txtLandlord5");
      const txtbuyer1Lname = form.getField("txtbuyer1LName");
      const txtbuyer2Lname = form.getField("txtbuyer2LName");
      const txtbuyer3Lname = form.getField("txtbuyer3LName");
      const txtbuyer4Lname = form.getField("txtbuyer4LName");
      const txtTenant5Lname = form.getField("txtTenant5LName");
      const txtbuyer1FName = form.getField("txtbuyer1FName");
      const txtbuyer2FName = form.getField("txtbuyer2FName");
      const txtbuyer3FName = form.getField("txtbuyer3FName");
      const txtbuyer4FName = form.getField("txtbuyer4FName");
      const txtTenant5FName = form.getField("txtTenant5FName");
      const textp_unitNumber = form.getField("txtp_unitNumber");
      const txtp_streetNum = form.getField("txtp_streetnum");
      const txtp_street = form.getField("txtp_street");

      // page 1 SET
      txtseller1.setText(llName1);
      txtseller2.setText(llName2);
      txtseller3.setText(llName3);
      txtseller4.setText(llName4);
      txtLandlord5.setText(llName5);
      txtbuyer1Lname.setText(tLname1);
      txtbuyer2Lname.setText(tLname2);
      txtbuyer3Lname.setText(tLname3);
      txtbuyer4Lname.setText(tLname4);
      txtTenant5Lname.setText(tLname5);
      txtbuyer1FName.setText(tFname1);
      txtbuyer2FName.setText(tFname2);
      txtbuyer3FName.setText(tFname3);
      txtbuyer4FName.setText(tFname4);
      txtTenant5FName.setText(tFname5);
      textp_unitNumber.setText(unitNumber);
      txtp_streetNum.setText(streetNum);
      txtp_street.setText(streetName);

      // page 2 GET
      const txtp_city = form.getField("txtp_city");
      const txtp_zipcode = form.getField("txtp_zipcode");
      const txtParkingInfo = form.getField("txtParkingInfo");
      const inCondo_n = form.getField("inCondo_n");
      const inCondo_y = form.getField("inCondo_y");
      const txtSellUnit = form.getField("txtSellUnit");
      const txtS_streetnum = form.getField("txtS_streetnum");
      const txtS_street = form.getField("txtS_street");
      const txt_POBox = form.getField("txts_POBox");
      const txtS_city = form.getField("txtS_city");
      const txtS_state = form.getField("txtS_state");
      const txtS_zipcode = form.getField("txtS_zipcode");
      const emailDocY = form.getField("emailDocY");
      const emailDocN = form.getField("emailDocN");
      const txtDocEmail = form.getField("txtDocEmail");
      const emContY = form.getField("emContY");
      const emContN = form.getField("emContN");
      const txtEmergencyInfo = form.getField("txtEmergencyInfo");
      const txtLeaseStartDate = form.getField("txtLeaseStartDate");
      const fixedOpt = form.getField("fixedOpt");
      const txtLeaseEndDate = form.getField("txtLeaseEndDate");
      const monthOpt = form.getField("monthOpt");
      const otherOpt = form.getField("otherOpt");
      const txtTenancyOther = form.getField("txtTenancyOther");
      const txtRentPaidOn = form.getField("txtRentPaidOn");
      const rentPaidMonth = form.getField("rentPaidMonth");
      const rentPaidOther = form.getField("rentPaidOther");
      const txtRentOther = form.getField("txtRentOther");
      const txtp_MonthlyRentAmount = form.getField("txtp_MonthlyRentAmount");

      // page 2 SET
      txtp_city.setText(city);
      txtp_zipcode.setText(posCode);
      txtParkingInfo.setText(parking);
      inCondo_n.setText(inCondoN);
      inCondo_y.setText(inCondoY);
      txtSellUnit.setText(contUnit);
      txtS_streetnum.setText(contStreetNum);
      txtS_street.setText(contStreetName);
      txt_POBox.setText(contPO);
      txtS_city.setText(contCity);
      txtS_state.setText(contProv);
      txtS_zipcode.setText(contPost);
      emailDocY.setText(emailNoticeY);
      emailDocN.setText(emailNoticeN);
      txtDocEmail.setText(email);
      emContY.setText(emCont_Y);
      emContN.setText(emCont_N);
      txtEmergencyInfo.setText(emCont);
      txtLeaseStartDate.setText(startDate);
      fixedOpt.setText(fixedTen);
      txtLeaseEndDate.setText(fixedTenDate);
      monthOpt.setText(monthTen);
      otherOpt.setText(otherTen);
      txtTenancyOther.setText(rentDay);
      txtRentPaidOn.setText(city);
      rentPaidMonth.setText(monthly);
      rentPaidOther.setText(weekly);
      txtRentOther.setText();
      txtp_MonthlyRentAmount.setText(baseRent);

      // page 3 GET
      const txtMonthlyParking = form.getField("txtMonthlyParking");
      const txtRentTotal = form.getField("txtRentTotal");
      const txtRentPayable = form.getField("txtRentPayable");
      const txtRentMethod = form.getField("txtRentMethod");
      const txtPartRent = form.getField("txtPartRent");
      const txtPartRentPayOnDate = form.getField("txtPartRentPayOnDate");
      const txtPartRentStartDate = form.getField("txtPartRentStartDate");
      const txtPartRentEndDate = form.getField("txtPartRentEndDate");
      const txtAddFee = form.getField("txtAddFee");
      const gas_n = form.getField("gas_n");
      const gas_y = form.getField("gas_y");
      const ac_n = form.getField("ac_n");
      const ac_y = form.getField("ac_y");
      const addStore_n = form.getField("addStore_n");
      const addStore_y = form.getField("addStore_y");
      const laundry_n = form.getField("laundry_n");
      const laundry_y = form.getField("laundry_y");
      const guesp_n = form.getField("guesp_n");
      const guesp_y = form.getField("guesp_y");

      // page 3 SET
      txtMonthlyParking.setText(parkingRent);
      txtRentTotal.setText(totalRent);
      txtRentPayable.setText(payTo);
      txtRentMethod.setText(payMethod);
      txtPartRent.setText(partRent);
      txtPartRentPayOnDate.setText(partDate);
      txtPartRentStartDate.setText(coverDateFrom);
      txtPartRentEndDate.setText(coverDateTo);
      txtAddFee.setText(nsfCharge);
      gas_n.setText(gasN);
      gas_y.setText(gasY);
      ac_n.setText(acN);
      ac_y.setText(acY);
      addStore_n.setText(addStoreN);
      addStore_y.setText(addStoreY);
      laundry_n.setText(laundryN);
      laundry_y.setText(laundryY);
      guesp_n.setText(guestParkN);
      guesp_y.setText(guestParkY);

      // page 4 GET
      const txtUtilAddDetails = form.getField("txtUtilAddDetails");
      const txtUtilAddDetails2 = form.getField("txtUtilAddDetails2");
      const txtRentDiscAddDetails = form.getField("txtRentDiscAddDetails");
      const elec_land = form.getCheckBox("elec_land");
      const elec_tent = form.getCheckBox("elec_tent");
      const heat_land = form.getCheckBox("heat_land");
      const heat_tent = form.getCheckBox("heat_tent");
      const water_land = form.getCheckBox("water_land");
      const water_tent = form.getCheckBox("water_tent");
      const rent_disc_n = form.getCheckBox("rent_disc_n");
      const rent_disc_y = form.getCheckBox("rent_disc_y");
      const dep_n = form.getCheckBox("dep_n");
      const dep_y = form.getCheckBox("dep_y");
      const dep_amount = form.getField("dep_amount");

      // page 4 SET
      elec_land.setText(elecLandlord);
      elec_tent.setText(elecTenant);
      heat_land.setText(heatLandlord);
      heat_tent.setText(heatTenant);
      water_land.setText(waterLandlord);
      water_tent.setText(waterTenants);
      rent_disc_n.setText(rentDiscN);
      rent_disc_y.setText(rentDiscY);
      dep_n.setText(reqDepositN);
      dep_y.setText(reqDepositY);
      dep_amount.setText(amountDep);

      // page 5 GET
      const txtKeyDeposit = form.getField("txtKeyDeposit");
      // const txtKeyDepositAddDetails = form.getField("txtKeyDepositAddDetails");
      // const txtSmokingAddDetails = form.getField("txtSmokingAddDetails");
      const kdep_n = form.getField("kdep_n");
      const kdep_y = form.getField("kdep_y");
      const smk_n = form.getField("smk_n");
      const smk_y = form.getField("smk_y");
      const insur_n = form.getField("insur_n");
      const insur_y = form.getField("insur_y");

      // page 5 SET
      txtKeyDeposit.setText(keyDepAmount);
      kdep_n.setText(keyDepN);
      kdep_y.setText(keyDepY);
      smk_n.setText(smokingN);
      smk_y.setText(smokingY);
      insur_n.setText(tenInsuranceN);
      insur_y.setText(tenInsuranceY);

      // page 6 GET
      const addTerms_n = form.getCheckBox("addTerms_n");
      const addTerms_y = form.getCheckBox("addTerms_y");

      // page 6 SET
      addTerms_n.setText(addTermN);
      addTerms_y.setText(addTermY);

      // page 7 GET
      const txtsellersig1 = form.getField("txtsellersig1");
      const txtsellersig2 = form.getField("txtsellersig2");
      const txtsellersig3 = form.getField("txtsellersig3");
      const txtsellersig4 = form.getField("txtsellersig4");
      const sig1 = form.getField("sig1");
      const sig2 = form.getField("sig2");
      const sig3 = form.getField("sig3");
      const sig4 = form.getField("sig4");
      const sig1_date = form.getField("sig1_date");
      const sig2_date = form.getField("sig2_date");
      const sig3_date = form.getField("sig3_date");
      const sig4_date = form.getField("sig4_date");

      const txtbuyersig1 = form.getField("txtbuyersig1");
      const txtbuyersig2 = form.getField("txtbuyersig2");
      const txtbuyersig3 = form.getField("txtbuyersig3");
      const txtTenant5Sig = form.getField("txtTenant5Sig");
      const txtTenant6Sig = form.getField("txtTenant6Sig");
      const tsig1 = form.getField("tsig1");
      const tsig2 = form.getField("tsig2");
      const tsig3 = form.getField("tsig3");
      const tsig4 = form.getField("tsig4");
      const tsig5 = form.getField("tsig5");
      const tsig1_date = form.getField("tsig1_date");
      const tsig2_date = form.getField("tsig2_date");
      const tsig3_date = form.getField("tsig3_date");
      const tsig4_date = form.getField("tsig4_date");

      // page 7 SET
      txtsellersig1.setText(signLaName1);
      txtsellersig2.setText(signLaName2);
      txtsellersig3.setText(signLaName3);
      txtsellersig4.setText(signLaName4);
      sig1.setText(signLa1);
      sig2.setText(signLa2);
      sig3.setText(signLa3);
      sig4.setText(signLa4);
      sig1_date.setText(signLaDate1);
      sig2_date.setText(signLaDate2);
      sig3_date.setText(signLaDate3);
      sig4_date.setText(signLaDate4);

      txtbuyersig1.setText(signTenName1);
      txtbuyersig2.setText(signTenName2);
      txtbuyersig3.setText(signTenName3);
      txtTenant5Sig.setText(signTenName4);
      txtTenant6Sig.setText(signTenName5);
      tsig1.setText(signTen1);
      tsig2.setText(signTen2);
      tsig3.setText(signTen3);
      tsig4.setText(signTen4);
      tsig5.setText(signTen5);
      tsig1_date.setText(signTenDate1);
      tsig2_date.setText(signTenDate2);
      tsig3_date.setText(signTenDate3);
      tsig4_date.setText(signTenDate4);

      // const fieldNames = form.getFields().map((field, index) => {
      //   const type = field.constructor.name;
      //   const name = field.getName();
      //   console.log(`${type}: ${name} : ${index}`);
      // });

      const pdfBytes = await pdfDoc.save();

      await writeFile(output, pdfBytes);
    } catch (err) {
      console.log(err);
    }
  }

  fillForm("./lease_doc.pdf", "output.pdf");
});

app.listen(port, console.log(`http://127.0.0.1:${port}`));
