const slider = document.getElementById('foam-slider');
const h0Early = document.getElementById('h0-early');
const h0Late = document.getElementById('h0-late');
const canvas = document.getElementById('graph');
const ctx = canvas.getContext('2d');

function updateSim() {
    const alpha = parseFloat(slider.value);
    const baseH0 = 70; // Assumed true H0
    const distEarly = 138; // Scaled for CMB distance
    const distLate = 10; // Scaled for local
    const early = (baseH0 * (1 - alpha * Math.sqrt(distEarly))).toFixed(1);
    const late = (baseH0 * (1 - alpha * Math.sqrt(distLate))).toFixed(1);
    h0Early.textContent = early;
    h0Late.textContent = late;
    
    // Bar graph
    ctx.clearRect(0, 0, 400, 200);
    ctx.fillStyle = '#007bff';
    ctx.fillRect(50, 200 - early * 2, 100, early * 2);
    ctx.fillStyle = '#dc3545';
    ctx.fillRect(250, 200 - late * 2, 100, late * 2);
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';
    ctx.fillText('Early', 80, 190);
    ctx.fillText('Local', 280, 190);
}

slider.addEventListener('input', updateSim);
updateSim();
