/* eslint-disable react/prop-types */
import FooterNav from "../components/FooterNav/FooterNav";

export default function PageLayout({ children }) {
  return (
    <>
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-[88px] sm:px-6 lg:px-8">
        {children}
      </main>
      <FooterNav />
    </>
  );
}
