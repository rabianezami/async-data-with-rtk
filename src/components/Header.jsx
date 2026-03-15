export default function Header() {
    return (
        <header className="flex items-end justify-between gap-4 mb-6">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 w-fit">
                    <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></span>

                    <span className="text-xs font-mono text-white/70">
                        Week 8 . Day 2
                    </span>

                    <span className="text-xs font-mono text-white/70">
                        Redux Toolkit . Thunks
                    </span>
                </div>

                <h1 className="text-3xl font-semibold">
                    Async Data with Redux Toolkit
                </h1>

                <p className="text-white/70">
                    Fetch server data with {" "}
                    <span className="font-mono text-xs">createAsyncThunk</span> and
                    render loading/error states like a real app.
                </p>
            </div>

            <div className="px-3 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-white/70">
                jsonPlaceholder
            </div>
        </header>
    )
}