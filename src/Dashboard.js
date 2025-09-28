import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { ThemeContext } from "./contextAPI/ThemeContext";
import { useContext } from "react";
import Parent from "./hooks/useCallback";
import UseMemoComponent from './hooks/UseMemoComponent'
function Dashboard() {
  const navigate = useNavigate();

  const location = useLocation()//path
  const data1= useContext(ThemeContext)


  
console.log(data1)
  const goToHome = () => {
    navigate("/");
  };

  return (<>
 
<button onClick={goToHome}>Go Home
  </button>  
<Outlet/>
<Parent/>
<UseMemoComponent/>
</>)
}

export default Dashboard;