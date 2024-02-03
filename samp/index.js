// ПРОФИЛЬ ACTIVE BUTTONS
new Vue({
    el: '#app',
    data: {
      menuLinks: [
        { text: 'Главная', imageSrc: 'src/images/главная.svg', isActive: true },
        { text: 'Игровая рулетка', imageSrc: 'src/images/рулетка.svg', isActive: false },
        { text: 'Склад рулетки', imageSrc: 'src/images/склад.svg', isActive: false },
        { text: 'Безопасность', imageSrc: 'src/images/безопасность.svg', isActive: false },
        { text: 'Выйти', imageSrc: 'src/images/выйти.svg', isActive: false }
      ]
    },
    methods: {
      toggleActive(index) {
        this.menuLinks.forEach((link, i) => {
          link.isActive = i === index;
        });
      }
    }
  });






  