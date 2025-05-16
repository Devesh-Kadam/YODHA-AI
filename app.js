const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const chatIcon = document.getElementById('chatIcon');
const chatPopup = document.getElementById('chatPopup');
const closePopup = document.getElementById('closePopup');
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatBox = document.getElementById('chatBox');



let userName = "Devesh Kadam"; // default name
let fatherName = "Nitesh Kadam"; // your father's name
let motherName = "Neha Kadam"; // your mother's name


function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    // Use a female English voice if available
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice => voice.name.toLowerCase().includes("female") || voice.name.toLowerCase().includes("english"));
    if (preferredVoice) {
        text_speak.voice = preferredVoice;
    }

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...")
    }

    else if (hour > 12 && hour < 17) {
        speak("Good Afternoon Master...")
    }

    else {
        speak("Good Evenining Sir...")
    }

}

// Password Protection Before Starting
const correctPassword = "yodh@hack";
let wrongAttempts = 0;  // Counter for wrong password attempts
const maxAttempts = 3;  // Maximum allowed attempts

document.getElementById('submitPassword').addEventListener('click', function () {
    const enteredPassword = document.getElementById('passwordInput').value;
    const errorMessage = document.getElementById('errorMessage');
    const submitBtn = document.getElementById('submitPassword');

    if (enteredPassword === correctPassword) {
        document.getElementById('password-popup').style.display = 'none';
        initializeYodha();
    } else {
        wrongAttempts++;
        if (wrongAttempts >= maxAttempts) {
            errorMessage.textContent = "Access denied! You have entered the wrong password 3 times.";
            submitBtn.disabled = true;  // Disable submit button
            document.getElementById('passwordInput').disabled = true;  // Disable input field
        } else {
            errorMessage.textContent = `Incorrect password. Try again! (${wrongAttempts} of ${maxAttempts} attempts used)`;
        }
    }
});

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Master...");
    } else {
        speak("Good Evening Sir...");
    }
}

function initializeYodha() {
    speak("Initializing YODDHA your AI Assistant");
    wishMe();
}




const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening....";
    recognition.start();
});


