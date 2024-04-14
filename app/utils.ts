import { useEffect, useState } from "react";
import { showToast } from "./components/ui-lib";
import Locale from "./locales";

export function trimTopic(topic: string): string {
  // Trim trailing punctuation, whitespace, and special characters using Unicode properties
  return topic.replace(/[\p{P}\p{S}\s]*$/gu, "");
}

export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    showToast(Locale.Copy.Success);
  } catch (error) {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      showToast(Locale.Copy.Success);
    } catch (error) {
      showToast(Locale.Copy.Failed);
    }
  }
}

export function downloadAs(text: string, filename: string, mimeType = "text/plain;charset=utf-8"): void {
  const blob = new Blob([text], { type: mimeType });
  const url = URL.createObjectURL(blob);

  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;

  anchor.style.display = "none";
  document.body.appendChild(anchor);

  anchor.click();

  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}

export function readFromFile(): Promise<string | null> {
  return new Promise((resolve, reject) => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".txt, .json, .csv";

    fileInput.onchange = (event) => {
      const file = (event.target as HTMLInputElement)?.files?.[0];
      if (!file) {
        reject(new Error("No file selected"));
        return;
      }

      const fileReader = new FileReader();
      fileReader.onload = (e) => resolve(e.target?.result as string);
      fileReader.onerror = (e) => reject(e);
      fileReader.readAsText(file);
    };

    fileInput.click();
  });
}

export function isIOS(): boolean {
  const userAgent = navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
}

export function useWindowSize(): { width: number; height: number } {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const debouncedResizeHandler = debounce(handleResize, 200); // Example debounce function

    window.addEventListener("resize", debouncedResizeHandler);

    return () => {
      window.removeEventListener("resize", debouncedResizeHandler);
    };
  }, []);

  return size;
}

export function isFirefox(): boolean {
  return typeof InstallTrigger !== "undefined";
}

export function autoGrowTextArea(dom: HTMLTextAreaElement): number {
  const measureDom = getOrCreateMeasureDom("__measure");
  measureDom.style.width = getDomContentWidth(dom) + "px";
  measureDom.innerText = dom.value || "1";

  const height = parseFloat(window.getComputedStyle(measureDom).height);
  const singleLineHeight = parseFloat(
    window.getComputedStyle(getOrCreateMeasureDom("__single_measure")).height
  );

  return Math.round(height / singleLineHeight);
}

export function getCSSVar(varName: string, defaultValue = ""): string {
  return getComputedStyle(document.body).getPropertyValue(varName).trim() || defaultValue;
}

function debounce(callback: () => void, delay: number): () => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
}

function getDomContentWidth(dom: HTMLElement): number {
  const style = window.getComputedStyle(dom);
  const paddingWidth =
    parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
  const width = dom.clientWidth - paddingWidth;
  return width;
}

function getOrCreateMeasureDom(id: string, init?: (dom: HTMLElement) => void): HTMLElement {
  let dom = document.getElementById(id) as HTMLElement;

  if (!dom) {
    dom = document.createElement("span");
    dom.style.position = "absolute";
    dom.style.wordBreak = "break-word";
    dom.style.fontSize = "14px";
    dom.style.transform = "translateY(-200vh)";
    dom.style.pointerEvents = "none";
    dom.style.opacity = "0";
    dom.id = id;
    document.body.appendChild(dom);
    init?.(dom);
  }

  return dom;
}
