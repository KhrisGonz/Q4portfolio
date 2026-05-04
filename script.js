// ================= GLOBAL =================

// Dark mode
function toggleMode() {
  document.body.classList.toggle("dark");
}

// Typewriter (homepage only)
const text = "Ethical Hacking";
let i = 0;
function typeWriter() {
  if (document.getElementById("typewriter")) {
    if (i < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 70);
    }
  }
}
window.onload = typeWriter;

// ================= CLI =================
function checkCLI(correct) {
  const result = document.getElementById("cli-result");

  if (correct) {
    result.innerHTML = "✅ Correct! The CLI is faster, more precise, and allows automation.";
    result.style.color = "#00ff88";
  } else {
    result.innerHTML = "❌ Incorrect. The CLI is not about looks — it's about efficiency and control.";
    result.style.color = "red";
  }
}

// ================= SSH =================
function checkSSH(correct) {
  const result = document.getElementById("ssh-result");

  if (correct) {
    result.innerHTML = "✅ Correct! SSH encrypts connections to protect data from being intercepted.";
    result.style.color = "#00ff88";
  } else {
    result.innerHTML = "❌ Incorrect. SSH is focused on security, not speed.";
    result.style.color = "red";
  }
}

// ================= NMAP =================
function checkNmap(correct) {
  const result = document.getElementById("nmap-result");

  if (correct) {
    result.innerHTML = "✅ Correct! Open ports reveal services that could be targeted.";
    result.style.color = "#00ff88";
  } else {
    result.innerHTML = "❌ Incorrect. Ports don't affect speed — they show access points.";
    result.style.color = "red";
  }
}

// ================= WIRESHARK =================
function checkWireshark(correct) {
  const result = document.getElementById("wire-result");

  if (correct) {
    result.innerHTML = "✅ Correct! Unencrypted packets can expose sensitive data like passwords.";
    result.style.color = "#00ff88";
  } else {
    result.innerHTML = "❌ Incorrect. Wireshark can reveal a lot if traffic is not encrypted.";
    result.style.color = "red";
  }
}

// ================= HYDRA =================
function checkHydra(correct) {
  const result = document.getElementById("hydra-result");

  if (correct) {
    result.innerHTML = "✅ Correct! Using Hydra without permission is unauthorized access and illegal.";
    result.style.color = "#00ff88";
  } else {
    result.innerHTML = "❌ Incorrect. The issue is legality, not performance.";
    result.style.color = "red";
  }
}

// ================= BRUTE FORCE =================
function checkBrute(correct) {
  const result = document.getElementById("brute-result");

  if (correct) {
    result.innerHTML = "✅ Correct! Brute force tries every possible combination.";
    result.style.color = "#00ff88";
  } else {
    result.innerHTML = "❌ Incorrect. Brute force involves many attempts, not just one.";
    result.style.color = "red";
  }
}
