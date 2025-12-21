function downloadCV() {
            const link = document.createElement("a");
            link.href = "shivamNetkeCV.pdf";
            link.download = "shivamNetkeCV.pdf";
            link.click();
        }