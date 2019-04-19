export const initMenu = (id: string): void => {
  const navBar = document.getElementById(id);
  const anchors = document.anchors;
  const navBtns = navBar.querySelectorAll('.nav-bar__item');
  const navBtnsArray = Array.from(navBtns);

  const anchorsOffsets = Array.from(anchors).map(anchor => {
    return anchor.offsetTop > document.body.scrollHeight || anchor.offsetTop === 0
      ? document.body.scrollHeight
      : anchor.offsetTop;
  });

  console.log('scroloffset', ': ', anchorsOffsets);

  navBtnsArray.forEach((item, num) => {
    item.addEventListener('click', () => {
      console.log('num', ': ', num);
      window.scrollTo({
        top: anchorsOffsets[num],
        behavior: 'smooth',
      });
    });
  });
};
