let menuItems = [
  {
    name: 'Головна',
    redirect: './index.html'
  },
  {
    name: 'Про нас',
    redirect: './about.html',
    children: [
      {
        name: 'Історія',
        redirect: './story.html'
      },
      {
        name: 'Команда',
        redirect: './team.html'
      }
    ]
  },
  {
    name: 'Послуги',
    redirect: './services.html',
    children: [
      {
        name: 'Веб-розробка',
        redirect: './web.html'
      },
      {
        name: 'Дизайн',
        redirect: './design.html'
      }
    ]
  },
  {
    name: 'Контакти',
    redirect: './contacts.html'
  }
];

window.onload = () => {
  let menu = document.querySelector('.menu');

  parseMenuItems(menu, menuItems);
}

function parseMenuItems(parent, items) {
  let list = document.createElement('ul');
  list.classList.add('menu-list');


  for (let menuItem of items) {
    let element = document.createElement('li');
    element.classList.add('menu-item');
    let elementLink = document.createElement('a');
    elementLink.href = menuItem.redirect;
    elementLink.innerText = menuItem.name;

    element.appendChild(elementLink);
    if ('children' in menuItem) {
      parseMenuItems(element, menuItem.children);
    }

    list.appendChild(element);
  }

  parent.appendChild(list);
}