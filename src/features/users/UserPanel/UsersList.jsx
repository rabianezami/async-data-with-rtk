export default function UsersList({ users }) {
    return (
        <ul className="grid gap-2.5">
            {users.map((user) => (
                <li
                    key={user.id}
                    className="flex items-center justify-between gap-2.5 p-3 rounded-xl border border-white/10 bg-white/5"
                >
                    <div className="flex flex-col gap-0.5">
                        <strong className="text-sm">
                            {user.name}
                        </strong>
                        <span className="text-xs text-white/60 font-mono">
                            {user.email}
                        </span>
                    </div>

                    <span className="text-xs px-2 py-1 rounded-full border border border-white/20 bg-black/20 text-white/80">
                        {user.company?.name ?? "_"}
                    </span>
                </li>
            ))}
        </ul>
    )
}