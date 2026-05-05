export default function DemoPhone({
  className = '',
  loading = 'lazy',
  showCallouts = false,
}) {
  return (
    <div className={`demo-phone ${className}`.trim()}>
      <div className="demo-phone__shell">
        <div className="demo-phone__speaker" />
        <div className="demo-phone__screen">
          <iframe
            src="https://lisablas.github.io/TableOrders/demo/"
            title="TableOrders demo"
            className="demo-phone__iframe"
            loading={loading}
          />
        </div>
        <div className="demo-phone__home" />
      </div>

      {showCallouts && (
        <>
          <div className="demo-callout demo-callout--top" aria-hidden="true">
            <span className="demo-callout__badge">1</span>
            Seat a table
          </div>
          <div className="demo-callout demo-callout--mid" aria-hidden="true">
            <span className="demo-callout__badge">2</span>
            Take orders
          </div>
          <div className="demo-callout demo-callout--bot" aria-hidden="true">
            <span className="demo-callout__badge">3</span>
            Split the bill
          </div>
        </>
      )}
    </div>
  );
}
