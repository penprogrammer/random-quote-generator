const database = [
    {
        text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison",
    },
    {
        text: "You can observe a lot just by watching.",
        author: "Yogi Berra",
    },
    {
        text: "A house divided against itself cannot stand.",
        author: "Abraham Lincoln",
    },
    {
        text: "Difficulties increase the nearer we get to the goal.",
        author: "Johann Wolfgang von Goethe",
    },
    {
        text: "Fate is in your hands and no one elses",
        author: "Byron Pulsifer",
    },
    {
        text: "Be the chief but never the lord.",
        author: "Lao Tzu",
    },
    {
        text: "Nothing happens unless first we dream.",
        author: "Carl Sandburg",
    },
    {
        text: "Well begun is half done.",
        author: "Aristotle",
    },
    {
        text: "Life is a learning experience, only if you learn.",
        author: "Yogi Berra",
    },
    {
        text: "Self-complacency is fatal to progress.",
        author: "Margaret Sangster",
    },
    {
        text: "Peace comes from within. Do not seek it without.",
        author: "Buddha",
    },
    {
        text: "What you give is what you get.",
        author: "Byron Pulsifer",
    },
    {
        text: "We can only learn to love by loving.",
        author: "Iris Murdoch",
    },
    {
        text: "Life is change. Growth is optional. Choose wisely.",
        author: "Karen Clark",
    },
    {
        text: "You'll see it when you believe it.",
        author: "Wayne Dyer",
    },
    {
        text: "Today is the tomorrow we worried about yesterday.",
        author: "Imdadullah",
    },
    {
        text: "It's easier to see the mistakes on someone else's paper.",
        author: "Imdadullah",
    },
    {
        text: "Every man dies. Not every man really lives.",
        author: "Imdadullah",
    },
    {
        text: "To lead people walk behind them.",
        author: "Lao Tzu",
    },
    {
        text: "Having nothing, nothing can he lose.",
        author: "William Shakespeare",
    },
    {
        text: "Trouble is only opportunity in work clothes.",
        author: "Henry J. Kaiser",
    },
    {
        text: "A rolling stone gathers no moss.",
        author: "Publilius Syrus",
    },
    {
        text: "Ideas are the beginning points of all fortunes.",
        author: "Napoleon Hill",
    },
    {
        text: "Everything in life is luck.",
        author: "Donald Trump",
    },
    {
        text: "Doing nothing is better than being busy doing nothing.",
        author: "Lao Tzu",
    },
    {
        text: "Trust yourself. You know more than you think you do.",
        author: "Benjamin Spock",
    },
    {
        text: "Study the past, if you would divine the future.",
        author: "Confucius",
    },
    {
        text: "The day is already blessed, find peace within it.",
        author: "Imdadullah",
    },
    {
        text: "From error to error one discovers the entire truth.",
        author: "Sigmund Freud",
    },
    {
        text: "Well done is better than well said.",
        author: "Benjamin Franklin",
    },
    {
        text: "Bite off more than you can chew, then chew it.",
        author: "Ella Williams",
    },
    {
        text: "Work out your own salvation. Do not depend on others.",
        author: "Buddha",
    },
    {
        text: "One today is worth two tomorrows.",
        author: "Benjamin Franklin",
    },
    {
        text: "Once you choose hope, anythings possible.",
        author: "Christopher Reeve",
    },
    {
        text: "God always takes the simplest way.",
        author: "Albert Einstein",
    },
    {
        text: "One fails forward toward success.",
        author: "Charles Kettering",
    },
    {
        text: "From small beginnings come great things.",
        author: "Imdadullah",
    },
    {
        text: "Learning is a treasure that will follow its owner everywhere",
        author: "Chinese proverb",
    },
    {
        text: "Be as you wish to seem.",
        author: "Socrates",
    },
    {
        text: "The world is always in movement.",
        author: "V. Naipaul",
    },
    {
        text: "Never mistake activity for achievement.",
        author: "John Wooden",
    },
    {
        text: "What worries you masters you.",
        author: "Haddon Robinson",
    },
    {
        text: "One faces the future with ones past.",
        author: "Pearl Buck",
    },
    {
        text: "Goals are the fuel in the furnace of achievement.",
        author: "Brian Tracy",
    }
];

function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let colorCode = `rgb(${red}, ${green}, ${blue})`;

    const box = document.querySelector('.box')
    box.style.backgroundColor = colorCode;
}

function randomQuote() {
    const randomNumber = Math.floor(Math.random() * database.length + 1)
    const quotes = database[randomNumber];

    let title = document.getElementById("text")
    let author = document.getElementById("author")

    title.innerText = quotes.text
    author.innerText = "~" + quotes.author

    randomColor()
}

setInterval(function () {
    randomQuote()
}, 3000)