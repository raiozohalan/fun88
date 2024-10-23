"use client";

import Banner from "@/components/base/banner/Banner";
import CategoryList from "@/components/category-list/CategoryList";
import Footer from "@/components/Footer";
import GameList from "@/components/games/GameList";
import Header from "@/components/Header";
import { ContextProvider } from "@/context/ContextProvider";
import classNames from "@/utils/classNames";

export default function Home() {
  return (
    <ContextProvider>
      <div
        className={classNames(
          "flex flex-col items-center justify-items-center",
          "min-h-screen font-[family-name:var(--font-geist-sans)]"
        )}
      >
        <main className="flex-1 flex flex-col w-full">
          <Header />
          <Banner />
          <CategoryList />
          <GameList />
        </main>
        <Footer />
      </div>
    </ContextProvider>
  );
}
