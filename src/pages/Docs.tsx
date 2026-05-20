import { useState, useEffect } from "react";

const NAV = [
  { id: "overview",     label: "Overview",        group: "Introduction" },
  { id: "how-it-works", label: "How It Works",     group: "Introduction" },
  { id: "architecture", label: "Architecture",     group: "Introduction" },
  { id: "tech-stack",   label: "Tech Stack",       group: "Reference" },
  { id: "api",          label: "API Endpoints",    group: "Reference" },
  { id: "cli",          label: "CLI Commands",     group: "Reference" },
  { id: "training",     label: "Training Guide",   group: "Reference" },
  { id: "versioning",   label: "Data Versioning",  group: "Reference" },
  { id: "setup",        label: "Local Setup",      group: "Reference" },
];

/* ── primitives ─────────────────────────────────────── */

const H1 = ({ children }) => (
  <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 36, fontWeight: 400, letterSpacing: "-0.02em", color: "#0d0d0d", marginBottom: 8, lineHeight: 1.15 }}>
    {children}
  </h1>
);

const H2 = ({ children }) => (
  <h2 style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", marginTop: 40, marginBottom: 14, borderTop: "1px solid #f0f0f0", paddingTop: 16 }}>
    {children}
  </h2>
);

const P = ({ children }) => (
  <p style={{ fontSize: 14.5, lineHeight: 1.8, color: "#555", marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>{children}</p>
);

const Code = ({ children }) => (
  <code style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, background: "#f4f4f2", padding: "2px 6px", borderRadius: 4, color: "#333" }}>{children}</code>
);

const Block = ({ children, label }) => (
  <div style={{ margin: "16px 0" }}>
    {label && <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.1em", color: "#bbb", textTransform: "uppercase", marginBottom: 6 }}>{label}</div>}
    <pre style={{ background: "#0d0d0d", color: "#e8e4d9", fontFamily: "'DM Mono', monospace", fontSize: 12.5, lineHeight: 1.7, borderRadius: 10, padding: "18px 22px", overflowX: "auto", whiteSpace: "pre-wrap", margin: 0 }}>
      {children}
    </pre>
  </div>
);

const Tag = ({ color = "#f4f4f2", text = "#666", children }) => (
  <span style={{ display: "inline-block", fontSize: 11, fontWeight: 500, fontFamily: "'DM Mono', monospace", padding: "2px 8px", borderRadius: 99, background: color, color: text, marginRight: 6, marginTop: 4 }}>
    {children}
  </span>
);

const Divider = () => <hr style={{ border: "none", borderTop: "1px solid #f0f0f0", margin: "32px 0" }} />;

const Card = ({ title, desc, tag, tagColor = "#f4f4f2", tagText = "#666" }) => (
  <div style={{ border: "1px solid #ebebeb", borderRadius: 10, padding: "16px 18px", marginBottom: 10, background: "#fff" }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: "#0d0d0d" }}>{title}</span>
      {tag && <Tag color={tagColor} text={tagText}>{tag}</Tag>}
    </div>
    <p style={{ fontSize: 13.5, color: "#777", lineHeight: 1.65, margin: 0, fontFamily: "'DM Sans', sans-serif" }}>{desc}</p>
  </div>
);

const Step = ({ num, title, body, code, codeLabel }) => (
  <div style={{ marginBottom: 32, paddingLeft: 0 }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 8 }}>
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#ccc", letterSpacing: "0.05em" }}>{num}</span>
      <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 20, color: "#0d0d0d" }}>{title}</span>
    </div>
    <P>{body}</P>
    {code && <Block label={codeLabel}>{code}</Block>}
  </div>
);

/* ── pages ──────────────────────────────────────────── */

