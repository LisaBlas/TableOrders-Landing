import Navigation from './Navigation';
import Footer from './Footer';

export default function PageLayout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
