import React from 'react'
import './SortingVisualizer.css'
import * as algorithms from '../Algorithms/algorithms.js'

class SortingVisualizer extends React.Component {
	state = {
		array: [],
	}

	componentDidMount() {
		this.resetArray()
	}

	resetArray() {
		const array = [];
		for (let i = 0; i < 145; ++i) {
			array.push(randomIntFromInterval(5, 500));
		}
		this.setState({array})
	}

	mergeSort() {
		const sortedArray = algorithms.mergeSort(this.state.array);
		console.log(sortedArray);
	}

	quickSort() {}

	bubbleSort() {}

	heapSort() {}

	render() {
		const {array} = this.state

		return (
			<div className="array-container">
				{array.map((value, index) => (
					<div
						className="array-bar"
						key={index}
						style={{
							// backgroundColor: 'red',
							height: `${value}px`,
						}}
					></div>
				))}
				
				<p>
					<button onClick={() => this.resetArray()}>Generate New Array</button>
					<button onClick={() => this.mergeSort()}>Merge Sort</button>
					<button onClick={() => this.heapSort()}>Heap Sort</button>
					<button onClick={() => this.bubbleSort()}>Bubble Sort</button>
					<button onClick={() => this.quickSort()}>Quick Sort</button>
				</p>
			</div>
		)
	}
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer