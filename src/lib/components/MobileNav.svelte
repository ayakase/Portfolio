<div id="circularMenu" class="circular-menu active z-50">
  <!-- svelte-ignore a11y-missing-attribute -->
  <a
    class="floating-btn"
    onclick="document.getElementById('circularMenu').classList.toggle('active');"
  >
    <i class="fa fa-plus"></i>
  </a>

  <menu class="items-wrapper">
    <a href="#" class="menu-item"></a>
    <a href="#technical" class="menu-item"></a>
    <a href="#experience" class="menu-item"></a>
    <a href="#projects" class="menu-item"></a>
    <a href="#contact" class="menu-item">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="1rem"
        class="menu-icon text-white"
        ><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
          d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"
        /></svg
      >
    </a>
  </menu>
</div>

<style>
  .circular-menu {
    position: fixed;
    top: 0em;
    right: 0em;
  }

  .circular-menu .floating-btn {
    display: block;
    width: 5em;
    height: 5em;
    border-bottom-left-radius: 999px;
    backdrop-filter: blur(4px);

    background-color: hsl(4, 98%, 60%);
    box-shadow: 0 2px 5px 0 hsla(0, 0%, 0%, 0.26);
    color: hsl(0, 0%, 100%);
    text-align: center;
    line-height: 3.9;
    cursor: pointer;
    outline: 0;
  }

  .circular-menu.active .floating-btn {
    box-shadow: inset 0 0 3px hsla(0, 0%, 0%, 0.3);
  }

  .circular-menu .floating-btn:active {
    box-shadow: 0 4px 8px 0 hsla(0, 0%, 0%, 0.4);
  }

  .circular-menu .floating-btn i {
    font-size: 1.3em;
    transition: transform 0.2s;
  }

  .circular-menu.active .floating-btn i {
    transform: rotate(-45deg);
  }

  .circular-menu:after {
    display: block;
    content: " ";
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -2;
    background-color: hsl(194, 98%, 60%);
    transition: all 0.3s ease;
  }

  .circular-menu.active:after {
    transform: scale3d(6, 6, 1);
    transition-timing-function: cubic-bezier(0.68, 1.55, 0.265, 1);
  }

  .circular-menu .items-wrapper {
    padding: 0;
    margin: 0;
  }

  .circular-menu .menu-item {
    position: absolute;
    top: 0.2em;
    right: 0.2em;
    z-index: -1;
    display: block;
    text-decoration: none;
    color: hsl(0, 0%, 100%);
    font-size: 1em;
    width: 3em;
    height: 3em;
    border-radius: 50%;
    text-align: center;
    line-height: 3;
    background-color: hsla(0, 0%, 0%, 0.1);
    transition:
      transform 0.3s ease,
      background 0.2s ease;
  }
  .menu-item {
    display: flex !important;
    flex-direction: row;
    background-color: rebeccapurple !important;
    justify-content: center;
    align-items: center;
  }

  .circular-menu .menu-item:hover {
    background-color: hsla(0, 0%, 0%, 0.3);
  }

  .circular-menu.active .menu-item {
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .circular-menu.active .menu-item:nth-child(1) {
    transform: translate3d(-8.5em, 0.1em, 0);
  }

  .circular-menu.active .menu-item:nth-child(2) {
    transform: translate3d(-7.7em, 3.25em, 0);
  }

  .circular-menu.active .menu-item:nth-child(3) {
    transform: translate3d(-6em, 6em, 0);
  }
  .circular-menu.active .menu-item:nth-child(4) {
    transform: translate3d(-3.25em, 7.7em, 0);
  }
  .circular-menu.active .menu-item:nth-child(5) {
    transform: translate3d(-0.1em, 8.5em, 0);
  }
</style>
