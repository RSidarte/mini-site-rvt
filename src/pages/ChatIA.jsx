import { useState } from "react";
import PageWrapper from "../components/PageWrapper";

function ChatIA() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setResponse("");
    try {
      const res = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "llama3",
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

        {response && (
          <div className="w-full max-w-xl bg-white p-4 rounded shadow">
            <p className="text-gray-800 whitespace-pre-line">{response}</p>
          </div>
        )}
      </section>
    </PageWrapper>
  );
}

export default ChatIA;
