import type { Dispatch, SetStateAction } from "react";

interface ToolbarProps {
  title: string;
  subtitle: string;
  date: string;
  start: number;
  end: number;
  ticketsPerPage: number;
  columns: number;

  setTitle: Dispatch<SetStateAction<string>>;
  setSubtitle: Dispatch<SetStateAction<string>>;
  setDate: Dispatch<SetStateAction<string>>;
  setStart: Dispatch<SetStateAction<number>>;
  setEnd: Dispatch<SetStateAction<number>>;
  setTicketsPerPage: Dispatch<SetStateAction<number>>;
  setColumns: Dispatch<SetStateAction<number>>;
}

export default function Toolbar({
  title,
  subtitle,
  date,
  start,
  end,
  ticketsPerPage,
  columns,
  setTitle,
  setSubtitle,
  setDate,
  setStart,
  setEnd,
  setTicketsPerPage,
  setColumns,
}: ToolbarProps) {
  return (
    <div className="toolbar">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titre"
      />

      <input
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
        placeholder="Sous-titre"
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
        type="number"
        min={1}
        value={ticketsPerPage}
        onChange={(e) => setTicketsPerPage(Number(e.target.value))}
        placeholder="Billets/page"
      />

      <input
        type="number"
        min={1}
        max={6}
        value={columns}
        onChange={(e) => setColumns(Number(e.target.value))}
        placeholder="Colonnes"
      />

      <button onClick={() => window.print()}>
        Imprimer
      </button>
    </div>
  );
}