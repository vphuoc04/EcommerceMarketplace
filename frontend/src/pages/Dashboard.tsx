import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Helpers
import { showToast } from "../helpers/myHelper";

// Redux
import { RootState } from "../redux/store";
import { clearToast } from "../redux/slice/toastSlice";

const Dashboard = () => {
    const { message, type } = useSelector((state: RootState) => state.toast);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("🔥 Dashboard Mounted! Message:", message, "Type:", type);

        showToast(message, type)
        dispatch(clearToast())
    }, [message, type])

    return (
        <div>
            Dashboard
        </div>
    )
}

export { Dashboard }