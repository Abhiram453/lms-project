UI Plan for LMS Project
1. Pages Overview

The application has the following main pages:

/signin — Sign-in page for all users

/admin_dashboard — Dashboard for admin users

/student_dashboard — Dashboard for students

2. Reusable Components
Global Components
Component	Purpose
Button	Reusable button component
InputField	Reusable input component
Card	Reusable content card
Layout Components
Component	Purpose
Navbar	Top navigation bar
Sidebar	Navigation sidebar for dashboards
Footer	Footer section
DashboardLayout	Overall wrapper for dashboard pages
MainLayout	Wrapper for general non-dashboard pages
3. Page Components
Component	Used In	Purpose
LoginPage	Sign-in page	UI for user authentication
DashboardPage	Dashboards	Skeleton of dashboard sections
4. Folder Structure
app/
  signin/
    page.js
  admin_dashboard/
    page.js
  student_dashboard/
    page.js

components/
  global/
    button.jsx
    input-field.jsx
    card.jsx

  layout/
    navbar.jsx
    sidebar.jsx
    footer.jsx
    dashboard-layout.jsx
    main-layout.jsx

  page/
    login-page.jsx
    dashboard-page.jsx

5. Design Principles

TailwindCSS for styling

Reusable components

Responsive design

Layout components wrapped around pages

Simple UI skeletons without functionality

6. References

Based on sample outputs provided in assignment.