
import { auth } from "../firebase.js";
import { signInWithEmailAndPassword }
    from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const formulario = document.getElementById("form-login");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const email = document.getElementById("e-mail").value;
    const senha = document.getElementById("password").value;

    mensagem.textContent = "Entrando...";

    try {
        await signInWithEmailAndPassword(auth, email, senha);

        window.location.href = "home.html";
    } catch (erro) {
        console.error(erro);

        if (erro.code === "auth/invalid-credential") {
            mensagem.textContent = "E-mail ou senha incorretos.";
        } else if (erro.code === "auth/too-many-requests") {
            mensagem.textContent = "Muitas tentativas. Tente novamente mais tarde.";
        } else {
            mensagem.textContent = "Não foi possível entrar. Verifique os dados.";
        }
    }
});
