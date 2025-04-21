import { useState, useRef, useEffect } from "react";
import PageWrapper from "../components/PageWrapper";

function ChatIA() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState([]);

  const bottomRef = useRef(null);

  // ✅ Charger historique depuis localStorage au chargement
  useEffect(() => {
    const saved = localStorage.getItem("chat-history");
    if (saved) {
      setChat(JSON.parse(saved));
    }
  }, []);

  // ✅ Scroll vers le bas après chaque message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setResponse("");

    // Randomly select a model between 'qwen' and 'deepseek'
    const models = ["qwen", "deepseek"];
    const selectedModel = models[Math.floor(Math.random() * models.length)];

    try {
      const res = await fetch("https://ollama.labaky.fr/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: selectedModel, // Use the randomly selected model
          prompt: question,
          stream: true,
        }),
      });

      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let fullText = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n").filter(Boolean);

        for (const line of lines) {
          try {
            const json = JSON.parse(line);
            fullText += json.response;
            setResponse(fullText);
          } catch (err) {
            console.error("JSON parse error:", err);
          }
        }
      }

      // ✅ Ajout à l’historique + sauvegarde
      setChat((prev) => {
        const updated = [...prev, { question, answer: fullText }];
        localStorage.setItem("chat-history", JSON.stringify(updated));
        return updated;
      });

      setQuestion("");
    } catch (err) {
      setResponse("❌ Erreur : impossible de contacter l’IA");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <section className="min-h-screen bg-gray-100 py-12 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-6">
          💬 Chat IA Local
        </h2>

        {chat.length > 0 && (
          <button
            onClick={() => {
              setChat([]);
              localStorage.removeItem("chat-history");
            }}
            className="text-sm text-red-600 underline mb-4"
          >
            🗑️ Vider la conversation
          </button>
        )}

        <textarea
          rows="4"
          placeholder="Pose ta question à l’IA..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full max-w-xl p-4 rounded border mb-4"
        />

        <button
          onClick={handleAsk}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition mb-6 disabled:opacity-50"
        >
          {loading ? "Réfléchit..." : "Envoyer"}
        </button>

        <div className="w-full max-w-xl space-y-4">
          {chat.map((entry, index) => (
            <div key={index} className="flex flex-col gap-2">
              {/* Message utilisateur */}
              <div className="flex justify-end">
                <div className="flex items-end gap-2 max-w-[75%]">
                  <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-br-sm shadow-md">
                    <p className="whitespace-pre-line">{entry.question}</p>
                  </div>
                  <img
                    src="https://api.dicebear.com/7.x/identicon/svg?seed=user"
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </div>

              {/* Réponse IA */}
              <div className="flex justify-start">
                <div className="flex items-end gap-2 max-w-[75%]">
                  <img
                    src="https://api.dicebear.com/7.x/bottts-neutral/svg?seed=ai"
                    alt="ia-avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="bg-gray-200 text-gray-800 p-3 rounded-2xl rounded-bl-sm shadow">
                    <p className="whitespace-pre-line">{entry.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

export default ChatIA;
