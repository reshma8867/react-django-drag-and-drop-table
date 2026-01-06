# 🎯 Student Drag & Drop Ordering System  
Django + React Full-Stack Project

This project is a full-stack web application that demonstrates how to integrate a **Django backend** with a **React frontend** to implement a **drag-and-drop reordering system**. Users can reorder student records using drag and drop in a table-based UI, and the data is served from Django.

---

## 🚀 Features

- Drag and drop student rows using React
- Clean table-based UI
- Student data fetched from Django backend
- Ordering handled using a `position` field
- REST-style API communication
- Clean Git history and best practices
- Beginner-friendly and interview-ready project

---

## 🧠 How It Works

1. Django stores student records in the database with a `position` field.
2. Django exposes an API endpoint that returns students ordered by position.
3. React fetches student data from Django using `fetch()`.
4. Drag and drop is implemented using **@dnd-kit**.
5. When a row is dragged:
   - React updates the UI instantly using state
   - (Optional) Updated order can be sent back to Django to persist changes

---

## 🧰 Tech Stack

### Backend
- Python
- Django
- SQLite
- REST-style JSON APIs

### Frontend
- React (Create React App)
- @dnd-kit (core, sortable, utilities)
- CSS

### Tools
- Git & GitHub
- VS Code
- npm

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | `/api/students/` | Fetch ordered student list |
| POST | `/api/save-order/` | Save updated order (optional) |

---

## 🖱️ Drag & Drop Logic

The drag-and-drop functionality is implemented using **@dnd-kit**, which provides:

- Smooth animations
- Better performance than legacy libraries
- Keyboard accessibility

Key concepts used:
- `DndContext`
- `SortableContext`
- `useSortable`
- `arrayMove`

Each table row becomes a sortable element, allowing natural drag-and-drop behavior.

---

## ⚙️ Setup Instructions

### Backend (Django)

```bash
python -m venv myenv
myenv\Scripts\activate
pip install django
python manage.py migrate
python manage.py runserver
