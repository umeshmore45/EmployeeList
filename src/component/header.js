export const headerCont = () => {
  const div = document.createElement("div");
  div.innerHTML = `<div class="image-container">
          <img src="https://raw.githubusercontent.com/umeshmore45/Blog-Object/e16e6cd34f81447f8696b8004ae93029dc030730/img/logo%20header.svg" alt="logo" />
        </div>
        <nav>
          <ul class="navigation">
            <li class="items-links"><a href="#" > Home</a></li>
            <li class="items-links"><a href="#" > About</a></li>
            <li class="items-links"><a href="#" > Contact-US</a></li>
          </ul>
        </nav>
        <div class="ham-contaner">
          <button class="ham"></button>
          <nav class="navbar">
           <ul>
             <li><a class="menuLink" href="#">Home</a></li>
             <li><a class="menuLink" href="#">About</a></li>
             <li><a class="menuLink" href="#">Contacts</a></li>
           </ul>
         </nav>
       </div>`;
  div.classList.add("header-contain");
  return div;
};
