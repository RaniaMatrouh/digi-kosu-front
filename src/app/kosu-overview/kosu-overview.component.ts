import { Component } from '@angular/core';

@Component({
  selector: 'app-kosu-overview',
  templateUrl: './kosu-overview.component.html',
  styleUrls: ['./kosu-overview.component.css'],
})
export class KosuOverviewComponent {
  // Data for the chart
  public chartData = {
    labels: ['Kosu 1', 'Kosu 2', 'Kosu 3'], // Example labels
    datasets: [
      {
        data: [300, 500, 200], // Example data
        backgroundColor: ['#007bff', '#28a745', '#dc3545'],
      },
    ],
  };

  public chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  public chartType = 'pie'; // You can use 'bar', 'line', etc.
}
