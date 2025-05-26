/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.maxHeap = []; // 存储较小的一半元素（大根堆）
    this.minHeap = []; // 存储较大的一半元素（小根堆）
};

// 大根堆调整函数
MedianFinder.prototype.heapifyMax = function(arr, index) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let largest = index;

    if (left < arr.length && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < arr.length && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== index) {
        [arr[index], arr[largest]] = [arr[largest], arr[index]];
        this.heapifyMax(arr, largest);
    }
};

// 小根堆调整函数
MedianFinder.prototype.heapifyMin = function(arr, index) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let smallest = index;

    if (left < arr.length && arr[left] < arr[smallest]) {
        smallest = left;
    }
    if (right < arr.length && arr[right] < arr[smallest]) {
        smallest = right;
    }

    if (smallest !== index) {
        [arr[index], arr[smallest]] = [arr[smallest], arr[index]];
        this.heapifyMin(arr, smallest);
    }
};

MedianFinder.prototype.addNum = function(num) {
    if (this.maxHeap.length === 0 || num <= -this.maxHeap[0]) {
        this.maxHeap.push(-num);
        this.heapifyMax(this.maxHeap, this.maxHeap.length - 1);
    } else {
        this.minHeap.push(num);
        this.heapifyMin(this.minHeap, this.minHeap.length - 1);
    }

    // 平衡两个堆的大小
    if (this.maxHeap.length > this.minHeap.length + 1) {
        this.minHeap.push(-this.maxHeap[0]);
        this.heapifyMin(this.minHeap, this.minHeap.length - 1);
        this.maxHeap.shift();
        this.heapifyMax(this.maxHeap, 0);
    } else if (this.minHeap.length > this.maxHeap.length) {
        this.maxHeap.unshift(-this.minHeap[0]);
        this.heapifyMax(this.maxHeap, 0);
        this.minHeap.shift();
        this.heapifyMin(this.minHeap, 0);
    }
};

MedianFinder.prototype.findMedian = function() {
    if (this.maxHeap.length > this.minHeap.length) {
        return -this.maxHeap[0];
    } else {
        return (-this.maxHeap[0] + this.minHeap[0]) / 2;
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */