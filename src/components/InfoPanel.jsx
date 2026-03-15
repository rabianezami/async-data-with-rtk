export default function InfoPanel() {
  return (
    <aside className="border border-white/10 bg-white/5 rounded-2xl">
      <div className="p-4 pb-0">
        <h2 className="text-lg font-semibold">How it works</h2>
        <p className="text-white/70 mt-1">
          <span className="font-mono text-xs">createAsyncThunk</span> generates
          three actions:
        </p>
      </div>

      <div className="p-4">
        <div className="grid gap-2.5">
          <div className="p-3 rounded-xl border border-white/10 bg-white/5">
            <div className="font-mono text-xs">pending</div>
            <div className="text-white/70">
              Set <span className="font-mono text-xs">loading=true</span> and clear errors.
            </div>
          </div>

          <div className="p-3 rounded-xl border border-green-400/30 bg-green-400/10">
            <div className="font-mono text-xs">fulfilled</div>
            <div>
              Store results in {" "}
              <span className="font-mono text-xs">state.users</span>.
            </div>
          </div>

          <div className="p-3 rounded-xl border border-red-400/40 bg-red-400/10">
            <div className="font-mono text-xs">rejected</div>
            <div>Show a friendly error message in the UI.</div>
          </div>
        </div>

        <p className="text-xs text-white/60 mt-4">
          Tip: reducers stay pure, async code lives in thunks.
        </p>
      </div>
    </aside>
  )
}