<template>
  <div>
    <p>{{arrayToSort }}</p>
    <br>
    <p>
      <strong>insertion sort</strong>
      {{ insertionSort(arrayToSort) }}
    </p>
    <br>
    <p>
      <strong>Selection sort</strong>
      {{ selectionSort(arrayToSort) }}
    </p>
    <br>
    <p>
      <strong>MaxQueue {{BuildMaxheap(arrayToSort)}}</strong>
      {{ }}
    </p>
  </div>
</template>

<script>
export default {
  name: "algorithms",

  data: () => {
    return {
      arrayToSort: [2, 4, 5, 7, 1, 3, 9, 11],
      sortedArray: [],
      minQueue: []
    };
  },
  methods: {
    insertionSort: arr => {
      for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
          }
        }
      }
      return arr;
    },
    selectionSort: arr => {
      let min = 0;
      for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] < min) {
            min = j;
          }
        }
        let tmp = arr[min];
        arr[min] = arr[i];
        arr[i] = tmp;
      }
      return arr;
    },
    BuildMaxheap: arr => {
      this.heap = [arr.length];
      for (let i = Math.floor(arr.length / 2); i > 0; i--) this.heapify(arr, i);
      return arr;
    },
    heapify: (heap, i) => {
      let left = 2 * i;
      let right = 2 * i + 1;
      let largest = i;
      if (left < heap.length && heap[left] > heap[largest]) largest = left;
      if (right < heap.length && heap[right] > heap[largest]) largest = right;

      if (largest != i) {
        let tmp = heap[i];
        heap[i] = heap[largest];
        heap[largest] = tmp;
      }
    }
  }
};
</script>

<style>
</style>