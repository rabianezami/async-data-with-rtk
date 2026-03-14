import { useDispatch, useSelector } from "react-redux";
import UsersStatus from "./UsersStatus";
import UsersToolbar from "./UsersToolbar";
import { useEffect } from "react";
import { fetchUsers } from "../usersSlice";

export default function UsersPanel() {
    const dispatch = useDispatch()
    const { users, loading, error } = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <div>
            <UsersToolbar />
            <UsersStatus
                loading={loading}
                error={error}
                users={users}
            />
        </div>
    )
}