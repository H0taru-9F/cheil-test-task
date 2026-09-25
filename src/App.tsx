import Header from "./layouts/header/Header.tsx";
import Search from "@/components/search/Search.tsx";
import Cards from "@/layouts/cards/Cards.tsx";
import Filter from "@/components/filter/Filter.tsx";

function App() {

  return (
    <>
      <Header/>
      <div className='container'>
        <Search/>
          <Filter/>
          <Cards/>
      </div>
    </>
  )
}

export default App
