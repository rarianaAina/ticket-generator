import Ticket from "./Ticket";

interface TicketPageProps {
  numbers: number[];
  title: string;
  subtitle: string;
  date: string;
  ticketHeight: number;
  ticketWidth: number;
  stubWidth: number;
  price: string; // Ajout
}

export default function TicketPage({
  numbers,
  title,
  subtitle,
  date,
  ticketHeight,
  ticketWidth,
  stubWidth,
  price, // Ajout
}: TicketPageProps) {
  return (
    <div className="page">
      {numbers.map((number) => (
        <Ticket
          key={number}
          number={number}
          title={title}
          subtitle={subtitle}
          date={date}
          ticketHeight={ticketHeight}
          ticketWidth={ticketWidth}
          stubWidth={stubWidth}
          price={price} // Ajout
        />
      ))}
    </div>
  );
}