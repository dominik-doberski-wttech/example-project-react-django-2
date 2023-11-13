import {useEffect, useState} from "react";
import {getCookie,setCookie} from "../utils/cookies";
import {Button, Input, InputGroup, Stack, Text} from "@chakra-ui/react";

function LoginPage(){

    const [isLogging,setLoggingIn] = useState(true);
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    useEffect(() => {
        // W przypadku, gdy mamy cookie z username (czyli wcześniej użytkownik był zalogowany)
        // Zmieniamy pole login z pustego na ten i wyświetlamy formularz logowanie
        // funkcja działa tylko raz na początku
        const cookieUsername = getCookie("username");
        if(cookieUsername){
            setUsername(cookieUsername);
            setLoggingIn(true)
        }
    }, []);

    const formSubmit = (e) =>{
        e.preventDefault();
    }

    return(

            <div className="LoginContainer">


                <Stack spacing={4} justifyContent={"center"}>
                    <Text fontSize={"2xl"} display={"flex"}>
                        {!!isLogging ? <div>Login To Existing Account</div> : <div>Create New Account</div>}
                    </Text>
                        <InputGroup>
                            <Input
                                type="text"
                                placeholder='Login'
                                _placeholder={{ opacity: 0.4, color: 'inherit' }}
                                value={username}
                                onChange={(e)=>setUsername(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup>
                            <Input
                                type="password"
                                placeholder='Password'
                                _placeholder={{ opacity: 0.4, color: 'inherit' }}
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup>
                            <Button
                                colorScheme={"teal"}
                                justifyContent={"center"}
                                onClick={()=>formSubmit()}
                            >
                                {isLogging ? "Log In" : "Register"}
                            </Button>
                        </InputGroup>

                </Stack>

            </div>

    )
}

 export default LoginPage;