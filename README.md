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
