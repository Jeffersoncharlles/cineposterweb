
import { ToastContainer } from "react-toastify"
import { MainRoutes } from "./router"
import './styles/styles.css'

function App() {

  return (
    <div className="app">
      <MainRoutes />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        // rtl={false}
        pauseOnFocusLoss={false}
        // draggable
        pauseOnHover={false}
      />
    </div>
  )
}

export default App
