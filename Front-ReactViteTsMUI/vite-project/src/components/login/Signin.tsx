import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Login } from '../../components/lib/actions';

const Signin = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const navigate = useNavigate();

    const validateForm = () => {
        let valid = true;
        setEmailError(false);
        setPasswordError(false);

        if (email.trim() === '') {
            setEmailError(true);
            valid = false;
        }
        if (password.trim() === '') {
            setPasswordError(true);
            valid = false;
        }

        return valid;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const userData = await Login(email, password);
            console.log('Utilisateur connecté');
            navigate('/');
        } catch (error: any) {
            setError(error.message || 'Échec de la connexion. Veuillez vérifier vos identifiants.');
        }
    };

    return (
        <React.Fragment>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="email"
                    sx={{ mb: 3 }}
                    fullWidth
                    value={email}
                    error={emailError}
                    helperText={emailError ? 'L\'email est requis' : ''}
                />
                <TextField
                    label="Mot de passe"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    value={password}
                    error={passwordError}
                    fullWidth
                    sx={{ mb: 3 }}
                    helperText={passwordError ? 'Le mot de passe est requis' : ''}
                />
                <Button variant="contained" color="primary" type="submit">Connexion</Button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <small>Besoin d'un compte ? <Link to="/register">Enregistrez-vous ici</Link></small>
        </React.Fragment>
    );
};

export default Signin;