const OverviewPage = () => (
  <div>
    <H1>OhhSloth 🦥</H1>
    <p style={{ fontSize: 15, color: "#999", marginBottom: 32, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>
      Your own large language model — built from scratch, trained on your data, runs on your machine.
    </p>
    <P>
      OhhSloth is a fully custom LLM stack. From raw text data to a running model you can chat with — every single layer is built by you. No black boxes. No API bills. Just your own AI with your own name.
    </P>
    <P>
      Inspired by Ollama, OhhSloth lets you run your trained model locally with one command: <Code>ohhsloth run ohhsloth-120m</Code>. The difference is every part of the stack is yours.
    </P>

    <Divider />
    <H2>What OhhSloth gives you</H2>

    <Card title="Your own trained model" tag="Core" tagColor="#e8f5e9" tagText="#2e7d32"
      desc="Train a GPT-style transformer on your own corpus. Start at 10M params, scale to 1B." />
    <Card title="Your own tokenizer" tag="Core" tagColor="#e8f5e9" tagText="#2e7d32"
      desc="BPE tokenizer trained on your data. Your vocabulary, your special tokens." />
    <Card title="Ollama-style runner" tag="Tooling" tagColor="#e3f2fd" tagText="#1565c0"
      desc="ohhsloth run · ohhsloth pull · ohhsloth serve — same UX as Ollama but it's yours." />
    <Card title="OpenAI-compatible API" tag="Tooling" tagColor="#e3f2fd" tagText="#1565c0"
      desc="POST /v1/chat/completions — any app built for ChatGPT works with OhhSloth instantly." />
    <Card title="Full MLOps pipeline" tag="Production" tagColor="#fce4ec" tagText="#880e4f"
      desc="Docker, Prometheus, MLflow, GitHub Actions CI — production-grade from day one." />

    <Divider />
    <H2>Model sizes</H2>
    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12.5, border: "1px solid #ebebeb", borderRadius: 10, overflow: "hidden" }}>
      {[
        ["ohhsloth-tiny",  "10M",  "~40 MB",  "CPU",        "Test everything works"],
        ["ohhsloth-120m",  "120M", "~70 MB",  "Colab T4",   "First real model"],
        ["ohhsloth-1b",    "1B",   "~600 MB", "Colab A100", "Production quality"],
      ].map(([name, params, size, hw, use], i) => (
        <div key={name} style={{ display: "grid", gridTemplateColumns: "1.4fr 0.7fr 0.8fr 1fr 1.5fr", gap: 0, padding: "10px 16px", background: i % 2 === 0 ? "#fff" : "#fafafa", borderBottom: i < 2 ? "1px solid #f0f0f0" : "none", alignItems: "center" }}>
          <span style={{ color: "#0d0d0d", fontWeight: 500 }}>{name}</span>
          <span style={{ color: "#888" }}>{params}</span>
          <span style={{ color: "#888" }}>{size}</span>
          <span style={{ color: "#888" }}>{hw}</span>
          <span style={{ color: "#666" }}>{use}</span>
        </div>
      ))}
    </div>
  </div>
);

const HowItWorksPage = () => (
  <div>
    <H1>How It Works</H1>
    <p style={{ fontSize: 15, color: "#999", marginBottom: 32, fontFamily: "'DM Sans', sans-serif" }}>
      Six phases from raw text to a running model.
    </p>

    <Step num="01" title="Collect your training data"
      body="Download Wikipedia, books, or your own text files. Clean and deduplicate them into a JSONL corpus saved to Google Drive."
      codeLabel="scripts/download_data.py"
      code={`python scripts/download_data.py \\
  --output data/raw \\
  --custom_file my_notes.txt \\
  --max_samples 100000`} />

    <Step num="02" title="Train the OhhSloth tokenizer"
      body="Train a BPE tokenizer on your corpus. It converts words into numbers. Your vocabulary, your special tokens like <ohhsloth> and <|user|>."
      codeLabel="tokenizer/train_tokenizer.py"
      code={`python tokenizer/train_tokenizer.py \\
  --data data/cleaned/train.jsonl \\
  --vocab_size 32000
# → saves tokenizer/ohhsloth-tokenizer/`} />

    <Step num="03" title="Build the transformer brain"
      body="Write the model architecture in VS Code. RoPE embeddings, grouped query attention, SwiGLU FFN, RMSNorm — same building blocks as LLaMA 3."
      codeLabel="model/ohhsloth_model.py"
      code={`python model/ohhsloth_model.py
# OhhSlothLLM(
#   layers    = 4
#   embed_dim = 256
#   params    = 10.4M
# )
# Model is working correctly!`} />

    <Step num="04" title="Train in Google Colab"
      body="Run the training loop on Colab's free GPU. Loss goes from ~4.0 down to ~1.8. Checkpoints auto-save to Google Drive every N steps."
      codeLabel="training/train.py"
      code={`python training/train.py \\
  --config configs/ohhsloth_tiny.yaml
# step   100 | loss 3.8412 | lr 3.00e-04
# step   500 | loss 2.9341 | lr 2.88e-04
# step  1000 | loss 2.4120 | lr 2.61e-04
# VAL LOSS: 2.3891  ← getting smarter`} />

    <Step num="05" title="Convert and quantize"
      body="Export your trained PyTorch checkpoint to GGUF format. Quantize to Q4 — 4x smaller file, runs on any laptop, barely any quality loss."
      codeLabel="inference/convert_gguf.py"
      code={`# In Colab after training
python inference/convert_gguf.py \\
  --input checkpoints/ohhsloth-best.pt \\
  --output ohhsloth-120m.gguf
# Q4 quantize: 280MB → 70MB ✓
# Push to HuggingFace: yourname/ohhsloth-120m ✓`} />

    <Step num="06" title="Run it locally"
      body="Install the OhhSloth CLI, start the server, and chat with your own model. OpenAI-compatible so any existing app works instantly."
      codeLabel="terminal"
      code={`pip install -e .
ohhsloth serve &             # start server on :11435
ohhsloth run ohhsloth-120m   # open chat

You      : What is machine learning?
OhhSloth : Machine learning is a branch of...`} />
  </div>
);

