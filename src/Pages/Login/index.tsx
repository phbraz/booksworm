import { Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // I need to add react query here later.
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Form submission logic, e.g., send data to server
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="min-h-screen -mt-28 flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-white border border-gray-200 rounded-2xl shadow w-full max-w-md px-8 py-8"
            >
                <div className="flex justify-center pb-8">
                    <img className="w-52" src="/RLogo.jpg" alt="RLogo" />
                </div>
                <TextField
                    fullWidth
                    type="email"
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    size="small"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    fullWidth
                    type="password"
                    label="Password"
                    variant="outlined"
                    margin="normal"
                    size="small"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="pt-8">
                    <Button variant="contained" color="primary" type="submit" className="w-full">
                        Login
                    </Button>
                </div>
            </form>
        </div>
    );
};

export { Login };
