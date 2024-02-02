let value = 0;

function submit() {
  if (value > 0) {
    alert(`Numero escolhido foi ${value}`);
    value = 0;
    return;
  }
  alert(`Numero não selecionado!!! ;.;`);
}

function selectValue(number) {
  value = number;
}