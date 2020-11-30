export const companyCard = (employee) => {
  const div = document.createElement("div");
  div.classList.add("employee-card");
  div.innerHTML = `<div class="employee-image">
          <img src="${employee.imageUrl}" alt="img" />
        </div>
        <p id="emp${employee.id}">${employee.firstName} ${employee.lastName}</p> 
        <br/>
        <span>${employee.company}</span>`;
  return div;
};
