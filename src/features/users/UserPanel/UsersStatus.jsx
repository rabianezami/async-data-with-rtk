
export default function UsersStatus({ loading, error, users }) {
    return (
        <div className="flex flex-wrap gap-2.5 my-3">
            {loading && (
                <div className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-white/60">
                    Loading users...
                </div>
            )}

            {!loading && !error && users.length > 0 && (
                <div className="px-3 py-2 rounded-xl border border-green-400/30 bg-green-400/10 text-white/90">
                    Loaded successfully.
                </div>
            )}

            {error && (
                <div className="px-3 py-2 rounded-xl border border-red-400/40 bg-red-400/10 text-white/90">
                    Error: {error}
                </div>
            )}
        </div>
    )
}