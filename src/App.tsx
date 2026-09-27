import Header from "./layouts/header/Header.tsx";
import Search from "@/components/search/Search.tsx";
import Cards from "@/layouts/cards/Cards.tsx";
import Filters from "@/layouts/filters/Filters.tsx";
import {useState} from "react";
import {data, type Landry} from "@/data/landry.ts";

function App() {
    const [filteredProducts, setFilteredProducts] = useState<Landry[]>(data);

  return (
    <>
      <Header/>
      <div className='container'>
        <Search/>
          <Filters products={data} onFilter={setFilteredProducts}/>
          <Cards products={filteredProducts}/>
      </div>
    </>
  )
}

export default App
