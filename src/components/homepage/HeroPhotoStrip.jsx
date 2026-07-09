const PLACEHOLDER_PHOTOS = [
  { label: 'Waiter+with+phone', alt: 'Placeholder — waiter using a phone to take an order' },
  { label: 'Order+receipt', alt: 'Placeholder — an order receipt' },
  { label: 'Restaurant+floor', alt: 'Placeholder — a restaurant dining floor' },
];

export default function HeroPhotoStrip() {
  return (
    <div className="pain-photo-strip">
      {PLACEHOLDER_PHOTOS.map((photo) => (
        <img
          key={photo.label}
          src={`https://placehold.co/500x625/131f2d/daa277?text=PLACEHOLDER%0A${photo.label}&font=roboto`}
          alt={photo.alt}
          className="pain-photo-strip__img"
          loading="lazy"
        />
      ))}
    </div>
  );
}
