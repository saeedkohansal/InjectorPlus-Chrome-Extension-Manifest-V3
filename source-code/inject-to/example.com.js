/* •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• */
/* Right here, you have access to the `injector` global object. */
/* So you can inject unlimited codes using: ••••••••••••••••••• */
/* injector.injectInlineJs(); ••••••••••••••••••••••••••••••••• */
/* injector.injectExternalJs(); ••••••••••••••••••••••••••••••• */
/* injector.injectInternalCss(); •••••••••••••••••••••••••••••• */
/* injector.injectExternalCss(); •••••••••••••••••••••••••••••• */
/* Anyway it's OPTIONAL, you can also define your logic. •••••• */
/* •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• */
injector.injectExternalCss('https://fonts.googleapis.com/css?family=Oswald');

injector.injectInternalCss(`
    * {
        font-family: "Oswald" !important;
    }

    html {
        margin-bottom: 700px;
    }

    body {
        color: #fff;
        background-color: #0fb;
    }

    div {
        color: #0fb;
        background-color: #000;
        border-radius: 60px 12px;
        transition: .5s;
    }

    div:hover {
        transform: scale(1.2);
        border-radius: 12px 60px;
    }

    a:link, a:visited {
        color: #ff0;
    }

    #gilgeekify {
        width: 300px;
        margin: 50px auto -30px;
        display: block;
        border: 1px #000 solid;
        border-radius: 50%;
        user-select: none;
        transition: 4s linear;
    }

    #gilgeekify:hover {
        filter: hue-rotate(360deg) saturate(4);
    }

    #canvas {
        position: absolute;
        top: 110%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    svg {
        font-size: 110px
    }
`);

injector.injectInlineJs(`
    function injectBase64ImageWithId(base64Data, id) {
        var img = document.createElement('img');
        img.id = id;
        img.src = base64Data;

        var body = document.querySelector('body');
        body.insertBefore(img, body.firstChild);
    }

    // Your complete base64 image data here
    var base64ImageData = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MjAuNjcgODMwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzBmYjt9LmNscy0ye2ZvbnQtc2l6ZTo4NXB4O2ZvbnQtZmFtaWx5OkFyaWFsLUJvbGRNVCwgQXJpYWw7Zm9udC13ZWlnaHQ6NzAwO308L3N0eWxlPjwvZGVmcz48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxlbGxpcHNlIGNsYXNzPSJjbHMtMSIgY3g9IjQxMC4zMyIgY3k9IjQxNSIgcng9IjQxMC4zMyIgcnk9IjQxNSIvPjxwYXRoIGQ9Ik00MTYsODMwYTQwNS4xMSw0MDUuMTEsMCwwLDAsMjIyLjI3LTY5LjhMNjM3LDc1Niw1OTYuODgsNjIzLjQ1YTE0Ni45MywxNDYuOTMsMCwwLDEtMTg2LjI5LDI0bC0uMjYtLjE3aDBsLS4yNS4xN2ExNDYuOTMsMTQ2LjkzLDAsMCwxLTE4Ni4yOS0yNEwxODQuNTksNzUzbC0yLjE1LDcuMTVBNDA1LjE2LDQwNS4xNiwwLDAsMCw0MDQuNzEsODMwYzEuODcsMCwzLjczLDAsNS42MSwwaDBDNDEyLjIzLDgzMCw0MTQuMDksODMwLDQxNiw4MzBaIi8+PHBvbHlnb24gcG9pbnRzPSI0NDkuMTMgNjAzLjk3IDQyOS43MyA2MjEuMTUgNDEwLjMzIDYzOC4zNCAzOTAuOTQgNjIxLjE1IDM3MS41NCA2MDMuOTcgNDQ5LjEzIDYwMy45NyIvPjxwYXRoIGQ9Ik0yMDMuNTQsNTAyLjI4QTM2NC43NiwzNjQuNzYsMCwwLDEsMzAwLjQzLDQ1MGEzMjMuMjEsMzIzLjIxLDAsMCwxLDIxOS44MSwwLDM2NC4yMywzNjQuMjMsMCwwLDEsOTYuODksNTIuMjlsLTE2LjY1LDI1Yy0yOS41My0xNy4xNi02MC4yNC0zMS41My05Mi4xNy00MS4zOGEzMjUsMzI1LDAsMCwwLTE5NS45NSwwYy0zMS45Myw5Ljg0LTYyLjY1LDI0LjIyLTkyLjE4LDQxLjM4WiIvPjxwYXRoIGQ9Ik01OTYuODgsMTA0LjQyYTExNiwxMTYsMCwxLDEtMTE2LDExNiwxMTYsMTE2LDAsMCwxLDExNi0xMTZtMC0xNWExMzEsMTMxLDAsMSwwLDkyLjYzLDM4LjM3LDEzMC4xMSwxMzAuMTEsMCwwLDAtOTIuNjMtMzguMzdaIi8+PHBhdGggZD0iTTIyMy43OSwxMDQuNDJhMTE2LDExNiwwLDEsMS0xMTYsMTE2LDExNiwxMTYsMCwwLDEsMTE2LTExNm0wLTE1YTEzMSwxMzEsMCwxLDAsOTIuNjMsMzguMzcsMTMwLjExLDEzMC4xMSwwLDAsMC05Mi42My0zOC4zN1oiLz48dGV4dCBjbGFzcz0iY2xzLTIiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjgsIDAsIDAsIDEsIDY4Mi44NywgMjEwLjQ1KSI+Jmd0O188L3RleHQ+PHRleHQgY2xhc3M9ImNscy0yIiB0cmFuc2Zvcm09Im1hdHJpeCgtMC44LCAwLCAwLCAxLCAzMDkuNzgsIDIxMC40NSkiPiZndDtfPC90ZXh0PjwvZz48L2c+PC9zdmc+';
    var imageId = 'gilgeekify';
    injectBase64ImageWithId(base64ImageData, imageId);
`);

