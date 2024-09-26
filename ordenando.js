const swap = (vetor, i, j) => {
  let temp = vetor[i];
  vetor[i] = vetor[j];
  vetor[j] = temp;
};

const shuffle = (vetor, trocas) => {
  for (let i = 0; i < trocas; i++) {
      let j = Math.floor(Math.random() * vetor.length);
      let k = Math.floor(Math.random() * vetor.length);
      swap(vetor, j, k);
  }
};

const bubble_sort = (vetor) => {
  let n = vetor.length;
  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          if (vetor[j] > vetor[j + 1]) {
              swap(vetor, j, j + 1);
          }
      }
  }
};

const selection_sort = (vetor) => {
  let n = vetor.length;
  for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
          if (vetor[j] < vetor[minIndex]) {
              minIndex = j;
          }
      }
      swap(vetor, i, minIndex);
  }
};

const particionamento = (vetor, inicio, fim) => {
  let pivot = vetor[fim];
  let i = inicio - 1;
  for (let j = inicio; j < fim; j++) {
      if (vetor[j] <= pivot) {
          i++;
          swap(vetor, i, j);
      }
  }
  swap(vetor, i + 1, fim);
  return i + 1;
};

const quick_sort = (vetor, inicio, fim) => {
  if (inicio < fim) {
      let pi = particionamento(vetor, inicio, fim);
      quick_sort(vetor, inicio, pi - 1);
      quick_sort(vetor, pi + 1, fim);
  }
};
