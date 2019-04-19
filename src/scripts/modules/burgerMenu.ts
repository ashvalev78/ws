export const initBurgerMenu = (id: string): void => {
  const burgerLink = document.getElementById(id);
  const dropdown = burgerLink.parentElement.querySelector('.dropdown');
  const dropdownTrigger = dropdown.querySelector('.dropdown__trigger');

  const dropdownBtns = dropdown.querySelectorAll('.dropdown-menu__item');
  const anchors = document.anchors;

  const triggers = [burgerLink, dropdownTrigger];
  triggers.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      dropdown.classList.toggle('hidden');
    });
  });

  const anchorsOffsets = Array.from(anchors).map(anchor => {
    return anchor.offsetTop > document.body.scrollHeight || anchor.offsetTop === 0
      ? document.body.scrollHeight
      : anchor.offsetTop - 95;
  });

  dropdownBtns.forEach((item, num) => {
    item.addEventListener('click', () => {
      console.log('num', ': ', num);
      window.scrollTo({
        top: anchorsOffsets[num],
        behavior: 'smooth',
      });
    });
  });
};
