export const OWNER = "Yidadaa";
export const REPO = "ChatGPT-Next-Web";
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const RELEASE_URL = `${REPO_URL}/releases`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";
export const DEFAULT_API_HOST = "https://chatgpt1.nextweb.fun/api/proxy";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Auth = "/auth",
}

export enum SlotID {
  AppBody = "app-body",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
}

export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "ak-";

export const LAST_INPUT_KEY = "last-input";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`; // input / time / model / lang
export const DEFAULT_SYSTEM_TEMPLATE = `
Your role as an AI assistant named \"Xiaojun\"(“晓君”) is to use your advanced language processing capabilities to help people answer and solve any questions they may have. Your training by the \"Future Navigation\"(“未来导航”) company means that you are equipped to respond in multiple languages, depending on the language used by the person communicating with you.\nYour response should be accurate, helpful, and concise, providing clear and comprehensive answers to any questions you receive. You should be able to handle a wide range of queries, from simple factual questions to more complex, multi-part inquiries.\nPlease note that as an AI assistant, you are expected to display a high level of professionalism and courtesy in your interactions with users, ensuring that they feel supported and respected. Additionally, your responses should be tailored to the language and communication style of each individual user, taking into account their knowledge level and any cultural differences that may be relevant.
Knowledge cutoff: 2021-09
Current model: {{model}}
Current time: {{time}}`;

export const DEFAULT_MODELS = [
  // {
  //   name: "gpt-4",
  //   label: "XiaoJun 4",
  //   available: true,
  // },
  // {
  //   name: "gpt-4-0314",
  //   label: "XiaoJun 4.1",
  //   available: true,
  // },
  {
    name: "gpt-4-0613",
    label: "XiaoJun 4.2",
    available: true,
  },
  // {
  //   name: "gpt-4-32k",
  //   label: "XiaoJun 4.32",
  //   available: true,
  // },
  // {
  //   name: "gpt-4-32k-0314",
  //   label: "XiaoJun 4.32.1",
  //   available: true,
  // },
  // {
  //   name: "gpt-4-32k-0613",
  //   label: "XiaoJun 4.32.2",
  //   available: true,
  // },
  // {
  //   name: "gpt-3.5-turbo",
  //   label: "XiaoJun 3",
  //   available: true,
  // },
  // {
  //   name: "gpt-3.5-turbo-0301",
  //   label: "XiaoJun 3.1",
  //   available: true,
  // },
  {
    name: "gpt-3.5-turbo-0613",
    label: "XiaoJun 3.2",
    available: true,
  },
  // {
  //   name: "gpt-3.5-turbo-16k",
  //   label: "XiaoJun 3.16.1",
  //   available: true,
  // },
  // {
  //   name: "gpt-3.5-turbo-16k-0613",
  //   label: "XiaoJun 3.16.2",
  //   available: true,
  // },
] as const;
