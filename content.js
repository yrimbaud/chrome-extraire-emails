chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "extract_emails") {
      // Extract the visible text from the body
      let text = document.body.innerText || "";

      let emails = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);

      // Remove undesired characters
      emails = emails.map(email => {
        return email
          .replace(/x22/gi, '')  // remove x22
          .replace(/x3e/gi, '')  // remove x3e
          .replace(/&quot;/gi, '')  // remove &quot;
          .replace(/&gt;/gi, '')  // remove &gt;
      });

      // Remove duplicates
      emails = Array.from(new Set(emails));

      sendResponse({emails: emails});
    }
  }
);
