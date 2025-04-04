presentationForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const prompt = promptInput.value;
    console.log("Prompt:", prompt);

    const data = { prompt: prompt };
    console.log("Data to send:", data);

    try {
        const response = await fetch('/generate_ppt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const json = await response.json();
            console.log("Response data:", json);
            if (json.message === 'Presentation generated successfully!') {
                // Download the file
                const downloadResponse = await fetch('/download/presentation.pptx');
                if (downloadResponse.ok) {
                    const blob = await downloadResponse.blob();
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'presentation.pptx';
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                } else {
                    alert('Error downloading presentation.');
                }
            } else {
                alert(`Error generating presentation: ${json.error}`);
            }
        } else {
            const json = await response.json();
            console.error("Error response:", json);
            alert(`Error generating presentation: ${json.error}`);
        }
    } catch (error) {
        console.error("Fetch error:", error);
        alert("An unexpected error occurred. Please try again later.");
    }
});