const ArchitecturePage = () => (
  <div>
    <H1>Architecture</H1>
    <p style={{ fontSize: 15, color: "#999", marginBottom: 32, fontFamily: "'DM Sans', sans-serif" }}>
      Every layer of the OhhSloth stack explained.
    </p>

    <H2>Model internals</H2>
    <P>OhhSloth uses a modern GPT-style decoder-only transformer with the same building blocks as LLaMA 3 and Mistral.</P>

    {[
      { name: "RoPE embeddings", desc: "Rotary Position Embeddings — better than learned absolute positions for long contexts. Naturally generalises beyond training length." },
      { name: "Grouped Query Attention", desc: "GQA reduces KV cache memory by sharing key/value heads across query groups. OhhSloth-120m uses 12 query heads with 4 KV heads." },
      { name: "SwiGLU FFN", desc: "Gated feed-forward: swish(xW1) × (xW3) → xW2. Outperforms standard GELU on most benchmarks with similar compute." },
      { name: "RMSNorm (pre-norm)", desc: "Applied before attention and FFN, not after. More stable training than post-norm LayerNorm." },
      { name: "Weight tying", desc: "The embedding matrix and the LM head share weights, saving millions of parameters for free." },
    ].map(c => <Card key={c.name} title={c.name} desc={c.desc} />)}

    <H2>Data flow</H2>
    <Block label="end-to-end pipeline">{`Raw text
  → clean (remove HTML, duplicates, junk)
  → JSONL shards (one doc per line)
  → BPE tokenize (words → token IDs)
  → .bin shards (uint16, memory-mapped)
  → DataLoader (streaming, never loads all at once)
  → OhhSlothLLM forward pass (predict next token)
  → cross-entropy loss
  → AdamW + cosine LR
  → checkpoint (.pt) → Google Drive
  → push to HuggingFace Hub
  → convert to GGUF
  → quantize Q4_K_M
  → llama-cpp-python inference
  → FastAPI streaming SSE
  → ohhsloth CLI / web UI`}</Block>

    <H2>Folder responsibility</H2>
    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12 }}>
      {[
        ["data/",       "raw → cleaned → tokenized datasets",    "Colab"],
        ["tokenizer/",  "BPE tokenizer training + loading",      "Colab"],
        ["model/",      "transformer architecture (PyTorch)",    "VS Code"],
        ["training/",   "pre-training loop + config",            "Colab"],
        ["finetune/",   "SFT, LoRA, DPO fine-tuning",           "Colab"],
        ["inference/",  "GGUF convert + quantize",               "Colab"],
        ["server/",     "FastAPI OpenAI-compatible server",      "VS Code"],
        ["cli/",        "ohhsloth CLI tool",                     "VS Code"],
        ["configs/",    "YAML model + training configs",         "VS Code"],
        ["mlops/",      "Docker, monitoring, CI/CD",             "VS Code"],
      ].map(([folder, desc, where], i) => (
        <div key={folder} style={{ display: "grid", gridTemplateColumns: "1.2fr 2fr 0.7fr", padding: "9px 14px", background: i % 2 === 0 ? "#fff" : "#fafafa", borderRadius: i === 0 ? "10px 10px 0 0" : i === 9 ? "0 0 10px 10px" : 0, border: "1px solid #ebebeb", borderTop: i > 0 ? "none" : "1px solid #ebebeb" }}>
          <span style={{ color: "#0d0d0d", fontWeight: 500 }}>{folder}</span>
          <span style={{ color: "#777" }}>{desc}</span>
          <Tag color={where === "Colab" ? "#e8f5e9" : "#e3f2fd"} text={where === "Colab" ? "#2e7d32" : "#1565c0"}>{where}</Tag>
        </div>
      ))}
    </div>
  </div>
);

