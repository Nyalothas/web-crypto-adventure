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
			, _createBarChart = function () {
				_initCanvasElement();

				const ctx = document.getElementById(sChartId);

				// data from https://api.coindesk.com/v1/bpi/historical/close.json?start=2024-01-03&end=2024-02-03
				const lineData =
				{
					"2024-01-03": 42785.6967,
					"2024-01-04": 44463.4136,
					"2024-01-05": 43882.3896,
					"2024-01-06": 44004.5206,
					"2024-01-07": 44035.6859,
					"2024-01-08": 46912.9416,
					"2024-01-09": 46105.4851,
					"2024-01-10": 46501.6775,
					"2024-01-11": 46255.1165,
					"2024-01-12": 42181.0731,
					"2024-01-13": 43060.586,
					"2024-01-14": 42379.318,
					"2024-01-15": 42780.6816,
					"2024-01-16": 43253.2822,
					"2024-01-17": 42596.1997,
					"2024-01-18": 41289.1846,
					"2024-01-19": 41599.95,
					"2024-01-20": 41820.3059,
					"2024-01-21": 41729.5895,
					"2024-01-22": 39784.1662,
					"2024-01-23": 39567.283,
					"2024-01-24": 39840.7649,
					"2024-01-25": 39942.1501,
					"2024-01-26": 41915.1145,
					"2024-01-27": 42215.1644,
					"2024-01-28": 41789.7427,
					"2024-01-29": 43188.8078,
					"2024-01-30": 43525.2915,
					"2024-01-31": 42652.8204,
					"2024-02-01": 42957.1709,
					"2024-02-02": 43100.024
				};
				let data = Object.keys(lineData).map(key => lineData[key]);
				let labels = Object.keys(lineData);

					new Chart(ctx, {
						type: 'line',
						data: {
							labels: labels,
							datasets: [{
								label: 'Bitcoin',
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

