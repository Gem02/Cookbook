import { Home, Details, Saved } from "./pages/page";
import { Header } from "./components/header/header";
import ErrorPage from "./pages/errorPage/errorPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import RecipesList from "./pages/recipeslist/recipeslist";
import { Footer } from "./components/components";
import TagList from "./pages/tagslist/taglist";

function App() {


  const setDarkMode = () =>{
    document.querySelector('body').classList.add('dark');
  }
  return(
    <BrowserRouter>

      <Header toggle = {setDarkMode}/>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Details />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/recipes/:text" element={<RecipesList />} />
        <Route path="/tags/:tag" element={<TagList />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>

      <Footer />

    </BrowserRouter>
    
  )
}

export default App;
