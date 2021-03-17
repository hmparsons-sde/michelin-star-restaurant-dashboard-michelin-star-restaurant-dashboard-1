import getIngredients from '../ingredients/ingredientsData';
import showIngredients from '../ingredients/showIngredients';
import getMenuItems from '../menu items/menuData';
<<<<<<< HEAD
import { showUserMenuItems } from '../menu items/menu';
=======
import showMenuItems from '../menu items/menu';
import getSeating from '../seating/seatingData';
import showSeating from '../seating/seating';
>>>>>>> 30790ab6e340f1c8487922bbe83a87ce5546d13a
import showStaff from '../components/showStaff';
import getStaff from '../helpers/staffData';
import getReservations from '../helpers/data/reservationData';
import showReservations from '../components/reservations';

// Events for Navbar, READ only
const navEvents = (user) => {
  // staff view
  document.querySelector('#nav-staff').addEventListener('click', () => {
    getStaff().then((staffArray) => showStaff(staffArray, user));
  });

  // menu view
  document.querySelector('#nav-menu').addEventListener('click', () => {
    getMenuItems().then((menuItemsArray) => showUserMenuItems(menuItemsArray));
  });
  // reservations view
  document.querySelector('#nav-reservations').addEventListener('click', () => {
    getReservations().then((reservations) => showReservations(reservations));
  });

  // ingredient view
  document.querySelector('#nav-ingredients').addEventListener('click', (e) => {
    e.preventDefault();
    getIngredients().then((ingredients) => showIngredients(ingredients));
  });
  // Click event for Seating
  document.querySelector('#nav-seating').addEventListener('click', (e) => {
    e.preventDefault();
    getSeating().then((seats) => showSeating(seats));
  });
};

export default navEvents;
