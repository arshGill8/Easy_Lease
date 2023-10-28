import { PDFDocument } from "pdf-lib";
import { readFile, writeFile } from "fs/promises";

async function fillForm(input, output) {
  try {
    const pdfDoc = await PDFDocument.load(await readFile(input));

    const form = pdfDoc.getForm();

    // Modify doc, fill out the form
    const fieldNames = form.getFields().map((field) => {
      const type = field.constructor.name;
      const name = field.getName();
      console.log(`${type}: ${name}`);
    });

    const tFname1 = form.getField("txtbuyer1FName");

    tFname1.setText("Mario");

    const pdfBytes = await pdfDoc.save();

    // write file
    await writeFile(output, pdfBytes);
  } catch (err) {
    console.log(err);
  }
}

fillForm("./lease_doc_unlocked (1).pdf", "output.pdf");
