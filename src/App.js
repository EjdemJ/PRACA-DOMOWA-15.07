/* Praca domowa wytyczne:

link do API: https://rickandmortyapi.com/

Skille wymagane do ukończenia projektu to: 
- create-react-app
- jsx
- przekazywanie propsów
- useState
- useEffect
- component composition

1. Stwórz nową aplikacje Reactową,
2. Aplikacja powinna zawierać takie moduły jak:
   a) Nawigacje - Menu na gorze strony które powinno wygladać na wzór tego co na screenie nr1.
      Po lewej stronie powinno zawierać napis "Logo", który powinien być stanem w pliku App.js 
      i przekazany propsem do komponentu nawigacji. Po prawej stronie powinniśmy mieć 4 itemy do
      przełączenia na inne strony: O mnie, Lista postaci, Todo, Kontakt.
   b) Strona 'O mnie' - powinna zawierać komponent wyświetlający zdjecie(obojetne jakie)
      i imię nazwisko oraz opis Twojej osoby,
   c) Strona 'Lista Postaci' - strona na której wyświetlimy 1 strone list postaci z Rick
      and Morty w formie kart postaci na ktorych bedzie zdjecie postaci i przynajmniej
      dwie cechy danej postaci,
   d) Strona 'Lista Todo' - na samej górze strony powinien znajdować się input oraz 
      przycisk. Po wpisaniu wartosci do inputa i kliknieciu na przycisk powinnismy
      dodać to co wpisalismy do listy i wyswietlac te wartosc pod przyciskiem i inputem,
      Nalezy tutaj również dodać możliwość usuniecia elementu z listy po kliknieciu na
      dany element,
   e) Wewnatrz komponentu TODO stwórz jeszcze jeden komponent w którym będzie pojedynczy
      button zmieniający stan napisu "Logo" na "Nowe logo", a
      jesli aktualnie jest napis "Nowe logo" to niech zmienia na napis "Logo".
      (chodzi tutaj o zmianę stanu w rodzicu z komponentu dziecka)
   f) Strona kontakt powinna wyświetlać formularz z inputem na maila i drugim inputem
      do tresci oraz przycisk wyslij. Po wpisaniu wartosci w pola inputów zapisujemy
      dane do stanu(stan powinien byc obiektem) i przyciskiem wyslij powinnismy te dane
      wyswietlic pod formularzem,
   g) Do obecnego tekstu "Logo" lub "Nowe logo" powinniśmy móc dodać dodatkowy tekst.
      Input oraz button potrzebny do tego zróbmy wewnątrz komponentu o mnie :) jako dodatkowy
      blok na dole strony,

Porady:
1. Zmiana stron ma opierać się na zmianie stanu za pomocą useState,
2. Do układania elementów używaj flexboxa ale nie skupiamy sie mocno na stylach, a bardziej
na funkcjonalnosci,
3. W pliku App.js powinnismy miec tylko komponenty zawierające pełne strony, czyli
nie wrzucamy tam luznego kodu, komponenty maja byc tam zaimportowane i stworzone w innych
plikach, (jedynie powinien tam być stan tworzący napis "Logo")
4. Komponent O mnie powinnien otrzymywać dane takie jak src do obrazka oraz imie nazwisko
i opis za pomoca propsa, a nie był zadeklarowany w komponencie,

Skupcie się na przećwiczeniu budowania struktury komponentu, rozbijajcie to co sie da na
mniejsze komponenty i umieszczajcie w wiekszych komponentach, korzystajcie z useState oraz
useEffect o ile jest taka koniecznosc. */

// =======================================================================================

// hooks etc.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// components
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe/AboutMe";
import CharactersList from "./pages/CharactersList/CharactersList";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Todo from "./pages/Todo/Todo";
import Contact from "./pages/Contact/Contact";

// assets
import Man from "./assets/man.png";
import Home from "./pages/Home/Home";

function App() {
  const BASE_URL = "https://rickandmortyapi.com/api";

  const [logo, setLogo] = useState("Logo");

  const handleSetLogo = () => {
    if (logo === "Logo") {
      setLogo("Akuku!!!");
    } else {
      setLogo("Logo");
    }
  };

  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${BASE_URL}/character`);
    const data = await response.json();
    setApiData(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(apiData);

  return (
    <>
      <Navbar logo={logo} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <AboutMe
                imgSrc={Man}
                firstName="Adam"
                lastName="Juras"
                desc="I'm a relatively young aspiring junior front end developer"
              />
            }
          />
          <Route
            path="/characters-list"
            element={<CharactersList data={apiData} />}
          />
          <Route
            path="/todo"
            element={<Todo handleSetLogo={handleSetLogo} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
