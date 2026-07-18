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
  price,
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
          <div className="number-price">
            <span className="number-label">N° {formatNumber(number)}</span>
            <span className="merci-text">Mankasitraka tompoko</span>
            <span className="price-label">Prix: {price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}