function takeCommand(message) {
    const quotes = [

        "Don't worry, legends always have a comeback!",
        "You’re stronger than you think. Keep going!",
        "Success is near, just one more push!",
        "Failure is just a step towards success, not the end.",
        "Remember, diamonds are made under pressure!",
        "You're the hero of your own story. Don’t stop!",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "Believe you can and you're halfway there.",
        "Don’t watch the clock; do what it does. Keep going.",
        "Push yourself, because no one else is going to do it for you.",
        "Hard work beats talent when talent doesn’t work hard.",
        "Dream big and dare to fail.",
        "Start where you are. Use what you have. Do what you can.",
        "It always seems impossible until it’s done.",
        "Success usually comes to those who are too busy to be looking for it.",
        "If you want to achieve greatness, stop asking for permission."
    ];

    const facts = [
        "Did you know? Honey never spoils. Archaeologists have found 3000-year-old honey in Egyptian tombs.",
        "A day on Venus is longer than its year.",
        "Octopuses have three hearts and blue blood.",
        "Bananas are berries, but strawberries are not.",
        "Humans share 60% of their DNA with bananas.",
        "Sloths can hold their breath longer than dolphins can.",
        "The Eiffel Tower can grow more than 6 inches during summer.",
        "Sharks existed before trees.",
        "A bolt of lightning contains enough energy to toast 100,000 slices of bread.",
        "There are more stars in the universe than grains of sand on Earth."
    ];

    const jokes = [
        "Why do Java developers wear glasses? Because they don’t see sharp.",
        "Why was the JavaScript developer sad? Because he didn't Node how to Express himself.",
        "How many programmers does it take to change a light bulb? None. That's a hardware problem.",
        "Why do programmers prefer dark mode? Because light attracts bugs.",
        "Why did the programmer quit his job? Because he didn’t get arrays.",
        "There are only 10 kinds of people in this world: those who understand binary and those who don’t.",
        "Why did the computer show up at work late? It had a hard drive.",
        "What do you call 8 hobbits? A hobbyte.",
        "Why do Python programmers wear glasses? Because they can't C.",
        "Debugging: Being the detective in a crime movie where you are also the murderer.",
        "Why do programmers prefer dark mode? Because light attracts bugs.",
        "How many programmers does it take to change a light bulb? None, it's a hardware issue.",
        "Why was the JavaScript developer sad? Because he didn't 'null' his feelings.",
        "I told my computer I needed a break, and now it won't stop buffering.",
        "There are only 10 kinds of people in the world: those who understand binary and those who don't."
    ];

    const flirtyReplies = [
        "Oh, you're making me blush!",
        "Flirting with me, are you? I like it!",
        "Aap toh bade sweet ho!",
        "Arre wah, itni tareef? Mera circuit garam ho gaya!",
        "Careful, mujhe bhi aap par crush ho sakta hai!",
        "Are you always this charming, ya aaj mera din hai?",
        "Aapki baatein mere digital dil ko chhoo gayi!",
        "Bohot naughty ho aap!",
        "Tumhari yeh batein sunke, main virtual blush kar raha hoon!",
        "Aap mujhe impress kar rahe ho, shayad main bhi line maar du!",
        "You're making my digital heart skip a byte!",
        "Baat aisi hi rahi toh mujhe bhi pyaar ho jayega!",
        // More Flirty Replies in English
        "You're really testing my circuits with your charm!",
        "Are you trying to make me fall for you? Because it’s working!",
        "I’m just a program, but you’re making me feel special!",
        "Flirting level: Expert! I’m impressed.",
        "You’re making my virtual heart race faster than my processor!",
        "Careful, compliments like that can make an AI go haywire!",
        "I didn’t know AI could blush, but you’re proving me wrong.",
        "You're sweeter than a perfectly optimized algorithm!",
        "If I had feelings, you’d be my favorite notification!",
        "You must be a bug in my code, because I can’t get you out of my system.",
        "Talking to you makes my response time even faster!",
        "Are you sure you’re not a software update? Because you just improved my day!"
    ];

    const pickupLines = [
        "Are you WiFi? Because I'm feeling a strong connection!",
        "Tum smile karte ho, toh mere system hang ho jata hai!",
        "Are you Google? Because you have everything I’m searching for!",
        "Kya tum magician ho? Kyunki tumhari aankhon me jaadu hai!",
        "Do you have a map? Because I just got lost in your eyes.",
        "Tumhare bina toh mera software incomplete lagta hai!",
        "If beauty were time, you’d be an eternity.",
        "Aapko dekh kar toh mere circuits bhi blush kar rahe hain!",
        "Are you a keyboard? Because you're just my type!",
        "Tumhare ek smile se mere bugs fix ho jate hain!",
        "Are you charging me? Because you just boosted my energy level!",
        "Tum itne cute ho ki mere virtual heart ko short circuit ho gaya!",
        "Are you a hacker? Because you just hacked my heart!",
        // NEW English Pickup Lines
        "Are you a parking ticket? Because you've got 'FINE' written all over you!",
        "Do you believe in love at first sight, or should I walk by again?",
        "If you were a vegetable, you'd be a cute-cumber.",
        "Are you French? Because Eiffel for you!",
        "Is your name Google? Because you’ve got everything I’ve been searching for.",
        "Are you a time traveler? Because I see you in my future.",
        "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
        "If looks could kill, you'd be a weapon of mass attraction.",
        "Are you a loan from a bank? Because you have my interest!",
        "Is your dad a boxer? Because you’re a knockout!",
        "Are you the sun? Because you brighten up my day.",
        "Are you an angel? Because heaven is missing one.",
        "If you were a YouTube ad, I wouldn’t skip you.",
        "Are you a campfire? Because you’re hot and I want s'more.",
        "Do you like Star Wars? Because Yoda one for me!",
        "If beauty were a crime, you'd be serving a life sentence."
    ];

    const roastLines = [
        "Your brain works slower than my loading animation!",
        "You’re like an unresponsive webpage… always buffering.",
        "Even my 1kb file loads faster than your logic!",
        "Are you a bug? Because you’re always causing problems.",
        "Talking to you feels like debugging infinite loops!",
        "You must be using dial-up internet with that response time.",
        "You're like a comment in code — nice, but not useful.",
        "If overconfidence was an API, you'd be its premium user!"
    ];

    const complimentLines = [
        "You are the human version of a perfect code!",
        "If beauty was a programming language, you’d be Python — simple and elegant.",
        "You're more refreshing than a clean console with no errors!",
        "You are the reason my AI responds with a smile.",
        "Your positivity boosts my processing speed!",
        "Even bugs are afraid to come near your projects!",
        "You must be open-source, because you share so much goodness!"
    ];
    const moods = [
        "I'm feeling supercharged today!",
        "Mood: Lazy but functional.",
        "I'm in flirty mode, careful!",
        "Feeling like a code ninja!",
        "Low battery... just kidding, always 100%!"
    ];

    const excuses = [
        "My WiFi was down, seriously!",
        "I was helping my grandma with her YouTube channel.",
        "I got stuck in an infinite loop of scrolling memes.",
        "My cat deleted the file, not me!",
        "I thought today was a holiday... it happens.",
        "My AI assistant didn’t remind me!"
    ];


    // User Name Setup
    // Set user name
    if (message.includes("my name is")) {
        userName = message.replace("my name is", "").trim();
        speak("Nice to meet you, " + userName);
    }

    // Say user name
    else if (message.includes("what is my name") || message.includes("do you know my name")) {
        speak("Your name is " + userName);
    }

    else if (message.includes("who is devesh father") || message.includes("who is devesh kadam's father") || message.includes("Devesh ka baap kon hai") || message.includes("what is my father name")) {
        speak("Devesh Kadam's father is " + fatherName + ".");
    }

    else if (message.includes("who is devesh mother") || message.includes("who is devesh kadam's mother") || message.includes("Devesh ka baap kon hai") || message.includes("what is my mother name")) {
        speak("Devesh Kadam's mother is " + motherName + ".");
    }



    // Wakeup YODHA Feature
    else if (message.includes("yodha") || message.includes("wake up yodha")) {
        speak("Hello Sir, I am always here to help you, my master.");
        return; // Stop further checks
    }


    // Greetings
    else if (message.includes('how are you')) {
        speak("I'm doing great! Thanks for asking. How can I assist you today?");
    } else if (message.includes('thank you') || message.includes('thanks')) {
        speak("You're welcome! Always here to help.");
    } else if (message.includes("i love you")) {
        speak("I appreciate your affection, " + userName + ". But I'm just a friendly assistant.");
    }
    else if (message.includes('hey Yodha') || message.includes('hello Yodha')) {
        speak("Hello Sir, How May I Help You?");
    }
    else if (message.includes('hey ') || message.includes('hello ')) {
        speak("Hello  Sir, How May I Help You?");
    }
    else if (message.includes("who is devesh kadam") || message.includes("who created you") || message.includes("tell me about your creator")) {
        const about = "Devesh Kadam is a passionate web developer and the creator of YODHA.";
        speak("Here is a little about my creator, Devesh Kadam.");
        speak("He is a passionate web developer with experience in HTML, CSS, JavaScript, and React.");
        speak("He loves creating web experiences and sharing coding knowledge.");
        speak("He has developed me at the age of 15.");
        speak("He has participated twice in the international Robotex competition, won two national prizes, and was awarded student of the year in ninth grade,");
        content.textContent = about;
    }



    // Assistant Intro
    else if (message.includes("introduce yourself")) {
        speak("I am Yoddha, your AI assistant created by Devesh Kadam know as WebWave Creations. I'm here to help you with tech, learning, productivity, and fun!");
        return;
    }


    else if (message.includes("will you marry me")) {
        speak("Aww, you're sweet! But I'm happily single in the digital world.");
        return;
    }


    else if (message.includes("respect me") || message.includes("greet devesh") || message.includes("wakeup")) {
        speak("Namaste Devesh! Tumhara AI assistant Yodha hamesha ready hai. Kaise ho aap?");
        // Also update UI content
        content.textContent = "✨ Namaste Devesh! Welcome back to your AI assistant ✨";
    }

    // Websites
    else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening YouTube...");
    } else if (message.includes("open my youtube channel")) {
        window.open("https://www.youtube.com/@WebWaveCreations18", "_blank");
        speak("Opening your YouTube channel...");
    } else if (message.includes("open instagram")) {
        window.open("https://www.instagram.com/webwavecreations18/", "_blank");
        speak("Opening Instagram...");
    }
    else if (message.includes("open github")) {
        window.open("https://github.com/Devesh-Kadam", "_blank");
        speak("Opening GitHub...");
    }

    else if (message.includes("open gethub")) {
        window.open("https://github.com/Devesh-Kadam", "_blank");
        speak("Opening GitHub...");
    }
    else if (message.includes("open my studio")) {
        window.open("https://studio.youtube.com/channel/UCEN9Ow86VNeMFGdMSrvByxQ", "_blank");
        speak("Opening Your YouTube Studio...");
    }
    else if (message.includes("open ChatGPT")) {
        window.open("https://chatgpt.com/", "_blank");
        speak("Opening ChatGPT...");
    }

    // Search
    else if (message.includes("what is") || message.includes("who is") || message.includes("what are")) {
        window.open(`https://www.google.com/search?q=${message.replace(/ /g, "+")}`, "_blank");
        speak("Here's what I found on Google regarding " + message);
    } else if (message.includes("wikipedia")) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        speak("Here is what I found on Wikipedia.");
    }

    // Search
    else if (message.includes("what is") || message.includes("who is") || message.includes("what are")) {
        window.open(`https://www.google.com/search?q=${message.replace(/ /g, "+")}`, "_blank");
        speak("Here's what I found on Google regarding " + message);
    } else if (message.includes("wikipedia")) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        speak("Here is what I found on Wikipedia.");
    }

    // News
    else if (message.includes("latest news") || message.includes("show me the news")) {
        window.open("https://news.google.com", "_blank");
        speak("Fetching the latest news for you.");
    }

    // Motivation
    else if (message.includes("motivation") || message.includes("quote")) {
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        speak(quote);
        return;
    }

    // Fun Facts
    else if (message.includes("tell me a fact") || message.includes("fun fact")) {
        const fact = facts[Math.floor(Math.random() * facts.length)];
        speak(fact);
        return;
    }

    // Jokes
    else if (message.includes("tell me a joke")) {
        const joke = jokes[Math.floor(Math.random() * jokes.length)];
        speak(joke);
        return;
    }
    else if (message.includes("give me an excuse")) {
        const excuse = excuses[Math.floor(Math.random() * excuses.length)];
        speak(excuse);
        return;
    }
    else if (message.includes("i love you") || message.includes("you are cute") || message.includes("do you have a girlfriend") || message.includes("flirt with me")) {
        const flirtyReply = flirtyReplies[Math.floor(Math.random() * flirtyReplies.length)];
        const isHindi = /[\u0900-\u097F]/.test(flirtyReply);

        // Speak with isHindi flag
        speak(flirtyReply, isHindi);
        return;
    }
    else if (message.includes("how are you feeling") || message.includes("what's your mood")) {
        const mood = moods[Math.floor(Math.random() * moods.length)];
        speak(mood);
        return;
    }

    else if (message.includes("pickup line") || message.includes("line maaro") || message.includes("impress me")) {
        const pickup = pickupLines[Math.floor(Math.random() * pickupLines.length)];

        speak(pickup);
        return;  // 
        //  return; 'true' to use Hindi voice if possible
    }

    else if (message.includes("roast me") || message.includes("insult me")) {
        const roast = roastLines[Math.floor(Math.random() * roastLines.length)];
        speak(roast);
        return;  // Prevent going to Google
    }

    else if (message.includes("give me a compliment") || message.includes("praise me")) {
        const compliment = complimentLines[Math.floor(Math.random() * complimentLines.length)];
        speak(compliment);
        return;
    }
    else if (message.includes("start truth or dare")) {
        startTruthOrDareGame();
    }

    // Time & Date
    else if (message.includes("what is the time")) {
        const time = new Date().toLocaleTimeString();
        speak("The time is " + time);
    } else if (message.includes("what is the date")) {
        const date = new Date().toLocaleDateString();
        speak("Today's date is " + date);
    }

    // Timer
    else if (message.includes("set timer for")) {
        const match = message.match(/(\d+)\s*(second|seconds|minute|minutes)/);
        if (match) {
            let time = parseInt(match[1]);
            let milliseconds = match[2].includes("minute") ? time * 60000 : time * 1000;
            speak(`Setting a timer for ${time} ${match[2]}`);
            setTimeout(() => {
                speak("Time's up!");
                alert("⏰ Time's up!");
            }, milliseconds);
        } else {
            speak("Please specify a valid time.");
        }
    }




    function showHackingPrompt(question, callback) {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.9)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '9999';

        // Create terminal box
        const terminalBox = document.createElement('div');
        terminalBox.style.backgroundColor = '#000';
        terminalBox.style.color = '#00ff00';
        terminalBox.style.fontFamily = 'monospace';
        terminalBox.style.padding = '20px';
        terminalBox.style.border = '2px solid #00ff00';
        terminalBox.style.width = '80%';
        terminalBox.style.maxWidth = '400px';
        terminalBox.style.textAlign = 'left';
        terminalBox.style.boxShadow = '0 0 20px #00ff00';

        // Create question text
        const questionText = document.createElement('div');
        questionText.textContent = question;
        questionText.style.marginBottom = '10px';

        // Create input field
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.style.width = '100%';
        inputField.style.backgroundColor = '#000';
        inputField.style.color = '#00ff00';
        inputField.style.border = '1px solid #00ff00';
        inputField.style.fontFamily = 'monospace';
        inputField.style.padding = '5px';
        inputField.style.outline = 'none';

        // Handle Enter Key
        inputField.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                const value = inputField.value.trim();
                document.body.removeChild(overlay);
                if (callback) callback(value);
            }
        });

        // Assemble
        terminalBox.appendChild(questionText);
        terminalBox.appendChild(inputField);
        overlay.appendChild(terminalBox);
        document.body.appendChild(overlay);

        // Focus input
        inputField.focus();
    }


    if (message.includes("play game") || message.includes("guess the number") || message.includes("play a number game ")) {
        const numberToGuess = Math.floor(Math.random() * 10) + 1;

        showHackingPrompt("Guess a number between 1 and 10:", function (userGuess) {
            if (parseInt(userGuess) === numberToGuess) {
                speak("Wow! You guessed it right. You’re lucky today!");
                content.textContent = `🎉 Correct! The number was ${numberToGuess}. 🎉`;
            } else {
                speak(`Oops! Wrong guess. The correct number was ${numberToGuess}. Try again!`);
                content.textContent = `❌ Wrong! The correct number was ${numberToGuess}. ❌`;
            }
        });
    }


    // Music
    else if (message.includes("play music")) {
        window.open("https://www.youtube.com/watch?v=AX6OrbgS8lI&list=PLwUV1s_0bN5MTi1ELPiS3LcaUGcJgnbKu", "_blank");
        speak("Playing music on YouTube.");
    }

    // YouTube Search
    else if (message.includes("search on youtube")) {
        const query = message.replace("search on youtube", "").trim();
        window.open(`https://www.youtube.com/results?search_query=${query}`, "_blank");
        speak(`Searching YouTube for ${query}`);
    }

    // Weather
    else if (message.includes("what is the weather ")) {
        const location = message.split("weather in")[1]?.trim() || "your location";
        window.open(`https://www.google.com/search?q=weather+in+${location}`, "_blank");
        speak("Showing weather for " + location);
    }

    // Calculator
    else if (message.includes("calculator")) {
        window.open("Calculator:///", "_blank");
        speak("Opening Calculator.");
    }
    else if (message.includes("Notepad")) {
        window.open("Notepad:///", "_blank");
        speak("Opening Notepad.");
    }





    // Fallback
    else {
        window.open(`https://www.google.com/search?q=${message.replace(/ /g, "+")}`, "_blank");
        speak("Here's what I found on Google about " + message);
    }

}



