function getMatrixValues(prefix) {
    let matrix = [
        [parseFloat(document.getElementById(prefix + '00').value) || 0, parseFloat(document.getElementById(prefix + '01').value) || 0],
        [parseFloat(document.getElementById(prefix + '10').value) || 0, parseFloat(document.getElementById(prefix + '11').value) || 0]
    ];
    return matrix;
}

function setResultMatrix(matrix) {
    document.getElementById('r00').textContent = matrix[0][0];
    document.getElementById('r01').textContent = matrix[0][1];
    document.getElementById('r10').textContent = matrix[1][0];
    document.getElementById('r11').textContent = matrix[1][1];
}

function addMatrices() {
    let A = getMatrixValues('a');
    let B = getMatrixValues('b');
    let result = [
        [A[0][0] + B[0][0], A[0][1] + B[0][1]],
        [A[1][0] + B[1][0], A[1][1] + B[1][1]]
    ];
    setResultMatrix(result);
}

function multiplyMatrices() {
    let A = getMatrixValues('a');
    let B = getMatrixValues('b');
    let result = [
        [
            A[0][0] * B[0][0] + A[0][1] * B[1][0],
            A[0][0] * B[0][1] + A[0][1] * B[1][1]
        ],
        [
            A[1][0] * B[0][0] + A[1][1] * B[1][0],
            A[1][0] * B[0][1] + A[1][1] * B[1][1]
        ]
    ];
    setResultMatrix(result);
}

function clearMatrices() {
    let inputs = document.querySelectorAll('.matrix input[type="number"]');
    inputs.forEach(input => input.value = 0);
    setResultMatrix([[0,0],[0,0]]);
}
