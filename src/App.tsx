import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("FIANGONAN'I JESOA KRISTY ETO MADAGASIKARA");
  const [subtitle, setSubtitle] = useState(
    "SAMPANA TANORA KRISTIANINA NY AMBOARA"
  );
  const [date, setDate] = useState("Alahady 19 Jolay 2026");
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(150);
  const [price, setPrice] = useState("1 500 Ar");
  const [verse, setVerse] = useState(
    "Fa ny mpanome amin'ny fifaliana no tian'Andriamanitra. 2 Korintiana 9:7"
  );

  const formatNumber = (n: number) => String(n).padStart(3, "0");

  const pages = [];

  for (let first = start; first <= end; first += 10) {
    const tickets = [];

    const last = Math.min(first + 19, end);

    for (let i = first; i <= last; i++) {
      tickets.push(
        <div className="ticket" key={i}>
          <div className="stub">
            <div className="stub-top">
              <h4>FJKM</h4>
              <p>AMBOARA FITIAVANA</p>
            </div>
            <div className="stub-bottom">
              <strong>N° {formatNumber(i)}</strong>
            </div>
          </div>
          <div className="main">
            <div className="main-top">
              <h2>{title}</h2>
              <h3>{subtitle}</h3>
              <p className="extra-text">ANJARASOA KRISTIANINA</p>
              <p className="date">{date}</p>
            </div>
            <div className="main-bottom">
              <p className="verse-text">"{verse}"</p>
              <div className="number-price">
                <span className="number-label">N° {formatNumber(i)}</span>
                <span className="merci-text">Mankasitraka tompoko</span>
                <span className="price-label">{price}</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    pages.push(
      <div className="page" key={first}>
        {tickets}
      </div>
    );
  }

  return (
    <>
      <div className="toolbar">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre"
        />
        <input
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          placeholder="Sous titre"
        />
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
        />
        <input
          type="number"
          value={start}
          onChange={(e) => setStart(Number(e.target.value))}
          placeholder="Début"
        />
        <input
          type="number"
          value={end}
          onChange={(e) => setEnd(Number(e.target.value))}
          placeholder="Fin"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Prix (ex: 5 000 Ar)"
          style={{ width: "150px" }}
        />
        <input
          value={verse}
          onChange={(e) => setVerse(e.target.value)}
          placeholder="Verset biblique"
          style={{ width: "300px" }}
        />
        <button onClick={() => window.print()}>Imprimer</button>
      </div>
      {pages}
    </>
  );
}

export default App;