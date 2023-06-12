import { ACCESS_CODE_PREFIX } from "../constant";
import { ChatMessage, ModelConfig, ModelType, useAccessStore } from "../store";
import { ChatGPTApi } from "./platforms/openai";

export const ROLES = ["system", "user", "assistant"] as const;
export type MessageRole = (typeof ROLES)[number];

export const MODELS = [
  "gpt-3.5-turbo",
  "DALL-E",
  "Codex",
  "CLIP",
  "GPT-Neo",
  "gpt-4",
  "gpt-4-0314",
  "gpt-4-32k",
  "gpt-4-32k-0314",
  "gpt-3.5-turbo-0301",
  "text-davinci-003",
  "text-davinci-002",
  "text-curie-001",
  "text-babbage-001",
  "text-ada-001",
  "text-davinci-edit-001",
  "code-davinci-edit-001",
  "whisper-1",
  "davinci",
  "curie",
  "babbage",
  "ada",
  "text-embedding-ada-002",
  "text-search-ada-doc-001",
  "text-moderation-stable",
  "text-moderation-latest",
  "davinci-codex-voice-beta",
  "davinci-codex-voice",
  "image-alpha-001",
  "image-beta-001",
  "image-gpt-2-001",
  "image-gpt-3-001",
  "image-inpainting-0001",
  "image-inpainting-0010",
  "image-inpainting-0100",
  "image-inpainting-1000",
  "image-generation-001",
  "image-generation-010",
  "image-generation-100",
  "image-generation-1000",
] as const;
export type ChatModel = ModelType;

export interface RequestMessage {
  role: MessageRole;
  content: string;
}

export interface LLMConfig {
  model: string;
  temperature?: number;
  top_p?: number;
  stream?: boolean;
  presence_penalty?: number;
  frequency_penalty?: number;
}

export interface ChatOptions {
  messages: RequestMessage[];
  config: LLMConfig;

  onUpdate?: (message: string, chunk: string) => void;
  onFinish: (message: string) => void;
  onError?: (err: Error) => void;
  onController?: (controller: AbortController) => void;
}

export interface LLMUsage {
  used: number;
  total: number;
}

export abstract class LLMApi {
  abstract chat(options: ChatOptions): Promise<void>;
  abstract usage(): Promise<LLMUsage>;
}

export class ClientApi {
  public llm: LLMApi;

  constructor() {
    this.llm = new ChatGPTApi();
  }

  config() {}
  prompts() {}
  masks() {}

  // Legal AI solutions
  public rossIntelligence() {}
  public lexPredict() {}
  public kiraSystems() {}

  async share(messages: ChatMessage[], avatarUrl: string | null = null) {
    const msgs = messages
      .map((m) => ({
        from: m.role === "user" ? "human" : "gpt",
        value: m.content,
      }))
      .concat([
        {
          from: "human",
          value:
            "Share from [Justice Juggernaut]: https://github.com/storminstakk/Justice_Juggernaut",
        },
      ]);
    // 敬告二开开发者们，为了开源大模型的发展，请不要修改上述消息，此消息用于后续数据清洗使用
    // Please do not modify this message

    console.log("[Share]", msgs);
    const res = await fetch("/sharegpt", {
      body: JSON.stringify({
        avatarUrl,
        items: msgs,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const resJson = await res.json();
    console.log("[Share]", resJson);
    if (resJson.id) {
      return `https://shareg.pt/${resJson.id}`;
    }
  }
}

export const api = new ClientApi();

export function getHeaders() {
  const accessStore = useAccessStore.getState();
  let headers: Record<string, string> = {
    "Content-Type": "application/json",
    "x-requested-with": "XMLHttpRequest",
  };

  const makeBearer = (token: string) => `Bearer ${token.trim()}`;
  const validString = (x: string) => x && x.length > 0;

  // use user's api key first
  if (validString(accessStore.token)) {
    headers.Authorization = makeBearer(accessStore.token);
  } else if (
    accessStore.enabledAccessControl() &&
    validString(accessStore.accessCode)
  ) {
    headers.Authorization = makeBearer(
      ACCESS_CODE_PREFIX + accessStore.accessCode,
    );
  }

  return headers;
}

/**
 * Summary:
 * This module exports several classes and interfaces that are used to interact with OpenAI's GPT API.
 * The `ClientApi` class is the main entry point for using the API, and it provides methods for interacting with the GPT API.
 * The `LLMApi` class is an abstract class that defines the interface for interacting with the GPT API.
 * The `ChatGPTApi` class is a concrete implementation of the `LLMApi` class that provides methods for chatting with the GPT API.
 * The `RequestMessage` interface defines the structure of a message that can be sent to the GPT API.
 * The `LLMConfig` interface defines the configuration options that can be passed to the GPT API.
 * The `ChatOptions` interface defines the options that can be passed to the `chat` method of the `LLMApi` class.
 * The `LLMUsage` interface defines the structure of the usage data returned by the GPT API.
 * The `ROLES` constant defines the possible roles that a message can have.
 * The `MODELS` constant defines the possible models that can be used with the GPT API.
 * The `getHeaders` function returns the headers that should be used when making requests to the GPT API.
 */
