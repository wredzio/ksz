export type TerminalStep =
  | "idle"
  | "email_prompt"
  | "email_input"
  | "message_prompt"
  | "message_input"
  | "confirm_prompt"
  | "confirm_input"
  | "submitting"
  | "success"
  | "error"
  | "restart_prompt"
  | "restart_input";

export type TerminalLineType = "system" | "user" | "success" | "error" | "info";

export interface TerminalLine {
  id: string;
  type: TerminalLineType;
  text: string;
}
