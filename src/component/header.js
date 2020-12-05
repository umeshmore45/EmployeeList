export const headerCont = () => {
  const div = document.createElement("div");
  div.innerHTML = `<div class="image-container">
          <img src="https://raw.githubusercontent.com/umeshmore45/Blog-Object/e16e6cd34f81447f8696b8004ae93029dc030730/img/logo%20header.svg" alt="logo" />
        </div>
        <nav class= "nav-list">
          <ul class="navigation">
            <li class="items-links"><a href="#" > Home</a></li>
            <li class="items-links"><a href="#" > About</a></li>
            <li class="items-links"><a href="#footer" > Contact-US</a></li>
          </ul>
        </nav>`;
  div.classList.add("header-contain");
  return div;
};
