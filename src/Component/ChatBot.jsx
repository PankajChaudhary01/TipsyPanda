import React, { useState, useEffect, useRef } from 'react';
import { marked } from 'marked';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Make sure to install bootstrap-icons

// --- SECURITY WARNING ---
// Critical: Secure your API key. Never expose it in frontend code for production.
// Consider using environment variables or a backend proxy.
const API_KEY = 'Bearer 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'; // Replace with your actual key ONLY for local dev/testing
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';

// --- Component Start ---
const ChatBot = () => {
    const [input, setInput] = useState('');
    // Store conversation history: { role: 'user' | 'assistant' | 'system', content: string }
    const [chatHistory, setChatHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const chatContainerRef = useRef(null);
    const inputRef = useRef(null); // Ref for the input field

    // Configure marked
    useEffect(() => {
        marked.setOptions({
            breaks: true, // Convert '\n' in paragraphs into <br>
            gfm: true,    // Use GitHub Flavored Markdown
            // Consider adding a syntax highlighter like highlight.js here if needed
        });
         // Set initial welcome message only once
         setChatHistory([{
             role: 'system', // Use 'system' role for initial messages/instructions
             content: '<div class="text-center p-3"><p class="text-body-secondary fst-italic mb-0">Welcome to AI Panda Assistant! Ask me anything.</p></div>'
        }]);
         // Focus input on initial load
        inputRef.current?.focus();
    }, []);

    // Scroll to bottom when chat history updates
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory]);

    // Function to render individual messages
    const renderMessage = (message, index) => {
        const baseClasses = "mb-3 message-bubble";
        let contentHTML = '';

         // Use marked for assistant messages, escape user/system messages if needed (or trust internal sources)
        if (message.role === 'assistant' || message.role === 'system') {
            // Safely parse Markdown. Consider DOMPurify if input could be malicious.
             contentHTML = marked.parse(message.content || ''); // Handle potentially undefined content
        } else {
            // Display user input directly (escaping might be needed if displaying external user input)
             contentHTML = `<p class="mb-0">${message.content.replace(/</g, "<").replace(/>/g, ">")}</p>`;
        }

        switch (message.role) {
            case 'user':
                return (
                    <div key={index} className={`${baseClasses} user-message d-flex justify-content-end`}>
                        <div className="bg-panda text-white p-3 rounded-3 shadow-sm" style={{ maxWidth: '80%' }}>
                             <span dangerouslySetInnerHTML={{ __html: contentHTML }} />
                        </div>
                    </div>
                );
            case 'assistant':
                return (
                    <div key={index} className={`${baseClasses} assistant-message d-flex justify-content-start`}>
                        <div className="bg-light p-3 rounded-3 shadow-sm border" style={{ maxWidth: '80%' }}>
                             <span dangerouslySetInnerHTML={{ __html: contentHTML }} />
                        </div>
                    </div>
                );
            case 'error': // Custom role for displaying errors in chat
                 return (
                    <div key={index} className="alert alert-danger d-flex align-items-center shadow-sm mb-3" role="alert">
                        <i className="bi bi-exclamation-triangle-fill me-2"></i>
                         <div>{message.content}</div>
                     </div>
                 );
            case 'system': // For initial message or other system notices
            default:
                 return (
                    <div key={index} className={`${baseClasses} system-message text-muted`} dangerouslySetInnerHTML={{ __html: contentHTML }}>
                        {/* Content is set via dangerouslySetInnerHTML */}
                    </div>
                 );
        }
    };


    const sendMessage = async () => {
        const trimmedInput = input.trim();
        if (!trimmedInput) {
             // Maybe show a subtle shake animation or border color change on input instead of error message
             if(inputRef.current) {
                 inputRef.current.classList.add('is-invalid');
                 setTimeout(() => inputRef.current?.classList.remove('is-invalid'), 1500);
             }
            return; // Don't send empty messages
        }
        if (inputRef.current) inputRef.current.classList.remove('is-invalid');


        setError(null); // Clear previous errors visually
        const newUserMessage = { role: 'user', content: trimmedInput };
         setChatHistory(prev => [...prev, newUserMessage]); // Display user message immediately
        setInput(''); // Clear input after sending
        setIsLoading(true); // Start loading state

        try {
             // Prepare messages for the API (usually just the user message, but history can be included for context)
             const apiMessages = [{ role: 'user', content: trimmedInput }]; // Simple request
             // For conversational context (more advanced):
             // const apiMessages = chatHistory.filter(m => m.role === 'user' || m.role === 'assistant').slice(-5); // Send last few messages
             // apiMessages.push(newUserMessage);

            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { Authorization: API_KEY, 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: 'mistralai/mistral-7b-instruct:free', // Or your preferred model
                    messages: apiMessages,
                }),
            });

            if (!res.ok) {
                let errorDetails = `API Error ${res.status}`;
                try { const d = await res.json(); errorDetails = d.error?.message || errorDetails; } catch (e) {/*ignore*/ }
                throw new Error(errorDetails);
            }

            const data = await res.json();
            const assistantMessageContent = data.choices?.[0]?.message?.content;

            if (assistantMessageContent) {
                const newAssistantMessage = { role: 'assistant', content: assistantMessageContent };
                 setChatHistory(prev => [...prev, newAssistantMessage]);
            } else {
                 throw new Error('Received an empty response from the AI.');
            }

        } catch (err) {
            console.error("Chatbot Error:", err);
            setError(err.message); // Store error state if needed elsewhere
             const errorMessage = { role: 'error', content: `Oops! ${err.message.replace(/</g, "<").replace(/>/g, ">")}` }; // Sanitize basic HTML tags
            setChatHistory(prev => [...prev, errorMessage]); // Display error in chat
        } finally {
            setIsLoading(false);
            // Re-focus input field after response/error
            inputRef.current?.focus();
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && !event.shiftKey && !isLoading) { // Send on Enter (allow Shift+Enter for newline if using textarea)
            event.preventDefault(); // Prevent default form submission/newline
            sendMessage();
        }
    };

    return (
         // Outer container for centering and potential background
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light py-4">

            {/* Main Chat Card */}
            <div className="card shadow-xl border-0 rounded-4 overflow-hidden bg-white" style={{ maxWidth: '750px', width: '90%', backdropFilter: 'blur(5px)', background: 'rgba(255, 255, 255, 0.95)' }}>

                {/* Gradient Header */}
                <div className="card-header text-center bg-panda text-dark-emphasis py-3 border-0">
                    <h1 className="h4 fw-bold mb-0 d-flex align-items-center justify-content-center">
                        <i className="bi bi-chat-heart-fill me-2 fs-4"></i> AI Panda Assistant
                    </h1>
                    {/* Optional: Add a subtle tagline if needed
                     <p className="opacity-75 mb-0 small">Your friendly AI helper</p> */}
                </div>

                {/* Chat Message Area */}
                <div
                    ref={chatContainerRef}
                    id="chat-container"
                    className="card-body p-4" // Added more padding
                     // Use subtle pattern or keep it clean
                     style={{ height: '55vh', maxHeight:'600px', minHeight:'300px', overflowY: 'auto', scrollbarWidth: 'thin', backgroundColor: '#f8f9fa' }}
                 >
                    {/* Render chat messages */}
                    {chatHistory.map(renderMessage)}

                    {/* Loading Indicator (shown inline) */}
                    {isLoading && (
                        <div className="d-flex justify-content-start mb-3">
                             <div className="assistant-message" style={{ maxWidth: '80%' }}>
                                <div className="bg-light p-3 rounded-3 shadow-sm border d-flex align-items-center">
                                    <div className="spinner-grow spinner-grow-sm text-primary me-2" role="status" aria-hidden="true"></div>
                                    <span className="text-muted fst-italic small">Panda is thinking...</span>
                                </div>
                             </div>
                        </div>
                    )}
                     <div ref={chatContainerRef} /> {/* Dummy div for scrolling */}
                </div>

                {/* Input Area */}
                 <div className="card-footer bg-white p-3 border-0"> {/* Use p-3 for slightly less padding */}
                    {/* Input Group with Shadow */}
                    <div className="input-group shadow-sm rounded-pill overflow-hidden has-validation"> {/* Added has-validation for Bootstrap's invalid state styles */}
                         <span className="input-group-text bg-light border-0 ps-3 pe-2"> {/* Subtle icon prefix */}
                             <i className="bi bi-keyboard text-muted"></i>
                         </span>
                        <input
                            ref={inputRef} // Attach ref
                            type="text"
                            className="form-control border-0 py-2 px-3" // Reduced vertical padding slightly
                            placeholder="Ask Panda anything..."
                            aria-label="User question"
                            aria-describedby="send-button"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            disabled={isLoading}
                             style={{ boxShadow: 'none', transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out' }} // Remove default browser focus outline, rely on BS styles
                         />
                        {/* Send Button */}
                        <button
                             className={`btn bg-panda text-white fw-medium d-flex align-items-center justify-content-center px-4 ${isLoading ? 'disabled' : ''}`}
                            type="button"
                            id="send-button"
                            onClick={sendMessage}
                             disabled={isLoading || !input.trim()} // Also disable if input is only whitespace
                             style={{ minWidth: '70px', transition: 'background-color 0.2s ease' }} // Narrower button, smoother transition
                         >
                             {isLoading ? (
                                // Smaller spinner, matching text color potentially
                                <div className="spinner-border spinner-border-sm text-light" role="status" aria-hidden="true"></div>
                             ) : (
                                <i className="bi bi-send-fill text-dark"></i> // Use fill icon for stronger look
                             )}
                        </button>
                    </div>
                     {/* Optional: Security note - keep it subtle and outside main interaction flow if needed */}
                     {/* <div className="text-center mt-2">
                        <small className="text-muted" style={{ fontSize: '0.7rem' }}>
                             Demo Only: API key in code.
                        </small>
                     </div> */}
                </div>
            </div>

            {/* Global Styles (can be moved to a separate CSS file) */}
            <style jsx global>{`
                 /* Define Gradients/Colors */
                 .bg-panda {
                      /* A softer, pleasant green gradient */
                     background-image: linear-gradient(135deg, #a8e063 0%, #56ab2f 100%);
                      /* Or keep the user's original if preferred */
                     /* background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%); */
                 }

                .bg-tipsy {
                    background-color: #FF3CAC !important; /* Use !important carefully if overriding BS */
                     border: 0;
                      /* Add a subtle hover effect */
                     transition: background-color 0.25s ease-in-out;
                }
                .bg-tipsy:hover:not(:disabled) {
                    background-color: #e02b90 !important; /* Slightly darker pink on hover */
                 }

                /* Custom Scrollbar for chat container */
                #chat-container::-webkit-scrollbar { width: 6px; }
                #chat-container::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 3px; }
                #chat-container::-webkit-scrollbar-thumb { background: #adb5bd; border-radius: 3px; }
                #chat-container::-webkit-scrollbar-thumb:hover { background: #868e96; }
                 #chat-container { scrollbar-color: #adb5bd #f1f1f1; scrollbar-width: thin; }

                 /* General Message Bubble Styling */
                .message-bubble > div { /* Style the inner div containing text */
                    word-wrap: break-word; /* Ensure long words break */
                    line-height: 1.5; /* Improve readability */
                 }

                 /* Assistant Message Markdown Styles (within .assistant-message .bg-light) */
                 .assistant-message .bg-light p:last-child { margin-bottom: 0; }
                 .assistant-message .bg-light h1,
                 .assistant-message .bg-light h2,
                 .assistant-message .bg-light h3,
                 .assistant-message .bg-light h4 {
                     margin-top: 1.2rem;
                     margin-bottom: 0.7rem;
                     font-weight: 600;
                     color: #343a40; /* Darker heading color */
                     line-height: 1.3;
                 }
                 .assistant-message .bg-light code {
                     background-color: rgba(0, 0, 0, 0.06); /* Slightly darker code bg */
                     border: 1px solid rgba(0,0,0,0.09);
                     color: #d63384; /* Bootstrap's code color */
                     padding: 0.18em 0.45em;
                     border-radius: 4px;
                     font-size: 0.88em;
                     word-wrap: break-word;
                 }
                 .assistant-message .bg-light pre {
                     background-color: #e9ecef; /* Use Bootstrap's secondary bg for pre */
                     border: 1px solid #dee2e6;
                     border-radius: 6px;
                     padding: 1rem;
                     overflow-x: auto;
                     margin: 1rem 0;
                     font-size: 0.9em;
                 }
                 .assistant-message .bg-light pre code {
                     background: transparent;
                     border: none;
                     padding: 0;
                     color: inherit; /* Inherit color inside pre */
                     font-size: inherit; /* Inherit font size inside pre */
                 }
                 .assistant-message .bg-light blockquote {
                      border-left: 4px solid #6c757d; /* Secondary color border */
                      padding: 0.8rem 1rem;
                      margin: 1rem 0;
                      background-color: rgba(108, 117, 125, 0.05); /* Subtle secondary background */
                      color: #495057; /* Slightly darker quote text */
                 }
                 .assistant-message .bg-light ul,
                 .assistant-message .bg-light ol {
                     padding-left: 1.8rem; /* Adjust list padding */
                     margin-bottom: 1rem;
                 }
                 .assistant-message .bg-light li {
                     margin-bottom: 0.4rem; /* Space out list items slightly */
                 }
                 .assistant-message .bg-light a { /* Style links */
                     color: #0d6efd;
                     text-decoration: underline;
                 }
                 .assistant-message .bg-light a:hover {
                     color: #0a58ca;
                 }


                 /* Card and Shadow */
                 .shadow-xl { /* A larger, softer shadow */
                      box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
                  }

                /* Input invalid state (subtle border) */
                 .form-control.is-invalid {
                    border-color: #dc3545 !important; /* Ensure Bootstrap red is used */
                     box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25) !important; /* Match BS focus shadow color */
                    animation: shake 0.5s ease-in-out;
                 }
                 @keyframes shake { /* Simple shake animation */
                   0%, 100% { transform: translateX(0); }
                   25% { transform: translateX(-5px); }
                   75% { transform: translateX(5px); }
                 }

             `}</style>
        </div>
    );
};

export default ChatBot;