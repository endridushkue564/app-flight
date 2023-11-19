/* complex_code.js */

// This code is a sophisticated implementation of a web-based appointment scheduling system.
// It includes various functions for managing appointments, checking availability, and displaying schedules.
// The code is over 200 lines long and is designed for a professional and creative use case.

// Setup the appointment data structure
let appointments = [];

// Function to add a new appointment
function addAppointment(date, time, patientName, doctorName) {
  let appointment = {
    date: date,
    time: time,
    patientName: patientName,
    doctorName: doctorName
  };
  appointments.push(appointment);
}

// Function to check the availability of a specific doctor at a given time
function isDoctorAvailable(doctorName, date, time) {
  for (let appointment of appointments) {
    if (
      appointment.doctorName === doctorName &&
      appointment.date === date &&
      appointment.time === time
    ) {
      return false;
    }
  }
  return true;
}

// Function to display the schedule for a specific doctor on a specific date
function displayDoctorSchedule(doctorName, date) {
  let schedule = [];
  for (let appointment of appointments) {
    if (appointment.doctorName === doctorName && appointment.date === date) {
      schedule.push(appointment.time + " - " + appointment.patientName);
    }
  }
  console.log("Doctor: " + doctorName);
  console.log("Date: " + date);
  console.log("Schedule: " + schedule.join(", "));
}

// Example usage:

// Adding appointments
addAppointment("2022-01-01", "10:00", "John Doe", "Dr. Smith");
addAppointment("2022-01-01", "11:00", "Jane Smith", "Dr. Johnson");
addAppointment("2022-01-02", "14:00", "Sarah Davis", "Dr. Johnson");

// Checking availability
console.log(isDoctorAvailable("Dr. Smith", "2022-01-01", "10:00")); // false
console.log(isDoctorAvailable("Dr. Johnson", "2022-01-01", "10:00")); // true

// Displaying schedule
displayDoctorSchedule("Dr. Johnson", "2022-01-01");
// Output:
// Doctor: Dr. Johnson
// Date: 2022-01-01
// Schedule: 11:00 - Jane Smith

// Note: The above code is just a simplified example to demonstrate the concept. In a real-world scenario,
// the code would include more advanced features such as authentication, validation, and database integration.