import { Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { LoginModel, LoginResponse } from "../../API/Models";
import cookie from "cookie";
import { cookieEnum } from "../../Helpers/String.tsx";
import { Urls } from "../../API/Urls.ts";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //using react query allows to get some cool stuff out of the box, i.e: isLoading, isError and so on.
    const mutation =  useMutation({
        mutationFn: async (loginModel: LoginModel) => {
            return await fetch(`${Urls.Auth.Login()}`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(loginModel)
            })
        },
        onSuccess: async data => {
            const dataResponse: LoginResponse = await data.json();
            const addTokenToCookie = cookie.serialize(cookieEnum.booksApi, dataResponse.token);

            document.cookie = addTokenToCookie;
            window.location.reload();
        },
        onError: error => {
            console.log(error);
        }
    })


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const loginModel: LoginModel = {
            email: email,
            password: password,
        }

        mutation.mutate(loginModel);
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
