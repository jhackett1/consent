import React, { 
    useState, 
    createContext, 
    useContext
} from "react"
import Alert from "@reach/alert";

const ToastContext = createContext()

export const ToastProvider = props => {

    const [toasts, setToasts] = useState([])

    const popToast = message => {
        setToasts(toasts => toasts.concat(message))
        setTimeout(() => {
            setToasts(toasts => toasts.slice(1))
        }, 5000)
    }

    return(
        <ToastContext.Provider value={{
            toasts,
            popToast
        }} {...props}>
            {props.children}
            <div className="ct-toasts">
                {toasts.map((toast, i) =>
                    <Alert className="ct-toasts__toast" key={`${toast}-${i}`}>{toast}</Alert> 
                )}
            </div>
        </ToastContext.Provider>
    )
}

export const useToast = () => useContext(ToastContext)