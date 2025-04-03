const express = require("express");
const cors = require("cors");
require("dotenv").config();

// SALON
const { AddService } = require("./SALON API/AddService");
const { AddPackage } = require("./SALON API/AddSalonPackage");
const { AddSalonContact } = require("./SALON API/AddSalonContact");
const { AddSalonInquiry } = require("./SALON API/AddSalonInquiry");

// FETCH
const { FetchServiceData } = require("./SALON API/FetchServiceData");
const { FetchSalonContact } = require("./SALON API/FetchSalonContact");
const { FetchSalonInq } = require("./SALON API/FetchSalonInq");
const { FetchSalonPackage } = require("./SALON API/FetchSalonPack");

// EDUCATION

// ADD
const { AddTeacher } = require("./EDUCATION API/AddEducationTeacher");
const { AddSubject } = require("./EDUCATION API/AddEducationSubject");
const { AddClass } = require("./EDUCATION API/AddEducationClasses");
const { AddEducationPackage } = require("./EDUCATION API/AddEducationPackage");
const { AddEducationContact } = require("./EDUCATION API/AddEducationContact");
const { AddEducationInquiry } = require("./EDUCATION API/AddEducationInq");

// FETCH
const {
  FetchEducationPackagesByGrade,
} = require("./EDUCATION API/FetchEducationPackagesByGrade");
const {
  FetchEducationPackageDetails,
} = require("./EDUCATION API/FetchEducationPackageDetails");
const {
  FetchEducationTeacherDetails,
} = require("./EDUCATION API/FetchEducationTeacherDetails");

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
// ADD
const { AddMobileBrand } = require("./MOBILE API/AddMobileBrand");
const { AddMobile } = require("./MOBILE API/AddMobileDetails");
const { AddMobileAccessory } = require("./MOBILE API/AddMobileAccessory");
const { AddMobileService } = require("./MOBILE API/AddMobileServices");
const { AddMobileContact } = require("./MOBILE API/AddMobileContact");
const { AddMobileInquiry } = require("./MOBILE API/AddMobileInq");

// FETCH
const { fetchCLPackageDetails } = require("./PHOTO API/fetchCLPackageDetails");

const { fetchMobileServices } = require("./MOBILE API/FetchMobileServices");
const { fetchMobileBrands } = require("./MOBILE API/FetchMobileBrands");
const {
  fetchMobileAccessories,
} = require("./MOBILE API/FetchMoblieAccessories");
const { fetchMobiles } = require("./MOBILE API/FetchMobiles");
const { fetchMobileDetails } = require("./MOBILE API/fetchMobilesDetails");

// PHOTO
// ADD
const { AddCLCategory } = require("./PHOTO API/addCLCategory");
const { AddCLPackages } = require("./PHOTO API/AddCLPackage");
const { AddCLContact } = require("./PHOTO API/addCLContact");
const { AddCLInquiry } = require("./PHOTO API/addCLInquiry");
// FETCH
const { fetchCLCategories } = require("./PHOTO API/FetchClCategories");
const { fetchCLPackages } = require("./PHOTO API/fetchCLPackages");
const { fetchCLInquiries } = require("./PHOTO API/fetchCLInquiry");
const { fetchCLContacts } = require("./PHOTO API/fetchCLContact");
const {
  fetchCLCategoryPackages,
} = require("./PHOTO API/FetchCLCategoryPackages");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 8100;
app.use(cors());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:5173",
      "http://localhost:5174",
    ], // Allowed frontend URLs
    credentials: true, // Allow cookies and sessions to be shared across origins
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  })
);

// PHOTO API BELOW
// Insert API
app.post("/addcategoty", AddCLCategory);
app.post("/addpackage", AddCLPackages);
app.post("/addcontact", AddCLContact);
app.post("/addinquiry", AddCLInquiry);

// Fetch API
app.get("/fetchCaptureLensCategories", fetchCLCategories);
app.get("/fetchCaptureLensPackages/:package_id", fetchCLPackageDetails);
app.get("/fetchCaptureLensPackages", fetchCLPackages);
app.get("/fetchCaptureLensInquiries", fetchCLInquiries);
app.get("/fetchCaptureLensontact", fetchCLContacts);
app.post("/fetchCategoryPackages/:category_id", fetchCLCategoryPackages);

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
app.get("/classes/packages/:classId", FetchEducationPackagesByGrade);
app.get("/packages/:packageId", FetchEducationPackageDetails);
app.get("/teachers/:teacherId", FetchEducationTeacherDetails);

// Insert API
app.post("/addteacher", AddTeacher);
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
app.post("/addmobileservice", AddMobileService);
app.post("/addmobilecontact", AddMobileContact);
app.post("/addmobileinq", AddMobileInquiry);

// fetch Api
app.get("/fetchMobileBrands", fetchMobileBrands);
app.get("/fetchMobiles", fetchMobiles);
app.get("/fetchMobilesDetails/:mobile_id", fetchMobileDetails);
app.get("/fetchMobileServices", fetchMobileServices);
app.get("/fetchMobileAccessories", fetchMobileAccessories);

app.listen(port, () => {
  console.log("Server started on port", port);
});
