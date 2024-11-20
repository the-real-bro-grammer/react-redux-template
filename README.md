# 🚀 React-Redux Starter Template

Welcome to the **React-Redux Starter Template**! This repository provides a solid foundation for React projects with
Redux, Thunks, and customizable layouts. 🚀

---

## 🗂️ What's Included?

-   **React** with **Redux Toolkit** for state management.
-   Pre-configured **Redux store** under `src/redux`.
-   Middleware setup with **Thunk** for API services.
-   **Next.js** integration with a default layout structure.
-   **Bootstrap 5** for responsive and stylish UI components.
-   Modular folder structure for scalable and maintainable code.

---

## ⚡️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/react-redux-starter.git
```

### 2️⃣ Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
npm install
```

### 3️⃣ Run the Development Server

Start the development server with:

```bash
npm run dev
```

Your app should now be running at [http://localhost:3000](http://localhost:3000) 🎉

---

## 🏗️ How to Use the Template

### 🛠️ Redux Store Setup

The Redux store is located under `src/redux` and uses **Redux Toolkit** for configuration. Below is the structure of the
store:

```typescript
import { configureStore } from '@reduxjs/toolkit';
import { pageSettingsReducer } from './page/reducers';
import { initialRootState } from './initial_state';
import { ThunkArguments } from './thunk_arguments';

const thunkArgs: ThunkArguments = {
    serviceApi: new ServiceApi()
};

const reducer = {
    pageSettingsState: pageSettingsReducer
};

const store = configureStore({
    reducer,
    preloadedState: initialRootState,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: thunkArgs
            }
        })
});

export default store;
```

**Adding a New Reducer**

1. Create a new reducer in the `src/redux/[feature]/reducers` folder (e.g., `exampleReducer.js`).
2. Import and include the reducer in the `reducer` object within `store.js`:

```javascript
import exampleReducer from './example/reducers';

const reducer = {
    pageSettingsState: pageSettingsReducer,
    exampleState: exampleReducer
};
```

### 🔗 Adding API Services with Thunk Middleware

**`ThunkArguments`** contains classes for each service API. An example service call in `Thunk`:

```javascript
export const fetchTodoById = todoId => async (dispatch, getState, extraArgument) => {
    const { serviceApi } = extraArgument; // Access API service from ThunkArguments
    const response = await serviceApi.getTodo(todoId);
    dispatch(todosLoaded(response.todos));
};
```

1. Define the service API in `src/redux/thunk_arguments.js`.
2. Use `extraArgument` in the Thunk middleware for API calls.

### 🎨 Layout Structure

Layouts are defined in the `src/layouts` folder. By default, the `MainLayout` is used for all pages unless a custom
layout is specified.

**Example `MainLayout`:**

```typescript
import { connect } from 'react-redux';
import { RootState } from '../types/redux/root_state';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container">
            {children}
        </div>
    );
};

const mapStateToProps = (state: RootState) => ({});

export default connect(mapStateToProps)(MainLayout);
```

**Default Layout in `_app.tsx`:**

The default layout is applied in the `pages/_app.tsx` file:

```typescript
import MainLayout from '@/layouts/MainLayout';
import { Provider } from 'react-redux';
import store from '../redux/store';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout
        ? Component.getLayout
        : (page) => <MainLayout>{page}</MainLayout>;

    return (
        <Provider store={store}>
            {getLayout(<Component {...pageProps} />)}
        </Provider>
    );
}
```

**Adding a Custom Layout**

1. Create a new layout under `src/layouts` (e.g., `DashboardLayout.js`).
2. Specify the layout in the page component:

```typescript
const DashboardPage = () => {
    return <h1>Welcome to the Dashboard!</h1>;
};

DashboardPage.getLayout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default DashboardPage;
```

---

## 💡 Tips and Best Practices

-   **Folder Structure:** Organize reducers and actions under `src/redux/[feature]`.
-   **DevTools:** Use `redux-logger` and `redux-devtools-extension` for debugging.
-   **Reusable Layouts:** Modularize layouts for consistent and maintainable designs.

---

## 📦 Deployment

1. Build the application:

```bash
npm run build
```

2. Start the production server:

```bash
npm start
```

---

## 📚 Resources

-   [React Documentation](https://reactjs.org/)
-   [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
-   [Next.js Documentation](https://nextjs.org/)

---

Happy coding! 🚀👨‍💻👩‍💻
