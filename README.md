# Keystone

Keystone is a fast and functional mobile app for tracking work hours, expenses, sleep, and habits in one place. Built with React Native, Expo, and TypeScript, it's an offline-first dashboard that replaces fragmented spreadsheets with powerful visualizations.

## Tech Stack

- React Native & TypeScript
- Expo & Expo Router (File-based routing)
- Tailwind CSS (via NativeWind v4)
- SQLite / local-first storage (Scalable schema designed for future cloud sync)

## Feature Details

### 1. Work Clock
- Circular progress indicator showing target hours completion (updates every second).
- Display inside progress circle: current time, elapsed time, current status, and remaining time.
- Estimated leave time below clock: assumes default 30m lunch break until lunch end is clocked, then updates to actual recorded break duration.
- Log clock-in, lunch start, lunch end, and clock-out times (lunch pauses work duration by default).
- Card component displaying today's clocked events (`clock_name` and `time`).
- Direct button and manual textfield input for logging; past entries editable via modal.
- Configurable settings: target work hours (default 8h/day) and lunch break inclusion.
- Daily log table; weekly and monthly statistics.

### 2. Expense Tracker
- Log title, amount (INR), payment mode, and category (preset: Transit, Food, Groceries, Bills, Shopping, Leisure, Other; DB schema customizable for future categories).
- Direct button and manual textfield input for logging, with date logging (date only, no time); past entries editable via modal.
- Category-wise pie chart, plus weekly and monthly expense graphs.

### 3. Sleep Tracker
- Log sleep and wake-up times using a single unified button + textfield combo.
- Optional text description input about the day before logging sleep.
- Past entries editable via modal; daily, weekly, and monthly statistics.

### 4. Task Tracker
- Daily and weekly task creation with flexible formats.
- Calendar view with scheduled task markers.

## Task Checklist

- [x] Prerequisites & Environment Verification
- [x] Initialize Expo Router Project
- [x] Configure Git & Remote Repository
- [x] Configure Tailwind CSS & Global Theme
- [ ] Build global navigation layout
- [ ] Implement Feature 1: Work Clock
- [ ] Implement Feature 2: Expenses Tracking
- [ ] Implement Feature 3: Sleep Tracking
- [ ] Implement Feature 4: Task Tracking & Calendar View
- [ ] Add Weekly & Monthly Statistics (Charts/Graphs)
- [ ] Local Database Scalability & Redux Integration
- [ ] Final Polishing & Settings (Theme Edit, Light Toggle)
