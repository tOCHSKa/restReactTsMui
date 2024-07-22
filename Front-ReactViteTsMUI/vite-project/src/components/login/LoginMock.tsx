// src/components/LoginComponent.tsx

import React, { useState } from 'react';
import { mockLoginApi } from '../../mocks/mockApi'; // Importation de la fonction mock de l'API
import { LoginResponse } from '../../interfaces/ApiResponse'; // Importation de l'interface pour typer la réponse de l'API
import { TextField, Button, Box, Typography } from "@mui/material"; // Importation des composants Material-UI
import { Link } from "react-router-dom"; // Importation du composant Link de react-router-dom

const LoginComponent: React.FC = () => {
  // Déclaration des états pour l'email, le mot de passe et la réponse de l'API
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [response, setResponse] = useState<LoginResponse | null>(null);

  // Déclaration des états pour la gestion des erreurs de validation des champs
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Fonction asynchrone pour gérer la connexion
  const handleLogin = async () => {
    // Appel à la fonction mock de l'API avec l'email et le mot de passe
    const loginResponse = await mockLoginApi(email, password);
    // Mise à jour de l'état avec la réponse de l'API
    setResponse(loginResponse);
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Réinitialisation des états d'erreur
    setEmailError(false);
    setPasswordError(false);

    // Validation des champs
    if (email === '') {
      setEmailError(true);
    }
    if (password === '') {
      setPasswordError(true);
    }

    // Si les champs sont valides, appeler la fonction handleLogin
    if (email && password) {
      handleLogin();
    }
  };

  return (
    <React.Fragment>
      <form autoComplete="off" onSubmit={handleSubmit}>
        {/* Champ de saisie pour l'email */}
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
        />
        {/* Champ de saisie pour le mot de passe */}
        <TextField
          label="Password"
          onChange={e => setPassword(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="password"
          value={password}
          error={passwordError}
          fullWidth
          sx={{ mb: 3 }}
        />
        {/* Bouton de soumission du formulaire */}
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
      {/* Affichage de la réponse de l'API */}
      {response && (
        <>
          {response.success ? (
            <Box>
              <Typography variant="subtitle1" color="green">{response.message}</Typography>
              <Typography variant="subtitle1">Welcome {response.user?.username}</Typography>
            </Box>
          ) : (
            <Typography variant="subtitle1" color="red">{response.message}</Typography>
          )}
        </>
      )}
      {/* Lien pour s'enregistrer si l'utilisateur n'a pas de compte */}
      <small>Besoin d'un compte ? <Link to="/register">Enregistrez vous ici</Link></small>
    </React.Fragment>
  );
};

export default LoginComponent;
