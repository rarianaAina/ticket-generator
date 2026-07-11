export interface TicketConfig {
  title: string;
  subtitle: string;
  date: string;
  start: number;
  end: number;
  ticketsPerPage: number;
  columns: number;
}

export interface TicketProps {
  number: number;
  title: string;
  subtitle: string;
  date: string;
  ticketHeight: number;
  ticketWidth: number;
  stubWidth: number;
}