const TechStackPage = () => (
  <div>
    <H1>Tech Stack</H1>
    <p style={{ fontSize: 15, color: "#999", marginBottom: 32, fontFamily: "'DM Sans', sans-serif" }}>
      Everything OhhSloth is built with.
    </p>

    {[
      {
        group: "Model & Training",
        items: [
          ["PyTorch 2.2+", "The deep learning framework. Writes the model, runs the training loop."],
          ["FSDP", "Fully Sharded Data Parallel — scales training across multiple GPUs."],
          ["bf16 / mixed precision", "Trains in bfloat16 to use half the GPU memory with no quality loss."],
          ["Flash Attention", "torch.nn.functional.scaled_dot_product_attention — fast built-in attention."],
        ],
      },
      {
        group: "HuggingFace Ecosystem",
        items: [
          ["transformers", "Tokenizer wrappers, model utilities, fine-tuning helpers."],
          ["tokenizers", "Rust-backed BPE tokenizer training — fast and production-grade."],
          ["datasets", "One-line download of Wikipedia, books, code datasets."],
          ["peft", "LoRA and QLoRA adapters for low-memory fine-tuning."],
          ["trl", "SFT, DPO, and RLHF training pipelines."],
          ["huggingface_hub", "Push/pull models and datasets to your HF repositories."],
        ],
      },
      {
        group: "Inference & Serving",
        items: [
          ["llama-cpp-python", "Loads GGUF models and runs fast CPU/GPU inference."],
          ["FastAPI", "The async web framework powering the OhhSloth API server."],
          ["SSE / streaming", "Token-by-token streaming responses via Server-Sent Events."],
          ["Typer + Rich", "The ohhsloth CLI — beautiful terminal output with progress bars."],
        ],
      },
      {
        group: "MLOps & Monitoring",
        items: [
          ["WandB", "Live loss curves, GPU stats, and experiment comparison."],
          ["MLflow", "Experiment tracking and model registry."],
          ["Docker", "Containerise the entire OhhSloth server for any deployment."],
          ["Prometheus + Grafana", "Track tokens/sec, latency, and GPU usage in production."],
          ["GitHub Actions", "CI/CD — auto-test on every push to main."],
        ],
      },
      {
        group: "Training Infrastructure",
        items: [
          ["Google Colab", "Free T4 / A100 GPU for training. Free tier is enough for ohhsloth-tiny."],
          ["Kaggle Notebooks", "Backup GPU source — 30 hrs/week free, often faster than Colab."],
          ["Google Drive", "Checkpoint storage during training so sessions never lose progress."],
        ],
      },
    ].map(({ group, items }) => (
      <div key={group}>
        <H2>{group}</H2>
        {items.map(([name, why]) => (
          <div key={name} style={{ display: "flex", gap: 16, padding: "10px 0", borderBottom: "1px solid #f4f4f4" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12.5, color: "#0d0d0d", width: 180, flexShrink: 0, paddingTop: 1 }}>{name}</span>
            <span style={{ fontSize: 13.5, color: "#666", lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif" }}>{why}</span>
          </div>
        ))}
      </div>
    ))}
  </div>
);

const ApiPage = () => (
  <div>
    <H1>API Endpoints</H1>
    <p style={{ fontSize: 15, color: "#999", marginBottom: 32, fontFamily: "'DM Sans', sans-serif" }}>
      OhhSloth runs a local server on <Code>http://localhost:11435</Code>. All endpoints are OpenAI-compatible.
    </p>

    {[
      {
        method: "POST", path: "/api/generate", desc: "Ollama-compatible generate endpoint. Send a prompt, get a completion.",
        req: `{"model": "ohhsloth-120m", "prompt": "The meaning of life is", "max_tokens": 200, "temperature": 0.8, "stream": true}`,
        res: `{"model": "ohhsloth-120m", "response": "...", "done": true}`,
      },
      {
        method: "POST", path: "/v1/chat/completions", desc: "OpenAI-compatible chat endpoint. Any app built for ChatGPT works here.",
        req: `{"model": "ohhsloth-120m", "messages": [{"role": "user", "content": "Hello!"}], "stream": true}`,
        res: `{"choices": [{"message": {"role": "assistant", "content": "Hi! I'm OhhSloth..."}}]}`,
      },
      {
        method: "GET", path: "/api/tags", desc: "List all installed OhhSloth models.",
        res: `{"models": [{"name": "ohhsloth-120m", "size": "70 MB", "format": "GGUF"}]}`,
      },
      {
        method: "GET", path: "/v1/models", desc: "OpenAI-compatible model list.",
        res: `{"data": [{"id": "ohhsloth-120m", "object": "model", "owned_by": "ohhsloth"}]}`,
      },
      {
        method: "GET", path: "/health", desc: "Check server status and loaded model.",
        res: `{"status": "ok", "model_loaded": "ohhsloth-120m", "device": "cuda"}`,
      },
    ].map(({ method, path, desc, req, res }) => (
      <div key={path} style={{ marginBottom: 28, border: "1px solid #ebebeb", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "#fafafa", borderBottom: "1px solid #ebebeb" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 5, background: method === "GET" ? "#e8f5e9" : "#e3f2fd", color: method === "GET" ? "#2e7d32" : "#1565c0" }}>{method}</span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: "#0d0d0d" }}>{path}</span>
        </div>
        <div style={{ padding: "12px 16px" }}>
          <P>{desc}</P>
          {req && <Block label="request body">{req}</Block>}
          <Block label="response">{res}</Block>
        </div>
      </div>
    ))}

    <H2>Start the server</H2>
    <Block label="terminal">{`python server/app.py --model ohhsloth-120m --port 11435
# or with the CLI:
ohhsloth serve --model ohhsloth-120m`}</Block>
  </div>
);

