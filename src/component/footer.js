export const footerCont = () => {
  const div = document.createElement("div");
  div.classList.add("footer-container");
  div.innerHTML = `<div class="footer-icon" id ="footer">
          <i class="fab fa-twitter fa-2x"></i>
          <i class="fab fa-linkedin-in fa-2x"></i>
          <i class="fab fa-github fa-2x"></i>
        </div>
        <div class="footer-copy">Copyright © 2020 All Rights Reserved.</div>`;
  return div;
};
