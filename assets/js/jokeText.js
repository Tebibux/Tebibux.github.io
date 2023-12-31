const jokArray = [
    '"Feeling like you\'re in a digital maze? I\'ve scattered my contacts like Easter eggs! Call, text, email, TikTok, or even send a carrier pigeon (well, maybe not) – I\'m more reachable than a viral cat video! Ready to connect?"',
    '"Lost in the web? Fear not! I\'ve strewn my contacts like digital confetti – find me in the chaos! Call, text, email, TikTok, or try smoke signals (just kidding), I\'m as reachable as the Wi-Fi signal in your favorite coffee shop! Let\'s chat!"',
    '"Feeling like you\'re on a scavenger hunt? I\'ve scattered my contacts everywhere! From phone lines to emails, TikTok dances, and carrier pigeons (okay, maybe not that last one), I\'m more reachable than your favorite meme. Let\'s connect!"',
    '"Lost in the digital galaxy? Don\'t worry, I\'ve left breadcrumbs everywhere! Call, text, email, TikTok, or send a carrier pigeon if you must—I\'m as reachable as a sale notification on Black Friday! 📱🕊️"',
    '"Trying to find me? I\'ve got enough contacts to make your address book jealous! From phones to emails to TikTok dances, I\'m easier to reach than your favorite takeout spot – and just as quick to respond!"',
    '"Need to reach me? I\'ve got more connections than a tech geek\'s motherboard! Pick your favorite: phones, emails, or slide into my DMs on TikTok – I\'m everywhere but outer space! 🚀✨"',
]
const joker = document.getElementById('joker');
joker.innerText = `${jokArray[Math.floor(Math.random(jokArray.length)*jokArray.length)]}`;
