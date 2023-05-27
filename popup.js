document.getElementById('extract').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {message: "extract_emails"}, function(response) {
      document.getElementById('emails').innerText = response.emails.join('\n');
    });
  });
});
