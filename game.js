const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
    window.scrollTo(0, 0);
}

const textNodes = [
    {
        id: 1,
        text: 'As you open your eyes you feel a sharp pain in your head, you can feel a liquid running down from above your eyebrow to your eyes, Is It blood? You try to move your hand in an attempt to clean but quickly realize that you can\'t, it seems both of your arms are stuck in place, tied behind your back. You start to wonder how did you get in this situation in the first place, who kidnapped you? Was It the Taijiri family? \n\n\"Was It the Taijiri family?\" This thought scares you, with the current war your family has with them, who knows what they will do, especially considering how much the boss likes you, and if something happens, what will happen to Kazuma? \n\nKazuma? Oh yeah, you were going to pick him up at school, that was your last memory before waking up here... So Kazuma is still waiting at school??? How much time could have passed before actually waking up!? FUCK!!! \n\nYou NEED to get out of here...',
        options: [
            {
                text: 'Try to break free',
                setState: { breakFree: true },
                nextText: 2
            },
            {
                text: 'Look around',
                setState: { lookAround: true},
                nextText: 3
            }
        ]
    },
    {
        id: 2,
        text: 'You try to break free but to no avail, whoever tied your hands did a pretty good job. \n\nBefore you\'re able to do anything else you suddenly hear a footstep, you quickly turn around but there is nothing... or at least you think there is nothing, the barely functioning lightbulb makes It quite difficult to see. \n\nA chill runs down your spine as you feel a breath right behind your ear, you turn again... \n\nNothing. \n\nAre you going crazy, you ask yourself, maybe Its this head injury, making you feel things there aren\'t there, but just as you tell yourself that yet again you feel that breath right behind your ear, but before you\'re able to do anything from that breath comes a voice... \n\n"Boo" \n\nUpon hearing the voice you jumped in the opposite direction, the chair tripping over and you falling over your arm. You never thought that It would come a day where someone scared you with a "boo" but here we are... \n\nAfter falling to the ground, the loud thud is accompanied by laughter, whoever scared you was now laughing their ass off at your predicament, as you look towards their direction you see a',
        options: [
            {
                text: 'Go investigate',
                requiredState: (currentState) => currentState.breakFree,
                setState: { investigate: true },
                nextText: 3
            },
            {
                text: 'Wait and prepare',
                nextText: 4
            },
        ]
    },
    {
        id: 3,
        text: 'You look around the room, the room is dirty, with some trash scattered around, the walls show clear signs off age, and from the overall appearence of the room you suppose you\'re in a old warehouse, probably one of the locations the Taijiri family uses to do things that others shouldn\'t know, you ask yourself if there are any abandoned buildings near kabukicho that they could be using, but you\'re thought process gets cut short...\n\nA chill runs down your spine as you feel a breath right behind your ear, you turn again... \n\nNothing. \n\nAre you going crazy, you ask yourself, maybe Its this head injury, making you feel things there aren\'t there, but just as you tell yourself that yet again you feel that breath right behind your ear, but before you\'re able to do anything from that breath comes a voice... \n\n"Boo" \n\nUpon hearing the voice you jumped in the opposite direction, the chair tripping over and you falling over your arm. You never thought that It would come a day where someone scared you with a "boo" but here we are... \n\nAfter falling to the ground, the loud thud is accompanied by laughter, whoever scared you was now laughing their ass off at your predicament, as you look towards their direction you see a',
        options: [
            {
                text: 'Ambush them',
                requiredState: (currentState) => currentState.investigate,
                setState: { ambushThem: true },
                nextText: 5
            },
            {
                text: 'Wait and see',
                requiredState: (currentState) => currentState.investigate,
                setState: { waitForThem: true },
                nextText: 6
            },
        ]
    }
]

startGame()