const CliPage = () => (
  <div>
    <H1>CLI Commands</H1>
    <p style={{ fontSize: 15, color: "#999", marginBottom: 32, fontFamily: "'DM Sans', sans-serif" }}>
      Install once with <Code>pip install -e .</Code> and use anywhere.
    </p>

    {[
      { cmd: "ohhsloth run <model>",    desc: "Start an interactive chat session with a model.", example: "ohhsloth run ohhsloth-120m\nohhsloth run ohhsloth-120m --temp 0.5 --max-tokens 500" },
      { cmd: "ohhsloth serve",          desc: "Start the OhhSloth API server (FastAPI + llama-cpp-python).", example: "ohhsloth serve\nohhsloth serve --model ohhsloth-120m --port 11435" },
      { cmd: "ohhsloth pull <model>",   desc: "Download a model from HuggingFace Hub.", example: "ohhsloth pull yourname/ohhsloth-120m" },
      { cmd: "ohhsloth list",           desc: "List all models installed in ~/.ohhsloth/models/.", example: "ohhsloth list\n# Name            Size    Format\n# ohhsloth-120m   70 MB   GGUF" },
      { cmd: "ohhsloth info",           desc: "Show server status, loaded model, and device info.", example: "ohhsloth info" },
      { cmd: "ohhsloth convert <path>", desc: "Convert a PyTorch checkpoint to GGUF format.", example: "ohhsloth convert checkpoints/ohhsloth-best.pt" },
    ].map(({ cmd, desc, example }) => (
      <div key={cmd} style={{ marginBottom: 24 }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 13.5, color: "#0d0d0d", background: "#f4f4f2", padding: "8px 14px", borderRadius: "8px 8px 0 0", borderBottom: "1px solid #e8e8e6" }}>$ {cmd}</div>
        <div style={{ border: "1px solid #ebebeb", borderTop: "none", borderRadius: "0 0 8px 8px", padding: "12px 14px" }}>
          <P>{desc}</P>
          <Block label="example">{example}</Block>
        </div>
      </div>
    ))}
  </div>
);

