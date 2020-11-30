import { data } from "./data.js";
import { companyCard } from "./component/companycard.js";
import { headerCont } from "./component/header.js";
import { footerCont } from "./component/footer.js";

const divroot = document.getElementById("root");

data.then((employee) => {
  employee.forEach((element) => {
    divroot.appendChild(companyCard(element));
    console.log(element);
  });
});

document.getElementById("header-container").appendChild(headerCont());
document.getElementById("footer-container").appendChild(footerCont());
