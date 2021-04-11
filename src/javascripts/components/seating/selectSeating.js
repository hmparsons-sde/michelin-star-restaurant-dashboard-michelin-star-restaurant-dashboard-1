import { getReservations } from '../../helpers/data/reservationData';

const selectReservationTable = (seatingObject = []) => {
  let domString = `<label for="table">Select a Reservation</label>
  <select class="form-control" id="reservation-option" required>
  <option value="">Select a Reservation</option>`;

  // const filterResBySize = (item) => {
  //   const singleTable = seatingObject.forEach((table) => table.table_capacity);
  //   if (item.party_size <= singleTable) {
  //     return true;
  //   }
  // };
  const singleTable = seatingObject.forEach((table) => table.table_capacity);
  console.warn(singleTable);
  getReservations().then((reservationsArray) => {
    reservationsArray.forEach((reservation) => {
      if (reservation.party_size <= singleTable) {
        domString += `<option selected value="${reservation.firebaseKey}">${reservation.name}</option>`;
      }
    });
    domString += '</select>';
    document.querySelector('#select-reservation').innerHTML = domString;
  });
};

export default selectReservationTable;
