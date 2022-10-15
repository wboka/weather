export const Config = {
	plugins: {
		legend: {
			display: true,
		},
		title: {
			display: true,
			text: "Hourly Forecast",
		},
		tooltip: {
			callbacks: {
				label: function (context) {
					console.log(context.dataset);
					return (
						context.dataset.label +
						": " +
						(context.parsed.y != null ? context.parsed.y : "") +
						" F"
					);
				},
			},
		},
	},
	lineHeightAnnotation: {
		always: true,
		lineWeight: 1.5,
	},
	animation: {
		duration: 1,
	},
	maintainAspectRatio: true,
	responsive: true,
	scales: {
		x: {
			display: true,
			type: "time",
			title: {
				display: true,
				text: "Date/Time",
			},
		},
		y: {
			display: true,
			title: {
				display: true,
				text: "Temperature (F)",
			},
ticks: {
                stepSize: 5
            },

		},
	},
};
