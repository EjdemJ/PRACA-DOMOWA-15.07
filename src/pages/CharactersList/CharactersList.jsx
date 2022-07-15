import "./CharactersList.css";
import Card from "../../components/shared/Card";

import { useState } from "react";
import SearchBar from "./SearchBar";

function CharactersList({ data }) {
  const [query, setQuery] = useState("");

  /* tego onChange musisz przekazac jako props wtedy w tym komponencie input i potem jak wywołasz ten komponent w tym Charlist to dasz <InputComponent onChange={(e) => setQuery.... blabla)} />
to na jedno wyjdzie
Robisz inputa ktora w komponencie ma <input onChange={onChange}
i potem masz dostep do tej funkcja onChange na zawnatrz i tez do eventu */

  return (
    <>
      {/* <div className="search-bar">
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
      </div> */}

      <SearchBar setQuery={setQuery} />
      <div className="characters-list-container">
        <div className="characters-list">
          {data
            .filter((item) =>
              item.name.toLowerCase().includes(query.toLocaleLowerCase())
            )
            .map((item) => (
              <Card key={item.id} name={item.name} species={item.species} />
            ))}
        </div>
      </div>
    </>
  );
}

export default CharactersList;
