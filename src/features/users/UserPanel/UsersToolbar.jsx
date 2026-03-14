import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../usersSlice"

export default function UsersToolbar() {
    const dispatch = useDispatch()
    const usersCount = useSelector((state) => state.users.users.length)

    return (
        <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
            <div className="flex flex-wrap gap-2">
                <button variant="primary" onClick={() => dispatch(fetchUsers())}>
                    Refetch Users
                </button>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full l border border-white/20 bg-white/5 text-white/70 font-semibold">
                <span className="font-mono text-xs">item</span>
                <span className="px-2 py-1 rounded-full border border-white/20 bg-black/20 text-white/80 text-xs">
                    {usersCount}
                </span>
            </div>
        </div>
    )
}