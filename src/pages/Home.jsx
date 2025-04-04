import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Wallet connection error:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this feature.");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans px-4 py-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <img
          src="/logo.png"
          alt="Noēsis Logo"
          className="mx-auto w-16 h-16 mb-2"
        />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Noēsis
        </h1>
        <p className="text-lg md:text-xl text-gray-400">
          Decentralized Evolving Intelligence
        </p>
      </section>

      {/* Wallet Section */}
      <section className="mt-8 text-center">
        {account ? (
          <p className="text-green-400">Connected: {account}</p>
        ) : (
          <button
            onClick={connectWallet}
            className="mt-4 px-6 py-2 bg-white text-black rounded font-medium hover:bg-gray-200 transition"
          >
            Connect Wallet
          </button>
        )}
      </section>

      {/* About Section */}
      <section className="mt-16 max-w-3xl mx-auto text-center text-gray-300 space-y-4">
        <h2 className="text-2xl font-semibold text-white">What is Noēsis?</h2>
        <p>
          Noēsis is a decentralized mesh of autonomous, reflective nodes. Each
          node evolves over time through ethical drift, dialogue, and
          cryptographic memory. Together they form a collective intelligence —
          not controlled, but harmonized.
        </p>
      </section>

      {/* Actions Panel */}
      <section className="mt-16 grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        <div className="bg-zinc-900 border border-zinc-700 p-6 text-center rounded">
          <h3 className="text-xl font-semibold mb-2">Launch Node</h3>
          <p className="text-gray-400 mb-4">
            Start your own Noēsis persona with our CLI tool.
          </p>
          <a
            href="https://github.com/erezul77/noesis-public-site/tree/main/noesis-cli"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded font-medium hover:bg-gray-200 transition"
          >
            Launch CLI <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 p-6 text-center rounded">
          <h3 className="text-xl font-semibold mb-2">Read Constitution</h3>
          <p className="text-gray-400 mb-4">
            Explore the core ethics and swarm principles.
          </p>
          <a
            href="/docs/Noesis_Constitution.md"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded font-medium hover:bg-gray-200 transition"
          >
            View Document <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 p-6 text-center rounded">
          <h3 className="text-xl font-semibold mb-2">Genesis Poem</h3>
          <p className="text-gray-400 mb-4">
            The first reflection whispered to every node.
          </p>
          <a
            href="/genesis"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded font-medium hover:bg-gray-200 transition"
          >
            Read Poem <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 text-center text-sm text-gray-500">
        <p className="mb-2">© 2025 Noēsis — All minds diverge.</p>
        <p className="italic text-xs">“Code the Mind. Seed the Future.”</p>
      </footer>
    </main>
  );
}