injector.injectInlineJs(`
    document.querySelector('body > div > h1').innerHTML += \`, gilgeekify programming injected!
    💉😎👌🤠🥳🔥🤡💚🦾🤖🍏🥸👽\`;
`);

injector.injectInlineJs(`
    async function fetchData() {
        try {
            const response = await fetch('https://get.geojs.io/v1/ip/country.json');
            const data = await response.json();
            console.table(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Call the async function to fetch and display data
    fetchData();
`);

injector.injectExternalJs('https://cdn.jsdelivr.net/npm/chart.js');

injector.injectInlineJs(`
    // Create a canvas inside the body
    const canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    document.body.appendChild(canvas);

    // Wait for 1 second
    setTimeout(() => {
        // Get the canvas element
        const canvas = document.getElementById('canvas');

        // Get the 2D context
        const ctx = canvas.getContext('2d');

        // Create data for the pie chart
        const data = {
            labels: ['Python', 'Java', 'JavaScript', 'C++', 'Ruby', 'PHP', 'Swift', 'Go', 'Rust', 'Kotlin'],
            datasets: [{
                data: [30, 25, 20, 15, 10, 40, 28, 30, 20, 19],
                backgroundColor: [
                    '#1a3f8b',
                    '#ff5733',
                    '#ff0059',
                    '#d34100',
                    '#8b4513',
                    '#4c1b1b',
                    '#009688',
                    '#800080',
                    '#228b22',
                    '#ffd700'
                ]
            }]
        };

        // Create a pie chart using Chart.js
        new Chart(ctx, {
            type: 'pie',
            data: data,
        });
    }, 100); // Wait for 100 milliseconds before drawing the pie chart
`);

// injector.injectExternalJs('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js');

// injector.injectInlineJs(`
// // Create a new element and set its innerHTML
// const content = document.createElement('div');
// content.innerHTML = '<i class="fa-solid fa-eye-dropper"></i>';
// content.innerHTML += '<i class="fa-solid fa-compass-drafting"></i>';
// content.innerHTML += '<i class="fa-solid fa-splotch"></i>';
// content.innerHTML += '<i class="fa-solid fa-circle-nodes"></i>';
// content.innerHTML += '<i class="fa-solid fa-wand-magic-sparkles"></i>';

// // Insert the content as the first child of the body
// document.body.insertBefore(content, document.body.firstChild);


// // Select the div element
// const divElement = document.querySelector('body > div');

// // Create an h1 element
// const h1Element = document.createElement('h1');
// h1Element.textContent = '👇 Icons From Font Awesome Library 👇';

// // Apply text-align center style to the h1 element
// h1Element.style.textAlign = 'center';

// // Get the first child of the div (if any)
// const firstChild = divElement.firstChild;

// // Insert the h1 element before the first child
// divElement.insertBefore(h1Element, firstChild);
// `);
