

const url = "https://hayeseung.com/api/sogdam";
const sogdamElement = document.getElementById('sogdam');


const fetchSogdam = async () => {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);

        sogdamElement.innerText = result.message;

    } catch (error) {
        console.error("Fetch error:", error);
    }
};

const copyClipBoard = async (text) => {
    try {
        if (navigator.clipboard) {
            await navigator.clipboard.writeText(text);
        } else {
            let t = document.createElement("textarea");
            document.body.appendChild(t);
            t.value = text;
            t.select();
            document.execCommand("Copy");
            document.body.removeChild(t);
        }
        return true
    } catch (error) {
        return false
    }
}


document.addEventListener('DOMContentLoaded', fetchSogdam);
document.getElementById('refresh_btn').addEventListener('click', fetchSogdam);
document.getElementById('copy_btn').addEventListener('click', () => {
    copyClipBoard(sogdamElement.value);
});