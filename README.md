# 🧱 Dev Stack Builder

A modern, responsive web application designed for web developers and engineering teams to discover, evaluate, and curate their project tech stacks efficiently. Built for Programming Hero Assignment 5.

## 📝 Project Overview
**Dev Stack Builder** provides an interactive interface to explore modern software technologies across multiple domain categories including Frontend, Backend, Database, Styling, DevOps, Languages, and Tools. Users can select technologies, inspect key metrics, and dynamically curate a custom technology stack with real-time feedback and state management.

## 🛠️ Technologies & Tools Used
* **React.js** (Vite build tool)
* **Tailwind CSS** (Utility-first styling)
* **React-Toastify** (NPM package for notification alerts)
* **JSON** (Asynchronous data fetching)

## ✨ Key Features
1. **Dynamic JSON Data Loading:** Asynchronously fetches technology items from a local JSON dataset using React's `useEffect` hook, complete with a fallback loading state spinner.
2. **Interactive Stack Management:** Users can add tools to a dynamic side panel stack. Duplicate entries are prevented with conditional checks, and added items can be cleared individually or in bulk.
3. **Toast Alerts & Unified Brand Theme:** Implements `react-toastify` for state action alerts (add, remove, duplicate attempts) and uses a single centralized CSS gradient utility class for consistent brand styling across all primary UI components.

---

 ## FAQ - React Concepts & Conceptual Answers

### 1. What is JSX, and why is it used in React?
JSX is JavaScript XML. It looks like HTML but we write it inside JavaScript. We use JSX in React because it makes it easy to create UI. We can write HTML and JS together in one file, so code is simple and readable.

### 2. What is the difference between props and state?
Props is like data we send from parent to child component. Child cannot change props. It is read-only.
State is data inside a component. Component can change its own state. When state changes, component re-renders. So props is for sending data, state is for managing data.

### 3. What does the useState hook do, and where did you use it in this project?
useState is a hook to create state in functional component. It gives us a variable and a function to update it.
In my project I used useState in many places. Like for technologies `const [techs, setTechs] = useState([])` and for selected stack `const [selected, setSelected] = useState([])`. When user clicks Add button, I update the selected state.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect is used for side effects. Like fetching data, calling API. It runs after component renders.
I needed it to load JSON data because I have to fetch `technologies.json` file. I used `fetch` inside `useEffect` with empty dependency `[]` so it loads data only one time when page loads.

### 5. Why does every item in a .map() list need a unique key prop?
In React when we use .map() to show many cards, React needs a key to identify each item. If we don't give unique key, React gets confused which item changed. So key helps React to update fast and correctly. Without key we get warning in console.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI based on condition. Like if else in React.
In my project I used it in many places. For example: `selected.length === 0 ? <p>No items added</p> : <div>show stack</div>`. Also I used it to change Add button to Added button if item is already selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
To pass data from parent to child we use props. Parent sends data like `<Child name={techName} />` and child gets it with `props.name`.
Child cannot directly send data to parent. For that parent sends a function as props to child. Child calls that function with data. So data goes back to parent. In my project I passed `handleAddToStack` function from App.jsx to TechCard.jsx.