const TrainingPage = () => (
  <div>
    <H1>Training Guide</H1>
    <p style={{ fontSize: 15, color: "#999", marginBottom: 32, fontFamily: "'DM Sans', sans-serif" }}>
      Everything you need to train OhhSloth in Google Colab.
    </p>

    <H2>Hardware requirements</H2>
    {[
      ["ohhsloth-tiny (10M)",  "CPU only",        "Your laptop",      "Test + verify"],
      ["ohhsloth-120m",        "Colab T4 (free)", "~3-6 hours",       "First real run"],
      ["ohhsloth-1b",          "Colab A100",      "~12-24 hours",     "Production model"],
    ].map(([model, hw, time, use]) => (
      <div key={model} style={{ display: "grid", gridTemplateColumns: "1.3fr 1.3fr 1fr 1fr", padding: "9px 14px", fontFamily: "'DM Mono', monospace", fontSize: 12, borderBottom: "1px solid #f0f0f0" }}>
        <span style={{ color: "#0d0d0d" }}>{model}</span>
        <span style={{ color: "#666" }}>{hw}</span>
        <span style={{ color: "#888" }}>{time}</span>
        <span style={{ color: "#888" }}>{use}</span>
      </div>
    ))}

    <H2>Start training (Colab)</H2>
    <Block label="notebooks/colab_train.py — run cell by cell">{`# Cell 1 — mount Drive
from google.colab import drive
drive.mount('/content/drive')
SAVE = "/content/drive/MyDrive/ohhsloth"

# Cell 2 — clone your repo
!git clone https://github.com/yourname/ohhsloth /content/ohhsloth
%cd /content/ohhsloth

# Cell 3 — install deps
!pip install -q -r requirements.txt

# Cell 4 — download data
!python scripts/download_data.py --output {SAVE}/data/raw

# Cell 5 — train tokenizer
!python tokenizer/train_tokenizer.py --data {SAVE}/data/cleaned/train.jsonl

# Cell 6 — TRAIN!
!python training/train.py --config configs/ohhsloth_tiny.yaml`}</Block>

    <H2>Resume interrupted training</H2>
    <P>Colab sessions die after ~12 hours. Checkpoints save to Drive automatically. Resume with:</P>
    <Block label="terminal">{`python training/train.py \\
  --config configs/ohhsloth_120m.yaml \\
  --resume /content/drive/MyDrive/ohhsloth/checkpoints/ohhsloth-step-5000.pt`}</Block>

    <H2>Reading the training logs</H2>
    <Block>{`step   100 | loss 3.84 | lr 3.00e-04 | 1240 tok/s
step   500 | loss 2.93 | lr 2.88e-04 | 1198 tok/s
step  1000 | loss 2.41 | lr 2.61e-04 | 1205 tok/s
VAL LOSS: 2.39  ← saved best checkpoint → HuggingFace`}</Block>
    <P>Loss going down = OhhSloth is learning. Val loss below 2.0 = genuinely useful generations.</P>
  </div>
);

