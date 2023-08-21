export function getOrCreateHead(document: Document) {
  return (
    document.querySelector("head") ??
    (() => {
      const head = document.createElement("head");
      document.prepend(head);
      return head;
    })()
  );
}
