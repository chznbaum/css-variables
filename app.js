function updateVariables () {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
const inputs = document.querySelectorAll('.controls input');
inputs.forEach(input => input.addEventListener('change', updateVariables));
inputs.forEach(input => input.addEventListener('mousemove', updateVariables));