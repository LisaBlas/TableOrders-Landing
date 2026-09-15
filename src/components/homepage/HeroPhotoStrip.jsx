export default function HeroPhotoStrip() {
  return (
    <div className="room-visual" aria-label="Illustration of the TableOrders live table view">
      <div className="room-visual__orbit room-visual__orbit--one" />
      <div className="room-visual__orbit room-visual__orbit--two" />

      <div className="room-device">
        <div className="room-device__bar">
          <div className="room-device__identity">
            <span className="room-device__mini-mark" aria-hidden="true" />
            <span>TableOrders</span>
          </div>
          <span className="room-device__time">19:42</span>
        </div>

        <div className="room-device__content">
          <div className="room-device__heading">
            <div>
              <span>Saturday service</span>
              <strong>Inside room</strong>
            </div>
            <span className="room-device__live"><i /> Live</span>
          </div>

          <div className="room-grid">
            <div className="room-table room-table--open"><span>01</span><small>Open</small></div>
            <div className="room-table room-table--seated"><span>02</span><small>Seated</small></div>
            <div className="room-table room-table--ordered"><span>03</span><small>4 items</small></div>
            <div className="room-table room-table--sent"><span>04</span><small>Sent</small></div>
            <div className="room-table room-table--ordered"><span>05</span><small>2 items</small></div>
            <div className="room-table room-table--seated"><span>06</span><small>Seated</small></div>
          </div>

          <div className="room-device__footer">
            <span><i className="room-key room-key--beige" /> Seated</span>
            <span><i className="room-key room-key--black" /> Order open</span>
            <span><i className="room-key room-key--line" /> Sent</span>
          </div>
        </div>
      </div>

      <div className="room-float room-float--order">
        <span className="room-float__eyebrow">Table 03</span>
        <strong>Order ready</strong>
        <div><span>4 items</span><span>€ 47.50</span></div>
      </div>

      <div className="room-float room-float--sync">
        <span className="room-sync-icon" aria-hidden="true">↻</span>
        <div><strong>Room synced</strong><small>All devices current</small></div>
      </div>
    </div>
  );
}