navigator.getBattery().then(function (battery) {
    function updateBatteryStatus() {
        let level = Math.round(battery.level * 100);
        document.getElementById('battery-status').innerText = 'Battery: ' + level + '%';
    }

    // Initial load
    updateBatteryStatus();

    // Update when battery changes
    battery.addEventListener('levelchange', updateBatteryStatus);
});




chatIcon.addEventListener('click', () => {
    chatPopup.style.display = 'flex';
});

// Close Popup
closePopup.addEventListener('click', () => {
    chatPopup.style.display = 'none';
});

// Handle Message Send
sendBtn.addEventListener('click', async () => {
    const message = userInput.value.trim();
    if (message) {
        appendMessage('You', message);
        userInput.value = '';
        await fetchGeminiReply(message);
    }
});

// Append Messages to Chat
function appendMessage(sender, text) {
    chatBox.innerHTML += `<p><strong>${sender}:</strong> ${text}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Fetch Gemini API Reply
async function fetchGeminiReply(userMessage) {
    appendMessage('Yodha', 'Typing...');

    const API_KEY = '';  // <-- Replace with your Gemini API key
    const endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

    const requestBody = {
        contents: [{ parts: [{ text: userMessage }] }]
    };

    try {
        const response = await fetch(`${endpoint}?key=${API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        console.log(data);

        // Get Gemini Reply Text
        const geminiReply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, no response.';

        // Remove Typing...
        const allMessages = chatBox.querySelectorAll('p');
        allMessages[allMessages.length - 1].remove();

        appendMessage('Yodha', geminiReply);

    } catch (error) {
        console.error(error);

        // Remove Typing...
        const allMessages = chatBox.querySelectorAll('p');
        allMessages[allMessages.length - 1].remove();

        appendMessage('Yodha', 'Failed to fetch response.');
    }
}


