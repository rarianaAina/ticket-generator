import TicketPage from "./TicketPage";
import { chunk, range } from "../utils/format";

interface PrintLayoutProps {
  title: string;
  subtitle: string;
  date: string;
  start: number;
  end: number;
  ticketsPerPage: number;
  columns: number;
  price: string;
  verse: string; // Ajout
}

export default function PrintLayout({
  title,
  subtitle,
  date,
  start,
  end,
  ticketsPerPage,
  columns,
  price,
  verse, // Ajout
}: PrintLayoutProps) {

  const pageWidth = 210;
  const pageHeight = 297;

  const margin = 3;

  const printableWidth = pageWidth - margin * 2;
  const printableHeight = pageHeight - margin * 2;

  const rows = Math.ceil(ticketsPerPage / columns);

  const horizontalGap = 0;
  const verticalGap = 2;

  const ticketWidth =
    (printableWidth - horizontalGap * (columns - 1)) /
    columns;

  const ticketHeight =
    (printableHeight - verticalGap * (rows - 1)) /
    rows;

  const stubWidth = ticketWidth * 0.30;

  const numbers = range(start, end);

  const pages = chunk(numbers, ticketsPerPage);

  return (
    <>
      {pages.map((pageNumbers, index) => (
        <TicketPage
          key={index}
          numbers={pageNumbers}
          title={title}
          subtitle={subtitle}
          date={date}
          ticketHeight={ticketHeight}
          ticketWidth={ticketWidth}
          stubWidth={stubWidth}
          price={price}
          verse={verse} // Ajout
        />
      ))}
    </>
  );
}