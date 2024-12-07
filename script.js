let texts = [
    "Thank you for reaching out! We'll get back to you soon.",
    "We appreciate your email! A team member will reply shortly.",
    "Thanks for your interest! We will respond to your query as soon as possible.",
    "Your message has been received. Our team will contact you soon.",
    "Thanks for contacting us! We are reviewing your email and will respond shortly.",
    "Your email is important to us! We’ll get back to you as soon as possible.",
    "Thank you for your inquiry! Our team is looking into it and will reply soon.",
    "We’ve received your email! A representative will be in touch with you shortly.",
    "Thank you for reaching out! We're reviewing your request and will respond soon.",
    "Thanks for your email! We will provide you with a detailed response soon.",
    "Thank you for contacting us! We'll get back to you as soon as possible.",
    "We appreciate your message! Someone from our team will reach out soon.",
    "Thanks for your interest! Expect a response from us shortly.",
    "We’ve received your query! A member of our team will reply to you shortly.",
    "Thank you for your message! We are processing it and will respond soon.",
    "Thanks for getting in touch! We are reviewing your email and will reply soon.",
    "Your email has been received! Our team will respond shortly.",
    "Thanks for contacting us! Your message is being reviewed by our team.",
    "We’ve received your inquiry! A representative will be in touch soon.",
    "Thank you for your email! We’ll get back to you as soon as we can.",
    "Your message is important to us! We’ll respond shortly.",
    "Thank you for your patience! A response will be sent to you soon.",
    "Thanks for reaching out! We will review your inquiry and reply shortly.",
    "We’ve received your message! A team member will get back to you shortly.",
    "Thank you for your email! We're processing your request and will respond soon.",
    "We appreciate your inquiry! You’ll receive a reply shortly.",
    "Thanks for your message! We are reviewing it and will respond soon.",
    "Your inquiry has been received! We’ll get back to you soon.",
    "Thank you for your email! A team member will get back to you soon.",
    "We’ve received your query! We’ll respond as soon as possible.",
    "Thanks for your email! We’ll review it and get back to you shortly.",
    "Your message is in our system! We will reply soon.",
    "Thank you for reaching out! A representative will contact you soon.",
    "We’ve received your email! We are currently reviewing it and will reply shortly.",
    "Thank you for your inquiry! We’ll get back to you shortly.",
    "Your email has been received! We’ll respond as soon as possible.",
    "Thanks for reaching out! Expect a response soon.",
    "We’ve received your message! A representative will be in touch with you shortly.",
    "Thank you for your message! We are reviewing it and will reply soon.",
    "Thanks for contacting us! Our team will get back to you shortly.",
    "We appreciate your email! Our team is looking into your request.",
    "Thank you for reaching out! We’ll reply to your message soon.",
    "Your email has been received! Our team will be in touch soon.",
    "Thanks for your message! We’ll get back to you as soon as possible.",
    "Thank you for your email! We are reviewing it and will respond shortly.",
    "We’ve received your query! Our team is working on a response.",
    "Thank you for contacting us! A response will be sent soon.",
    "Thanks for getting in touch! We are reviewing your email.",
    "We’ve received your message! You’ll hear from us shortly.",
    "Thank you for reaching out! We’re working on your request and will reply soon.",
    "Thanks for your email! A response will be sent shortly.",
    "We appreciate your inquiry! We’ll get back to you as soon as possible.",
    "Thank you for your email! We will contact you soon.",
    "We’ve received your message! Our team will be in touch soon.",
    "Thanks for reaching out! We are currently reviewing your email.",
    "Thank you for your inquiry! We are working on a response and will reply shortly.",
    "We’ve received your email! A team member will get back to you shortly.",
    "Thanks for contacting us! We are reviewing your request and will reply soon.",
    "Thank you for your email! We’re processing it and will respond shortly.",
    "We’ve received your message! We’ll respond to it soon.",
    "Thanks for your inquiry! A team member will respond shortly.",
    "Thank you for reaching out! We’ll get back to you soon.",
    "We appreciate your message! We’ll reply as soon as we can.",
    "Thanks for contacting us! Your request is being reviewed.",
    "Thank you for your email! We will reply shortly.",
    "We’ve received your inquiry! A response will be sent to you soon.",
    "Thanks for your message! A team member will reply soon.",
    "We’ve received your query! We’re working on a response for you."
]; 

let currentIndex = 0;  // To keep track of the current text

document.getElementById("fetchTextBtn").addEventListener("click", fetchText);
document.getElementById("copyTextBtn").addEventListener("click", copyToClipboard);

function fetchText() {
    // Get the next text from the array
    const text = texts[currentIndex];
    // Update the text on the page
    document.getElementById("text").innerText = text;

    // Enable the "Copy Text" button
    document.getElementById("copyTextBtn").disabled = false;

    // Update the index for the next text
    currentIndex++;
    if (currentIndex >= texts.length) {
        currentIndex = 0;  // If we reach the end, start again from the first text
    }
}

function copyToClipboard() {
    const text = document.getElementById("text").innerText;
    if (text) {
        navigator.clipboard.writeText(text)
            .then(() => {                
            })
            .catch((err) => {
                console.error("Failed to copy text: ", err);
            });
    }
}
