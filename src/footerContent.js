export const footerContent = () => { 

let footerDiv = document.createElement('div');

footerDiv.classList.add('footer-content-div'); 

// footerDiv.innerHTML = '<br> Address: 1234 South Broad Street, Philadelphia PA <br> <br> Phone: 666-666-666'; 

footerDiv.textContent = "\r\n Address: 1234 South Broad Street, Philadelphia PA \r\n \r\n Phone: 666-666-666";

return footerDiv; 

} 