
import { auth, database } from "../firebase.js";

import {
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
    ref,
    set
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const formulario = document.getElementById("form-cadastro");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("e-mail").value.trim();
    const senha = document.getElementById("password").value;

    mensagem.textContent = "Criando sua conta...";

    try {
        const resultado = await createUserWithEmailAndPassword(
            auth,
            email,
            senha
        );

        const usuario = resultado.user;

        await set(ref(database, "usuarios/" + usuario.uid), {
            nome: nome,
            email: email,
            criadoEm: Date.now()
        });

        mensagem.textContent = "Cadastro realizado com sucesso!";

        window.location.href = "login.html";

    } catch (erro) {
        console.error(erro);

        if (erro.code === "auth/email-already-in-use") {
            mensagem.textContent = "Este e-mail já está cadastrado.";
        } else if (erro.code === "auth/invalid-email") {
            mensagem.textContent = "Digite um e-mail válido.";
        } else if (erro.code === "auth/weak-password") {
            mensagem.textContent = "A senha precisa ter pelo menos 6 caracteres.";
        } else if (erro.code === "PERMISSION_DENIED" ||
                   erro.code === "permission_denied") {
            mensagem.textContent =
                "Conta criada, mas não foi possível salvar os dados. Verifique as regras do banco.";
        } else {
            mensagem.textContent = "Não foi possível concluir o cadastro.";
        }
    }
});
