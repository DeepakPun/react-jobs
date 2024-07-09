# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Instructions

- Clone or downlad files
- Open new terminal window in project location
- Run `npm install` from the terminal window
- Run `npm run dev` to view React UI
- In a separate terminal run `npm run db-server` to start json server in the same directory
- We can also run both the database server and react UI using the single `npm run server` command which uses concurrently to run both scripts from the same terminal