const VersioningPage = () => (
  <div>
    <H1>Data Versioning</H1>
    <p style={{ fontSize: 15, color: "#999", marginBottom: 32, fontFamily: "'DM Sans', sans-serif" }}>
      How to add new training data and manage model versions.
    </p>

    <H2>Dataset versioning strategy</H2>
    <Block label="version naming">{`data/v1/  ← Wikipedia only (baseline)
data/v2/  ← + your custom text files
data/v3/  ← + code data + better cleaning
data/v4/  ← + instruction pairs (chat format)`}</Block>

    <H2>Adding new data — exact steps</H2>
    <Step num="01" title="Add your text file"
      body="Put any .txt or .jsonl file in data/raw/. Can be your own notes, articles, domain-specific content — anything."
      code={`data/raw/my_domain_notes.txt   ← your new file`} />
    <Step num="02" title="Run the pipeline"
      body="Cleans, deduplicates, and merges with existing data. Creates a new versioned output."
      codeLabel="Colab"
      code={`python scripts/download_data.py \\
  --custom_file data/raw/my_domain_notes.txt
# → data/cleaned/train_v2.jsonl`} />
    <Step num="03" title="Update your config"
      body="Point the training config to the new data version. No code changes needed."
      codeLabel="configs/ohhsloth_120m.yaml"
      code={`data:
  train_file: data/tokenized/train_v2.bin  # ← change version
  val_file:   data/tokenized/val_v2.bin`} />
    <Step num="04" title="Fine-tune (don't retrain)"
      body="For small new datasets, fine-tune from the existing checkpoint. Much faster than retraining from scratch."
      codeLabel="Colab"
      code={`python training/train.py \\
  --config configs/ohhsloth_120m.yaml \\
  --resume checkpoints/ohhsloth-120m-v1/ohhsloth-best.pt`} />
    <Step num="05" title="Publish new version"
      body="Push the new model to HuggingFace with a versioned name. Never delete old versions — always keep the ability to roll back."
      codeLabel="Colab"
      code={`# new model gets a new HF repo name
repo_id = "yourname/ohhsloth-120m-v2"
api.upload_file(path_or_fileobj="ohhsloth-best.pt", repo_id=repo_id)`} />

    <H2>Model version naming</H2>
    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12.5, lineHeight: 2 }}>
      {["ohhsloth-120m-v1", "ohhsloth-120m-v2", "ohhsloth-120m-v1-instruct", "ohhsloth-120m-v2-instruct", "ohhsloth-1b-v1"].map(n => (
        <div key={n} style={{ padding: "4px 0", borderBottom: "1px solid #f4f4f4", color: "#444" }}>yourname/{n}</div>
      ))}
    </div>
  </div>
);

const SetupPage = () => (
  <div>
    <H1>Local Setup</H1>
    <p style={{ fontSize: 15, color: "#999", marginBottom: 32, fontFamily: "'DM Sans', sans-serif" }}>
      Get OhhSloth running on your machine in 5 minutes.
    </p>

    <H2>Prerequisites</H2>
    {[
      ["Python 3.10+",     "Required for all scripts"],
      ["Git",              "Clone the repo and push changes"],
      ["VS Code",          "Main code editor"],
      ["GitHub account",   "Code storage and CI/CD"],
      ["HuggingFace acct", "Model storage and publishing"],
      ["Google account",   "Colab GPU + Drive storage"],
    ].map(([name, why]) => (
      <div key={name} style={{ display: "flex", gap: 16, padding: "8px 0", borderBottom: "1px solid #f4f4f4", fontFamily: "'DM Sans', sans-serif", fontSize: 13.5 }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12.5, color: "#0d0d0d", width: 160, flexShrink: 0 }}>{name}</span>
        <span style={{ color: "#777" }}>{why}</span>
      </div>
    ))}

    <H2>Install</H2>
    <Block label="terminal">{`# 1. Clone
git clone https://github.com/yourname/ohhsloth
cd ohhsloth

# 2. Install dependencies
pip install -r requirements.txt

# 3. Install ohhsloth CLI
pip install -e .

# 4. Verify model works (no GPU needed)
python model/ohhsloth_model.py
# → Model is working correctly!

# 5. Verify CLI
ohhsloth info`}</Block>

    <H2>First day workflow</H2>
    <Block label="VS Code">{`# write / edit code
code .

# test model architecture
python model/ohhsloth_model.py

# push to GitHub
git add . && git commit -m "init" && git push`}</Block>
    <Block label="Google Colab">{`# at start of every session
from google.colab import drive
drive.mount('/content/drive')
!git clone https://github.com/yourname/ohhsloth  # first time
!cd ohhsloth && git pull                          # every time after

# run training
!python training/train.py --config configs/ohhsloth_tiny.yaml`}</Block>
    <Block label="After training — run OhhSloth locally">{`ohhsloth pull yourname/ohhsloth-120m
ohhsloth serve &
ohhsloth run ohhsloth-120m`}</Block>

    <H2>Environment variables</H2>
    <Block label=".env">{`HF_TOKEN=hf_your_huggingface_token
WANDB_API_KEY=your_wandb_key
OHHSLOTH_MODELS_DIR=~/.ohhsloth/models`}</Block>
  </div>
);

