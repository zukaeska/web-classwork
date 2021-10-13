
var object = [
    {
        "type":"free-text",
        "question":"when didgori dzlevai sakvirveli was?",
        "answers":[
            {
                "correct":false,
                "answer":1234
            },
            {
                "correct":false,
                "answer":4355
            },
            {
                "correct":true,
                "answer":1121
            }
        ]
    },
    {
        "type":"free-text",
        "question":"my birthday?",
        "answers":[
            {
                "correct":true,
                "answer": "24.02.2002"
            },
            {
                "correct":false,
                "answer": "25.01.2003"
            },
            {
                "correct":false,
                "answer": "26.04.2007"
            }
        ]
    }
];
$(document).ready(function () {
    object.forEach(element => {
        if (element.type == "free-text") {
            var p = document.createElement("p");
            document.body.append(p);
            p.innerHTML = element.question;
            element.answers.forEach(answer => {
                var pp = document.createElement("p");
                pp.innerHTML = "answer is " + answer.answer + " answer is " + answer.correct;
                document.body.append(pp);
            });

        }
    });
});