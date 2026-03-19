import { onDamageFromChat, onLinkFromChat } from "../helpers/items.mjs";

export default class Knave2eChatMessage extends ChatMessage {
  async getHTML() {
    const html = await super.renderHTML();

    // Migrate damage button clicks
    const damageButtons = html.querySelectorAll(".item-button.damage.chat");
    damageButtons.forEach(button => {
      button.addEventListener("click", onDamageFromChat.bind(this));
    });

    // Migrate content link clicks
    const contentLinks = html.querySelectorAll(".content-link");
    contentLinks.forEach(link => {
      link.addEventListener("click", onLinkFromChat.bind(this));
    });

    return html;
  }
}
