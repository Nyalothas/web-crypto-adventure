export const CryptoCharts = {
	init: function () {
		var
			sChartId = 'myChart'
			, _initCanvasElement = function () {
				const elDivContainer = document.createElement('div');
				const elCanvas = document.createElement('canvas');
				elCanvas.id = sChartId;

				elDivContainer.appendChild(elCanvas);

				document.getElementById('cardChart').appendChild(elDivContainer);
			}
			, _createBarChart = async function () {
				_initCanvasElement();

				const ctx = document.getElementById(sChartId);

				// data from https://api.coindesk.com/v1/bpi/historical/close.json?start=2024-01-03&end=2024-02-03

				let responseCall = await fetch("http://ec2-3-72-15-93.eu-central-1.compute.amazonaws.com/api/coins");

				responseCall = responseCall && await responseCall.json();

				const bitcoinData = responseCall?.data.find(x=> x.name = 'Bitcoin');

				const lineData = bitcoinData.history || [];

				let data = Object.keys(lineData).map(key => lineData[key]);
				let labels = Object.keys(lineData);

					new Chart(ctx, {
						type: 'line',
						data: {
							labels: labels,
							datasets: [{
								label: bitcoinData?.name,
								data: data,
								borderWidth: 1,
								borderColor: "#3e95cd"
							}]
						}
					});
			}
			;

		return {
			init: _createBarChart()
		}
	}
}

