import type { TicketProps } from "../types/ticket";
import { formatNumber } from "../utils/format";

export default function Ticket({
  number,
  title,
  subtitle,
  date,
  ticketHeight,
  ticketWidth,
  stubWidth,
}: TicketProps) {
  return (
    <div
      className="ticket"
      style={{
        width: `${ticketWidth}mm`,
        height: `${ticketHeight}mm`,
      }}
    >
      <div
        className="stub"
        style={{
          width: `${stubWidth}mm`,
        }}
      >
        <div className="stub-top">
          <h4>FJKM</h4>
          <p>AMBOARA FITIAVANA</p>
        </div>

        <div className="stub-bottom">
          <strong>N° {formatNumber(number)}</strong>
        </div>
      </div>

      <div className="main">
        <div className="main-top">
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p className="extra-text">ANJARASOA KRISTIANINA</p>
        </div>

        <div className="main-bottom">
          <p className="date">{date}</p>
          <strong>N° {formatNumber(number)}</strong>
        </div>
      </div>
    </div>
  );
}