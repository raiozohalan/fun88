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
      </main>
      <footer className="flex-none row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
