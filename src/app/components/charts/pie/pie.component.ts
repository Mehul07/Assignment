import { Component, OnInit } from '@angular/core';
import { ChartsService } from 'src/app/services/charts.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  constructor(private chartService: ChartsService) { }

  ngOnInit() {
    // this.chartService.getPieChartData().subscribe(data => {
    //   console.log(data);
    // })
  }

}
