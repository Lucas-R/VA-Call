interface CallProps {
    phone: string
}

export function useCall({ phone } : CallProps) {
        try {
            return fetch("https://voice-api.zenvia.com/audio", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Token": import.meta.env.VITE_ZENVIA_TOKEN
                },
                body: JSON.stringify({
                    "numero_destino":`+55${phone}`,
                    "url_audio":"https://github.com/Lucas-R/VA-Call/raw/refs/heads/main/src/assets/audios/VA-mp3.mp3?raw=true",
                    "resposta_usuario":true,
                    "gravar_audio":false,
                    "bina":"",
                    "detecta_caixa":false,
                    "bina_inteligente":false
                })
            })
            .then((response) => response.json())
            .then((result) => result);
        } catch (error) {
            return error;
        }
}