const PAGES = {
  overview:       OverviewPage,
  "how-it-works": HowItWorksPage,
  architecture:   ArchitecturePage,
  "tech-stack":   TechStackPage,
  api:            ApiPage,
  cli:            CliPage,
  training:       TrainingPage,
  versioning:     VersioningPage,
  setup:          SetupPage,
};

/* ── shell ──────────────────────────────────────────── */

export default function Docs() {
  const [current, setCurrent] = useState("overview");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const PageComponent = PAGES[current];
  const groups = [...new Set(NAV.map(n => n.group))];

  const go = (id) => { setCurrent(id); setMenuOpen(false); window.scrollTo(0, 0); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #fff; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-thumb { background: #e0e0e0; border-radius: 99px; }
      `}</style>

      {/* header */}
      <header style={{ position: "sticky", top: 0, zIndex: 40, background: scrolled ? "rgba(255,255,255,0.92)" : "#fff", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: "1px solid #ebebeb", transition: "background 0.2s" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px", height: 54, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 24 }}>🦥</span>
            <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 20, color: "#0d0d0d", letterSpacing: "-0.02em" }}>OhhSloth</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#bbb", letterSpacing: "0.08em", marginTop: 2 }}>docs</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#bbb" }}>v1.0.0</span>
            <button onClick={() => setMenuOpen(v => !v)} style={{ background: "none", border: "none", cursor: "pointer", color: "#888", padding: 4, display: window.innerWidth >= 768 ? "none" : "block" }} aria-label="menu">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                {menuOpen
                  ? <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  : <path d="M2 4h14M2 9h14M2 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px", display: "flex", gap: 0, position: "relative" }}>

        {/* sidebar */}
        <aside style={{ width: 210, flexShrink: 0, position: "sticky", top: 54, height: "calc(100vh - 54px)", overflowY: "auto", paddingTop: 32, paddingRight: 24, borderRight: "1px solid #f0f0f0" }}>
          {groups.map(group => (
            <div key={group} style={{ marginBottom: 28 }}>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#ccc", marginBottom: 8, paddingLeft: 10 }}>{group}</p>
              <ul style={{ listStyle: "none" }}>
                {NAV.filter(n => n.group === group).map(item => (
                  <li key={item.id}>
                    <button onClick={() => go(item.id)} style={{ width: "100%", textAlign: "left", padding: "6px 10px", borderRadius: 6, fontSize: 13.5, fontFamily: "'DM Sans', sans-serif", cursor: "pointer", border: "none", background: current === item.id ? "#f4f4f2" : "transparent", color: current === item.id ? "#0d0d0d" : "#888", fontWeight: current === item.id ? 500 : 400, transition: "all .12s" }}>
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* main */}
        <main style={{ flex: 1, minWidth: 0, padding: "48px 0 80px 48px", maxWidth: 660 }}>
          <PageComponent />

          {/* prev / next */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 64, paddingTop: 28, borderTop: "1px solid #f0f0f0" }}>
            {(() => {
              const idx = NAV.findIndex(n => n.id === current);
              const prev = NAV[idx - 1];
              const next = NAV[idx + 1];
              return (
                <>
                  {prev ? (
                    <button onClick={() => go(prev.id)} style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#bbb", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Previous</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, color: "#888" }}>← {prev.label}</div>
                    </button>
                  ) : <div />}
                  {next ? (
                    <button onClick={() => go(next.id)} style={{ background: "none", border: "none", cursor: "pointer", textAlign: "right" }}>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#bbb", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Next</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, color: "#888" }}>{next.label} →</div>
                    </button>
                  ) : <div />}
                </>
              );
            })()}
          </div>
        </main>
      </div>
    </>
  );
}