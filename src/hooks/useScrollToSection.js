const useScrollToSection = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  return scrollToSection;
};

export default useScrollToSection;