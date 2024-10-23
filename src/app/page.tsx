import Banner from "@/components/base/banner/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import classNames from "@/utils/classNames";

export default function Home() {
  return (
    <div
      className={classNames(
        "flex flex-col items-center justify-items-center",
        "min-h-screen font-[family-name:var(--font-geist-sans)]"
      )}
    >
      <main className="flex-1 flex flex-col w-full">
        <Header />
        <Banner />
      </main>
      <Footer />
    </div>
  );
}
