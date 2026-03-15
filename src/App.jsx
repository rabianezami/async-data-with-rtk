import Header from "./components/Header"
import UsersPanel from "./features/users/UserPanel/UsersPanel"


function App() {


  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Header />

        <main className="grid lg:grid-cols-[1.15fr_.85fr] gap-4">
          <section className="border border-white/10 bg-white/5 rounded-xl">
            <div className="p-4">
              <UsersPanel />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
