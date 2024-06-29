import CrudApi from "./Components/CrudApi";
import MyPage from "./Components/MyPage";
import MyPageContext from "./Components/MyPageContext";
import { CrudProvider } from "./Context/CrudContext";

function App() {
  return (
    <>
      <h1>React context API</h1> 
      <a href="https://es.reactjs.org/docs/context.html" target="_blank" rel="noreferrer" >Documentacion</a>
      <hr />
      <MyPageContext />
      <hr />
      <MyPage />
      <hr />
      <CrudProvider>
        <CrudApi />
      </CrudProvider>
    </>
  )
}

export default App;
