# React Dashboard

This project is a responsive dashboard built using **React (Vite)**, **Tailwind CSS**, and **Redux Toolkit**.

## Implementation Approach

The project was initialized using **Vite** for fast development and build performance.  
**Tailwind CSS** was configured for styling and responsive layout.

**Redux Toolkit** is used for global state management, making the application easier to scale and maintain.

The project structure is organized into:

- **components** – reusable UI components
- **pages** – main dashboard pages
- **store** – Redux store and slices

## Project Structure & Routing

The project routing is organized using **React Router** and separated into two main layouts:

- **Auth Layout**

  - `/login`
  - `/register`

- **Dashboard Layout**
  - `/dashboard` → Home page
  - `/dashboard/table` → Data table with sorting, filtering, and pagination
  - `/dashboard/charts` → Charts and analytics

This structure helps keep authentication pages separated from the main dashboard while maintaining a scalable architecture.

## Authentication

A login page was implemented using **React Hook Form** and **Zod** for form validation.

## Features

- Email validation
- Password validation (minimum 6 characters)
- Show/Hide password functionality
- Disabled submit button until the form is valid
- Navigation to the dashboard after successful login

### Technologies Used

- React Hook Form
- Zod
- Tailwind CSS
- React Router

## Implemented Components 

The following core UI components were created to build the dashboard layout:

Navbar – Top navigation bar for the dashboard.

DesktopSidebar – Sidebar navigation for desktop screens.

MobileSidebar – Responsive sidebar for mobile devices.

NavigationLinks – Reusable navigation links used inside the sidebar.

DashboardLayout – Main layout that wraps all dashboard pages and includes the sidebar and navbar