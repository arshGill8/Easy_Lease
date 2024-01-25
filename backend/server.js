import express from "express";
import cors from "cors";
import { PDFDocument, PDFFont } from "pdf-lib";
import { readFile, writeFile } from "fs/promises";
import { isStringObject } from "util/types";
import open from "open";

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
    landlordList,
    tenantList,
    landlordSignList,
    tenantSignList,
    unit,
    streetNumber,
    streetName,
    city,
    postalCode,
    parkingSpace,
    inCondo,
    contUnit,
    contStreetNum,
    contStreetName,
    contPO,
    contCity,
    contProv,
    contPost,
    emailNotice,
    email,
    emCont,
    emContInfo,
    startDate,
    tenancyType,
    fixedTenDate,
    otherTenDetails,
    rentDay,
    rentType,
    otherRentDetails,
    baseRent,
    parkingRent,
    otherUtil1,
    otherUtil2,
    otherUtil3,
    totalRent,
    payTo,
    payMethod,
    partPeriod,
    partRent,
    partDate,
    coverDateFrom,
    coverDateTo,
    nsfCharge,
    gas,
    ac,
    addStore,
    laundry,
    guestPark,
    otherUtilText1,
    electricity,
    heat,
    water,
    tenantUtilDetails,
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
  } = req.body;

  async function fillForm(input, output) {
    try {
      const pdfDoc = await PDFDocument.load(await readFile(input));

      const form = pdfDoc.getForm();

      // form.getFields().forEach((field) => {
      //   const fieldType = field.constructor.name;
      //   if (fieldType === "Text") {
      //     field.setValue(""); // Set text fields to empty string
      //   } else if (fieldType === "CheckBox") {
      //     field.uncheck(); // Uncheck checkboxes
      //   } else if (fieldType === "Dropdown") {
      //     field.select(0); // Select the first option for dropdowns
      //   } // Add more conditions as needed for other field types
      // });

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
      txtseller1.setText(landlordList[0]?.landlord ?? "");
      txtseller2.setText(landlordList[1]?.landlord ?? "");
      txtseller3.setText(landlordList[2]?.landlord ?? "");
      txtseller4.setText(landlordList[3]?.landlord ?? "");
      txtLandlord5.setText(landlordList[4]?.landlord ?? "");

      txtbuyer1Lname.setText(tenantList[0]?.tenantLastName ?? "");
      txtbuyer2Lname.setText(tenantList[1]?.tenantLastName ?? "");
      txtbuyer3Lname.setText(tenantList[2]?.tenantLastName ?? "");
      txtbuyer4Lname.setText(tenantList[3]?.tenantLastName ?? "");
      txtTenant5Lname.setText(tenantList[4]?.tenantLastName ?? "");

      txtbuyer1FName.setText(tenantList[0]?.tenantFirstName ?? "");
      txtbuyer2FName.setText(tenantList[1]?.tenantFirstName ?? "");
      txtbuyer3FName.setText(tenantList[2]?.tenantFirstName ?? "");
      txtbuyer4FName.setText(tenantList[3]?.tenantFirstName ?? "");
      txtTenant5FName.setText(tenantList[4]?.tenantFirstName ?? "");

      textp_unitNumber.setText(unit);
      txtp_streetNum.setText(streetNumber);
      txtp_street.setText(streetName);

      // page 2 GET
      const txtp_city = form.getField("txtp_city");
      const txtp_zipcode = form.getField("txtp_zipcode");
      const txtParkingInfo = form.getField("txtParkingInfo");
      const inCondo_n = form.getCheckBox("inCondo_n");
      const inCondo_y = form.getCheckBox("inCondo_y");
      const txtSellUnit = form.getField("txtSellUnit");
      const txtS_streetnum = form.getField("txtS_streetnum");
      const txtS_street = form.getField("txtS_street");
      const txt_POBox = form.getField("txts_POBox");
      const txtS_city = form.getField("txtS_city");
      const txtS_state = form.getField("txtS_state");
      const txtS_zipcode = form.getField("txtS_zipcode");
      const emailDocY = form.getCheckBox("emailDocY");
      const emailDocN = form.getCheckBox("emailDocN");
      const txtDocEmail = form.getField("txtDocEmail");
      const emContY = form.getCheckBox("emContY");
      const emContN = form.getCheckBox("emContN");
      const txtEmergencyInfo = form.getField("txtEmergencyInfo");
      const txtLeaseStartDate = form.getField("txtLeaseStartDate");
      const fixedOpt = form.getCheckBox("fixedOpt");
      const txtLeaseEndDate = form.getField("txtLeaseEndDate");
      const monthOpt = form.getCheckBox("monthOpt");
      const otherOpt = form.getCheckBox("otherOpt");
      const txtTenancyOther = form.getField("txtTenancyOther");
      const txtRentPaidOn = form.getField("txtRentPaidOn");
      const rentPaidMonth = form.getCheckBox("rentPaidMonth");
      const rentPaidOther = form.getCheckBox("rentPaidOther");
      const txtRentOther = form.getField("txtRentOther");
      const txtp_MonthlyRentAmount = form.getField("txtp_MonthlyRentAmount");

      // page 2 SET
      txtp_city.setText(city);
      txtp_zipcode.setText(postalCode);
      txtParkingInfo.setText(parkingSpace);
      inCondo === "yes" ? inCondo_y.check() : inCondo_n.check();

      txtSellUnit.setText(contUnit);
      txtS_streetnum.setText(contStreetNum);
      txtS_street.setText(contStreetName);
      txt_POBox.setText(contPO);
      txtS_city.setText(contCity);
      txtS_state.setText(contProv);
      txtS_zipcode.setText(contPost);
      emailNotice === "yes" ? emailDocY.check() : emailDocN.check();

      txtDocEmail.setText(email);

      emCont === "yes" ? emContY.check() : emContN.check();

      txtEmergencyInfo.setText(emContInfo);
      txtLeaseStartDate.setText(startDate);
      tenancyType === "fixed"
        ? fixedOpt.check()
        : tenancyType === "monthly"
        ? monthOpt.check()
        : tenancyType === "other"
        ? otherOpt.check()
        : null;

      txtLeaseEndDate.setText(fixedTenDate);

      txtTenancyOther.setText(otherTenDetails);
      txtRentPaidOn.setText(rentDay);
      rentType === "month"
        ? rentPaidMonth.check()
        : rentType === "other"
        ? rentPaidOther.check()
        : null;
      txtRentOther.setText(otherRentDetails);
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
      const gas_n = form.getCheckBox("gas_n");
      const gas_y = form.getCheckBox("gas_y");
      const ac_n = form.getCheckBox("ac_n");
      const ac_y = form.getCheckBox("ac_y");
      const addStore_n = form.getCheckBox("addStore_n");
      const addStore_y = form.getCheckBox("addStore_y");
      const laundry_n = form.getCheckBox("laundry_n");
      const laundry_y = form.getCheckBox("laundry_y");
      const guesp_n = form.getCheckBox("guesp_n");
      const guesp_y = form.getCheckBox("guesp_y");

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
      gas === "yes" ? gas_y.check() : gas_n.check();
      ac === "yes" ? ac_y.check() : ac_n.check();
      addStore === "yes" ? addStore_y.check() : addStore_n.check();
      laundry === "yes" ? laundry_y.check() : laundry_n.check();
      guestPark === "yes" ? guesp_y.check() : guesp_n.check();

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
      txtUtilAddDetails.setText(otherUtilText1);
      txtRentDiscAddDetails.setText(rentDiscountDesc);

      electricity === "landlord"
        ? elec_land.check()
        : electricity === "tenant"
        ? elec_tent.check()
        : null;

      heat === "landlord"
        ? heat_land.check()
        : heat === "tenant"
        ? heat_tent.check()
        : null;
      water === "landlord"
        ? water_land.check()
        : water === "tenant"
        ? water_tent.check()
        : null;
      rentDeposit === "yes"
        ? dep_y.check()
        : rentDeposit === "no"
        ? dep_n.check()
        : null;

      rentDiscount === "yes"
        ? rent_disc_y.check()
        : rentDiscount === "no"
        ? rent_disc_n.check()
        : null;

      dep_amount.setText(depositAmount);

      // page 5 GET
      const txtKeyDeposit = form.getField("txtKeyDeposit");
      const txtKeyDepositAddDetails = form.getField("txtKeyDepositAddDetails");
      const txtSmokingAddDetails = form.getField("txtSmokingAddDetails");
      const kdep_n = form.getField("kdep_n");
      const kdep_y = form.getField("kdep_y");
      const smk_n = form.getField("smk_n");
      const smk_y = form.getField("smk_y");
      const insur_n = form.getField("insur_n");
      const insur_y = form.getField("insur_y");

      // page 5 SET
      keyDeposit === "yes"
        ? kdep_y.check()
        : keyDeposit === "no"
        ? kdep_n.check()
        : null;
      txtKeyDeposit.setText(keyDepAmount);
      txtKeyDepositAddDetails.setText(keyDepositDesc);
      smoking === "yes"
        ? smk_y.check()
        : smoking === "no"
        ? smk_n.check()
        : null;
      tenantInsurance === "yes"
        ? insur_y.check()
        : tenantInsurance === "no"
        ? insur_n.check()
        : null;
      txtSmokingAddDetails.setText(smokingRules);
      // page 6 GET
      const addTerms_n = form.getCheckBox("addTerms_n");
      const addTerms_y = form.getCheckBox("addTerms_y");

      // page 6 SET
      addTerm === "yes"
        ? addTerms_y.check()
        : addTerm === "no"
        ? addTerms_n.check()
        : null;

      // // page 7 GET
      const txtsellersig1 = form.getField("txtsellersig1");
      const txtsellersig2 = form.getField("txtsellersig2");
      const txtsellersig3 = form.getField("txtsellersig3");
      const txtsellersig4 = form.getField("txtsellersig4");
      // const sig1 = form.getField("sig1");
      // const sig2 = form.getField("sig2");
      // const sig3 = form.getField("sig3");
      // const sig4 = form.getField("sig4");
      const sig1_date = form.getField("sig1_date");
      const sig2_date = form.getField("sig2_date");
      const sig3_date = form.getField("sig3_date");
      const sig4_date = form.getField("sig4_date");

      const txtbuyersig1 = form.getField("txtbuyersig1");
      const txtbuyersig2 = form.getField("txtbuyersig2");
      const txtbuyersig3 = form.getField("txtbuyersig3");
      const txtTenant5Sig = form.getField("txtTenant5Sig");
      const txtTenant6Sig = form.getField("txtTenant6Sig");
      // const tsig1 = form.getField("tsig1");
      // const tsig2 = form.getField("tsig2");
      // const tsig3 = form.getField("tsig3");
      // const tsig4 = form.getField("tsig4");
      // const tsig5 = form.getField("tsig5");
      const tsig1_date = form.getField("tsig1_date");
      const tsig2_date = form.getField("tsig2_date");
      const tsig3_date = form.getField("tsig3_date");
      const tsig4_date = form.getField("tsig4_date");

      // // page 7 SET
      txtsellersig1.setText(landlordSignList[0]?.landlordName ?? "");
      txtsellersig2.setText(landlordSignList[1]?.landlordName ?? "");
      txtsellersig3.setText(landlordSignList[2]?.landlordName ?? "");
      txtsellersig4.setText(landlordSignList[3]?.landlordName ?? "");

      sig1_date.setText(landlordSignList[0]?.landlordSignDate ?? "");
      sig2_date.setText(landlordSignList[1]?.landlordSignDate ?? "");
      sig3_date.setText(landlordSignList[2]?.landlordSignDate ?? "");
      sig4_date.setText(landlordSignList[3]?.landlordSignDate ?? "");

      const signPage = pdfDoc.getPages()[6];

      try {
        await Promise.all(
          landlordSignList.map(async (landlord, index) => {
            try {
              const image = await pdfDoc.embedPng(landlord.landlordSign); // Assuming landlordSign is a Buffer or Uint8Array
              const { width, height } = image.scale(0.17);
              const adjustments = {
                0: 35,
                1: 18,
                2: 10,
                3: 6,
              };

              const count =
                adjustments[index] !== undefined
                  ? adjustments[index]
                  : defaultValue;

              // Calculate Y position based on index
              const yPosition = 555 - index * 50 - count;

              // Draw the image on the page
              signPage.drawImage(image, {
                x: 300, // Adjust the X coordinate as needed
                y: yPosition, // Adjust the Y coordinate as needed
                width,
                height,
              });
            } catch (err) {
              console.log(
                err,
                "Error processing landlord sign at index",
                index
              );
            }
          })
        );
      } catch (error) {
        console.log(
          "An error occurred while processing landLordSignList:",
          error
        );
        // Handle the error at the higher level or rethrow it if necessary
        // throw error;
      }

      try {
        await Promise.all(
          tenantSignList.map(async (tenant, index) => {
            try {
              const image = await pdfDoc.embedPng(tenant.tenantSign);
              const { width, height } = image.scale(0.17);
              const adjustments = {
                0: 35,
                1: 18,
                2: 10,
                3: 6,
              };

              const count =
                adjustments[index] !== undefined
                  ? adjustments[index]
                  : defaultValue;

              const yPosition = 355 - index * 50 - count;

              signPage.drawImage(image, {
                x: 300,
                y: yPosition,
                width,
                height,
              });
            } catch (err) {
              console.log(err, "Error processing tenant sign at index", index);
              // You may choose to handle the error here or throw it to be caught later
              // throw err;
            }
          })
        );
      } catch (error) {
        console.log(
          "An error occurred while processing tenantSignList:",
          error
        );
        // Handle the error at the higher level or rethrow it if necessary
        // throw error;
      }

      txtbuyersig1.setText(tenantSignList[0]?.tenantName ?? "");
      txtbuyersig2.setText(tenantSignList[1]?.tenantName ?? "");
      txtbuyersig3.setText(tenantSignList[2]?.tenantName ?? "");
      txtTenant5Sig.setText(tenantSignList[3]?.tenantName ?? "");
      txtTenant6Sig.setText(tenantSignList[4]?.tenantName ?? "");

      tsig1_date.setText(tenantSignList[0]?.tenantSignDate ?? "");
      tsig2_date.setText(tenantSignList[1]?.tenantSignDate ?? "");
      tsig3_date.setText(tenantSignList[2]?.tenantSignDate ?? "");
      tsig4_date.setText(tenantSignList[3]?.tenantSignDate ?? "");

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

  // open("output.pdf", "_blank");
});

app.listen(port, console.log(`http://127.0.0.1:${port}`));
