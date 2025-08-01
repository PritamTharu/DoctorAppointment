# Doctor Appointment Booking API

A RESTful API built with **Node.js**, **Express**, and **PostgreSQL** to manage doctors and appointments with strict rules to avoid double booking and overlapping appointments.

---

## Features

- View list of doctors
- View available time slots for a doctor on a given date
- Book appointments ensuring:
  - No double booking for the same time slot
  - No overlapping appointments for the same doctor
- Basic Authentication or JWT-based authentication support
- Modular structure (controllers, services, models, routes)
- Proper error handling with clear messages

---

## Technology Stack

- Node.js (Express)
- PostgreSQL
- JWT
- Day.js (date/time handling)

---

## Setup Instructions

### Prerequisites

- Node.js (v14+)
- PostgreSQL server
- npm or yarn

### Installation Steps

## Step 1
- git clone https://github.com/PritamTharu/DoctorAppointment.git

## Step 2
- cd doctor-appointments

## Step 3
- npm install 

## Step 4
- create .env file and append these files
  - PORT = 3000
  - JWT_SECRET = assignment
  - DB_USER = pritam
  - DB_PASSWORD = password
  - DB_HOST = localhost
  - DB_PORT = 5432
  - DB_NAME = doctorappointment

## Step 5
- Setup the database

## Step 6
- Connect to your PostgreSQL database and run
 - CREATE TABLE doctors (id SERIAL PRIMARY KEY,name VARCHAR(100) NOT NULL,specialization VARCHAR(100));
 - CREATE TABLE appointments (id SERIAL PRIMARY KEY,doctor_id INT REFERENCES doctors(id),patient_name VARCHAR(100) NOT NULL,start_time TIMESTAMP NOT NULL,end_time TIMESTAMP NOT NULL,
    CONSTRAINT no_overlap CHECK (start_time < end_time));

## Step 7
- Insert sample doctors
 - INSERT INTO doctors (name, specialization) VALUES ('Dr. Alice Smith', 'Cardiologist'),('Dr. Bob Johnson', 'Dermatologist'),('Dr. Clara Lee', 'Pediatrician');
- Insert sample appointments
 - INSERT INTO appointments (doctor_id, patient_name, start_time, end_time) VALUES(1, 'John Doe', '2025-08-01 09:00:00', '2025-08-01 09:30:00'),(2, 'Alex Ray', '2025-08-01 11:00:00','2025-08-01 11:30:00');

## Step 8
- start the server `npm start` Server will run at http://localhost:3000




