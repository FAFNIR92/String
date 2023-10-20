const commentInput = document.getElementById("comment");
const counter = document.getElementById("counter");
const submitButton = document.getElementById("submit-comment");
const uppercaseButton = document.getElementById("uppercase-comment");
const lowercaseButton = document.getElementById("lowercase-comment");
const commentList = document.querySelector(".comment-box ul");

commentInput.addEventListener("input", () => {
  const comment = commentInput.value.trim();
  const length = comment.length;
  const remainingChars = 255 - length;

  const hasLeadingTrailingSpaces = comment !== comment.trim();

  counter.textContent = remainingChars;

  if (hasLeadingTrailingSpaces || length === 0) {
    counter.style.color = "red";
    submitButton.disabled = true;
  } else {
    counter.style.color = "black";
    submitButton.disabled = false;
  }
});

submitButton.addEventListener("click", () => {
  const comment = commentInput.value.trim();

  const newComment = document.createElement("li");
  const commentText = document.createElement("p");
  commentText.innerHTML = `<strong>Usuario:</strong> ${comment}`;
  newComment.appendChild(commentText);

  commentList.appendChild(newComment);

  commentInput.value = "";
  counter.textContent = 255;
});

uppercaseButton.addEventListener("click", () => {
  const comment = commentInput.value.trim();
  commentInput.value = comment.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  const comment = commentInput.value.trim();
  commentInput.value = comment.toLowerCase();
});
