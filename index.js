const express = require("express");
const cors = require("cors");
require("dotenv").config();

// PHOTO
const { fetchCaptureLensCategories } = require("./PHOTO API/FetchCatData");
const { AddCategory } = require("./PHOTO API/AddCategory");
const { AddPackages } = require("./PHOTO API/AddPackage");
const { fetchCaptureLensPackages } = require("./PHOTO API/FetchPackData");
const { AddContact } = require("./PHOTO API/AddContact");
const { fetchCaptureLensontact } = require("./PHOTO API/FetchContactData");
const { FetchSpecPackageData } = require("./PHOTO API/FetchSpecPackData");
const { AddInquiry } = require("./PHOTO API/AddInquiry");
const { fetchCaptureLensInquiries } = require("./PHOTO API/FetchInqData");

// SALON
const { AddService } = require("./SALON API/AddService");
const { AddPackage } = require("./SALON API/AddSalonPackage");
const { AddSalonContact } = require("./SALON API/AddSalonContact");
const { AddSalonInquiry } = require("./SALON API/AddSalonInquiry");
const { FetchServiceData } = require("./SALON API/FetchServiceData");
const { FetchSalonContact } = require("./SALON API/FetchSalonContact");
const { FetchSalonInq } = require("./SALON API/FetchSalonInq");
const { FetchSalonPackage } = require("./SALON API/FetchSalonPack");

// EDUCATION
const { AddTeacher } = require("./EDUCATION API/AddEducationTeacher");
const { AddSubject } = require("./EDUCATION API/AddEducationSubject");
const { AddClass } = require("./EDUCATION API/AddEducationClasses");
const { AddEducationPackage } = require("./EDUCATION API/AddEducationPackage");
const { AddEducationContact } = require("./EDUCATION API/AddEducationContact");
const { AddEducationInquiry } = require("./EDUCATION API/AddEducationInq");
const {
  FetchEducationClasses,
} = require("./EDUCATION API/FetchEducationClasses");
const {
  FetchEducationTeachers,
} = require("./EDUCATION API/FetchEducationTeachers");
const {
  FetchEducationPackages,
} = require("./EDUCATION API/FetchEducationPackages");
const {
  FetchEducationSubjects,
} = require("./EDUCATION API/FetchEducationSucjects");

// CAR
const { AddBrand } = require("./CAR API/AddCarBrand");
const { AddCar } = require("./CAR API/AddCar");
const { AddPartType } = require("./CAR API/AddPartDetails");
const { AddAccessoryBrand } = require("./CAR API/AddAccessoryBrand");
const { AddAccessory } = require("./CAR API/AddAccessory");
const { AddCarContact } = require("./CAR API/AddCarContact");
const { AddCarInquiry } = require("./CAR API/AddCarInq");
// MOBILE
const { AddMobileBrand } = require("./MOBILE API/AddMobileBrand");
const { AddMobile } = require("./MOBILE API/AddMobileDetails");
const { AddMobileAccessory } = require("./MOBILE API/AddMobileAccessory");
const { AddServiceType } = require("./MOBILE API/AddServiceType");
const { AddMobileService } = require("./MOBILE API/AddMobileServices");
const { AddMobileContact } = require("./MOBILE API/AddMobileContact");
const { AddMobileInquiry } = require("./MOBILE API/AddMobileInq");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 8100;
app.use(cors());

// PHOTO API BELOW
// Insert API
app.post("/addcategoty", AddCategory);
app.post("/addpackage", AddPackages);
app.post("/addcontact", AddContact);
app.post("/addinquiry", AddInquiry);

// Fetch API
app.get("/fetchCaptureLensCategories", fetchCaptureLensCategories);
app.get("/fetchCaptureLensPackages", fetchCaptureLensPackages);
app.get("/fetchCaptureLensInquiries", fetchCaptureLensInquiries),
  app.get("/fetchCaptureLensontact", fetchCaptureLensontact);
app.post("/fetchspecpackdata", FetchSpecPackageData);

// SALON API BELOW

// Insert API
app.post("/addservice", AddService);
app.post("/addsalonpackage", AddPackage);
app.post("/addsaloncontact", AddSalonContact);
app.post("/addsaloninquiry", AddSalonInquiry);

// Fetch API

app.get("/salonservices", FetchServiceData);
app.get("/saloncontact", FetchSalonContact);
app.get("/saloninquiry", FetchSalonInq);
app.get("/salonpackages", FetchSalonPackage);

// EDUCATION API BELOW
// TESTING REQUIRED //

// Fetch Api
app.get("/classes", FetchEducationClasses);
app.get("/teachers", FetchEducationTeachers);
app.get("/packages", FetchEducationPackages);
app.get("/subjects", FetchEducationSubjects);

// Insert API
app.post("/addteaher", AddTeacher);
app.post("/addsubject", AddSubject);
app.post("/addclasses", AddClass);
app.post("/addeducationpackage", AddEducationPackage);
app.post("/addeducationcontact", AddEducationContact);
app.post("/addeducationinq", AddEducationInquiry);

// CAR ACCESSIORIES API BELOW
// TESTING REQUIRED //
//INSERT API
app.post("/addcarbrand", AddBrand);
app.post("/addcar", AddCar);
app.post("/addpartdetail", AddPartType);
app.post("/addaccessorybrand", AddAccessoryBrand);
app.post("/addaccessory", AddAccessory);
app.post("/addcarcontactus", AddCarContact);
app.post("/addcarinq", AddCarInquiry);

// MOBILE API BELOW
// TESTING REQUIRED //
// INSERT API

app.post("/addmobilebrand", AddMobileBrand);
app.post("/addmobiledetails", AddMobile);
app.post("/addmobileaccessory", AddMobileAccessory);
app.post("/addservicetype", AddServiceType);
app.post("/addmobileservice", AddMobileService);
app.post("/addmobilecontact", AddMobileContact);
app.post("/addmobileinq", AddMobileInquiry);

app.listen(port, () => {
  console.log("Server started on port", port);
});
