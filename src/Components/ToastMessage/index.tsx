import Snackbar from "@mui/material/Snackbar";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    message: string;
}


const ToastMessage = ({isOpen, onClose, message}: Props) => {
    return <>
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center"}}
            message={message}
            key="TopCenter"
            onClick={onClose}
            open={isOpen}

        />
    </>
}

export { ToastMessage };
