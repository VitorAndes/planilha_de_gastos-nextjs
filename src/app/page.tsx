export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="flex items-center bg-emerald-500 h-32 p-4 border-b">
        <h1 className="text-text text-3xl font-bold ">AndesFinance</h1>
      </header>
      <div className="flex gap-5 flex-1">
        <aside className="bg-emerald-500 text-text w-72 p-4">
          <h1 className="text-2xl font-bold">Planilha de gastos</h1>
          <ul>
            <li>
              <a href="#Settings" className="">
                Settings
              </a>
            </li>
          </ul>
        </aside>
        <main className="flex-1 p-10">
          <section className=" dark:bg-[#1d7c4e]/25 bg-[#83e2b4]/25 backdrop-blur shadow shadow-white/35 border border-white/20 rounded-md h-60 p-10">
            <h1 className="text-primary text-2xl mb-5 ">Cartões</h1>
            <div className="flex gap-5 w-full">
              <div className="bg-accent w-60 h-32 rounded-md shadow shadow-black">
                card
              </div>
              <div className="bg-accent w-60 h-32 rounded-md shadow shadow-black">
                card
              </div>
              <div className="bg-accent w-60 h-32 rounded-md shadow shadow-black">
                card
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
