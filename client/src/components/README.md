# Components Organization

This folder is organized by user roles to maintain clean separation of concerns and make it easy to manage role-specific features.

## Folder Structure

```
components/
├── shared/              # Components used across all roles
│   ├── AppNavbar.jsx   # Main navigation bar
│   ├── Greeting.jsx    # Greeting component
│   └── index.js        # Barrel export
├── patient/            # Patient-specific components
│   ├── WelcomeHeader.jsx
│   ├── ProfileCard.jsx
│   ├── CalendarWidget.jsx
│   ├── StreakTracker.jsx
│   ├── ScheduleSection.jsx
│   ├── WorkoutCard.jsx
│   ├── NotesSection.jsx
│   ├── TodoListCard.jsx
│   ├── AddNewItemForm.jsx
│   ├── ItemDisplay.jsx
│   └── index.js        # Barrel export
├── volunteer/          # Volunteer-specific components (add as needed)
│   └── index.js
├── admin/              # Admin-specific components (add as needed)
│   └── index.js
└── index.js            # Main barrel export that re-exports all

```

## Importing Components

### From Shared Components
```jsx
import { AppNavbar } from '../components/shared';
// or
import AppNavbar from '../components/shared/AppNavbar';
```

### From Patient Components
```jsx
import { WelcomeHeader, ProfileCard } from '../components/patient';
// or
import { WelcomeHeader } from '../components/patient/WelcomeHeader';
```

### From Main Export (all components)
```jsx
import { AppNavbar, WelcomeHeader } from '../components';
```

## Adding New Role-Specific Components

1. Create a new component file in the appropriate role folder
2. Add the export to the role's `index.js` file
3. Optionally add the main `components/index.js` to re-export

Example for a new Volunteer component:
```jsx
// components/volunteer/VolunteerCard.jsx
export function VolunteerCard(props) {
  // ...
}

// Add to components/volunteer/index.js
export { VolunteerCard } from './VolunteerCard';
```

## Benefits

✅ **Clear Organization** - Easy to find components by role
✅ **Scalability** - Simple to add new role-specific components
✅ **Maintainability** - Role separation helps prevent mixing concerns
✅ **Reusability** - Shared components are clearly separated
✅ **Barrel Exports** - Easier, cleaner imports with index.js files
