import './Search.style.scss'

type SearchProps = {
  onSearch: (searchTerm: string) => void;
}

export default function Search({onSearch}:SearchProps) {
  return (
      <input className="search" placeholder="Search..." onChange={(e) => onSearch(e.target.value)}/>
  )
}

